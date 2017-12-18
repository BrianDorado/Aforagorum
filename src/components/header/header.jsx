import React, { Component } from 'react';
import CompassRose from './../../img/compass_rose_by_draconicparagon-d6rjgqi.png'
import { Motion, StaggeredMotion, spring} from 'react-motion';
import { getUser } from './../../ducks/users';   
import home from './../../img/HomeIcon.png';
import  { Link } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';  
import { connect } from 'react-redux';  
import range from 'lodash'
import './header.css'


const MAIN_BUTTON_DIAM = 90,
 CHILD_BUTTON_DIAM = 48,
 NUM_CHILDREN = 5,
 M_X = 490,
 M_Y = 450,
 OFFSET = 0.05,
 SPRING_CONFIG = {stiffness: 400, damping: 28},
 FLY_OUT_RADIUS = 130,
 SEPARATION_ANGLE = 40,
 FAN_ANGLE = (NUM_CHILDREN - 1) * SEPARATION_ANGLE,
 BASE_ANGLE = ((180 - FAN_ANGLE) / 2);

 let childButtonIcons = ['home']

 function toRadians(degrees){
     return degrees * (Math.PI / 180 )
 }

 function finalChildDeltaPostitions(index){
     let angle = BASE_ANGLE + (index * SEPARATION_ANGLE)
     return {
         deltaX: FLY_OUT_RADIUS * Math.cos(toRadians(angle)) - (CHILD_BUTTON_DIAM / 2),
         deltaY: FLY_OUT_RADIUS * Math.sin(toRadians(angle)) + (CHILD_BUTTON_DIAM / 2)
     }
 }



class Header extends Component {
    constructor(props){
        super(props) 
        this.state = {
            open: false 
        }
        //_________This is state for the react motion animation, uncomment to implent react motion menu animation 
    //         this.state = {
    //             isOpen: false,
    //             childButtons: [home, home, home, home, home, home, home, home, ]
    //         }
        
    //     this.toggleMenu = this.toggleMenu.bind(this);
    //     this.closeMenu = this.toggleMenu.bind(this);
    }

    // componentDidMount(){
    //     window.addEventListener('click', this.closeMenu)
    //     let childButtons = [];

    //     this.setState({ childButtons: childButtons.slice(0) });
    // }

    // componentWillUnmount(){
    //     window.removeEventListener('click', this.closeMenu)
    // }
    handleToggle = () => 
         this.setState({
             open: !this.state.open
         })
        

    mainButtonStyles(){
        return {
            width: MAIN_BUTTON_DIAM,
            height: MAIN_BUTTON_DIAM,
            top: M_Y - (MAIN_BUTTON_DIAM / 2),
            left: M_Y - (MAIN_BUTTON_DIAM / 2)
        }
    }

    initialChildButtonStyles(){
        return {
            width: CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: spring(M_Y -(CHILD_BUTTON_DIAM / 2 ), SPRING_CONFIG),
            left: spring(M_Y - (CHILD_BUTTON_DIAM / 2), SPRING_CONFIG),
            rotate: spring(-180, SPRING_CONFIG),
            scale: spring(0.5, SPRING_CONFIG)
        }
    }

    initialChildButtonStlyesInit(){
        return {
            width:CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: M_Y - (CHILD_BUTTON_DIAM / 2),
            left: M_X -(CHILD_BUTTON_DIAM / 2),
            rotate: - 180,
            scale: 0.5
        }
    }

    finalChildButtonsStylesInit(childIndex){
        let { deltaX, deltaY } = finalChildDeltaPostitions(childIndex)
        return {
            width:CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: M_Y - deltaY,
            left: M_X + deltaX,
            rotate: 0,
            scale: 1
        }
    }

    finalChildButtonStyles(childIndex){
        let { deltaX, deltaY } = finalChildDeltaPostitions(childIndex)
        return {
            width: CHILD_BUTTON_DIAM,
            height: CHILD_BUTTON_DIAM,
            top: spring(M_Y - deltaY, SPRING_CONFIG),
            left: spring(M_X + deltaX, SPRING_CONFIG),
            rotate: spring(0, SPRING_CONFIG),
            scale: spring(1, SPRING_CONFIG)
        }
    }

    toggleMenu(e){
        // console.log(e)
        // e.stopPropegation();
        let { isOpen } =this.state;
        this.setState({
            isOpen: !isOpen
        })
    }

    closeMenu(){
        this.setState({
            isOpen: false
        })
    }

    renderChildButtons(){
        const { isOpen } = this.state;
        const targetButtonStylesInitObject = range(NUM_CHILDREN).map(i => {
            return isOpen ? this.finalChildButtonsStylesInit(i) : this.initialChildButtonStlyesInit()
        })
        const targetButtonStylesInit = Object.keys(targetButtonStylesInitObject).map(key => targetButtonStylesInitObject[key])
        const targetButtonStyles = range(NUM_CHILDREN).map(i => {
            return isOpen ? this.finalChildButtonStyles(i) : this.initialChildButtonStyles()
        })
        const scaleMin = this.initialChildButtonStyles().scale.val
        const scaleMax = this.finalChildButtonStyles(0).scale.val

        let calculateStylesForNextFrame = prevFrameStyles => {
            prevFrameStyles = isOpen ? prevFrameStyles : prevFrameStyles.reverse()

            let nextFrameTargetStyles = prevFrameStyles.map((buttonStyleInPreviousFrame, i) =>{
                if ( i === 0 ){
                    return targetButtonStyles[i]
                }
                const prevButtonScale = prevFrameStyles[ i - 1].scale
                const shouldApplyTargetStyle = () => {
                    if (isOpen) {
                        return prevButtonScale >= scaleMin + OFFSET
                    } else {
                        return prevButtonScale <= scaleMax - OFFSET
                    }
                    }
                return shouldApplyTargetStyle() ? targetButtonStyles[i] : buttonStyleInPreviousFrame
            })

            return isOpen ? nextFrameTargetStyles : nextFrameTargetStyles.reverse()
        }
        
        return (
            <StaggeredMotion
            defaultStyles={targetButtonStylesInit}
            styles={calculateStylesForNextFrame}>
                {interpolatedStyles =>
                    <div>
                        {interpolatedStyles.map(({ height, left, rotate, scale, top, width }, index) =>
                            <div
                            className="child-button"
                            key={index}
                            style={{
                                left,
                                height,
                                top,
                                transform: `rotate(${rotate}deg) scale(${scale})`,
                                width
                            }}
                            >
                                <i className={"fa fa-" + childButtonIcons[index] + " fa-lg"}></i>
                            </div>
                        )}
                    </div>
                }
            </StaggeredMotion>
        );
    
    }

    componentDidMount(){
        this.props.getUser()
    }
         


    render() {
        let { isOpen } = this.state;
        let mainButtonRotation = 
            isOpen ? { rotate: spring(0, {stiffness: 500, damping: 30}) } : { rotate: spring(-135, {stiffness: 500, damping: 30}) };
        console.log(this.props.user)
        return (
            <div className='header-container'>
                {/* <Motion style = {mainButtonRotation}> */}
                {/* {({rotate}) => */}
                <div className='header'>
                    <section className='app-name'>
                    <h1>AforaGorum</h1>
                    </section>
                            <img src={CompassRose} alt="Compass Rose"  className='logo'
                            onClick={this.handleToggle}
                     />
                     <Drawer
                        docked ={false}
                        width={125} 
                        open={this.state.open}
                        onRequestChange={open => this.setState({open})}
                        containerClassName = 'mui-menu'
                        containerStyle= {{
                            background: "teal200"
                        }}
                     >
                        <Link  to = "/home" className='home-nav-link'>Home</Link >
                        <Link to= {`/profile/user/${ this.props.user.id}`} className='home-nav-link'>Profile</Link >
                        <Link  to = "/search" className='home-nav-link'>Search</Link >
                        <Link  to = {`/forum/create/${this.props.user.id}`} className='home-nav-link'>Create Post</Link >
                        <Link  to = "/forum" className='home-nav-link'>Forum</Link >
                        <Link  to = "/about" className='home-nav-link'>About</Link >
                        <Link to ='/help' className='home-nav-link'>Help and Feedback</Link>
                        <a href = 'http://localhost:3030/auth/logout'className="home-nav-link">Logout</a>
                     </Drawer>
                    {/* < i className='fa fa-close fa-3x'/> */}
                    <section className='text-contaner'>
                        {this.props.user && <p>{this.props.user.username}</p>}
                    </section>
                </div>
                <div className="menu-margin">
                </div>
                {/* } */}
                {/* </Motion> */}
             </div> 
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.userData
    }
}
export default connect(mapStateToProps, {getUser}) (Header);


//<img src={CompassRose} alt="Compass Rose" className='main-button' className='logo'
// style = {{...this.mainButtonStyles(), transform: `rotate(${rotate}deg )` }}
// onClick={this.toggleMenu} />
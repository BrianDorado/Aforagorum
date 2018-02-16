
module.exports = {
    create_Post: (req, res ) => {
        const dbInstance =  req.app.get('db')
         const {author, title, body, auth_id, locale} = req.body
        dbInstance.create_Post(author, title, body, auth_id, locale)
        .then( (post) => res.status(200).send(post))
    },
    create_reply: (req, res ) => {
        const dbInstance = req.app.get('db')
            const {} = req.body
        dbInstance.create_reply()
        .then( () => res.status(200).send(reply))
    },
    create_relationship: (req, res) => {
        const dbInstance=req.app.get('db')
        dbInstance.create_relationship()
        .then( (relationships) => res.status(200).send(relationships))
    },
    edit_User_Information: (req, res ) => {
        const dbInstance = req.app.get('db')
        const {bio, linkplus, linkfb, linkig, linkut} = req.body
        
        dbInstance.edit_User_Information(req.params.id, bio, linkplus, linkfb, linkig, linkut)
        .then( (user) => res.status(200).send(user))
    },
    get_allPost: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_AllPost()
        .then( (post) => res.status(200).send(post))
    },
    get_post_by_location: (req, res ) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_Post_By_Location([req.params.locale + '%'])
        .then((post) => res.status(200).send(post))
    },
    get_post_by_user: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_Post_By_User(req.params.author)
        .then((post) => res.status(200).send(post))
    },
    get_post_by_id: (req, res) => {
        const dbInstance = req.app.get('db')
        console.log(req.params.id);
        dbInstance.get_post_by_id(req.params.id)
        .then((post) => res.status(200).send(post))
    },
    get_relationships: (req, res ) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_Reltionships()
        .then((relationships) => res.status(200).send(relationships))
    },
    get_User: (req, res) => {
        const dbInstance = req.app.get('db')
        if ( !req.user && !req.params.id) res.status(200).send('Login required') 
        console.log("Nates idea",req.params);
        let newId = req.params.id
        if ( newId === undefined) newId = req.user.id
        // console.log(req.user.id)
        dbInstance.get_User([req.user.id])
        .then((user) => 
            res.status(200)
            .send(user))
    },
    find_User_by_session:(req, res) => {
        const dbInstance = req.app.get('db')
    },
    update_relationship_status: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.update_Relationship_status()
        .then((relationships) => res.status(200).send(relationships))
    },
    delete_post: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_Post()
        .then(() => res.status(200))
    },
    delete_reply: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_Reply()
        .then(() => res.status(200).send())
    },
    delete_relationship: (req, res ) => {
        const dbInstance = req.app.get('db')
        dbInstance.delete_Relationship()
        .then(() => res.status(200).send())
    }
}
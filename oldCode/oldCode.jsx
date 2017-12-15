{/* <section className='search-by-input'>
    <TextField
        floatingLabelText='Custom search'
    // placeHolder = 'e.g New York'
    />
</section>
    <section className='search-divider'>
        <span className='or'> - OR -</span>
    </section>
    <section className='search-by-select'>


        <SelectField
            floatingLabelText='Country'
            dropDownMenuProps={{
                anchorOrigin: { horizontal: "left", vertical: "bottom" },
                targetOrigin: { horizontal: "left", vertical: "top" },

            }}
            menuStyle={{
                marginTop: "-10px",

            }}
            style={{
                width: "30%"
            }}
        >
            <MenuItem value={1} primaryText=""></MenuItem>

        </SelectField>

        <SelectField
            floatingLabelText='City'
            dropDownMenuProps={{
                anchorOrigin: { horizontal: "left", vertical: "bottom" },
                targetOrigin: { horizontal: "left", vertical: "top" },

            }}
            menuStyle={{
                marginTop: "-10px",
            }}
            style={{
                width: "30%"
            }}
        >
            <MenuItem value={1} primaryText=""></MenuItem>
        </SelectField>
    </section> */}

    
{/* <SelectField
                  floatingLabelText='Continent'
                  dropDownMenuProps ={{
                      anchorOrigin: {horizontal: "left",vertical:"bottom"},
                      targetOrigin:{ horizontal: "left", vertical: "top" },
                  }}
                  menuStyle ={{
                    marginTop: "-10px",
                  }}
                  style = {{
                    width: "30%",
                  }}
                >
                  <MenuItem value={1} primaryText='Africa' ></MenuItem>
                  <MenuItem value={2} primaryText='Asia' ></MenuItem>
                  <MenuItem value={3} primaryText='Australia' ></MenuItem>
                  <MenuItem value={4} primaryText='Europe' ></MenuItem>
                  <MenuItem value={5} primaryText='North America' ></MenuItem>
                  <MenuItem value={6} primaryText='South America' ></MenuItem>
                
                </SelectField> */}

<TextField
    floatingLabelText='Bio'
    floatingLabelStyle={{
        color: "blueGrey300"
    }}
    underlineFocusStyle={{
        borderColor: "blueGrey500"
    }}

    multiLine={true}
    rowsMax={4}
    style={{
        width: '100%',
    }}
    disabled={this.state.disabled}
    value={this.state.bio}
    onChange={e => this.setState({ bio: e.target.value })}
/>
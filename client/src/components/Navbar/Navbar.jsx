import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import navbarStyle from "assets/jss/components/navbarStyle";

function Navbar({ ...props }) {
    function makeTitle() {
        var name;
        props.routes.map(prop => {
            if(window.location.href.indexOf(prop.layout + prop.path) !== -1) {
                name = prop.name;
            }
        });
        return name;
    }
    const { classes, color } = props;
    return (
        <AppBar className={classes.appBar}>
            <Toolbar className={classes.container}>
                <div>
                    {makeTitle()}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default withStyles(navbarStyle)(Navbar)
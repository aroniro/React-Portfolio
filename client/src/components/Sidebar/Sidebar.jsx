import React, { Component } from 'react';
import { Button, Drawer } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import sidebarStyle from 'assets/jss/components/sidebarStyle';
import { NavLink } from "react-router-dom";

const Sidebar = ({ ...props }) => {
    const { classes, routes, logo, logoText } = props;

    var _logo = (
        <div className={classes.logo}>
            <div className={classes.logoImage}>
              <img src={logo} alt="logo" className={classes.img} />
            </div>
            {logoText}
        </div>
    );

    var links = (
        <List>
            {routes.map((prop, key) => {
                return (
                    <NavLink to={prop.layout + prop.path} key={key} className={classes.sideTitle}>
                        {prop.name}
                    </NavLink>
                );
            })}
        </List>
    )

    return (
        <div>
            <Drawer
                anchor='left'
                variant="permanent"
                open
                className={classes.drawerSideBar}
            >
                {_logo}
                <div className={classes.sidebarWrapper}>{links}</div>
            </Drawer>
        </div>
    )
}

export default withStyles(sidebarStyle)(Sidebar);
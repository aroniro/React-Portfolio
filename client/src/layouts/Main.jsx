import React, { Component } from "react";
// import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// import PerfectScrollbar from "perfect-scrollbar";
// import "perfect-scrollbar/css/perfect-scrollbar.css";
import withStyles from "@material-ui/core/styles/withStyles";
import mainStyle from "assets/jss/layouts/mainStyle";

import Sidebar from "components/Sidebar/Sidebar";
import Navbar from "components/Navbar/Navbar";

import routes from "route.js";

import logo from "assets/img/logo.png";

const switchroutes = (
    <Switch>
        {routes.map((prop, key) => {
            if(prop.layout === "/main") {
                return (
                    <Route 
                        path={prop.layout + prop.path} 
                        component={prop.component} 
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/main" to="/main/about" />
    </Switch>
)

class Main extends Component {

    componentDidMount() {

    }

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.wrapper}>
                <Sidebar
                    routes={routes}
                    logoText={"ikikikiikikikkiikik"}
                    logo={logo}
                />
                <div className={classes.mainPanel}>
                    <Navbar
                        routes={routes}
                    />
                    <div className={classes.content}>
                        {/* <div className={classes.container}> */}
                            { switchroutes }
                        {/* </div> */}
                    </div>
                </div>
            </div>
        );
    }

}

export default withStyles(mainStyle)(Main)
import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import aboutStyle from 'assets/jss/views/aboutStyle';


class About extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div>
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </div>
        );
    }
}

export default withStyles(aboutStyle)(About);
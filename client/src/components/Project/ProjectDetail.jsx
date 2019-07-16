import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import projectdetailStyle from 'assets/jss/components/projectdetailStyle';

import ArticleTitle from 'components/Article/ArticleTitle';

const ProjectDetail = ({ ...props }) => {
    const { classes, history } = props;

    return (
        <div>
            detttttttttt {props.match.params.key}
            <ArticleTitle className={classes.backBtn} {...props} />
        </div>
    );
} 

export default withStyles(projectdetailStyle)(ProjectDetail);
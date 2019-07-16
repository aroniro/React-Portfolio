import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import articletitleStyle from 'assets/jss/components/articletitleStyle';

import ClearIcon from "@material-ui/icons/Clear";
import IconButton from '@material-ui/core/IconButton';

const ArticleTitle = ({ ...props }) => {

    function handleBackBtn() {
        history.goBack();
    }

    const { classes, history } = props
    return (
        <IconButton className={classes.backBtn} aria-label="Clear" onClick={handleBackBtn}>
            <ClearIcon />
        </IconButton>
    );
}

export default withStyles(articletitleStyle)(ArticleTitle)
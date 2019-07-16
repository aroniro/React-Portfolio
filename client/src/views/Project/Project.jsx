import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles";
import projectStyle from 'assets/jss/views/projectStyle';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Switch, Route, Redirect } from "react-router-dom";

import ProjectList from 'components/Project/ProjectList';
import ProjectDetail from 'components/Project/ProjectDetail';

class Project extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.container}>
                <Route 
                    exact
                    path={this.props.match.url}
                    component={ProjectList}/>
                <Route
                    path={`${this.props.match.url}/:key`}
                    component={ProjectDetail}/>
            </div>
        );
    }
}

//     <img src={tile.img} alt={tile.title} />
//     <GridListTileBar
//     title={tile.title}
//     subtitle={<span>by: {tile.author}</span>}
//     actionIcon={
//         <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
//         <InfoIcon />
//         </IconButton>
//     }
//     />

export default withStyles(projectStyle)(Project);
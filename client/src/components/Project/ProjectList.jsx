import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import projectlistStyle from 'assets/jss/components/projectlistStyle';

import { NavLink } from "react-router-dom";
import tileData from 'assets/data/projectData';

const ProjectList = ({ ...props }) => {
    const { classes } = props;
    return (
        <GridList cellHeight={300} className={classes.gridList}>
            {tileData.map((tile, key) => (
                <GridListTile key={tile.img}>
                    <NavLink to={`${props.match.url}/${key}`} key={key}>
                        {tile.text}
                    </NavLink>
                </GridListTile>
            ))}
        </GridList>
    );
}

export default withStyles(projectlistStyle)(ProjectList);
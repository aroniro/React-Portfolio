import {
    drawerWidth,
    grayColor,
    hexToRgb
} from "assets/jss/common.jsx";

const sidebarStyle = theme => ({
    drawerSideBar : {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "1",
        width : drawerWidth
    },
    sidebarWrapper : {
        // position: "relative",
        // height: "calc(100vh - 75px)",
        // overflow: "auto",
        width: drawerWidth,
        // zIndex: "4",
        // overflowScrolling: "touch"
        margin: "auto",
        "text-align": "center"
    },
    sideTitle : {
        display : "block",
        margin : "20px 0px"
    },
    logo: {
        position: "relative",
        "text-align": "center",
        padding: "15px 0px",
        zIndex: "4",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "0",
        
            height: "1px",
            right: "15px",
            width: "calc(100% - 30px)",
            backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)"
        }
    },
    logoImage: {
        // width: "30px",
        // display: "inline-block",
        // maxHeight: "30px",
        
        // marginLeft: "10px",
        // marginRight: "15px"
    },
    img: {
        width: `calc(${drawerWidth}px/2)`,
        // top: "23px",
        // position: "absolute",
        verticalAlign: "middle",
        border: "0"
    },
});

export default sidebarStyle;
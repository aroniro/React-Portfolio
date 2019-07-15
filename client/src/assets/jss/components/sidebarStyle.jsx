import {
    drawerWidth,
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
        margin : "10px 0px"
    }

});

export default sidebarStyle;
import {
    drawerWidth
} from "assets/jss/common.jsx";

const style = theme => ({
    wrapper: {
        position: "relative",
        top: "0",
        height: "100vh"
    },
    mainPanel : {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        maxHeight: "100%",
        width: "100%",
    },
    content: {
      marginTop: "100px",
      padding: "30px 30px",
    //   minHeight: "calc(100vh - 123px)"
    }
});

export default style;
import {
    container,
    grayColor
} from "assets/jss/common.jsx";

const navbarStyle = theme => ({
    appBar : {
        backgroundColor: "transparent",
        boxShadow: "none",
        borderBottom: "0",
        marginBottom: "0",
        position: "absolute",
        color: grayColor[7],
        display: "block"
    },
    container : {
        ...container,
        minHeight: "100px"
    }
});

export default navbarStyle;
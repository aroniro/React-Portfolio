import About from './views/About/About';
import Project from './views/Project/Project';

const Routes = [
    {
        path: "/about",
        name: "About",
        component: About,
        layout: "/main"
    },
    {
        path: "/oooo",
        name: "OOOO",
        component: Project,
        layout: "/main"
    },
    {
        path: "/ttet",
        name: "ttet",
        component: About,
        layout: "/main"
    }
]

export default Routes;
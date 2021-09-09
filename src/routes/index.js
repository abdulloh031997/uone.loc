import Index from "../components";
import About from "../components/about";
import NoteFound from "../components/errors/404";

const routes = [
    {
        path: "/",
        name:"Home",
        isShowLink:true,
        component: Index
    },
    {
        path: "/about",
        name:"About",
        isShowLink:true,
        component: About
    }
   
]

export default routes;
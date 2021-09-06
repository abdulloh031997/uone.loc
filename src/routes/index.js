import Index from "../components";
import About from "../components/about";
import NoteFound from "../components/errors/404";

const routes = [
    {
        path: "/",
        component: Index
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/404",
        component: NoteFound
    }
   
]

export default routes;
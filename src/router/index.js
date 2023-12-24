
import { HeaderOnly } from "~/components/Layout"
import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Search from "~/pages/Search"
import Profile from "~/pages/Profile"


const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/search', component: Search, layout: null },
    { path: '/profile', component: Profile, layout: HeaderOnly },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }
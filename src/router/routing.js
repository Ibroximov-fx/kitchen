import {createRouter, createWebHistory} from "vue-router"
import Kitchen from "../pages/kitchen.vue";
import Common from "../layouts/common.vue";

let routes =[
    {
        path: "/",
        name: "Home",
        component: Common,
        children:[
            {
                path: "/",
                name: "kitchen",
                component: Kitchen
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
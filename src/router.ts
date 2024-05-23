import { createMemoryHistory, createRouter } from 'vue-router';
import chatfront from './components/chatfront.vue';


// const router = createRouter({
//     routes: [
//         { path: '/home', component: chatfront },
//     ],
//     history: createMemoryHistory(),
// })


export default createRouter({
    routes: [
        { path: '/home', component: chatfront },
    ],
    history: createMemoryHistory(),
})

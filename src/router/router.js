import DashboardPage from '@/pages/DashboardPage'
import ProjectPage from '@/pages/ProjectPage'
import TimerPage from '@/pages/TimerPage'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
{
    path:'/',
    component: DashboardPage
},
{
    path: '/project/:id',
    component: ProjectPage
},
    {
        path: '/timer/:id',
        component: TimerPage
    }]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

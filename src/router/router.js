import DashboardPage from '@/pages/DashboardPage'
import ProjectPage from '@/pages/ProjectPage'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
{
    path:'/',
    component: DashboardPage
},
{
    path: '/project',
    component: ProjectPage
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

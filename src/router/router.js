import MainDashboard from '@/pages/DashboardPage'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [{
    path:'/',
    component: MainDashboard
}]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;

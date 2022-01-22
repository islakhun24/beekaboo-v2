import { lazy } from 'react';
import Loadable from '../components/Loadable';
import MainLayout from '../layouts/MainLayout';

// project imports
// dashboard routing
const HomeViews = Loadable(lazy(() => import('../views/Home.js')));
const ShopViews = Loadable(lazy(() => import('../views/Shop.js')));
const AboutViews = Loadable(lazy(() => import('../views/About')));
const BlogViews = Loadable(lazy(() => import('../views/Blog')));
const LearningZoneViews = Loadable(lazy(() => import('../views/LearningZone')));
const MusicViews = Loadable(lazy(() => import('../views/Music')));
const VideoViews = Loadable(lazy(() => import('../views/Video')));



const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <HomeViews />
        },
        {
            path: '/shop',
            element: <ShopViews />
        },
        {
            path: '/about',
            element: <AboutViews />
        },
        {
            path: '/blog',
            element: <BlogViews />
        },
        {
            path: '/learning-zone',
            element: <LearningZoneViews />
        },
        {
            path: '/music',
            element: <MusicViews />
        },
        {
            path: '/video',
            element: <VideoViews />
        }
    ]
};

export default MainRoutes;
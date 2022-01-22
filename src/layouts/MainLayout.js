
import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';
import Header from './header/Header';

const MainLayout = () => {
    
    return (
        <div className='w-screen overflow-hidden flex flex-col h-auto '>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;
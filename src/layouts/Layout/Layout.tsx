import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC = ({children}) => (
    <div className="layout">
        <Header/>
        <div className="content">
            <div className="page">{children}</div>
        </div>
        <Footer/>
    </div>
);

export default Layout;

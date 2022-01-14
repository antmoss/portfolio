import React from 'react';
import Logo from '../Logo';
import MenuContainerDesktop from './MenuContainerDesktop';

function DesktopNavbar({ menuItems }) {
    return (
        <div className="flex">
            <Logo className="icon logo max-w-200" type="desktop" />

            <div className="flex flex-wrap flex-1">
                <MenuContainerDesktop menuItems={menuItems} />
            </div>
        </div>
    );
}

export default DesktopNavbar;

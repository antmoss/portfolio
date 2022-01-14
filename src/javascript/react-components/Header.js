import React, { useState } from 'react';
import { Breakpoint, BreakpointProvider } from 'react-socks';
// import MobileNavbar from './mobile-menu/MobileNavbar';
import DesktopNavbar from './desktop-menu/DesktopNavbar';

function Header({ menuItems, menuItemsDesktop }) {
    const [open, setOpen] = useState('');

    const childToParent = (childdata) => {
        setOpen(childdata);
    };

    return (
        <header>
            <div className="relative flex">
                <div className={`fixed inset-0 z-10 w-full h-full bg-black-70 ${open ? '' : 'hidden'}`}></div>

                <div className="container z-10 bg-white">
                    <BreakpointProvider>
                        {/* <Breakpoint customQuery="(max-width: 767px)">
                            <MobileNavbar menuItems={menuItems} childToParent={childToParent} />
                        </Breakpoint> */}

                        <Breakpoint customQuery="(min-width: 768px)">
                            <DesktopNavbar menuItems={menuItemsDesktop} />
                        </Breakpoint>
                    </BreakpointProvider>
                </div>
            </div>
        </header>
    );
}

export default Header;

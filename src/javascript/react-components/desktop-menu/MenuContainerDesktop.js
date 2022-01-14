import React from 'react';
import MenuItem from './MenuItem';

function MenuContainerDesktop({ menuItems }) {
    return (
        <nav className="flex flex-wrap justify-end flex-1 heading heading--semi heading--menu header__navbar">
            <h2 id="menu-title" className="sr-only">
                Main menu
            </h2>

            <ul
                className="flex items-center self-end justify-end w-full header__navbar-list -mx-gutter lg:-mx-25"
                aria-labelledby="menu-title"
            >
                {menuItems.map((menuItem) => {
                    const { menuChildren, ...rest } = menuItem;

                    return <MenuItem key={menuItem.name} {...rest} menuChildren={menuChildren}></MenuItem>;
                })}
            </ul>
        </nav>
    );
}

export default MenuContainerDesktop;

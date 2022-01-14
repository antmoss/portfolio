import React, { useState } from 'react';

function DropdownItem({ menuItems }) {
    const [click, setClick] = useState(false);

    if (!menuItems) {
        return null;
    }

    return (
        <ul
            onClick={() => setClick(!click)}
            className={`absolute bg-grey-veryLight heading heading--semi heading--cta z-50 header__desktop-dropdown ${
                click ? ' clicked' : ''
            }`}
        >
            {menuItems.map(({ path, title }) => (
                <li key={title}>
                    <a
                        className="whitespace-no-wrap hover:underline focus:underline"
                        href={path}
                        onClick={() => setClick(!click)}
                    >
                        {title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default DropdownItem;

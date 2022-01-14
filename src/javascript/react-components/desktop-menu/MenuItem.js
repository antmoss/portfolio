import React, { useState, useEffect } from 'react';
import DropdownItem from './DropdownItem';

export default function ParentLink({ menuChildren, ...rest }) {
    const [dropdown, setDropdown] = useState(false);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setDropdown(false);
            }
        });
    }, []);

    const handleDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            setDropdown(!dropdown);
        }
    };

    const handleClick = () => {
        setDropdown(!dropdown);
    };

    const onMouseLeave = () => {
        setDropdown(false);
    };

    return (
        <li className="relative mx-gutter lg:mx-25" onClick={handleClick} onMouseLeave={onMouseLeave}>
            <a
                href={rest.path}
                className={`flex items-center header__navbar-list-item ${dropdown ? 'js-active' : ''}`}
                onKeyDown={handleDown}
            >
                {rest.name}
                {menuChildren && (
                    <svg
                        width="16"
                        height="16"
                        className={`ml-10 transition duration-500 ease-in-out transform ${
                            dropdown ? '' : 'rotate-180'
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.5182 4.16884L14.4521 10.1027C14.7383 10.3889 14.7383 10.8529 14.4521 11.139L13.76 11.8311C13.4743 12.1168 13.0112 12.1174 12.7249 11.8323L8.00003 7.12965L3.2752 11.8324C2.98883 12.1174 2.5258 12.1168 2.2401 11.8311L1.54801 11.1391C1.26183 10.8529 1.26183 10.3889 1.54801 10.1027L7.48188 4.16887C7.76804 3.88268 8.23201 3.88268 8.5182 4.16884Z"
                            fill="#018843"
                        />
                    </svg>
                )}
            </a>

            {dropdown && <DropdownItem menuItems={menuChildren} />}
        </li>
    );
}

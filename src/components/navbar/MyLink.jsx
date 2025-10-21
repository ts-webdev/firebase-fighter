import React from 'react';
import { NavLink } from 'react-router';

const MyLink = ({children, to, className}) => {
    console.log(children)
    return (
        <NavLink className={({isActive})=> isActive? 'bg-[#090040] py-2 px-4': `${className}`} to={to}>
            {children}
        </NavLink>
    );
};

export default MyLink;
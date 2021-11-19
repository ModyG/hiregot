import React, { useState } from 'react';
import { OptionLink, DropdownMenu } from './menu-dropdown.styles';

const MenuItems = [ {
    title: 'Men',
    path: '/shop/men'
  },{
    title: 'Women',
    path: '/shop/women'
  },{
    title: 'Kids',
    path: '/shop/kids'
  },{
    title: 'Walkers',
    path: '/shop/walkers'
  },{
    title: 'Random',
    path: '/shop/random'
  }  ];

const Dropdown = () => {

  const [isClicked, setisClicked] = useState(false);

  const handleClick = () => setisClicked(!isClicked);
  
  return (
    <>
      <DropdownMenu
        onClick={handleClick}
        className={isClicked ? 'clicked' : ''}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <OptionLink
                to={item.path}
                onClick={() => setisClicked(false)}
              >
                {item.title}
              </OptionLink>
            </li>
          );
        })}
      </DropdownMenu>
    </>
  );
}

export default Dropdown;

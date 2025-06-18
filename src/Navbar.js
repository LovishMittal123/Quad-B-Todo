import React from 'react';
import './App.css';

const Navbar = () => {

  return (
    <div className='nav-cont'>
      <div className='logo-cont'>
        <p className='doit'>DoIt</p>
      </div>
      <div className='right-div'>
        <p className='search'>🔎</p>
        <p className='boxes'>
          ⬛⬛<br />
          ⬛⬛
        </p>
        <p className='theme'>🌞
        </p>
      </div>
    </div>
  );
};

export default Navbar;

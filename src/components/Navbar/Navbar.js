import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';

export default function Navbar({active , filterHandler }) {

    const [menu, setMenu] = useState(false)

    const burgerHandler = () => {
        setMenu(true)
    }

  return (
    <header>
      <div className="headerContainer">
        <section className="LogoSection">
          <h1>CheetahDevs</h1>
        </section>
        <section className="NavbarSection">
          <nav className="Navbar">
            <p className={active[0].status} onClick={() => filterHandler('all')}>All</p>
            <p className={active[1].status} onClick={() => filterHandler('laptop')}>Laptop</p>
            <p className={active[2].status} onClick={() => filterHandler('phone')}>Phone</p>
            <p className={active[3].status} onClick={() => filterHandler('desktop')}>Desktop</p>
            <p className={active[4].status} onClick={() => filterHandler('tablet')}>Tablet</p>
            <p className={active[5].status} onClick={() => filterHandler('accessory')}>Accessories</p>
          </nav>
          {menu ? ( 
            <>
            <nav className="NavbarMobile" onClick={() => setMenu(false)}>
             <p className={active[0].status} onClick={() => filterHandler('all')}>All</p>
             <p className={active[1].status} onClick={() => filterHandler('laptop')}>Laptop</p>
             <p className={active[2].status} onClick={() => filterHandler('phone')}>Phone</p>
             <p className={active[3].status} onClick={() => filterHandler('desktop')}>Desktop</p>
             <p className={active[4].status} onClick={() => filterHandler('tablet')}>Tablet</p>
             <p className={active[5].status} onClick={() => filterHandler('accessory')}>Accessories</p>
           </nav>
         <ImCross className="burgermenu" size={25} color="blueviolet" onClick={() => setMenu(false)} /> </> )  : <GiHamburgerMenu className="burgermenu" size={35} color="blueviolet" onClick={() => burgerHandler()}/>}
          
        </section>
      </div>
    </header>
  );
}

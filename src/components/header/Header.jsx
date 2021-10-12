/*==========================================
Title:  move-app-react
Date:   12-Oct-2021
==========================================*/
import React, { useRef, useEffect } from "react";
import "./header.scss";
import Logo from "../../assets/tmovie.png";

import { Link, useLocation } from "react-router-dom";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  {
    display: "TV Series",
    path: "/tv",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  //   console.log(`this ${pathname}`);
  const active = headerNav.findIndex((e) => e.path === pathname);
  //   console.log(`this ${active}`)

  useEffect(() => {
    const shrinkHeader = () =>{
        if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            headerRef.current.classList.add('shrink');   // add css 
        }else{
            headerRef.current.classList.remove('shrink'); //remove css
        }
    }
    window.addEventListener('scroll', shrinkHeader) // window add Event call function  shrinkHeader
    return () => {
        window.removeEventListener('scroll', shrinkHeader) // window remove Event call function  shrinkHeader
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={Logo} alt="" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""} `}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;

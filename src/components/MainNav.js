import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function MainNav() {
    let nav1Link="/home"
    let nav2Link="/home"
    let nav3Link="/brands"
    let nav4Link="/products"
    let nav2="Home"
    let nav3="Brands"
    let nav4="Products"
    const {pathname}= useLocation();
    if(pathname==="/sign-in"||pathname==="/sign-up"||pathname==="/"){
        nav1Link="/sign-in";
        nav2Link="/sign-in";
        nav3Link="/sign-up";
        nav2="Login"
        nav3="Signup"
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={nav1Link}>
              Mobify
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={nav2Link}>
                    {nav2}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={nav3Link}>
                    {nav3}
                  </Link>
                </li>
               {/* { if(pathname!=="/sign-in"||pathname!=="/sign-up"||pathname!=="/"){
                return (<li className="nav-item">
                  <Link className="nav-link" to={nav4Link}>
                    {nav4}
                  </Link>
                </li>)}} */}
              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}

export default MainNav

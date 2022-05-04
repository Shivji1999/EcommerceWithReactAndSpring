import React from 'react';
import {NavLink} from 'react-router-dom'

// import '../style/header.css';
const Header = () =>{
    // const handleClick=() =>{
    //     history.push('/')
    //     isLogged(false)
    // }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg' >
                    Mobify
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                    <NavLink exact to='/explore' activeClassName='active'>SignIn</NavLink>
                    <button className='button-header' >Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;
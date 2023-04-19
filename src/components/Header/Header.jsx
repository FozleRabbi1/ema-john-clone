import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const logOutFun = () =>{
        logOut()
        .then(res => {})
        .catch(err => console.error(err.message))
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shopp</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/register">Register</Link>
               {
                user ? <Link onClick={logOutFun}> LogOut </Link> :  <Link to="/login">Login</Link>
               }
                
            </div>
        </nav>
    );
};

export default Header;
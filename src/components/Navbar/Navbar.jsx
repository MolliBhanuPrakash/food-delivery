import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Menu");
    const {getTotalCartAmount,token,setToken}=useContext(StoreContext)

const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("token");
        setToken("");
        navigate("/");

    }

    

    return (
        <div className='navbar'>
           {/* <Link to="/"> <img src={assets.logo} alt="Logo" className='logo' /></Link> */}
           <Link to="/"> <h1>Tastetrail</h1></Link>

            <ul className="navbar-menu">
                <Link to='/Home' className={menu === "Home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
                <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
                {/* <a href='#app-download' className={menu === "Mobile-app" ? "active" : ""} onClick={()=>setMenu("Mobile-app")}>Mobile App</a> */}
                <a href='#footer' className={menu === "Contact us" ? "active" : ""} onClick={() => setMenu("Contact us")}>Contact Us</a>
            </ul>

            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search" />
                <div className='navbar-search-icon'>
                   <Link to="/cart"> <img src={assets.basket_icon} alt="Basket" /></Link>

                <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
                </div>
                {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
                :<div className='navbar-profile'>
                    <img src={assets.profile_icon} alt="" />
                    <ul className='navbar-profile-dropdown'>
                        <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                    </ul>

                </div>}
                
            </div>
        </div>
    );
}

export default Navbar;


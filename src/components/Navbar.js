import Identicon from "identicon.js";
import React from "react";
import farmer from '../farmer.png'




const Navbar = ({ account }) => {
    return (
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
            <a
                className="navbar-brand col-sm-3 col-md-2 mr-0"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={farmer} width="30" height="30" className="d-inline-block align-top" alt="" />
                DeFi Dapp Demo
            </a>

          
            <ul className="navbar-nav px-3">
                <li className="text-white">
                    <small className="text-secendary">
                        {account}
                        {account && <img className="ml-2"
                            width="30"
                            height="30"
                            alt="image"
                            src={`data:image/png;base64,${new Identicon(account, 30).toString()}`} />}
                    </small>
                </li>
            </ul>
        </nav>

    );
}


export default Navbar;
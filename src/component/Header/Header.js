import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <img src={logo} alt="ema-john" />
                <div>
                    <a href="/Shop"> Shop
                        </a><a href="/Order"> Order
                            </a><a href="/home">Home
                                </a><a href="/inventory"> Inventory
                                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;
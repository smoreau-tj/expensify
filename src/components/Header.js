import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>Expensify</h1>
    <ul>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/create'>Create</Link></li>
    <li><Link to='/help'>Help</Link></li>
    </ul>
    </header>
)


export default Header;
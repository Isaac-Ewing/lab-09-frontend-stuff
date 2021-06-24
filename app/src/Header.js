import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default class Header extends React.Component { 
    render() {
      return (
        <div className='header'>
            <h2>Games and Stuff</h2>
            <span className='headerLink'><Link to="/">Home</Link></span>
            <span className='headerLink'><Link to="/create">Add game</Link></span>
        </div>
      )
    }
}
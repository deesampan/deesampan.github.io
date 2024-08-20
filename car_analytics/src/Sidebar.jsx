import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>My Car Analytics</h2>
      <hr/>
      <ul>
        <li><Link to="/"><Button variant="outline-success">Dashboard🏡</Button></Link></li>
        <li><Link to="/highlighted"><Button variant="outline-success">Highlighted⭐</Button></Link></li>
      </ul>

      <h6 className='bottom-text'>Made by Deesampan😎</h6>
    </div>
  );
};

export default Sidebar;
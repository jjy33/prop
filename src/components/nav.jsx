import React from "react";
import "./nav.css";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to="/" className="navbar-brand mx-auto mx-lg-0">
                <i className="bi-bullseye brand-logo"></i>
                <span className="brand-text">HOMEFIT</span>
            </ Link>
            
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link click-scroll">사업소개</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/estimate" className="nav-link click-scroll">견적요청</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/inquiry" className="nav-link click-scroll">계약문의</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/login" className="nav-link custom-btn btn d-none d-lg-block">LogIn</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/join" className="nav-link custom-btn btn d-none d-lg-block" href="#">Join</Link>
                    </li>
                </ul>
            </div>
        </div> 
      </nav>
    );
  };

export default Nav;
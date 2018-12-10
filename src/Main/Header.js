import React from 'react';
import '../css/Header.css'

const Header = ({changeLocation}) => {
	return (
		<header className="header">
      <h1 className="banner">TeacherdDome</h1>
      <nav>
        <ul className="navigation">
          <li className="bannerNavigation" onClick={() => changeLocation('home')}>Home</li>
          <li className="bannerNavigation" onClick={() => changeLocation('students')}>Students</li>
          <li className="bannerNavigation" onClick={() => changeLocation('resourses')}>Resources</li>
          <li className="bannerNavigation" onClick={() => changeLocation('treasury')}>Treasury</li>
        </ul>
      </nav>
    </header>
	)
}

export default Header
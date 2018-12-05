import React from 'react'

const Header = ({changeLocation}) => {
	return (
		<header className="header">
      <h1>Teachers</h1>
      <nav>
        <ul>
          <li onClick={() => changeLocation('home')}>Home</li>
          <li onClick={() => changeLocation('students')}>Students</li>
          <li onClick={() => changeLocation('resourses')}>Resources</li>
          <li onClick={() => changeLocation('treasury')}>Treasury</li>
        </ul>
      </nav>
    </header>
	)
}

export default Header
import React from 'react'

const StudentOptions = ({changeLocation}) => {
	return (
		<header className="options">
      <h1>Student</h1>
      <nav>
        <ul>
          <li onClick={() => changeLocation('info')}>Student Information</li>
          <li onClick={() => changeLocation('math')}>Student Math score</li>
          <li onClick={() => changeLocation('reading')}>Student Reading score</li>
        </ul>
      </nav>
    </header>
	)
}

export default StudentOptions
import React from 'react'

const StudentOptions = ({changeLocation}) => {
	return (
		<header className="options">
      <h1>Student</h1>
      <nav>
        <ul className="studentNav">

          <li className="option" onClick={() => changeLocation('info')}>Information</li>
          <li className="option" onClick={() => changeLocation('contacts')}>Contacts</li>
          <li className="option" onClick={() => changeLocation('math')}>Math score</li>
          <li className="option" onClick={() => changeLocation('reading')}>Reading score</li>

        </ul>
      </nav>
    </header>
	)
}

export default StudentOptions
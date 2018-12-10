import React from 'react'

const StudentOptions = ({changeLocation}) => {
	return (
		<header className="options">
      <h1>Student</h1>
      <nav>
        <ul className="studentNav">
<<<<<<< HEAD
          <li className="option" onClick={() => changeLocation('info')}>Student Information</li>
          <li className="option" onClick={() => changeLocation('math')}>Student Math score</li>
          <li className="option" onClick={() => changeLocation('reading')}>Student Reading score</li>
=======
          <li className="option" onClick={() => changeLocation('info')}>Information</li>
          <li className="option" onClick={() => changeLocation('contacts')}>Contacts</li>
          <li className="option" onClick={() => changeLocation('math')}>Math score</li>
          <li className="option" onClick={() => changeLocation('reading')}>Reading score</li>
>>>>>>> master
        </ul>
      </nav>
    </header>
	)
}

export default StudentOptions
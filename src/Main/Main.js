import React from 'react'
import '../css/Main.css'
import Castle from  '../images/castle1.png'

const Main = ({changeLocation}) => {
	return (
	<section className="mainPage">
     <img className="castle" src={Castle}></img>
     </section>
   
	)
}

export default Main
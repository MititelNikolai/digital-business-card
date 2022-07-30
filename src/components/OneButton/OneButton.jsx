import React from 'react'
import './oneButton.css'
import { MdEmail } from 'react-icons/md'
const OneButton = () => {
	return (
		<div className='button__container'>
			<a href='/' className='btn btn-lg'>
				<MdEmail />
				<div className='btn__text'>Email</div>
			</a>
		</div>
	)
}

export default OneButton

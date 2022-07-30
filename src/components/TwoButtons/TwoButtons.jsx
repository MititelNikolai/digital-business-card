import React from 'react'
import './twoButtons.css'
import { AiFillLinkedin } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
const TwoButtons = () => {
	return (
		<div className='buttons__container'>
			<div className='buttons'>
				<a className='btn btn-sm' href='/'>
					<MdEmail />
					<div className='btn__text'>Email</div>
				</a>
				<a className='btn btn-sm btn__blue' href='/public'>
					<AiFillLinkedin />
					<div className='btn__text'>LinkedIn</div>
				</a>
			</div>
		</div>
	)
}

export default TwoButtons

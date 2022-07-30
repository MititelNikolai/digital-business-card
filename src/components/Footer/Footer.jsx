import React from 'react'
import './footer.css'
import {
	FaTwitterSquare,
	FaInstagramSquare,
	FaGithubSquare,
	FaLinkedin,
	FaFacebookSquare,
} from 'react-icons/fa'

const Footer = props => {
	return (
		<div
			className={
				props.theme === 'dark'
					? 'footer__container__dark'
					: 'footer__container__light'
			}
		>
			<div className='social__icon'>
				<FaTwitterSquare />
			</div>
			<div className='social__icon'>
				<FaFacebookSquare />
			</div>
			<div className='social__icon'>
				<FaInstagramSquare />
			</div>
			<div className={props.linkedIn ? 'social__icon' : 'hide'}>
				<FaLinkedin />
			</div>
			<div className='social__icon'>
				<FaGithubSquare />
			</div>
		</div>
	)
}

export default Footer

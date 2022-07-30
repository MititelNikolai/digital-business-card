import React from 'react'
import AVATAR from '../../assets/avatar.png'
import './cardHeader.css'
const CardHeader = props => {
	return (
		<div className='card-header__container'>
			<img className='card__header-img' src={AVATAR} alt='Digital Card img' />
			<div className='user'>
				<h2
					className={
						props.theme === 'dark' ? 'user__name__dark' : 'user__name__light'
					}
				>
					Laura Smith
				</h2>
				<h3
					className={
						props.theme === 'dark' ? 'user__job__dark' : 'user__job__light'
					}
				>
					Frontend Developer
				</h3>
				<h4
					className={
						props.theme === 'dark' ? 'user__site__dark' : 'user__site__light'
					}
				>
					laurasmith.website
				</h4>
			</div>
		</div>
	)
}

export default CardHeader

import React from 'react'
import './info.css'
const Info = props => {
	return (
		<div className='info__container'>
			<h3
				className={
					props.theme === 'dark' ? 'info__title__dark' : 'info__title__light'
				}
			>
				About
			</h3>
			<h4
				className={
					props.theme === 'dark'
						? 'info__description__dark'
						: 'info__description__light'
				}
			>
				I am a frontend developer with a particular interest in making things
				simple and automating daily tasks. I try to keep up with security and
				best practices, and am always looking for new things to learn.
			</h4>
			<h3
				className={
					props.theme === 'dark' ? 'info__title__dark' : 'info__title__light'
				}
			>
				Interests
			</h3>
			<h4
				className={
					props.theme === 'dark'
						? 'info__description__dark'
						: 'info__description__light'
				}
			>
				Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
				Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
			</h4>
		</div>
	)
}

export default Info

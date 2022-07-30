import React from 'react'
import './card.css'
import CardHeader from '../cardHeader/CardHeader'
import OneButton from '../OneButton/OneButton'
import TwoButtons from '../TwoButtons/TwoButtons'
import Info from '../Info/Info'
import Footer from '../Footer/Footer'
const Card = props => {
	return (
		<div
			className={
				props.theme === 'dark'
					? 'card__container card__container__dark'
					: 'card__container card__container__light'
			}
		>
			<CardHeader theme={props.theme} />
			{props.buttons === 'one' ? <OneButton /> : <TwoButtons />}
			<Info theme={props.theme} />
			<Footer theme={props.theme} linkedIn={props.linkedIn} />
		</div>
	)
}

export default Card

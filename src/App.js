import './App.css'
import Card from './components/Card/Card'

function App() {
	return (
		<div className='container container__app'>
			<div className='app__grid'>
				<div className='section'>
					<Card buttons='two' theme='dark' />
				</div>
				<div className='section'>
					<Card buttons='one' theme='dark' linkedIn={true} />
				</div>
				<div className='section'>
					<Card buttons='two' theme='light' />
				</div>
				<div className='section'>
					<Card buttons='one' theme='light' linkedIn={true} />
				</div>
			</div>
		</div>
	)
}

export default App

import React, { Component } from 'react'
import './App.css'
import './index.css'
import Header from './Components/Header'
import Home from './pages/Home'

export default class App extends Component {
	render() {
		return (
			<main>
				<Header />
				<Home />
			</main>
		)
	}
}

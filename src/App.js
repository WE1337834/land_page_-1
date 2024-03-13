import React, { Component } from 'react'

import './index.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './pages/Home'

export default class App extends Component {
	render() {
		return (
			<main>
				<Header />
				<Home />
				<Footer />
			</main>
		)
	}
}

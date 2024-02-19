import React, { Component } from 'react'
import '../css/Footer.css'
import { ReactComponent as Facebook } from '../img/Facebook.svg'
import { ReactComponent as Twitter } from '../img/Twitter.svg'
import { ReactComponent as Inst } from '../img/Inst.svg'
import { ReactComponent as YT } from '../img/YouTube.svg'

export default class Footer extends Component {
	render() {
		return (
			<>
				<footer>
					<div className='Footer__logo_name'>
						<span className='Footer__logo_ellipse1'></span>
						<span className='Footer__logo_text'>simple</span>
						<span className='Footer__logo_ellipse2'></span>
						<span className='Footer__logo_ellipse1'></span>
					</div>
					<div className='Footer__sn'>
						<Facebook className='Footer__icon' />
						<Twitter className='Footer__icon' />
						<Inst className='Footer__icon' />
						<YT className='Footer__icon' />
					</div>
				</footer>
				<div className='copyright'>Simple ® 2021</div>
			</>
		)
	}
}

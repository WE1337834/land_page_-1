import React, { Component } from 'react'
import '../css/Header.css'
// import './Header.php'

export default class Header extends Component {
	render() {
		return (
			<header className='Header'>
				<div className='Header__center'>
					<div className='Header__logo_name'>
						<span className='Header__logo_ellipse1'></span>
						<span className='Header__logo_text'>simple</span>
						<span className='Header__logo_ellipse2'></span>
						<span className='Header__logo_ellipse1'></span>
					</div>

					<nav className='Header__nav'>
						<a href='/' className='Header__nav_link'>
							Продукция
						</a>
						<a href='/' className='Header__nav_link'>
							Материалы
						</a>
						<a href='/' className='Header__nav_link'>
							О нас
						</a>
						<a href='/' className='Header__nav_link'>
							Контакты
						</a>

						<span className='Header__nav_search_login'>
							<img
								src='https://img.icons8.com/windows/32/search--v1.png'
								alt='search'
								className='Header__nav_search'
							/>
							<img
								src='https://img.icons8.com/tiny-glyph/16/enter-2.png'
								alt='enter'
								className='Header__nav_login'
							/>
						</span>
					</nav>
				</div>
			</header>
		)
	}
}

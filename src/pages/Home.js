import React, { Component } from 'react'
import simple from '../img/Hero.png'
import v1 from '../img/v1.png'
import v2 from '../img/v2.png'
import v3 from '../img/v3.png'
import list from '../img/openlist.png'
import '../css/Home.css'

export default class Home extends Component {
	render() {
		return (
			<section className='Home'>
				<div className='Home__hero'>
					<div className='Home__introduction'>
						<div className='Home__hero_title'>
							<h1 className='Home__title'>Простые вещи. Из бумаги</h1>
						</div>
						<div className='Home__description'>
							Бума́га (предположительно от итал. bombagia, первоисточником же
							считается иранский) — волокнистый материал с минеральными
							добавками.
						</div>

						<button className='Btn'>Каталог</button>
					</div>
					<div className='Home__hero_img'>
						<img src={simple} className='Home__img' />
					</div>
				</div>

				<div className='Home__mw'>
					<div className='Home__mw_result'>
						<div className='Home__mw_result_card'>
							<img src={v1} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.1</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
						<div className='Home__mw_result_card'>
							<img src={v2} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.2</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
						<div className='Home__mw_result_card'>
							<img src={v3} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.3</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
					</div>

					<div className='Home__mw_info'>
						<img src={list} className='Home__mw_img' />
						<div className='Home__mw_desc'>
							<h2 className='Home__mw_title'>Максимальная белизна</h2>
							<p className='Home__mw_text'>
								Для повышения белизны, гладкости и мягкости в состав бумажной
								массы вводят белые минеральные вещества: мел, тальк, каолин и
								др. Эта операция называется наполнением.
								<br />
								Отлив бумажного листа осуществляют на бумагоделательной машине,
								важнейшей частью которой является непрерывно движущаяся (как
								транспортер) металлическая или капроновая сетка.
							</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

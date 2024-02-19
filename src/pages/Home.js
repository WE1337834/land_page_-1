import React, { Component } from 'react'

import simple from '../img/Hero.png'
import v1 from '../img/v1.png'
import v2 from '../img/v2.png'
import v3 from '../img/v3.png'
import list from '../img/openlist.png'
import Package from '../img/Package.png'
import Packages from '../img/Packages.png'
import Cases from '../img/Cases.png'
import Products from '../img/products.png'

import Hm from '../img/Hm.png'
import Canson from '../img/canson.png'
import Rt from '../img/Rt.png'
import Fabriano from '../img/fabriano.png'

import Book from '../img/book.png'

import { ReactComponent as Arrow } from '../img/Arrow.svg'

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
						<img alt='' src={simple} className='Home__img' />
					</div>
				</div>

				<div className='Home__mw'>
					<div className='Home__mw_result'>
						<div className='Home__mw_result_card'>
							<img alt='' src={v1} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.1</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
						<div className='Home__mw_result_card'>
							<img alt='' src={v2} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.2</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
						<div className='Home__mw_result_card'>
							<img alt='' src={v3} className='Home__card_img' />
							<div className='Home__card_desc'>
								<h2 className='Home__card_title'>V.3</h2>
								<span className='Home__card_text'>
									Результат вашего обучения
								</span>
							</div>
						</div>
					</div>

					<div className='Home__mw_info'>
						<img alt='' src={list} className='Home__mw_img' />
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

				<div className='Home__goods'>
					<div className='Home__goods_card'>
						<div className='Home__goods_img_desc'>
							<img alt='' className='Home__goods_img' src={Package} />
						</div>
						<div className='Home__goods_desc'>
							<h2 className='Home__goods_title'>Упаковка</h2>
							<span className='Home__goods_circ'>Тираж: от 50 штук</span>
							<p className='Home__goods_text'>
								Сделано из крафт-бумаги или плотного картона. Упаковки имеют
								различные формы и расцветки, изготовим форму под заказ.
							</p>
						</div>
						<a className='Details' href='/'>
							Подробнее
							<Arrow />
						</a>
					</div>
					<div className='Home__goods_card'>
						<div className='Home__goods_img_desc'>
							<img alt='' className='Home__goods_img' src={Packages} />
						</div>
						<div className='Home__goods_desc'>
							<h2 className='Home__goods_title'>Пакеты</h2>
							<span className='Home__goods_circ'>Тираж: от 200 штук</span>
							<p className='Home__goods_text'>
								С прямоугольным дном. От 10 см до 60 см по высоте. Материалы:
								картон, крафт-бумага. Различные расцветки и дизайн.
							</p>
						</div>
						<a className='Details' href='/'>
							Подробнее
							<Arrow />
						</a>
					</div>
					<div className='Home__goods_card'>
						<div className='Home__goods_img_desc'>
							<img alt='' className='Home__goods_img' src={Cases} />
						</div>
						<div className='Home__goods_desc'>
							<h2 className='Home__goods_title'>Кейсы</h2>
							<span className='Home__goods_circ'>Тираж: от 30 штук</span>
							<p className='Home__goods_text'>
								Подойдет для документов и других бумаг. Различные расцветки,
								размеры и плотность. Материал: прессованная бумага.
							</p>
						</div>
						<a className='Details' href='/'>
							Подробнее
							<Arrow />
						</a>
					</div>
					<div className='Home__goods_card'>
						<div className='Home__goods_img_desc'>
							<img alt='' className='Home__goods_img' src={Products} />
						</div>
						<div className='Home__goods_desc'>
							<h2 className='Home__goods_title'>Другие изделия </h2>
							<span className='Home__goods_circ'>Тираж: от 100 штук</span>
							<p className='Home__goods_text'>
								Нестандартные упаковки, кейсы и другие изделия различных
								размеров и конфигураций. Изготовим в кратчайшие сроки.
							</p>
						</div>
						<a className='Details' href='/'>
							Подробнее
							<Arrow />
						</a>
					</div>
				</div>

				<div className='Home__spons'>
					<div className='Home__spons_carts'>
						<div className='Home__spons_cart'>
							<img alt='' className='Home__spons_img' src={Hm} />
						</div>
						<div className='Home__spons_cart'>
							<img alt='' className='Home__spons_img' src={Canson} />
						</div>
						<div className='Home__spons_cart'>
							<img alt='' className='Home__spons_img' src={Rt} />
						</div>
						<div className='Home__spons_cart'>
							<img alt='' className='Home__spons_img' src={Fabriano} />
						</div>
					</div>
				</div>

				<div className='Home__sketchbook'>
					<div className='Home__sketchbook_content'>
						<div className='Home__sketchbook_block'>
							<div className='Home__sketchbook_info'>
								<h2 className='Home__sketchbook_title'>Simple скетчбук</h2>
								<p className='Home__sketchbook_text'>
									80 листов, твердая обложка, бумага Fabriano 200 г/м2. Подойдет
									и для графики и для акварели. Для самых смелых творческих
									замыслов!
								</p>
							</div>
							<button className='Btn'>Купить</button>
						</div>
						<img alt='' className='Home__sketchbook_img' src={Book} />
					</div>
				</div>
			</section>
		)
	}
}

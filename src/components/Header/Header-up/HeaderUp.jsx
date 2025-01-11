import styles from '../../../styles/blocks/header/_header.module.scss';


export default function HeaderUpAlign() {
	return(
		<div className={styles.header__up}>
			<div className="wrapper__headerup">
				<div className={styles.header__left}>
					<nav className="header__left__menu">
						<ul className={styles.header__left__menu__list}>
							<li className="header__left__menu__item">
								<a href="/" className="header__left__menu__link">
									<span>
										Ваш регион доставки:
										<img src="" alt="" />
									</span>
									<select name="" id="" className="country">
										<option value="">Москва</option>
										<option value="">Санкт-питербург</option>
										<option value="">Владивосток</option>
										<option value="">Лениногорск</option>
									</select>
								</a>
							</li>
							<li className="header__left__menu__item">
								<a href="/" className={styles.link}>Москва</a>
							</li>
							<li className="header__left__menu__item">
								<a href="/" className={styles.link}>Помощь</a>
							</li>
							<li className="header__left__menu__item">
								<a href="/" className={styles.link}>Блоги</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className={styles.header__right}>
					<nav className="header__right__menu">
						<ul className={styles.header__right__list}>
							<li className="header__right__item">
								<a href="" className={styles.link}>
									<span><img src="" alt="" /></span>
									<span>Бесплатная доставка *</span>
								</a>
							</li>
							<li className="header__right__item">
								<a href="" className={styles.link}>
									<span><img src="" alt="" /></span>
									<span>Оплата при получении</span>
								</a>
							</li>
							<li className="header__right__item">
								<a href="" className={styles.link}>
									<span><img src="" alt="" /></span>
									<span>Возврат в течении 24 дней</span>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

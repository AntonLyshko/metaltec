import Link from "next/link";
import Slider from "../components/sliders/slider";
import Categories from "../components/categories.js";
import Products from "../components/product-list/index.js";


const Home = () => {


	return (
		<span>
			<span className="af-view">
				<div className="af-class-body">
					<div className="af-class-main-wrapper">
						<div className="af-class-hero">
							<div className="af-class-tagline af-class-white-hero-tagline reveal-item">
								METALTEC-1®
							</div>
							<div className="af-class-slider w-slider">
								<Slider />
							</div>
							<h1 className="af-class-hero-title reveal-item">
								<strong className="af-class-bold-text-2">
									Prostředkem pro zušlechťování kovů nejlepší jakosti.
								</strong>
							</h1>
							<p className="af-class-larger-paragraph af-class-white-hero-paragraph reveal-item">
								<strong className="af-class-bold-text">
									Není tradičním doplňkem do oleje.
									<br />
								</strong>
							</p>
							<Link href="/about">
								<a
									href="#"
									className="af-class-button af-class-default-button af-class-big-default w-button reveal-item"
								>
									Více
								</a>
							</Link>
						</div>
						<div className="af-class-container w-container ">
							<div className="af-class-block">
								<h1 className="af-class-block-title">
									<strong className="af-class-bold-text-3">
										Hlavní výhody
									</strong>
									<br />
								</h1>
								<div className="af-class-columns w-row">
									<div className="w-col w-col-4 w-col-stack">
										<div className="af-class-vyhody-item reveal-item-group">
											<img
												src={require("../images/upgrade.png")}
												loading="lazy"
												alt
												className="af-class-vyhody-img"
											/>
											<h3 className="af-class-vyhody-title">
												<strong>Zvyšuje kvalitu motorového oleje</strong>
												<br />
											</h3>
										</div>
									</div>
									<div className="w-col w-col-4 w-col-stack ">
										<div className="af-class-vyhody-item reveal-item-group">
											<img
												src={require("../images/shiny.png")}
												loading="lazy"
												alt
												className="af-class-vyhody-img"
											/>
											<h3 className="af-class-vyhody-title">
												<strong>Zušlechťuje kovy</strong>
												<br />
											</h3>
										</div>
									</div>
									<div className="w-col w-col-4 w-col-stack">
										<div className="af-class-vyhody-item reveal-item-group">
											<img
												src={require("../images/pistorns-icon.png")}
												loading="lazy"
												alt
												className="af-class-vyhody-img"
											/>
											<h3 className="af-class-vyhody-title">
												<strong>Zvyšuje kvalitu motorového oleje</strong>
												<br />
											</h3>
										</div>
									</div>
								</div>
							</div>
							<Categories />
							<Products amount={4} />

							<div className="af-class-block">
								<div className="af-class-hero2">
									<div className="af-class-hero-content-wrapper">
										<h1 className="af-class-hero-title-2">
											<strong>100 % syntetickou tekutinou,</strong>
											<br />
										</h1>
										<p className="af-class-larger-paragraph af-class-white-hero-paragraph af-class-hero2-paragraph">
											která neobsahuje žádná pevná tělesa, jako například
											přísady na bázi teflonu čili PTFE, kuličky mědi nebo
											molekuly olova apod.
											<br />‍<br />Z tohoto důvodu nehrozí žádné riziko ucpávání
											filtrů a olejových mazacích kanálků, rovněž nejsou žádné
											problémy s odváděním tepla.
										</p>
										<Link href="/about">
											<a
												href="#"
												className="af-class-button af-class-default-button af-class-big-default af-class-additional-info w-button"
											>
												Více informací
											</a>
										</Link>
									</div>
								</div>
							</div>
							<div className="af-class-block af-class-item-block">
								<div className="af-class-columns-4 w-row">
									<div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
										<div className="af-class-video-item">
											<div
												style={{ paddingTop: "56.17021276595745%" }}
												className="af-class-video w-video w-embed"
											>
												<iframe
													className="af-class-embedly-embed"
													src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2F_j-npmX1Ryc%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_j-npmX1Ryc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_j-npmX1Ryc%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
													scrolling="no"
													title="YouTube embed"
													frameBorder={0}
													allow="autoplay; fullscreen"
													allowFullScreen="true"
												></iframe>
											</div>
										</div>
									</div>
									<div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
										<div className="af-class-video-item">
											<div
												style={{ paddingTop: "56.17021276595745%" }}
												className="af-class-video w-video w-embed"
											>
												<iframe
													className="af-class-embedly-embed"
													src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FuYHZ2g1DDuM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DuYHZ2g1DDuM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FuYHZ2g1DDuM%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
													scrolling="no"
													title="YouTube embed"
													frameBorder={0}
													allow="autoplay; fullscreen"
													allowFullScreen="true"
												></iframe>
											</div>
										</div>
									</div>
									<div className="w-col w-col-4 w-col-medium-4 w-col-small-small-stack">
										<div className="af-class-video-item">
											<div
												style={{ paddingTop: "56.17021276595745%" }}
												className="af-class-video w-video w-embed"
											>
												<iframe
													className="af-class-embedly-embed"
													src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FurkK7PlQdPw%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DurkK7PlQdPw&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FurkK7PlQdPw%2Fhqdefault.jpg&key=96f1f04c5f4143bcb0f2e68c87d65feb&type=text%2Fhtml&schema=youtube"
													scrolling="no"
													title="YouTube embed"
													frameBorder={0}
													allow="autoplay; fullscreen"
													allowFullScreen="true"
												></iframe>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="af-class-block af-class-item-block">
								<h1 className="af-class-block-title">
									<strong className="af-class-bold-text-3">
										Populární zboží
									</strong>
									<br />
								</h1>
								<div className="af-class-columns-3 w-row">
									<Products amount={4} />
								</div>
							</div>
						</div>
					</div>
					{/* [if lte IE 9]><![endif] */}
				</div>
			</span>
		</span>
	);
};

export default Home;

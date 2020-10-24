import React from "react";
import $ from "jquery";
import Link from "next/link";
import { gsap } from "gsap";

const Categories = () => {
	const mouseenterHandle = (e) => {
		let btns = $(e.target).find(".af-class-reseni-btn");
		gsap.to(btns, 0.3, { y: -75, opacity: 1, ease: "power4.easeInOut" });
	};

	const mouseleaveHandle = () => {
		gsap.to(".af-class-reseni-btn", 0.3, {
			y: 0,
			opacity: 0,
			ease: "power4.easeInOut",
		});
	};

	return (
		<div className="af-class-block ">
			<h1 className="af-class-block-title ">
				Řešení
				<br />
			</h1>
			<div className="af-class-columns-2 w-row ">
				<div className="w-col w-col-6">
					<div
						data-w-id="43faa211-9ea0-b7ab-36d4-3ddf17bd54ee"
						onMouseEnter={(e) => mouseenterHandle(e)}
						onMouseLeave={() => mouseleaveHandle()}
						className="af-class-reseni-item af-class-reseni-item-1"
					>
						<h1 className="af-class-reseni-title">
							METALTEC-1
							<br />
						</h1>
						<div className="af-class-reseni-btn-container">
							<Link href="/catalog/automoto">
								<a
									href="#"
									className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn w-button"
								>
									Do katalogu
								</a>
							</Link>
							<Link href="/solutions">
								<a
									href="#"
									className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn af-class-reseni-btn-2 w-button"
								>
									Více informací
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className="w-col w-col-6">
					<Link href="catalog/zbrane">
						<div
							data-w-id="b29b798c-8658-ed9d-477a-eac397712407"
							onMouseEnter={(e) => mouseenterHandle(e)}
							onMouseLeave={() => mouseleaveHandle()}
							className="af-class-reseni-item af-class-reseni-item-2"
						>
							<h1 className="af-class-reseni-title">
								METALTEC-1 Guns
								<br />
							</h1>
							<div className="af-class-reseni-btn-container">
								<Link href="catalog/zbrane">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn w-button"
									>
										Do katalogu
									</a>
								</Link>
								<Link href="/solutions">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn af-class-reseni-btn-2 w-button"
									>
										Více informací
									</a>
								</Link>
							</div>
						</div>
					</Link>
				</div>
			</div>
			<div className="af-class-columns-2 w-row">
				<div className="w-col w-col-6">
					<Link href="catalog/cyklo">
						<div
							data-w-id="bb1f9217-b0c1-7889-3f63-706da3b28c4c"
							onMouseEnter={(e) => mouseenterHandle(e)}
							onMouseLeave={() => mouseleaveHandle()}
							className="af-class-reseni-item af-class-reseni-item-3 "
						>
							<h1 className="af-class-reseni-title">
								METALTEC-1 Cyklo
								<br />
							</h1>
							<div className="af-class-reseni-btn-container">
								<Link href="catalog/cyklo">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn w-button"
									>
										Do katalogu
									</a>
								</Link>
								<Link href="/solutions">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn af-class-reseni-btn-2 w-button"
									>
										Více informací
									</a>
								</Link>
							</div>
						</div>
					</Link>
				</div>
				<div className="w-col w-col-6">
					<Link href="catalog/vazeliny">
						<div
							data-w-id="bb1f9217-b0c1-7889-3f63-706da3b28c4e"
							onMouseEnter={(e) => mouseenterHandle(e)}
							onMouseLeave={() => mouseleaveHandle()}
							className="af-class-reseni-item reveal-item-group"
						>
							<h1 className="af-class-reseni-title">
								METALTEC Vazelíny
								<br />
							</h1>
							<div className="af-class-reseni-btn-container">
								<Link href="catalog/vazenliny">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn w-button"
									>
										Do katalogu
									</a>
								</Link>
								<Link href="/solutions">
									<a
										href="#"
										className="af-class-button af-class-default-button af-class-big-default af-class-reseni-btn af-class-reseni-btn-2 w-button"
									>
										Více informací
									</a>
								</Link>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Categories;

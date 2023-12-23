import React from "react"
import "./BusinessCard.css"
import { FaTshirt } from "react-icons/fa"

function BusinessCard() {
	return (
		<>
			<div className="container-fluid pb-5">
				<div className="row">
					<div className="col-12 business_header">
						<h1>
							Which Retail Businesses leverage the power of
							<span class="single_space"></span>
							<p className="green_underline"> RePOS</p>?
						</h1>
					</div>
				</div>
				<div className="row card_container">
					<div className="col-4">
						<div className="card">
							<div className="card_logo">
								<img
									src="/images/dress-svg.svg"
									alt=""
									className="card_logo_icon"
								/>
							</div>
							<p className="tagline">Lifestyle & Fashion</p>
							<div className="all_lines">
								<div className="card_line">
									<img src="/images/coat.svg" alt="" />
									<div className="cool-link">Garments</div>
								</div>
								<div className="card_line">
									<img src="/images/footwear.svg" alt="" />
									<div className="cool-link">Footwear</div>
								</div>
								<div className="card_line">
									<img src="/images/sportswear.svg" alt="" />
									<div className="cool-link">Sportswear</div>
								</div>
								<div className="card_line">
									<img src="/images/Garments.svg" alt="" />
									<div className="cool-link">Boutique</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card_logo">
								<img
									src="/images/cart-svg.svg"
									alt=""
									className="card_logo_icon"
								/>
							</div>
							<p className="tagline">Supermarket & Groceries</p>
							<div className="all_lines">
								<div className="card_line">
									<img src="/images/retail.svg" alt="" />
									<div className="cool-link">Supermarket</div>
								</div>
								<div className="card_line">
									<img src="/images/fruit.svg" alt="" />
									<div className="cool-link">Fruits & Vegetables</div>
								</div>
								<div className="card_line">
									<img src="/images/Convenience-stores.svg" alt="" />
									<div className="cool-link">Convenience Stores</div>
								</div>
								<div className="card_line">
									<img src="/images/basket.svg" alt="" />
									<div className="cool-link">Gourmet Stores</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-4">
						<div className="card">
							<div className="card_logo">
								<img
									src="/images/bag-svg.svg"
									alt=""
									className="card_logo_icon"
								/>
							</div>
							<p className="tagline">Niche Retail</p>

							<div className="all_lines">
								<div className="card_line">
									<img src="/images/gift.svg" alt="" />
									<div className="cool-link">Gift Articles Shop</div>
								</div>
								<div className="card_line">
									<img src="/images/stationery.svg" alt="" />
									<div className="cool-link">Stationery Store</div>
								</div>
								<div className="card_line">
									<img src="/images/almond.svg" alt="" />
									<div className="cool-link">Roastery Store</div>
								</div>
								<div className="card_line">
									<img src="/images/beef.svg" alt="" />
									<div className="cool-link">Meat Shop</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BusinessCard

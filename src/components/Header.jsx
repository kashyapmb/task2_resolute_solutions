import React from "react"
import "./Header.css"
import "bootstrap/dist/css/bootstrap.min.css"

function Header() {
	return (
		<>
			<div class="container-fluid">
				<div class="row">
					<div class="col-12">
						<div className="bg_header">
							<div class="row">
								<div class="col-7">
									<img
										src="/images/logo.png"
										alt=""
										class="img-fluid"
										className="logo_img"
									/>
								</div>
								<div class="col-5">
									<div className="nav_links">
										<p>About</p>
										<p>Contact</p>
										<p className="book_a_demo_navbar">Book a Demo</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-6">
									<div className="header_info">
										<h1>
											Transform your Retail Business with our advanced POS
											Software
										</h1>
										<p>
											Unlock the potential of seamless transactions, effortless
											petty cash management, optimized inventory control, and
											elevated customer experiences with our empowering retail
											POS software.
										</p>
										<p className="btn_book_a_demo">
											<span>Book a Demo</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header

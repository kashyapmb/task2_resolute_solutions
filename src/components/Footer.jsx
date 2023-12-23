import logo from "../logo.svg"
import "./Footer.css"
import "../App.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { IoIosArrowForward } from "react-icons/io"
import { HiLocationMarker } from "react-icons/hi"
import { IoCallSharp } from "react-icons/io5"
import { HiMail } from "react-icons/hi"
import { FaStar } from "react-icons/fa6"
import { FaFacebook } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"

function Footer() {
	return (
		<>
			<div className="footer">
				<div className="links">
					<div className="component_footer">
						<h5>Lifestyle & Fashion</h5>
						<div className="nav-links">
							<IoIosArrowForward />
							Garments
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Footwear
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Sportswear
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Boutique
						</div>
					</div>
					<div className="component_footer">
						<h5>Supermarket & Groceries</h5>
						<div className="nav-links">
							<IoIosArrowForward />
							Supermarket
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Fruits & Vegetables
						</div>

						<div className="nav-links">
							<IoIosArrowForward />
							Convenience Stores
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Gourmet Stores
						</div>
					</div>
					<div className="component_footer">
						<h5>Niche Retail</h5>
						<div className="nav-links">
							<IoIosArrowForward />
							Gift Articles Shop
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Stationery Store
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Roastery Store
						</div>
						<div className="nav-links">
							<IoIosArrowForward />
							Meat Shop
						</div>
					</div>
					<div>
						<div className="component_footer">
							<h5>Get In Touch</h5>
							<div className="nav-links">
								<HiLocationMarker />
								Visit us
							</div>
							<div className="nav-links">
								<IoCallSharp />
								+91 7600 60 30 11
							</div>
							<div className="nav-links">
								<HiMail />
								info@re-pos.in
							</div>
							<div className="nav-links">
								<FaStar />
								Google Review
							</div>
						</div>
						<div className="icons">
							<div className="icon">
								<FaFacebook />
							</div>
							<div className="icon">
								<FaLinkedin />
							</div>
							<div className="icon">
								<FaInstagram />
							</div>
							<div className="icon">
								<FaWhatsapp />
							</div>
						</div>
					</div>
				</div>
				<hr className="line" />
				<div className="cities">
					<div>India</div>
					<div>Ahmedabad</div>
					<div>Goa</div>
					<div>Hyderabad</div>
					<div>Mumbai</div>
					<div>Pune</div>
					<div>Surat</div>
					<div>Vadodara</div>
					<div>Saudi Arabia</div>
					<div>Jeddah</div>
					<div>Mauritius</div>
					<div>Kenya</div>
					<div>Nairobi</div>
					<div>Ghana</div>
					<div>Accra</div>
					<div>Tanzania</div>
					<div>Uganda</div>
					<div>Mauritius</div>
					<div>Rwanda</div>
				</div>
				<hr className="line" />
				<div className="copyright">
					<h6 style={{ display: "flex" }}>
						© 2023 All Rights Reserved by <span class="single_space"></span>
						<p className="underlineText"> Resolute Solutions </p> .
					</h6>
				</div>
			</div>
		</>
	)
}

export default Footer

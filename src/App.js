import logo from "./logo.svg"
import "./App.css"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import BusinessCard from "./components/BusinessCard"
import ReposInfo from "./components/ReposInfo"
import SpecialistCard from "./components/SpecialistCard"
import Products from "./components/Products"
import Form from "./components/Form"
import Footer from "./components/Footer"
import FeatureSet from "./components/FeatureSet"

function App() {
	return (
		<>
			<div>
				<Header />
				<BusinessCard />
				<ReposInfo />
				<FeatureSet/>
				<SpecialistCard/>
				<Products/>
				<Form/>
				<Footer/>
			</div>
		</>
	)
}

export default App

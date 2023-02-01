import React, { useState } from 'react'
import { Route, Link, Routes, HashRouter } from "react-router-dom"
//Import page components
import Home from './sections/Home.js'
import Header from './sections/Header.js'
import Profile from './sections/Profile.js'
import OurPolicy from './sections/OurPolicy.js'
import Footer from './sections/Footer.js'
import Basket from './sections/Basket.js'
import ProductsPage from './sections/ProductsPage.js'
import Finance from './sections/Finance.js'
//This is a component that allows me to keep the navbar always on top
import Scroll from './sections/Scroll.js'





//---------------------Function App()------------------------------------
//This is the main component of the page, returning an if statement that will act differently whether there is a username or there isn't
function App() {
 
	//All this state is for the login details
	const [userName, setUserName] = useState("");
	const [displayedName, setDisplayedName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [displayedPassword, setDisplayedPassword] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [displayedAddress, setDisplayedAddress] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [displayedEmail, setDisplayedEmail] = useState("");
	//This will dictate whether we send the user to the login page or to the homepage
	let [isLoggedIn, setIsLoggedIn] = useState(false);

	//This will take hold of whatever value has been entered in the 'username', 'password', 'address' and 'email' inputs
	function handleNameChange(event) {
		setUserName(event.target.value);
	}
	function handlePasswordChange(event) {
		setUserPassword(event.target.value);
	}
	function handleAddressChange(event) {
		setUserAddress(event.target.value);
	}
	function handleEmailChange(event) {
		setUserEmail(event.target.value);
	}

	//This will pass those values into state
	function handleClick() {
		setDisplayedName(userName);
		setDisplayedPassword(userPassword);
		setDisplayedAddress(userAddress);
		setDisplayedEmail(userEmail);
		setIsLoggedIn(isLoggedIn = true)
	}

	//This is the amount of items that the user orders from each of the 3 products
	const [orderedItemsProd1, setOrderedItemsProd1] = useState(0)
	const [orderedItemsProd2, setOrderedItemsProd2] = useState(0)
	const [orderedItemsProd3, setOrderedItemsProd3] = useState(0)

	//These functions add the amount of ordered items when the user adds more to the basket
	function handleOrderedItemsProd1(num) {
		setOrderedItemsProd1(orderedItemsProd1 + num)
	}
	function handleOrderedItemsProd2(num) {
		setOrderedItemsProd2(orderedItemsProd2 + num)
	}
	function handleOrderedItemsProd3(num) {
		setOrderedItemsProd3(orderedItemsProd3 + num)
	}

	//This contains some info about the products
	const [products, setOrderedItems] = useState([
	{ prod: "Decaffision", 
		price: 99.99, 
		description1: "A mellow brew to chill in the evening.", 
		description2: "What it lacks in caffeine, it makes up for in radioactive isotopes.", 
		description3: "Fission reactor required to brew.", 
		id: 1},
	{ prod: "Cafluxino", 
		price: 299.99, 
		description1: "Remember Back To Future? This coffee can jumpstart the DeLorean!", 
		description2: "Enjoy its foamy plutonium layer.", 
		description3: "Will make you travel in time and space.", 
		id: 2},
	{ prod: "Waste-presso", 
		price: 999.99, 
		description1: "20 megatones of pure arabiga quality.", 
		description2: "A flavour reminiscent of the clash of a supernova with a black hole.", 
		description3: "Literally mouth-watering.", 
		id: 3}
	])


	//Function to process the payment without finance
	function processPayment() {
		if (orderedItemsProd1 + orderedItemsProd2 + orderedItemsProd3 > 0) {
			setOrderedItemsProd1(0);
			setOrderedItemsProd2(0);
			setOrderedItemsProd3(0);
			alert(`You just paid £${(((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2).toFixed(2)}, your items will arrive promptly`)
		} else {
			alert("Your basket is empty!")
		}
		}

	//Function to process the payment with finance
	function processFinancePayment() {
		if (orderedItemsProd1 + orderedItemsProd2 + orderedItemsProd3 > 0) {
			setOrderedItemsProd1(0);
			setOrderedItemsProd2(0);
			setOrderedItemsProd3(0);
			alert(`Transaction complete for a total amount of £${((((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2) * 1.2).toFixed(2)}, to be paid in ${monthsToPay} months.\n
			You just made a first payment of £${((((((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2) * 1.2)/monthsToPay)).toFixed(2)}.\n
			Your items will arrive promptly`)
			$('#select-months').get(0).selectedIndex = 0;
			setMonthsToPay(1)
		} else {
			alert("Your basket is empty!")
		}}

	//State and function to handle the amount of months over which the user wants to pay with finance
	const [monthsToPay, setMonthsToPay] = useState(0);
	function handleSetMonthsToPay(event) {
		setMonthsToPay(event.target.value)
	}

	//State and function to calculate the payments when using finance
	const [totalToPay, setTotalToPay] = useState(0);
	function handleFinance(event) {
		let amount1 = ((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2;
		setTotalToPay(amount1);
		let amount2 = (totalToPay / Number(event.target.value));
		setTotalToPay(amount2);
	} 
	
	//Function to log out
	function logOut() {
		alert("User logged out!")
		setUserName("");
		setUserPassword("");
		setUserAddress("");
		setUserEmail("");
		setIsLoggedIn(isLoggedIn = false)
	}


	//And finally we return an if statement
	//If the boolean 'isLoggedIn' has the value of false we direct the user to the login page
	if (isLoggedIn === false) {
	return ( 
		<div>
			{/* We will display the Header, which has been created separately */}
			<Header />
			{/* This next section is the form to enter username and password */}
	<       div className="section-signin">
			<form className="signin-form">
				<label className="label1">Username</label>
				{/* We pass a function to get hold of the value in this input, with onChange */}
				<input onChange={handleNameChange} value={userName} type="text" id="input1" name="fullName" placeholder="username"/><br/>
				<label className="label2">Password</label>
				<input onChange={handlePasswordChange} value={userPassword} type="text" id="input2" name="password" placeholder="password"/>
				<label className="label3">Address</label>
				<input onChange={handleAddressChange} value={userAddress} type="text" id="input3" name="address" placeholder="address"/>
				<label className="label4">Email</label>
				<input onChange={handleEmailChange} value={userEmail} type="text" id="input4" name="email" placeholder="email"/>
			</form>
			{/* We pass a function to the button, in order to save the value stored on the username input */}
			<button onClick={handleClick} className="btn">Sign In</button>
		</div>
		</div>
	)
	//on the other hand, if 'isLoggedIn' has the value of 'true' we direct the user to the main page
	//some of which have been created on separate files
	} else {
		return (
			<>
				{/* This will create a navbar */}
				<div className='nav-container'>
					<HashRouter>
					<div className='navbar-div'>
						<div className="welcome">
							<button className="logout" onClick={logOut}>Log Out</button>
							<h5><i className="fa-regular fa-user"></i>Hello {displayedName}</h5>
						</div>
						<div>
							<nav>
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/profile">My profile</Link></li>
									<li><Link to="/productspage">Products</Link></li>
									<li><Link to="/policy">Policy</Link></li>
									{/* We can show the amount of items that the user has ordered at all times here */}
									<li><Link to="/basket">Basket: {orderedItemsProd1 + orderedItemsProd2 + orderedItemsProd3}</Link></li>
								</ul>
							</nav>
						</div>


						{/* Right part of the navbar, with logout button and user name displayed */}

					</div>
					<Scroll>
						<div className="routes">
					{/* Here are the navbar routes established, each with its required state */}
					<Routes>
						<Route exact path="/" element ={<Home products={products}
														handleOrderedItemsProd1={handleOrderedItemsProd1}
														handleOrderedItemsProd2={handleOrderedItemsProd2}
														handleOrderedItemsProd3={handleOrderedItemsProd3} />} />
						<Route path="/profile" element={<Profile 
															displayedName={displayedName} 
															displayedPassword={displayedPassword} 
															displayedAddress={displayedAddress} 
															displayedEmail={displayedEmail}/>} />
						<Route path="/productspage" element={<ProductsPage 
																products={products}
																handleOrderedItemsProd1={handleOrderedItemsProd1}
																handleOrderedItemsProd2={handleOrderedItemsProd2}
																handleOrderedItemsProd3={handleOrderedItemsProd3} />} />
						<Route path ="/policy" element={<OurPolicy />} />
						<Route path ="/basket" element={<Basket 
															products={products} 
															handleFinance={handleFinance} 
															processPayment={processPayment}
															orderedItemsProd1={orderedItemsProd1}
															orderedItemsProd2={orderedItemsProd2}
															orderedItemsProd3={orderedItemsProd3} />} />
						<Route path ="/finance" element={<Finance 
															products={products} 
															handleFinance={handleFinance} 
															totalToPay={totalToPay}
															processPayment={processPayment}
															processFinancePayment={processFinancePayment}
															orderedItemsProd1={orderedItemsProd1}
															orderedItemsProd2={orderedItemsProd2}
															orderedItemsProd3={orderedItemsProd3}
															handleSetMonthsToPay={handleSetMonthsToPay}
															monthsToPay={monthsToPay}
															/>} />
						</Routes>
					</div>
					</Scroll>
					</HashRouter>
				</div>
			<Footer />
			</>
		)
	}
}

export default App;

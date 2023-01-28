//This is the 'Basket' section, which shows whatever items the user has ordered currently

import { useNavigate } from "react-router-dom"
import Header from './Header.js';


function Basket(props) {
	//We need several props in order to show whatever is on the basket
	const products = props.products;
	const orderedItemsProd1 = props.orderedItemsProd1;
    const orderedItemsProd2 = props.orderedItemsProd2;
    const orderedItemsProd3 = props.orderedItemsProd3;
	const processPayment = props.processPayment;
	//We also need useNavigate to send our user to the Finance section, which cannot be accessed from the navbar
	const navigate = useNavigate();
  
	return (
		<>
			<Header />
			<div className="profile">
				<h2>Your shopping basket:</h2>
				<div>
	
					<div key={products[0].id} class="prods-row">
						<p class={`col1 row${products[0].id}`}>{ products[0].prod }</p>
						<p class={`col2 row${products[0].id}`}>x</p>
						<p class={`col3 row${products[0].id}`}>{ orderedItemsProd1 }</p>
						<p class={`col4 row${products[0].id}`}>=</p>
						<p class={`col5 row${products[0].id}`}>£{ (products[0].price * orderedItemsProd1).toFixed(2) }</p>
					</div>

					<div key={products[1].id} class="prods-row">
						<p class={`col1 row${products[1].id}`}>{ products[1].prod }</p>
						<p class={`col2 row${products[1].id}`}>x</p>
						<p class={`col3 row${products[1].id}`}>{ orderedItemsProd2 }</p>
						<p class={`col4 row${products[1].id}`}>=</p>
						<p class={`col5 row${products[1].id}`}>£{ (products[1].price * orderedItemsProd2).toFixed(2) }</p>
					</div>

					<div key={products[2].id} class="prods-row">
						<p class={`col1 row${products[2].id}`}>{ products[2].prod }</p>
						<p class={`col2 row${products[2].id}`}>x</p>
						<p class={`col3 row${products[2].id}`}>{ orderedItemsProd3 }</p>
						<p class={`col4 row${products[2].id}`}>=</p>
						<p class={`col5 row${products[2].id}`}>£{ (products[2].price * orderedItemsProd3).toFixed(2) }</p>
					</div>
		
				</div>

				<h3>Total EX VAT: £{((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)).toFixed(2)}</h3>
				<h3>Total INC VAT: £{(((products[0].price * orderedItemsProd1) + (products[1].price * orderedItemsProd2) + (products[2].price * orderedItemsProd3)) * 1.2).toFixed(2)}</h3>
			</div>
			<div className='payment'>
				<button className='pay-button' onClick={processPayment}>Pay now</button>
				<button className='pay-button' onClick={() => navigate("/finance")}>Finance options</button>
			</div>
			<div className='extraSpace'></div>
		</>

  )
}

export default Basket;
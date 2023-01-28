//This component displays the products that the company sells, and handles the function to order a set amount
import React, { useState } from 'react'
//We import images
import prod1 from '../images/prod1.png'
import prod2 from '../images/prod2.png'
import prod3 from '../images/prod3.png'

function Products(props) {
    //We need to import some state about the products
    const products = props.products;
    const handleOrderedItemsProd1 = props.handleOrderedItemsProd1;
    const handleOrderedItemsProd2 = props.handleOrderedItemsProd2;
    const handleOrderedItemsProd3 = props.handleOrderedItemsProd3;
    
    //These are the functions to handle the + and - buttons to order items
    const [count1, setCount1] = useState(0);
    function increase1() {
        setCount1(count1 + 1);
      }
      function decrease1() {
        if (count1 > 0) {
          setCount1(count1 - 1);
        }
      }
      //This function will set whichever amount has been entered from that product to basket
      function handleCount1Change() {
        handleOrderedItemsProd1(count1);
        setCount1(0);
      }

      const [count2, setCount2] = useState(0)
      function increase2() {
          setCount2(count2 + 1);
        }
        function decrease2() {
          if (count2 > 0) {
            setCount2(count2 - 1);
          }
        }
        function handleCount2Change() {
          handleOrderedItemsProd2(count2);
          setCount2(0);
        }

        const [count3, setCount3] = useState(0)
        function increase3() {
            setCount3(count3 + 1);
          }
          function decrease3() {
            if (count3 > 0) {
              setCount3(count3 - 1);
            }
          }
          function handleCount3Change() {
            handleOrderedItemsProd3(count3);
            setCount3(0);
          }

  return (
    <div className="products-section">
        <h2>Our Products</h2>
        <div className="products">
          
            {/* And we display the 3 products, each with its own buttons and functions to make an order */}
            <div>
                <h4>{products[0].prod}</h4>
                <div className="prod">
                    <img src={prod1} alt="Decaffision" className="prod-image"/>
                    <p>{products[0].description1}</p>
                    <p>{products[0].description2}</p>
                    <p>{products[0].description3}</p>
                    <h4>£{products[0].price} per bag</h4>
                    <div className="productQuantityButtons">
                        <button className="plus" onClick={decrease1}>-</button>
                        <p class="quantity">{count1}</p>
                        <button className="minus" onClick={increase1}>+</button>
                    </div>
                    <button type="button" className="remove_item" onClick={handleCount1Change}>Add to basket</button>
                </div>
            </div>

            <div>
            <h4>{products[1].prod}</h4>
                <div className="prod">
                    <img src={prod2} alt="Cafluxino" className="prod-image"/>
                    <p>{products[1].description1}</p>
                    <p>{products[1].description2}</p>
                    <p>{products[1].description3}</p>
                    <h4>£{products[1].price} per bag</h4>
                    <div className="productQuantityButtons">
                        <button className="plus" onClick={decrease2}>-</button>
                        <p class="quantity">{count2}</p>
                        <button className="minus" onClick={increase2}>+</button>
                    </div>
                    <button type="button" className="remove_item" onClick={handleCount2Change}>Add to basket</button>
                </div>
            </div>

            <div>
            <h4>{products[2].prod}</h4>
                <div className="prod">
                    <img src={prod3} alt="Decaffision" className="prod-image"/>
                    <p>{products[2].description1}</p>
                    <p>{products[2].description2}</p>
                    <p>{products[2].description3}</p>
                    <h4>£{products[2].price} per bag</h4>
                    <div className="productQuantityButtons">
                        <button className="plus" onClick={decrease3}>-</button>
                        <p class="quantity">{count3}</p>
                        <button className="minus" onClick={increase3}>+</button>
                    </div>
                    <button type="button" className="remove_item" onClick={handleCount3Change}>Add to basket</button>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Products;
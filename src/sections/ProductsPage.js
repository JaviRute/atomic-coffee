//This is basically a page showing two components, the header and the products
import Header from './Header.js';
import Products from './Products.js';

function ProductsPage(props) {
    //We need the props and state for the products
    const products = props.products;
    const handleOrderedItemsProd1 = props.handleOrderedItemsProd1;
    const handleOrderedItemsProd2 = props.handleOrderedItemsProd2;
    const handleOrderedItemsProd3 = props.handleOrderedItemsProd3;
    
    return (
        <>
            <Header />
            <div>
                <Products products={products}
                          handleOrderedItemsProd1={handleOrderedItemsProd1}
                          handleOrderedItemsProd2={handleOrderedItemsProd2}
                          handleOrderedItemsProd3={handleOrderedItemsProd3}/>
            </div>
        </>
    )
  }
  
  export default ProductsPage
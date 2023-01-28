//this is the home component, which displays other sections whithin (the header, story and products)
import Header from './Header.js'
import Story from './Story.js'
import Products from './Products.js'

function Home(props) {
  //Since you can order products from this page, we need some state here
  const products = props.products;
  const handleOrderedItemsProd1= props.handleOrderedItemsProd1;
  const handleOrderedItemsProd2= props.handleOrderedItemsProd2;
  const handleOrderedItemsProd3= props.handleOrderedItemsProd3;
  return (
    <div>
        <Header />
        <Story />
        <Products products={products}
                  handleOrderedItemsProd1={handleOrderedItemsProd1}
                  handleOrderedItemsProd2={handleOrderedItemsProd2}
                  handleOrderedItemsProd3={handleOrderedItemsProd3} />
    </div>
  );
}

export default Home;
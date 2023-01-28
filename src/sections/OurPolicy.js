// this is a page which displays a bunch of dummy lorem ipsum articles
// we will use useEffect here, so we import it
import React from 'react'
import Header from './Header.js';


function OurPolicy() {

    //Message of each lorem ipsum
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    //Message to the user
    const policyMessage = "Ok, you got us.\n\nWe don't have any policies to show.\n\nWe are just a bunch of dudes selling coffee from our bedrooms."

    return (
        <>
            <Header />
            {/* All the content of the page is done with a map, displaying lorem ipsum messages */}
            <div className="policy">
                <h2>Policy</h2>
                {[1,2,3,4,5,6,7,8,9,10].map(p => (
                    <div key={p}>
                        <p>{p}. {content}</p>
                    </div>
                    ))}
            </div>
            <div className='extraSpace'></div>
        </>
    )
  }
  
  export default OurPolicy;
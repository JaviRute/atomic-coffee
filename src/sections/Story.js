//This component will display the brand story, which appears in the 'home' component
//It is just an image (imported underneath) and some text
import banner from '../images/banner.jpg'

function Story() {
  return (
    <div className="story-section">
        <img src={banner} alt="nuclear explosion" className="explosion"/>
        <div className="story">
          <h2>Our story</h2>
          <p>Atomic Coffee's origin dates back to the 1960s.</p>
          <p>Our founding member, Dr Bruce Banner, was exposed to Gamma Radiation caused by an atom bomb.</p>
          <p>Between other symptoms that we will not discuss here, Bruce became immune to the effects of coffee.</p>
          <p>However, Dr. Banner was determined to use his genius to create the strongest coffee in the Universe, a coffee that would unclog sinks and melt spoons.</p>
          <p>Dr. Banner was determined to create <span className="atomic">Atomic Coffee</span>...</p>
          <p>...and now you can taste it's delicious flavour full of nuclear waste overtones.</p>
        </div>
    </div>
  );
}

export default Story;
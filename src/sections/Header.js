//this is the brand logo
import logo from '../images/logo5.png';

//This comprises the news banner, the logo and the slogan, will be displayed both before and after entering the username
function Header() {
    return (
      <div>
        <header>
          <div className="above">
              <h4>Now with 15% more plutonium!</h4>
          </div>
          <div className="logo-slogan">
            <img className="logo-lrg" src={logo} alt="brand logo"/>
            <h1>For those who want their coffee to show on drug tests!</h1>
          </div>
        </header>
      </div>
    )
  }

  export default Header;
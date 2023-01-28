//This component will display the footer, nothing extraordinary here
import logo from '../images/hyperionlogo2.png';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import '../App.css';

//This gets hold of the current year, so we do not need to keep updating the year
let date =  new Date().getFullYear();

function Footer() {
  return (
    <div>
        <footer>
            {/* Here there are some icons with links to my personal profiles (linkedin, github, hyperiondev) */}
            <a href="https://www.linkedin.com/in/javi-rute-1099b2245/"><img className="ico-image" src={linkedin} alt="LinkedIn logo"></img></a>
            <a href="https://github.com/JaviRute"><img className="ico-image" src={github} alt="GitHub logo"></img></a>
            <a href="https://www.hyperiondev.com/portfolio/101528/"><img className="ico-image" src={logo} alt="HyperionDev logo"></img></a>
            {/* Here we enter the current year */}
            <p className="copyright">© Copyright {date} Atomic Coffee</p>
        </footer>
    </div>
  );
}

export default Footer;
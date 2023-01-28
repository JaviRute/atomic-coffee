//this section will display the information that the user has entered
import Header from './Header.js';


function Profile(props) {
  //We need the state that the user initially entered to login
  const displayedName = props.displayedName;
  const displayedPassword = props.displayedPassword;
  const displayedAddress = props.displayedAddress;
  const displayedEmail = props.displayedEmail;
  
  return (
    <>
    <Header />
    <div className="profile">
      <h2>Your info</h2>
      <h3>Name: {displayedName}</h3>
      <h3>Password: {displayedPassword}</h3>
      <h3>Address: {displayedAddress}</h3>
      <h3>Email: {displayedEmail}</h3>

    </div>
    <div className='extraSpace'></div>
    </>
  )
}

export default Profile;
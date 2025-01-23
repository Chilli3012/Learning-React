import { useContext } from 'react';
import UserContext from '../Context/UserContext';


function Profile() {
    const {user}=useContext(UserContext);

    if (user) return <h1>Name of user currently active is: {user.username}</h1>

  return (
    <h1>Please Login</h1>
  )
}

export default Profile;
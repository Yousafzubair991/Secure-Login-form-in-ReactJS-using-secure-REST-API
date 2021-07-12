
import React from 'react';
import { getUser, removeUserSession } from './Utils/Common';

function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
    <div className="container">
    <div className="container">
     <h1>Welcome {user.name}!</h1> <br /><br />
      <input type="button" onClick={handleLogout} className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm" 
                                     value="Logout" />

    </div>
    </div>
    </div>
  );
}
 
export default Dashboard;
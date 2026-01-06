import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    const userData = localStorage.getItem('user');

    if (!token) {
      navigate('/'); 
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate]);

//   const handleLogout = () => {
//     localStorage.removeItem('jwtToken');
//     localStorage.removeItem('user');
//     navigate('/'); 
//   };

  if (!user) return null; 

  return (
    <div className='main-dashboard'>
      <div className='inner-dashboard'>
        <div className='inner-dashboard1'>
          <h1>Login Dashboard</h1>
          <p>Welcome, {user.name}!</p>
          <p style={{paddingLeft:'20px'}}>Thanks for Login!</p>
        </div>
        <div className='inner-dashboard2 container'>
          <div>
          <p>Welcome, {user.name}!</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Password: {user.password}</p>           
           <h3 style={{marginTop:'20px'}}>We are Happy to see You there!</h3>
           <hr style={{marginTop:'20px'}}/>
          </div>
          <div>
            <Link to='/'>
            <button className='btn btn2'>
              Logout
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

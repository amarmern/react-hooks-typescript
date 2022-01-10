import { useState } from 'react'; 

export const LoggedIn = () =>{
    const [isLogedin, setisLogedin] = useState(false)
    const handleLogin = () =>{setisLogedin(true)}
   const handleLogout = () =>{setisLogedin(false)}
    return (
      <div className="App">
      <button onClick={handleLogin} >Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User is {isLogedin ? 'Loged In' : 'Loged out'}</div>
      </div>
    )
}

 ;
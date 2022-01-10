
// state imports..
//import { LoggedIn } from "./components/state/LoggedIn";
//import { User } from "./components/state/User";

// Theme Conntext import..
// import {ThemeContextProvider} from './components/context/ThemeContext';
// import {Box} from './components/context/Box';

 // user Context imports
// import { UserContextProvider } from "./components/context/UserContext";
// import { User } from './components/state/User';

// ref hooks

import { MutableRef } from './components/ref-hooks/MutableRef';

//css import..
import './App.css';
import { DomRef } from './components/ref-hooks/DomRef';

function App() {
 return(<div>
   {/* <LoggedIn />
   <User /> */}
 {/* <ThemeContextProvider>
   <Box />
 </ThemeContextProvider> */}

 {/* <UserContextProvider>
   <User />
 </UserContextProvider> */}
 <DomRef/>
 <MutableRef />
 </div>)
}

export default App;

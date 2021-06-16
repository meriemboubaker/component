import React from "react";
import Address from './component/profile/Address.js';
import FullName from './component/profile/FullName.js';
import ProfilePhoto from './component/profile/ProfilePhoto.js';
import "./App.css"
const App = () => {
 return (
   <> 
    <ProfilePhoto />
     <FullName />
     <Address />
    
   </>
 );
};
export default App;
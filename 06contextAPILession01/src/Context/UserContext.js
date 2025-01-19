import React from "react";

const UserContext = React.createContext(); // here the UserContext can be treated as an global variable. 
// we will wrap components inside the UserContext. all the components can use value from UserContext


export default UserContext;


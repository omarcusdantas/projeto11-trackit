import React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = React.useState(null);
    
    return (
        <UserContext.Provider value={{ userData, setUserData }}>
          {children}
        </UserContext.Provider>
    );
};
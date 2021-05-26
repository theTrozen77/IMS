import React, { createContext, useEffect, useState } from "react";
import { currentUserDetails } from "./../services/auth";
import { auth } from "./../firebase";

export const UserContext = createContext({});

export default function UserContextProvider(props: any) {
  const [userDetails, setUserDetails] = useState(null) as any;
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUserDetails(user);
      } else {
        setUserDetails(null);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={userDetails}>
      {props.children}
    </UserContext.Provider>
  );
}

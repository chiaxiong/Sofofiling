import React, { useState, createContext } from "react";

export const UserInfoContext = createContext();

export function UserInfoProvider({ children }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <UserInfoContext.Provider>{children}</UserInfoContext.Provider>
    </div>
  );
}

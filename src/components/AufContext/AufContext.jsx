import { createContext, useContext, useState } from "react";

export const AufContext = createContext(null);

export const AufContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AufContext.Provider value={{ user, setUser }}>
      {children}
    </AufContext.Provider>
  );
};

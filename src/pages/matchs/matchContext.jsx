import React, { createContext, useState } from "react";

export const MatchContext = createContext();

export const MatchProvider = ({ children }) => {
  const [matchData, setMatchData] = useState(null);
  
  return (
    <MatchContext.Provider value={{ matchData, setMatchData }}>
      {children}
    </MatchContext.Provider>
  );
};
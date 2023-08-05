import React, { useState } from "react";

type ConcertCtTX = {
  count: number;
  items: string[];
};
export const ConcertContext = React.createContext<ConcertCtTX>({
  count: 0,
  items: [],
});

const ConcertContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const contextValue = {
    count: 0,
    items: [],
  };
  return (
    <ConcertContext.Provider value={contextValue}>
      {props.children}
    </ConcertContext.Provider>
  );
};

export default ConcertContextProvider;

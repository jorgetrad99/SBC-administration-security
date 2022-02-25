import { createContext, useState } from 'react';

export const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {
  //Action -> 0: none, 1: apply Vigenere Teechnique, 2: apply rail fence Teechnique
  const [ actionFlag, setActionFlag ] = useState(0);
  const [ request, setRequest ] = useState("");
  const [ key, setKey ] = useState("");
  const [ result, setResult ] = useState("");

  return (
    <ActionsContext.Provider
      value={{
        actionFlag, setActionFlag,
        request, setRequest,
        result, setResult,
        key, setKey
      }}>
      {children}
    </ActionsContext.Provider>
  );
};

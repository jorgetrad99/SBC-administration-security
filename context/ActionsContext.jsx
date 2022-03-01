import { createContext, useState } from 'react';

export const ActionsContext = createContext();

export const ActionsProvider = ({ children }) => {
  //Action -> 0: none, 1: apply Vigenere Teechnique, 2: apply rail fence Teechnique
  const [ actionFlag, setActionFlag ] = useState(0);
  const [ message, setMessage ] = useState("");
  const [ keyword, setKeyword ] = useState("");
  const [ generatedKey, setGeneratedKey ] = useState("");
  const [ encryptedMessage, setEncryptedMessage ] = useState("");
  const [ decryptedMessage, setDecryptedMessage ] = useState("");
  const [ depth, setDepth ] = useState(1);

  return (
    <ActionsContext.Provider
      value={{
        actionFlag, setActionFlag,
        message, setMessage,
        generatedKey, setGeneratedKey,
        keyword, setKeyword,
        depth, setDepth,
        encryptedMessage, setEncryptedMessage,
        decryptedMessage, setDecryptedMessage,
      }}>
      {children}
    </ActionsContext.Provider>
  );
};

import { Typography } from '@mui/material';
import { Fragment, useContext, useEffect } from 'react';
import { ActionsContext } from '../../context/ActionsContext';

const EncryptingResult = () => {
    const { 
        actionFlag, setActionFlag,
        generatedKey, setGeneratedKey,
        keyword, setKeyword,
        message, setMessage,
        depth, setDepth,
        encryptedMessage, setEncryptedMessage,
        decryptedMessage, setDecryptedMessage,
    } = useContext(ActionsContext);

    return (
        <Fragment>
            { actionFlag == 1 && encryptedMessage && decryptedMessage && (
                <Fragment>
                    <Typography variant='h5' align='center'>Rail Fence Cypher Technique</Typography>
                    <Typography variant='h6' align='center'>Depth: { depth }</Typography>
                </Fragment>
            )}
            { actionFlag == 2 && encryptedMessage && decryptedMessage &&  (
                <Fragment>
                    <Typography variant='h5' align='center'>Vigenere Cypher Technique</Typography>
                    <Typography variant='h6' align='center'>Keyword: { keyword }</Typography>
                    <Typography variant='h6' align='center'>Generated Key: { generatedKey }</Typography>
                </Fragment>
            )}
            { actionFlag > 0 && encryptedMessage && decryptedMessage && (
                <div style={{ marginTop: '2rem' }}>
                    <Typography variant='h5' align='center'>This is the result</Typography>
                    <Typography variant='h6' align='center'>Message: { message }</Typography>
                    <Typography variant='h6' align='center'>Encrypted Message: { encryptedMessage }</Typography>
                    <Typography variant='h6' align='center'>Decrypted Message: { decryptedMessage }</Typography>
                </div>
                
            )}
        </Fragment>
    );
}

export default EncryptingResult;
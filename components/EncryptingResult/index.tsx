import { Typography } from '@mui/material';
import { Fragment, useContext } from 'react';
import { ActionsContext } from '../../context/ActionsContext';

const EncryptingResult = () => {
    const { 
        actionFlag, setActionFlag,
        result, setResult,
        key, setKey,
        request, setRequest
    } = useContext(ActionsContext);

    return (
        <Fragment>
            { actionFlag == 1 && (
                <Typography variant='h5' align='center'>Rail Fence Cypher Technique</Typography>
            )}
            { actionFlag == 2 && (
                <Fragment>
                    <Typography variant='h5' align='center'>Vigenere Cypher Technique</Typography>
                    <Typography variant='h6' align='center'>Key: {key}</Typography>
                </Fragment>
            )}
            { actionFlag > 0 && (
                <div style={{ marginTop: '2rem' }}>
                    <Typography variant='h5' align='center'>This is the result</Typography>
                    <Typography variant='h6' align='center'>Message: {request}</Typography>
                    <Typography variant='h6' align='center'>Encrypted Message: {result}</Typography>
                    <Typography variant='h6' align='center'>Decrypted Message: {request}</Typography>
                </div>
                
            )}
        </Fragment>
    );
}

export default EncryptingResult;
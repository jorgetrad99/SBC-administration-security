import { Typography } from '@mui/material';
import { Fragment, useContext, useEffect } from 'react';
import { ActionsContext } from '../../context/ActionsContext';

const EncryptingResult = () => {
    const { 
        actionFlag, setActionFlag,
        result, setResult,
        key, setKey,
        request, setRequest,
        depth, setDepth
    } = useContext(ActionsContext);

    useEffect(() => {
        /* if(actionFlag > 0) {
            if(actionFlag == 1) {

                setResult()
            }
            if(actionFlag == 2) {

            }
        } */
    }, [ actionFlag ]);

    return (
        <Fragment>

            { actionFlag == 1 && result && (
                <Fragment>
                    <Typography variant='h5' align='center'>Rail Fence Cypher Technique</Typography>
                    <Typography variant='h6' align='center'>Depth: { depth }</Typography>
                </Fragment>
            )}
            { actionFlag == 2 && result &&  (
                <Fragment>
                    <Typography variant='h5' align='center'>Vigenere Cypher Technique</Typography>
                    <Typography variant='h6' align='center'>Key: { key }</Typography>
                </Fragment>
            )}
            { actionFlag > 0 && result && (
                <div style={{ marginTop: '2rem' }}>
                    <Typography variant='h5' align='center'>This is the result</Typography>
                    <Typography variant='h6' align='center'>Message: { request }</Typography>
                    <Typography variant='h6' align='center'>Encrypted Message: { result }</Typography>
                    <Typography variant='h6' align='center'>Decrypted Message: { request }</Typography>
                </div>
                
            )}
        </Fragment>
    );
}

export default EncryptingResult;
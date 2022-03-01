import { useContext, Fragment, useState, useEffect } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Button,  } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { ActionsContext } from '../../context/ActionsContext';
import { callApi } from '../../utils/helpers/callApi';



const api_vigenere = `https://cypher-techniques-api.herokuapp.com/vigenere`;
const api_rial_fence = `https://cypher-techniques-api.herokuapp.com/railfence`;

const EncryptingForm = () => {
    const { 
        actionFlag, setActionFlag, 
        message, setMessage,
        generatedKey, setGeneratedKey,
        keyword, setKeyword,
        depth, setDepth,
        encryptedMessage, setEncryptedMessage,
        decryptedMessage, setDecryptedMessage,
    } = useContext(ActionsContext);

    const [ callingApiFlag, setCallingApiFlag ] = useState(false);

    const handleChange = (event: SelectChangeEvent) => {
        setActionFlag(Number(event.target.value));
    };

    const clearFields = () => {
        setActionFlag(0);
        setKeyword('');
        setGeneratedKey('');
        setMessage('');
        setDepth(1);
        setEncryptedMessage('');
        setDecryptedMessage('');
    }

    useEffect(() => {
        /* if(actionFlag != 2) {
            setkey('');
        } */
        if(callingApiFlag){
            console.log('Entré');
            console.log(message);
            console.log(keyword);
            console.log(depth);
            if(actionFlag == 1){
                callApi(`${api_rial_fence}/${message}&${depth}`)
                    .then((data) => {
                        console.log(data);
                        setEncryptedMessage(data.encryptedMessage);
                        setDecryptedMessage(data.decryptedMessage);
                        setCallingApiFlag(false)
                    })
                    .catch((err) => {
                        alert("There was an error calling the API: " + err)
                        setCallingApiFlag(false)
                    }) 
            }
            if(actionFlag == 2){
                callApi(`${api_vigenere}/${message}&${keyword}`)
                    .then((data) => {
                        console.log(data);
                        setEncryptedMessage(data.encryptedMessage);
                        setDecryptedMessage(data.decryptedMessage);
                        setGeneratedKey(data.generatedKey);
                        setCallingApiFlag(false)
                    })
                    .catch((err) => {
                        alert("There was an error calling the API: " + err)
                        setCallingApiFlag(false)
                    }) 
            }
        } 
    }, [ callingApiFlag ]);

    useEffect(() => {
        if(!callingApiFlag) {
            setEncryptedMessage('');
            setDecryptedMessage('');
            setGeneratedKey('');
        }
    }, [ actionFlag, message, keyword, depth ])

    return (
        <Fragment>
            <Box sx={{ 
                maxWidth: '30rem',
                margin: '0 auto',
                marginBottom: '1rem'
            }}>
                <div style={{ 
                    //display: 'inline-block', margin: '0 auto' 
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <TextField id="outlined-basic" 
                        value={message} 
                        onChange={(event) => {
                            setMessage(event.target.value);
                        }} 
                        label="Type a message to cypher" 
                        variant="outlined" 
                        sx={{ margin: '.5rem 0', width: 'inherit', maxWidth: '30rem' }} 
                    />
                    { actionFlag == 2 && (
                        <TextField id="outlined-basic" value={keyword} 
                        onChange={(event) => {
                            setKeyword(event.target.value);
                        }} 
                        label="Type a key" variant="outlined" sx={{ margin: '.5rem 0', width: 'inherit', maxWidth: '30rem' }} />
                    )
                    }
                    { actionFlag == 1 && (
                        <Fragment>
                            <TextField
                                id="outlined-number"
                                label="Depth"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{ inputMode: 'numeric', pattern: '[1-9]*' }}
                                
                                onChange={(event) => {
                                    const value = Number(event.target.value)
                                    console.log(value);
                                    value > 0 && setDepth(value);
                                }}
                                sx={{ 
                                    width: 'inherit',
                                    maxWidth: '15rem',
                                    marginLeft: 'auto',
                                    marginTop: '.5rem',
                                    marginBottom: '.5rem'
                                }}
                            />
                        </Fragment>
                    )}
                    <FormControl
                        sx={{ 
                            width: 'inherit',
                            maxWidth: '15rem',
                            marginLeft: 'auto',
                            marginTop: '.5rem',
                            marginBottom: '.5rem'
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">Cipher Technique</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={actionFlag + ''}
                            label="Cipher Technique"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Select</MenuItem>
                            <MenuItem value={1}>Rail fence Cipher</MenuItem>
                            <MenuItem value={2}>Vigenère Cipher</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <LoadingButton variant="contained"
                        loading={callingApiFlag}
                        onClick={ () => {
                            setActionFlag(actionFlag);
                            if(actionFlag == 0) {
                                alert('Select a cypher technique');
                            } else {
                                setCallingApiFlag(true);
                            }
                            console.log('Action: ' + actionFlag);
                            console.log('Message: ' + message);
                            console.log('Keyword: ' + keyword);
                            console.log('Depth: ' + depth);
                        }}
                        sx={{ width: '8rem', margin: '.5rem', }}>
                            Encrypt
                    </LoadingButton>
                    <Button variant="outlined" 
                        onClick={clearFields}
                        sx={{ width: '8rem', margin: '.5rem', }}>
                            Clear
                    </Button>

                </div>
            </Box>
        </Fragment>
    );
}

export default EncryptingForm;
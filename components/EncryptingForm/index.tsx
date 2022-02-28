import { useContext, Fragment, useState, useEffect } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Button,  } from '@mui/material';

import { ActionsContext } from '../../context/ActionsContext';
import { display, width } from '@mui/system';

const EncryptingForm = () => {
    const { 
        actionFlag, setActionFlag, 
        request, setRequest,
        result, setResult,
        key, setKey,
        depth, setDepth
    } = useContext(ActionsContext);

    const [ selection, setSelection ] = useState(0);
    const [ message, setMessage ] = useState('');
    const [ keyForm, setKeyForm ] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setSelection(Number(event.target.value));
    };

    useEffect(() => {
        if(selection != 2) {
            setKeyForm('');
        }
    }, [ selection ]);

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
                    { selection == 2 && (
                        <TextField id="outlined-basic" value={keyForm} 
                        onChange={(event) => {
                            setKeyForm(event.target.value);
                        }} 
                        label="Type a key" variant="outlined" sx={{ margin: '.5rem 0', width: 'inherit', maxWidth: '30rem' }} />
                    )
                    }
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
                            value={selection + ''}
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
                    <Button variant="contained" 
                        onClick={ () => {
                            setActionFlag(selection);
                            setRequest(message);
                            setKey(keyForm);
                            console.log(actionFlag);
                            console.log(request);
                            console.log(key);
                        }}
                        sx={{ width: '8rem', margin: '.5rem', }}>
                            Encrypt
                    </Button>
                    <Button variant="outlined" 
                        onClick={ () => {
                            setKeyForm('');
                            setMessage('');
                            setSelection(0);
                            setResult
                        }}
                        sx={{ width: '8rem', margin: '.5rem', }}>
                            Clear
                    </Button>

                </div>
            </Box>
        </Fragment>
    );
}

export default EncryptingForm;
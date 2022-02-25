import { useContext, Fragment, useState, useEffect } from 'react';

import { Box, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField, Button,  } from '@mui/material';

import { ActionsContext } from '../../context/ActionsContext';

const EncryptingForm = () => {
    const { 
        actionFlag, 
        setActionFlag, 
        request, 
        setRequest,
        key, 
        setKey
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
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                <TextField id="outlined-basic" value={message} 
                onChange={(event) => {
                    setMessage(event.target.value);
                }} 
                label="Type a message to cypher" variant="outlined" sx={{ margin: '.5rem 0', maxWidth: '30rem' }} />
                { selection == 2 && (
                    <TextField id="outlined-basic" value={keyForm} 
                    onChange={(event) => {
                        setKeyForm(event.target.value);
                    }} 
                    label="Type a key" variant="outlined" sx={{ margin: '.5rem 0', maxWidth: '30rem' }} />
                )
                }
                <FormControl fullWidth sx={{ justifyItems: "center", margin: '.5rem 0' }}>
                    <InputLabel id="demo-simple-select-label">Cipher Technique</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selection}
                        label="Cipher Technique"
                        onChange={handleChange}
                        sx={{ maxWidth: '16rem' }}
                    >
                        <MenuItem value={0}>Select</MenuItem>
                        <MenuItem value={1}>Rail fence Cipher</MenuItem>
                        <MenuItem value={2}>Vigenère Cipher</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" 
                    onClick={ () => {
                        setActionFlag(selection);
                        setRequest(message);
                        setKey(keyForm);
                        console.log(actionFlag);
                        console.log(request);
                        console.log(key);
                    }}
                    sx={{ width: '10rem', margin: '.5rem 0', }}>Encrypt</Button>
            </Box>
        </Fragment>
    );
}

export default EncryptingForm;
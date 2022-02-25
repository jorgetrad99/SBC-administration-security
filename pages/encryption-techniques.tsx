import { Typography } from "@mui/material";
import EncryptingForm from "../components/EncryptingForm/index";
import EncryptingResult from "../components/EncryptingResult/index";

import { ActionsProvider } from "../context/ActionsContext";

const EncryptionTechniques = () => {
    return (
        <ActionsProvider>
            <Typography variant="h4" align="center" m={3}>Cipher Techniques</Typography>
            <EncryptingForm />
            <EncryptingResult />
        </ActionsProvider>
    )
}

export default EncryptionTechniques;
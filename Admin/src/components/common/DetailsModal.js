import * as React from 'react';
import { Button, Box, Typography, Modal, Stack } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ children, data, name }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    console.log(data)
    return (
        <div>
            <Button variant="outlined" onClick={handleOpen}>{children}</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Stack direction={"row"} alignItems={"center"}>
                        <Box sx={{ width: '40%' }}>
                            <Typography id="modal-modal-title" variant="h3" component="h2">
                                {name} Name
                            </Typography>
                        </Box>
                        <Box sx={{ width: '40%' }}>
                            <Typography id="modal-modal-title" variant="h5">
                                {data.name}
                            </Typography>
                        </Box>
                    </Stack>
                    {data.values.map(val => (
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {val.title}
                        </Typography>
                    ))}

                </Box>
            </Modal>
        </div>
    );
}
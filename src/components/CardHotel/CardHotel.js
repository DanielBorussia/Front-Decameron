import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RoomsForm from '../RoomsForm/RoomsForm';
import Modal from '../../shared/Modal/Modal';

const CardHotel = ({ hotel}) => {
    const [openCreateAssignmentModal, setOpenAssignmentModal] = useState(false);
   
    return (
        <>
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                {hotel?.name}
                </Typography>
                <Typography color="text.secondary" >
               Ciudad : {hotel?.city}
                </Typography>
                <Typography  color="text.secondary">
                Dirección : {hotel?.address}
                </Typography>
                <Typography color="text.secondary">
                Numero de Hab : {hotel?.numberRooms}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={ () => setOpenAssignmentModal(true) }>Asignar Habitaciones</Button>
            </CardActions>
        </Card>

            {/* Modal Form assignment rooms */}
            <Modal
                maxWidth='xs'
                fullWidth={true}
                body={
                    <RoomsForm hotel={hotel} handleClose={() => setOpenAssignmentModal(false)} />
                }
                isOpen={openCreateAssignmentModal}
                handleClose={() => setOpenAssignmentModal(false)}
                title={`Asignación de Habitación`}
            />
        </>
    );
}

export default CardHotel;
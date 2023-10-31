import React, { useState } from 'react';
import { ContainerField, ContainerForm, ContainerFormActions } from '../../styles/FormStyle';
import { TextField, Select, Button, Typography, MenuItem, InputLabel, FormControl, IconButton  } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { addAssignmentRoom, deleteAssignmentRoom } from '../../shared/Services/Rooms';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import { getTypeAccomodation, getTypeRoom, typeAccomodation, typeRooms } from '../../utils/rooms';
import { sweet, sweetConfirmation } from '../../utils/alerts';

const RoomsForm = ({ handleClose, hotel  }) => {
    const [assignmentRoom, setAssignmentRoom] = useState({
        numberRooms : 1,
        typeRoom : 0,
        typeAccomodation : 0,
        idHotel: hotel.id
    })
  

    const handleSelectedRoom = (value) => {
        setAssignmentRoom({
            ...assignmentRoom, typeRoom: value
        })
    }

    /**
     * Valida que tipo de acomodación es permitido por el tipo de habitación
     * @param {*} typeAccomodation 
     * @returns 
     */
    const isValidated = (typeAccomodation) => {
      
        if(assignmentRoom.typeRoom == 1){
            if(typeAccomodation == 1 || typeAccomodation == 2){
                return true;
            }
        }
        if(assignmentRoom.typeRoom == 2){
            if(typeAccomodation == 3 || typeAccomodation == 4){
                return true;
            }
        }
        if(assignmentRoom.typeRoom == 3){
            if(typeAccomodation == 1 || typeAccomodation == 2 || typeAccomodation == 3){
                return true;
            }
        }
        return false;
    }

   
   
    const handleSubmit = () => {
        addAssignmentRoom(assignmentRoom)
        .then((response) => {
            if(response && response.status == 200){
                hotel.rooms.push(response.data);
                sweet('success', response?.message);
                clearValues();
                handleClose();
            }
            if(response && response.status == 400){
                console.log("error");
                sweet('error', response?.message);
            }
        });
    }

    const isDisabled = () => {
        const totalRooms = hotel.rooms.reduce((a, b) => a + b.numberRooms, 0);
        if( totalRooms == hotel.numberRooms) return true;
        return false;
    }

    const clearValues = () => {
        setAssignmentRoom({
            numberRooms : 1,
            typeRoom : 0,
            typeAccomodation : 0,
            idHotel: hotel.id
        })
    }

    const handleDeleteRoom = (roomSelected) => {
        sweetConfirmation(
            'Esta seguro de eliminar la habitación '+ roomSelected.id,
            '', (result)=>{
                if(result.value){
                    hotel.rooms = hotel?.rooms?.filter(
                          (room) => room.id !== roomSelected?.id
                    );
                    console.log("sss ", hotel.rooms);  
                    deleteAssignmentRoom(roomSelected.id)
                    .then((response) => {
                        if(response && response.status == 200){
                            sweet('success', response?.message);
                            handleClose();
                        }
                    })
                }
            })
    }

    const ListRooms = () => {
        return (
            <Fragment>
            <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Uni</TableCell>
                  <TableCell align="center">Habitación</TableCell>
                  <TableCell align="center">Acomodación</TableCell>
                  <TableCell align="center">Acc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hotel.rooms.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">{row.numberRooms}</TableCell>
                    <TableCell align="center">{getTypeRoom(row.typeRoom)}</TableCell>
                    <TableCell align="center">{getTypeAccomodation(row.typeAccomodation)}</TableCell>
                    <TableCell align="center">
                    <IconButton aria-label="delete" onClick={() => handleDeleteRoom(row)}>
                    <DeleteIcon />
                    </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </Fragment>
        );
    }

    return (
        <>
            <Typography>Hotel:  {hotel.name}</Typography>
            <Typography paragraph>Número Max Habitaciones : {hotel.numberRooms}</Typography>
            <Fragment>
                {hotel?.rooms && hotel.rooms.length > 0 &&(
                    <ListRooms />
                )}
            </Fragment>
            <ContainerForm>
                <ContainerField>              
                    <TextField label="Numero Habitaciones" fullWidth variant="outlined" value={assignmentRoom.numberRooms} 
                        onChange={(e)=> setAssignmentRoom({...assignmentRoom, numberRooms: e.target.value})}
                    />
                </ContainerField>
                <ContainerField>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Tipo de Habitación</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Acomodación"
                            value={assignmentRoom.typeRoom}
                        >
                        <MenuItem value="0">
                        <em>Seleccione</em>
                        </MenuItem>
                        {typeRooms.map(type => (
                            <MenuItem 
                                key={type.id}
                                value={type.id}
                                onClick={()=>handleSelectedRoom(type.id)}
                            >
                            {type.name}
                            </MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                </ContainerField>
                <ContainerField>
                    <FormControl variant="outlined" fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Acomodación</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Tipo de Acomodación"
                            value={assignmentRoom.typeAccomodation}
                        >
                            <MenuItem value="0">
                                <em>Seleccione</em>
                            </MenuItem>
                            {typeAccomodation.map(item => (
                                isValidated(item.id) &&
                                        <MenuItem 
                                            key={item.id}
                                            value={item.id}  
                                            onClick={(e)=>setAssignmentRoom({...assignmentRoom, typeAccomodation: item.id})}
                                        >
                                        {item.name}
                                    </MenuItem>       
                            ))}
                        </Select>
                    </FormControl>
                </ContainerField>

                <ContainerFormActions>
                    <Button variant="contained" color="success" disabled={isDisabled()} onClick={handleSubmit} startIcon={<SaveIcon />}>
                        Guardar Asignación
                    </Button>
                </ContainerFormActions>
               
            </ContainerForm>
            
        
        </>
    );
}

export default RoomsForm;
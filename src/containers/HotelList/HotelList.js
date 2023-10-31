import HeaderPague from "../../components/Header/HeaderPage";
import { Grid, Box, Button  } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import CardHotel from "../../components/CardHotel/CardHotel";
import {Link } from 'react-router-dom';
import Modal from "../../shared/Modal/Modal";
import HotelForm from "../../components/HotelForm/HotelForm";
import useGetHotels from "../../hooks/useGetHotels";
import { useEffect } from "react";
import { getAllHOtels } from "../../shared/Services/Hotel";


const HotelList = () => {
    const {hotels, setHotels} = useGetHotels();
    const [openCreateModal, setOpenCreateModal] = useState(false);

    return (
        <>
            {/* header home */}
            <HeaderPague 
                title={'Listado de Hoteles'} 
                actions={
                    <Button variant="outlined" onClick={()=> setOpenCreateModal(true)} color="primary" startIcon={<AddIcon />}>
                        Nuevo Hotel
                    </Button>
                }
            />
    
            {/* list hotel */}
            <Box>
                <Grid container spacing={3}>
                    { hotels && hotels.map( hotel => (
                        <Grid key={hotel.id} item xs={4} md={4}> 
                            <CardHotel key={hotel.id} hotel={hotel}/> 
                        </Grid> 
                    ))}
                </Grid>

           
            </Box>

            {/* Modal Form create hotel */}
            <Modal
                
                body={
                    <HotelForm 
                        setHotels={setHotels}
                        hotels={hotels} 
                        handleClose={() => setOpenCreateModal(false)} 
                    />
                }
                isOpen={openCreateModal}
                handleClose={() => setOpenCreateModal(false)}
                title={'Nuevo Hotel'}
            />
        </>
    );
}

export default HotelList;
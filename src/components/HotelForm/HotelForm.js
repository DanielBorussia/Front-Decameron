import React from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { ContainerField, ContainerForm, ContainerFormActions } from '../../styles/FormStyle';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import { addHOtel } from '../../shared/Services/Hotel';
import { sweet } from '../../utils/alerts';

const HotelForm = ({ handleClose, hotels, setHotels }) => {
    const { 
        register, 
        formState: { errors },
        handleSubmit 
    } = useForm();

  
    const onSubmitHotel = (data) => {
        addHOtel(data)
        .then((response) => {
            if(response && response.status == 200){
                hotels.push(response.data);
                setHotels(hotels);
                sweet('success', response?.message);
                handleClose();
            }
        });
    }
    return (
        <>
            <ContainerForm>
                <form onSubmit={handleSubmit(onSubmitHotel)}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ContainerField>              
                                <TextField error={errors?.name} id="outlined-basic" label="Nombre" variant="outlined" 
                                    {...register('name', { required : true })}
                                />
                            </ContainerField>
                        </Grid>
                        <Grid item xs={6}>
                            <ContainerField>
                                <TextField id="outlined-basic" label="Dirección" variant="outlined" 
                                    {...register('address', { required : true})}
                                />
                            </ContainerField>
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <ContainerField>
                                <TextField id="outlined-basic" label="Ciudad" variant="outlined" 
                                {...register('city', { required : true })}
                                />
                            </ContainerField>
                        </Grid>
                        <Grid item xs={6}>
                        <ContainerField>
                            <TextField id="outlined-basic" label="Nit" variant="outlined" 
                                {...register('nit', { required : true, pattern:/^[0-9+-]+$/  })}
                            />
                            </ContainerField>
                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                    <ContainerField>
                        <TextField error={errors?.roomNumber} id="outlined-basic" label="Num. Habitaciones" variant="outlined" 
                            {...register('numberRooms' , { required : true, pattern:/^[0-9+-]+$/ })}
                        />
                    </ContainerField>
                    </Grid>
                    <ContainerFormActions>
                        <Button variant="contained" type="submit" color="success" startIcon={<SaveIcon />}>
                            Guardar Hotel
                        </Button>
                    </ContainerFormActions>
                </form>
            </ContainerForm>
           
        </>
    );
}

export default HotelForm;
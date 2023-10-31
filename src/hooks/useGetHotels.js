import { useEffect, useState } from 'react';
import axios from 'axios';
import { getAllHOtels } from '../shared/Services/Hotel';

const useGetHotels = () => {
    const [hotels, setHotels] = useState([]);
    
	useEffect(() => {
       console.log("2");
        getAllHOtels()
        .then((response) => {
            console.log("ss",response);
            if (response && response.data && response.status === 200){
                if (Array.isArray(response?.data)) {
                    setHotels(response.data);
                }
            }
        });
        
	}, []);

    return { hotels, setHotels };
};

export default useGetHotels;
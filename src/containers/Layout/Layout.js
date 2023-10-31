import React from 'react';
import Box from '@mui/material/Box';
import Header from '../../components/Header/Header';
import { Container } from '../../styles/ContainerStyle';

const Layout = ({ children }) => {
  
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Container>
                { children }
            </Container>
        </Box>
    );
}

export default Layout;
import React from 'react';
import { Header } from '../../styles/HeaderStyle';
import { Grid, Typography, Box, Modal, Button, Link  } from '@mui/material';

const HeaderPague = ({ title, actions }) => {
    return (
        <Header>
            <Typography variant="h4" mt={2}>{title}</Typography>
            {actions}
        </Header>
    );
}

export default HeaderPague;
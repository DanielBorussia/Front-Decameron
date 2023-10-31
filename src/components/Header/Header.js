import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../../components/Logo/Logo';
import { Link } from '@mui/material';

const pages = ['Hoteles'];

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Link href={`/`}>
                    <Logo />
                </Link>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {page}
                    </Button>
                    ))}
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
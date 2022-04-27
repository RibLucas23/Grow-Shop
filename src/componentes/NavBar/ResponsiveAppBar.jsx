import React, { useContext } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CarritoNav from '../NavBar/CarritoNav';
import { Link } from 'react-router-dom';
import { Context } from '../Context/ContextProvider';

const pages = ['Invernaderos y Carpas', 'Luces de cultivo', 'Fertilizantes', 'Sustratos', 'Más Categorias'];

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    let { totalDeProductos } = useContext(Context);
    //   console.log(totalDeProductos)
    return (
        <AppBar className='navBar' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* titulo ventana pc escritorio */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link to="/" className='logo'> GROW SHOP</Link>
                    </Typography>
                    {/* Box menu ventana escritorio */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link key={"movile " + page} to={"/category/" + page} >

                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" >{page}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    {/* Titulo menu vista celular */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/" className='logo'> GROW SHOP</Link>
                    </Typography>
                    <Box className='menuNavBar' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Link key={page} to={"/category/" + page} className='logo'>
                                <Button

                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >{page}
                                </Button>
                            </Link>
                        ))}
                    </Box>

                    {/* Carrito de compras  */}
                    <Link to="/cart" className='logo'>
                        <CarritoNav total={totalDeProductos} />
                    </Link>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
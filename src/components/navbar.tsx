import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type Props = {
    children?: React.ReactNode;
    drawer: boolean;
    onChange: () => void
};

const NavBar = (props: Props) => {
    const [drawerOpen, setDrawerOpen] = useState(props.drawer);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
        props.onChange()
    };

    return (
        <AppBar sx={{zIndex: 9999}}>
            <Toolbar variant="dense" sx={{
                filter: 'drop-shadow(0 0 1px white)',
            }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                    onClick={() => {
                        toggleDrawer();
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Mega Store
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;

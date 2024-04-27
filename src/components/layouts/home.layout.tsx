import React, {useState} from "react";
import {Box, Container, Drawer, List, ListItem, ListItemText, styled} from "@mui/material";
import {useNavigate} from "react-router-dom";
import NavBar from "../navbar";
import IconButton from "@mui/material/IconButton";
import {
    ABOUT,
    CATEGORY,
    CATEGORY_BY_NAME,
    FAVORITES_MEAL,
    HOME,
    RANDOM_MEAL
} from "../../utils/endpoints/route.endpoint";

type LayoutProps = {
    children: React.ReactNode;
};

interface IRouteList {
    url: string,
    text: string,
}

const isMobile: boolean = (typeof window !== 'undefined') ? window.innerWidth < 600 : false

const drawerWidth = 280;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<{
    open?: boolean;
}>(({theme, open}) => ({
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: `${drawerWidth}px !important`,
    }),
}));
const MyListItem = ({r}: { r: IRouteList }) => {
    const navigate = useNavigate()
    return (
        <ListItem
            button
            selected={window.location.pathname === r.url}
            onClick={() => navigate(r.url)}>
            <ListItemText primary={r.text}/>
        </ListItem>

    )
}
const DashboardLayout = ({children}: LayoutProps): JSX.Element => {
    const [drawerOpen, setDrawerOpen] = useState(true)

    const routeList: IRouteList[] = [
        {
            url: HOME,
            text: 'Home',
        },
        {
            url: CATEGORY,
            text: 'Menu',
        },
        {
            url: RANDOM_MEAL,
            text: 'Meal Generator',
        },
        {
            url: FAVORITES_MEAL,
            text: 'My Favourites',
        },
        {
            url: ABOUT,
            text: 'About',
        },
    ]

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Box sx={{
            background: '#f0f2f5',
            minHeight: '100vh',
        }}>
            <NavBar drawer={drawerOpen} onChange={toggleDrawer}/>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant={!isMobile ? 'persistent' : 'temporary'}
                anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <ListItem>
                    <IconButton sx={{mt: 2}}>
                        {/*<ChevronLeft/>*/}
                    </IconButton>
                </ListItem>

                <List>
                    {
                        routeList.map((r: IRouteList, i) => {
                                return <MyListItem r={r} key={i}/>
                            }
                        )
                    }
                </List>
            </Drawer>
            <Main open={drawerOpen}>
                <Container sx={{m: 0, p: 0, pt: 6, mb: '-64px'}} maxWidth={false}>
                    {children}
                </Container>
            </Main>
        </Box>
    );
};

export default DashboardLayout;

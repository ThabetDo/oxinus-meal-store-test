import React from 'react';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CATEGORY, FAVORITES_MEAL, RANDOM_MEAL } from "../utils/endpoints/route.endpoint";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const Home: React.FC = () => {
    const navigator = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Home Page</h1>
            <p>Explore and enjoy our features:</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                    <Button variant="contained" size='large' startIcon={<RestaurantMenuIcon />} onClick={() => navigator(CATEGORY)}>Menu</Button>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <Button variant="contained" size='large' startIcon={<FavoriteIcon />} onClick={() => navigator(FAVORITES_MEAL)}>Favorites</Button>
                </li>
                <li style={{ marginBottom: '10px' }}>
                    <Button variant="contained" size='large' startIcon={<EmojiObjectsIcon />} onClick={() => navigator(RANDOM_MEAL)}>Meal Generator</Button>
                </li>
            </ul>
        </div>
    );
};

export default Home;

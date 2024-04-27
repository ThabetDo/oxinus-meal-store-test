import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {CATEGORY, FAVORITES_MEAL, RANDOM_MEAL} from "../utils/endpoints/route.endpoint";

const Home: React.FC = function () {
    const navigator = useNavigate()
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to the home page!</p>
            <ul>
                <li>
                    <Button size='large' onClick={() => navigator(CATEGORY)}>Menu</Button>
                </li>
                <li>
                    <Button size='large' onClick={() => navigator(FAVORITES_MEAL)}>Favorites</Button>
                </li>
                <li>
                    <Button size='large' onClick={() => navigator(RANDOM_MEAL)}>Meal Generator</Button>
                </li>
            </ul>
        </div>
    );
};

export default Home;

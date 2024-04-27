import React from 'react';
import {Box, Grid} from "@mui/material";
import MealItem from "../../components/meal-item";
import {useFavorites} from "../../context/favorites-context";

const Favorites: React.FC = function () {

    const {state: {favorites}} = useFavorites()


    return (
        <Box>
            <h1>Favorites</h1>
            <Box>
                <Grid container spacing={2} justifyContent="center">
                    {
                        !!favorites && !!favorites.length && favorites.map(m =>
                            <Grid item xs={12} sm={6} md={4} lg={3} key={m.idMeal}>
                                <MealItem meal={m}/>
                            </Grid>
                        )
                    }
                </Grid>

                {
                    !favorites.length && <>There is no item availible, click on the menu</>
                }
            </Box>
        </Box>
    );
};

export default Favorites;

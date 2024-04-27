import {IMeal} from "../utils/interfaces/meal.interface";


import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {useFavorites} from "../context/favorites-context";

export default function MealItem(props: { meal: IMeal }) {
    const {idMeal, strInstructions, strMeal, strMealThumb, strTags,} = props.meal
    const {state, addFavorite, removeFavorite} = useFavorites();

    const favoriteLis: IMeal[] = state.favorites ?? []
    const toggleFavorit = () => {
        mealExistInFavList()
            ? removeFavorite(props.meal)
            : addFavorite(props.meal)
        // Toggle favorite from store
    }
    const mealExistInFavList = () => {
        return favoriteLis.findIndex(f => f.idMeal === idMeal) !== -1
    }

    return (
        <Card sx={{
            maxWidth: 345,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <CardHeader
                title={strMeal}
                subheader={strTags}
            />
            <CardMedia
                component="img"
                height="194"
                image={strMealThumb}
                alt={strMeal}
            />
            {
                strInstructions &&
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{strInstructions}</Typography>
                </CardContent>
            }
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" color={mealExistInFavList() ? 'error' : 'default'}
                            onClick={toggleFavorit}>
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>

    );
}

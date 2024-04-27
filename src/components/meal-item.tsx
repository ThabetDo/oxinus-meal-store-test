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
import {IMeal} from "../utils/interfaces/meal.interface";

export default function MealItem(props: { meal: IMeal }) {
    const {idMeal, strInstructions, strMeal, strMealThumb, strTags} = props.meal;
    const {state, addFavorite, removeFavorite} = useFavorites();

    const favoriteList: IMeal[] = state.favorites ?? [];
    const toggleFavorite = () => {
        mealExistsInFavList() ? removeFavorite(props.meal) : addFavorite(props.meal);
    };

    const mealExistsInFavList = () => {
        return favoriteList.findIndex(f => f.idMeal === idMeal) !== -1;
    };

    return (
        <Card sx={{
            maxWidth: 345,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
        }}>
            <CardHeader
                title={<div style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    paddingRight: '20px'
                }} title={strMeal}>{strMeal}</div>}
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
                <IconButton
                    aria-label="add to favorites"
                    color={mealExistsInFavList() ? 'error' : 'default'}
                    onClick={toggleFavorite}
                >
                    <FavoriteIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

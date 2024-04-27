import React, {useEffect, useState} from 'react';
import {Box, Grid} from "@mui/material";
import {getCategoryMeals} from "../../utils/services/category";
import {IMeal} from "../../utils/interfaces/meal.interface";
import {useParams} from "react-router-dom";
import MealItem from "../../components/meal-item";

const CategoryByName: React.FC = function () {
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState<IMeal[]>([])
    const {name} = useParams();

    const getMeals = () => {
        setLoading(true)
        getCategoryMeals(name ?? '')
            .then((res) => {
                if (res) {
                    setMeals(res)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getMeals()
    }, [])

    return (
        <Box>
            <h1>Category: {name}</h1>
            <Box>
                <Grid container spacing={2} justifyContent="center">
                    {
                        !loading && meals.map(m =>
                            <Grid item xs={12} sm={6} md={4} lg={3} key={m.idMeal}>
                                <MealItem meal={m}/>
                            </Grid>
                        )
                    }
                </Grid>

                {
                    loading && <>Loading...</>
                }
            </Box>
        </Box>
    );
};

export default CategoryByName;

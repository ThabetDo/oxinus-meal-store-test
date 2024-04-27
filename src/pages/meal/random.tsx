import React, {useEffect, useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import MealItem from "../../components/meal-item";
import {IMeal} from "../../utils/interfaces/meal.interface";
import {getRandomMeal} from "../../utils/services/meal";

const RandomMeal: React.FC = function () {
    const [loading, setLoading] = useState(false)
    const [meal, setMeal] = useState<IMeal>()

    const getMeal = () => {
        setLoading(true)
        getRandomMeal()
            .then((res) => {
                if (res) {
                    setMeal(res)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getMeal()
    }, [])

    return (
        <Box sx={{pb:3}}>
            <h1>Random Meal</h1>
            <Box>
                {
                    !loading && meal && <MealItem meal={meal}/>
                }
                {
                    loading && <>Loading...</>
                }
            </Box>
            <Box sx={{m: 3}}>
                <Button
                    disabled={loading}
                    onClick={getMeal}
                >
                    {loading ? (
                        <CircularProgress size={24} color="inherit"/>
                    ) : (
                        "Generate New Meal"
                    )}
                </Button>
            </Box>
        </Box>
    );

};

export default RandomMeal;

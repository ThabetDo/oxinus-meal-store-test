import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {ICategory} from "../utils/interfaces/category.interface";
import {useNavigate} from "react-router-dom";
import {CATEGORY_BY_NAME} from "../utils/endpoints/route.endpoint";

export default function CategoryItem(props: { category: ICategory }) {
    const {idCategory, strCategory, strCategoryThumb, strCategoryDescription} = props.category
    const navigatio = useNavigate()
    const goToCategory = ()=>{
        navigatio(CATEGORY_BY_NAME(strCategory))
    }

    return (
        <Card sx={{display: 'flex', mb:2, cursor:'pointer'}} onClick={goToCategory}>

            <CardMedia
                component="img"
                sx={{width: 151}}
                image={strCategoryThumb}
                alt={idCategory}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {strCategory ?? ''}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {strCategoryDescription ?? ''}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}

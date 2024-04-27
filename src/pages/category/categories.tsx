import React, {useEffect, useState} from 'react';
import CategoryItem from "../../components/category-item";
import {Box} from "@mui/material";
import {getCategories} from "../../utils/services/category";

const Categories: React.FC = function () {
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])

    const getCateogories = () => {
        setLoading(true)
        getCategories()
            .then((res) => {
                if (res) {
                    // @ts-ignore
                    setCategories(res)
                }
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        getCateogories()
    }, [])

    return (
        <Box>
            <h1>Categories</h1>
            <Box>
                {
                    !loading && categories.map(c => <CategoryItem category={c}/>)
                }
                {
                    loading && <>Loading...</>
                }
            </Box>
        </Box>
    );
};

export default Categories;

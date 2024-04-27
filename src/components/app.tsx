import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Categories from "../pages/category/categories";
import RandomMeal from "../pages/meal/random";
import Meal from "../pages/meal/{id}";
import About from "../pages/about";
import Home from "../pages/home";
import HomeLayout from "./layouts/home.layout";
import CategoryByName from "../pages/category/{name}";
import {
    ABOUT,
    CATEGORY,
    CATEGORY_BY_NAME,
    FAVORITES_MEAL,
    HOME,
    MEAL,
    MEAL_BY_ID,
    RANDOM_MEAL
} from "../utils/endpoints/route.endpoint";
import Favorites from "../pages/meal/favorites";


const App: React.FC = () => {

    return (
        <Router>
            <HomeLayout>
                <Routes>
                    <Route path={CATEGORY} element={<Categories/>}/>
                    <Route path={CATEGORY_BY_NAME()} element={<CategoryByName/>}/>
                    <Route path={ABOUT} element={<About/>}/>
                    <Route path={MEAL_BY_ID()} element={<Meal/>}/>
                    <Route path={FAVORITES_MEAL} element={<Favorites/>}/>
                    <Route path={RANDOM_MEAL} element={<RandomMeal/>}/>
                    <Route path={HOME} element={<Home/>}/>
                </Routes>
            </HomeLayout>
        </Router>
    );
};

export default App;

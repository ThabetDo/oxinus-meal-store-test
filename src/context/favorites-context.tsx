import React, {createContext, ReactNode, useContext, useEffect, useReducer} from 'react';
import {IMeal} from "../utils/interfaces/meal.interface";

type State = {
    favorites: IMeal[];
};

type Action =
    | { type: 'SET_FAVORITES'; payload: IMeal[] }
    | { type: 'ADD_FAVORITE'; payload: IMeal }
    | { type: 'REMOVE_FAVORITE'; payload: IMeal };

// Create Context
const FavoritesContext = createContext<{
    state: State;
    addFavorite: (meal: IMeal) => void;
    removeFavorite: (meal: IMeal) => void;
}>({
    state: {favorites: []},
    addFavorite: () => {
    },
    removeFavorite: () => {
    },
});

// Initial State
const initialState: State = {
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

// Reducer
const favoritesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            const newFavorites = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return {
                ...state,
                favorites: newFavorites,
            };
        case 'REMOVE_FAVORITE':
            const filteredFavorites = state.favorites.filter(
                (meal) => meal.idMeal !== action.payload.idMeal
            );
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
            return {
                ...state,
                favorites: filteredFavorites,
            };
        default:
            return state;
    }
};

// Provider Component
export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [state, dispatch] = useReducer(favoritesReducer, initialState);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (storedFavorites) {
            dispatch({type: 'SET_FAVORITES', payload: storedFavorites});
        }
    }, []);

    const addFavorite = (meal: IMeal) => {
        dispatch({type: 'ADD_FAVORITE', payload: meal});
    };

    const removeFavorite = (meal: IMeal) => {
        dispatch({type: 'REMOVE_FAVORITE', payload: meal});
    };

    return (
        <FavoritesContext.Provider value={{state, addFavorite, removeFavorite}}>
            {children}
        </FavoritesContext.Provider>
    );
};

// Custom Hook to use FavoritesContext
export const useFavorites = () => useContext(FavoritesContext);

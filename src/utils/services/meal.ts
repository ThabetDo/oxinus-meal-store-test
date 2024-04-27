import axiosInstance from "../axios";
import {IMeal} from "../interfaces/meal.interface";
import {MEAL_BY_ID, MEAL_BY_NAME, RANDOM_MEAL} from "../endpoints/api.endpoint";

export const getMealById = async (id: string): Promise<IMeal | undefined> => {
    try {
        const res = await axiosInstance.get(MEAL_BY_ID(id));
        return res.data?.meals[0]
    } catch (error: any) {
        console.error(error);
    }
}
export const getMealByName = async (name: string): Promise<IMeal | undefined> => {
    try {
        const res = await axiosInstance.get(MEAL_BY_NAME(name));
        return res.data?.meals[0]
    } catch (error: any) {
        console.error(error);
    }
}
export const getRandomMeal = async (): Promise<IMeal | undefined> => {
    try {
        const res = await axiosInstance.get(RANDOM_MEAL);
        return res.data?.meals[0]
    } catch (error: any) {
        console.error(error);
    }
}
import {IMeal} from "../interfaces/meal.interface";
import {CATEGORIES, CATEGORY_BY_NAME} from "../endpoints/api.endpoint";
import axiosInstance from "../axios";
import {ICategory} from "../interfaces/category.interface";

export const getCategories = async (): Promise<{ categories: ICategory[] } | undefined> => {
    try {
        const res = await axiosInstance.get(CATEGORIES);
        console.log(res.data)
        return res.data?.categories
    } catch (error: any) {
        console.error(error);
    }
}
export const getCategoryMeals = async (name: string): Promise<IMeal[] | undefined> => {
    try {
        const res = await axiosInstance.get(CATEGORY_BY_NAME(name));
        return res.data?.meals
    } catch (error: any) {
        console.error(error);
    }
}
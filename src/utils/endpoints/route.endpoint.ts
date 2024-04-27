export const HOME = '/'
export const MEAL = '/meal'
export const RANDOM_MEAL = `${MEAL}/random`
export const FAVORITES_MEAL = `${MEAL}/favorites`
export const MEAL_BY_ID = (id?: string | number) => `/meal/${id ?? ':id'}`
export const CATEGORY = '/category'
export const CATEGORY_BY_NAME = (name?: string | number) => `${CATEGORY}/${name ?? ':name'}`
export const ABOUT = '/about'

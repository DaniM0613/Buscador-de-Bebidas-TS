
import { StateCreator } from 'zustand'
import { Recipe } from '../types'
import { createRecipeSlice, type RecipeSliceType } from './recipeSlice'

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice : StateCreator<FavoriteSliceType & RecipeSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {

        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink )
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipeSlice(set, get, api).closeModal()
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)

    }
})


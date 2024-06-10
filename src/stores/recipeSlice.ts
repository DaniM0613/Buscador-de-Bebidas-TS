import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, SearchFilter, Drinks, Drink } from "../types"

export type RecipeSliceType = {
   categories: Categories
   drinks: Drinks
   fetchCategories: () => Promise<void>
   searchRecipes: (searchFilters: SearchFilter) => Promise<void>
   selectRecipe: (id: Drink['idDrink']) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    fetchCategories: async () => {
         const categories = await getCategories()
         set({
            categories
         })
    },
    searchRecipes : async (filters) => {
          const drinks = await getRecipes(filters)
          set({
            drinks
          })
    },
    selectRecipe : async (id) => {
        console.log(id)
    }
})
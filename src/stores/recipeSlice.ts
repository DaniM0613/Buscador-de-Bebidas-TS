import type { StateCreator } from "zustand"
import { getCategories, getRecipes } from "../services/RecipeService"
import type { Categories, SearchFilter } from "../types"

export type RecipeSliceType = {
   categories: Categories
   fetchCategories: () => Promise<void>
   searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}

export const createRecipeSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
         const categories = await getCategories()
         set({
            categories
         })
    },
    searchRecipes : async (filters) => {
          await getRecipes(filters)
    }
})
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipeSlice, RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoriteSliceType } from './favoriteSlice'
import { NotificationSliceType, createNotificationSlice } from './notificationSlice'

export const useAppStore = create<RecipeSliceType & FavoriteSliceType & NotificationSliceType >()(devtools((...a) => ({
       ...createRecipeSlice(...a),
       ...createFavoritesSlice(...a),
       ...createNotificationSlice(...a),
})))
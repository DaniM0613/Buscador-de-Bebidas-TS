import { BrowserRouter, Route, Routes } from "react-router-dom"
import IndexPage from "./views/IndexPage"
import FavoritesPage from "./views/FavoritesPage"

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<IndexPage/>} />
            <Route path="/favoritespage" element={<FavoritesPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}
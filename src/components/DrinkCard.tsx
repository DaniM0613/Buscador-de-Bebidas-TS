import { Drink } from '../types'

type DrinkCardProps = {
    drink: Drink
}
export default function DrinkCard({drink} : DrinkCardProps) {
    return (
        <div>{drink.strDrink}</div>
    )
}
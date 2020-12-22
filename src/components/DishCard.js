import RestaurantDishes from "./RestaurantDishes.js"
export default function DishCard(props) {
    return (
        <div className="dish_card">
            {
                props.cards.map((value, i) =>
                    <RestaurantDishes key={i} card={value} transformColor={props.transformColor} filters={props.filters} deleteCard={props.deleteCard} likeChanger={props.likeChanger} />)
            }
        </div>
    )
}
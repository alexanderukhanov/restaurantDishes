import React from "react"
import CardFooter from "./CardFooter.js";
import BlockImage from "./BlockImage.js"

class RestaurantDishes extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0, filters: { filter: "grayscale(100%)" } };
        this.transformColor = this.transformColor.bind(this)

    };

    transformColor() {
        if (this.state.filters.filter === "grayscale(100%)") {
            this.setState({ filters: { filter: "grayscale(0%)" } })
        }
    }
    render() {
        let { card, deleteCard, likeChanger } = this.props
        return (
            <div className="dishes">
                <BlockImage transformColor={this.transformColor} filter={this.state.filters} card={card} />
                <h2 className="dish_tite">{card.name}</h2>
                <img src={card.address_img} alt="marker" width="15" height="15" className="image_marker" />
                <span>{card.address}</span>
                <div className="cuisine_text">
                    <strong>Cuisines:</strong>
                    <span >{card.details.cuisines.join(", ")}</span>
                </div>
                <CardFooter deleteCard={() => deleteCard(card.id)} likeChanger={() => likeChanger(card.likenumber, card.id, card.userIsLiked)} number={card.likenumber} filled={card.userIsLiked} />
            </div>)
    }
}

export default RestaurantDishes
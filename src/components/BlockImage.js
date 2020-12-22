export default function BlockImage(props) {
    return (
        <img onDoubleClick={props.transformColor} style={props.filter} src={props.card.img} alt="dish" width="575" height="400" className="dish_image" />
    )
}
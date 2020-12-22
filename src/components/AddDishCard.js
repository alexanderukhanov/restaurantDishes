import cuisines from "../data/cuisines.js"

export default function AddRestaurant(props) {
    return (
        <form onSubmit={props.addRestaurant} id="form">
            <div className="form-group">
                <label htmlFor="formGroupExampleInput"><h4>
                    Add new restaurant
                </h4></label>
                <div hidden={props.isHiddenErrorAlert} className="alert alert-warning" role="alert">
                    Choose some cuisine!
                </div>
                <input required type="text" className="form-control" id="name" placeholder="Name"></input>
            </div>
            <div className="form-group">
                <input required type="text" className="form-control" id="adress" placeholder="Adress"></input>
            </div>
            <div className="from_items">
                {cuisines.map((value, i) => {
                    return (
                        <div key={i} className="form-check">
                            <input className="form-check-input" type="checkbox" id="infoOfCuisine" value={value}></input>
                            <label className="form-check-label" >{value} </label>
                        </div>
                    )
                })}
            </div>
            <button id="button_submit" type="submit" className="btn btn-secondary">Add</button>
        </form>
    )
}
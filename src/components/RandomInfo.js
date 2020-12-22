import marker from '../img/klipartz.png';
import infoIds from '../data/infoIds.js';
import React from 'react'
const URL = "http://opentable.herokuapp.com/api/restaurants/";
const INTERVAL_EIGHT_SECONDS = 8000;
const NAME = "Name";
const ADRESS = "adress";
const CITY = "city"

export default class RandomInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: NAME,
            address: ADRESS,
            city: CITY,
            isErrorHappen: false
        }
        this.randomRestaurant = this.randomRestaurant.bind(this);
        this.infoLoad = this.infoLoad.bind(this);
    }

    randomRestaurant() {
        let id = Math.floor(infoIds.length * Math.random())
        return infoIds[id]
    }

    async infoLoad() {
        const load = await fetch(URL + this.randomRestaurant());
        const response = await load.json();
        if (!response.ok) {
            this.setState({ isErrorHappen: true });
            return;
        }
        this.setState({
            name: response.name,
            address: response.address,
            city: response.city,
            isErrorHappen: false
        })
    }

    componentDidMount() {
        this.timerId = setInterval(this.infoLoad, INTERVAL_EIGHT_SECONDS)
        this.infoLoad()
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    render() {
        return (
            this.state.isErrorHappen
                ? <div className="radmom_info_block">
                    <p>{this.state.name}</p>
                    <span><img src={marker} alt="marker" width="20" height="20" className="image_marker" />
                        {this.state.address}, {this.state.city}</span>
                </div>
                : <div className="radmom_info_block">
                    Internal Server Error
                </div>
        )
    }
}
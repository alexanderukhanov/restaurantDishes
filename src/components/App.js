import '../App.css';
import cards from '../data/restaurantCard.js'
import React from 'react'
import DishCard from './DishCard.js';
import AddRestaurant from './AddDishCard.js';
import defaultImg from '../img/default-img.png';
import marker from '../img/klipartz.png';
import RandomInfo from './RandomInfo.js'
const NUMBER_ONE = 1;

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { cards: cards, likes: 0, isHiddenErrorAlert: true, isHideButtonClicked: false }
    this.deleteCard = (id) => {
      this.setState(state => {
        let newCards = state.cards.filter(value => value.id !== id);
        return { cards: newCards }
      })
    }
    this.likeChanger = (likenumber, id, userIsLiked) => {
      this.setState(state => {
        let index = state.cards.findIndex(value => value.id === id);
        const likeObj = state.cards[index];
        let newItem = { ...likeObj };
        newItem.userIsLiked = !userIsLiked;
        newItem.likenumber = userIsLiked ? likenumber - NUMBER_ONE : likenumber + NUMBER_ONE;
        let newCards = [...state.cards.slice(0, index), newItem, ...state.cards.slice(index + NUMBER_ONE)];
        return { cards: newCards }
      })
    }
    /*     //Another variant
        this.likeChanger = (likenumber, id, userIsLiked) => {
          this.setState(state => {
            let copyCards = JSON.parse(JSON.stringify(state.cards))
            let likeObj = copyCards.find(value => value.id === id)
            likeObj.userIsLiked = !userIsLiked;
            likeObj.likenumber = userIsLiked ? likenumber - NUMBER_ONE : likenumber + NUMBER_ONE;
            let changedArr = copyCards.reduce((acc, value) => {
              if (value === likeObj) {
                value = undefined
              };
              acc.push(value)
              return acc;
            }, [])
            let newCards = changedArr.reduce((acc, value) => {
              if (value === undefined) {
                value = likeObj
              };
              acc.push(value)
              return acc;
            }, [])
            return { cards: newCards }
          })
        } */
    this.updateLikes = () => {
      this.setState(state => {
        let likesCount = state.cards.reduce((acc, value) => {
          acc += value.likenumber;
          return acc;
        }, 0)
        return { likes: likesCount }
      })
    }
    this.countOfLikes = (e) => {
      if (e.target.id === "svg_2" || e.target.id === "svg_2.filled" || e.target.id === "image_bin") {
        this.updateLikes();
      }
    }
    this.addRestaurant = (e) => {
      e.preventDefault();
      let { infoOfCuisine, name, adress } = e.target.elements;
      let cusisinesArray = [];
      for (let i = 0; i < infoOfCuisine.length; i++) {
        if (infoOfCuisine[i].checked) {
          cusisinesArray.push(infoOfCuisine[i].value);
        }
      }
      if (cusisinesArray.length === 0) {
        return this.setState({ isHiddenErrorAlert: false })
      }
      else {
        this.setState({ isHiddenErrorAlert: true })
      }
      this.setState(state => {
        let cards = state.cards;
        let newRestaurant = {
          userIsLiked: false,
          likenumber: 0,
          id: cards.length
            ? cards[cards.length - NUMBER_ONE].id + NUMBER_ONE
            : NUMBER_ONE,
          name: name.value,
          img: defaultImg,
          address_img: marker,
          address: adress.value,
          details: {
            cuisines: cusisinesArray,
          },
        }
        let newCards = [...cards, newRestaurant]
        return { cards: newCards }
      })
    }
    this.switchBanner = () => {
      this.setState(state => ({ isHideButtonClicked: !state.isHideButtonClicked }))
    }
  }
  componentDidMount() {
    this.updateLikes()
  }
  render() {
    return (
      <div onClick={this.countOfLikes} className="root">
        <div>
          <h1>Restaurants</h1>
          {this.state.isHideButtonClicked ? null : <RandomInfo />}
          <button onClick={this.switchBanner} type="button" className="btn btn-secondary">{this.state.isHideButtonClicked ? "Show" : "Hide"}</button>
          <div id="page_header">
            <div id="text_restaurants">Our restaurants:</div>
            <div id="text_likes">Count of likes: {this.state.likes}</div>
          </div>
        </div>
        <DishCard cards={this.state.cards} deleteCard={this.deleteCard} likeChanger={this.likeChanger} />
        <AddRestaurant addRestaurant={this.addRestaurant} isHiddenErrorAlert={this.state.isHiddenErrorAlert} />
      </div>
    );
  }
}

export default App;
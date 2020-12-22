import verjus from '../img/verjus.jpg'
import district6 from '../img/district6.jpg'
import sun_sun_warung from '../img/sun-sun-warung.jpg'
import marker from '../img/klipartz.png'




let cards = [
    {
        userIsLiked: false,
        likenumber: 5,
        id: 1,
        name: "District 6",
        img: district6,
        address_img: marker,
        address: "Jl. Labuansait, Pecatu 80361 Indonesia",
        details: {
            cuisines: ["Asian", "Healthy", "Indonesian", "Grill"],
        },
    },
    {
        userIsLiked: false,
        likenumber: 5,
        id: 2,
        name: "Sun Sun Warung",
        img: sun_sun_warung,
        address_img: marker,
        address: "Jl. Jembawan 1 No.2, Ubud 80571 Indonesia",
        details: {
            cuisines: ["Pizza", "International", "Bar", "Cafe", "Healthy"],
        },
    },
    {
        userIsLiked: false,
        likenumber: 5,
        id: 3,
        name: "Verjus",
        img: verjus,
        address_img: marker,
        address:
            "52 rue de Richelieu dans le passage Beaujolais, 75001 Paris France",
        details: {
            cuisines: ["French", "European", "Contemporary"],
        },
    },
]

export default cards
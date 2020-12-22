import bin from "../img/bin.png"

export default function CardFooter(props) {
    return (
        <div className="card_footer">
            <img title="Delete" onClick={props.deleteCard} src={bin} alt="bin" width="30" higth="30" id="image_bin" />
            <div className="block_like">
                <label id="number_likes">{props.number}</label>
                <svg width="640" height="480" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <title>Like</title>
                        <g id="layer1">
                            <path onClick={props.likeChanger} id={props.filled ? "svg_2.filled" : "svg_2"} d="m219.28949,21.827393c-66.240005,0 -119.999954,53.76001 -119.999954,120c0,134.755524 135.933151,170.08728 228.562454,303.308044c87.574219,-132.403381 228.5625,-172.854584 228.5625,-303.308044c0,-66.23999 -53.759888,-120 -120,-120c-48.047913,0 -89.401611,28.370422 -108.5625,69.1875c-19.160797,-40.817078 -60.514496,-69.1875 -108.5625,-69.1875z" />
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}
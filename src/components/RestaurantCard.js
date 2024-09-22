const StyleCard = {
    backgroundColor: "#f0f0f0"
}
const RestaurantCard = (props) => {
    const { info } = props.resData;
    console.log(info);
    return (
        <div className="res-card" style={StyleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info.cloudinaryImageId}></img>
            <span className="discountInfo"> {info.aggregatedDiscountInfoV3 && info.aggregatedDiscountInfoV3?.header+" "} 
                {info.aggregatedDiscountInfoV3?.subHeader}
            </span>
            <h2 className="restroName">{info.name}</h2>
            <p>{info.cuisines.join(", ")}</p>
            <h6>{info.costForTwo}</h6>
        </div>
    )
}

export default RestaurantCard;
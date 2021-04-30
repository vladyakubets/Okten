import './carComponent.style.css'

function CarComponent(props) {
    const {header,image,text}=props;
    return <div>
        <div>
            <h2>{header}</h2>
            <img src={image} alt={header}/>
            <p>{text}</p>
        </div>
    </div>
}

export default CarComponent;
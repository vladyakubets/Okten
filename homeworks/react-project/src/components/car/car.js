function Car(props) {

    const {producer, model, year, color, type, engine, volume, power} = props;
    return <div>
        <p>{producer} - {model} - {year} - {color} - {type} - {engine} - {volume} - {power}</p>
    </div>;
}

export default Car;
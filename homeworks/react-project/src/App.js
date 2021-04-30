import './App.css';
import CarComponent from "./components/car/carComponent";

function App() {
    return (
        <div>
            <CarComponent
                header={'Audi RS2'}
                image={'https://upload.wikimedia.org/wikipedia/commons/0/05/Audi_RS2_Avant_.jpg'}
                text={'The Audi RS2 Avant, usually known as Audi 80 RS2, was a limited edition, high-performance Audi five-door,\n' +
                '                five-seat estate car (station wagon), manufactured from March 1994 to July 1995.'}/>
            <CarComponent
                header={'Audi RS3'}
                image={'https://cdn.motor1.com/images/mgl/2XmAM/s1/audi-rs-3-sportback-exclusive-motor1-renderings.jpg'}
                text={'The latest five-cylinder powerplant carries on the tradition of Audi Sport® performance. The 2020 Audi RS 3 features a 2.5-liter TFSI® turbocharged engine that’s known for its unique firing order and inimitable sound, producing 394 horsepower and 354 lb-ft of torque. Starting at $56,200.*'}/>
            <CarComponent
                header={'Audi RS6'}
                image={'https://audimediacenter-a.akamaihd.net/system/production/media/83014/images/b52bf0b68e1104a9e56fed9b28c2f84aa1445992/A1910897_blog.jpg?1582552359'}
                text={'The Audi RS 6 is a high-performance variant of the Audi A6 range, produced by the high-performance subsidiary company Audi Sport GmbH, for Audi AG, a division of the Volkswagen Group.'}/>
        </div>
    );
}

export default App;

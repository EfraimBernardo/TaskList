import UseState from 'react';
import './styles/Main.css';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
const Container = () =>{
    return (
        <div className="container">
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Container

import '../styles/Main.css';
import Categories from './RightSide/Categories';
import RightHeader from './RightSide/Header';
import ListRightSide from './RightSide/ListRightSide';
const RightSide = () =>{
    return(
        <div className='RightSide'>
            <RightHeader/>
            <br/>
            <Categories />
            <br/><br/>
            <ListRightSide />
        </div>
        
    )
}

export default RightSide

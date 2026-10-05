import LeftHeader from "./LeftSide/Header"
import LeftList from "./LeftSide/LeftList"
import SubLeftList from "./LeftSide/SubLeftLust"
import '../styles/Main.css'
const style = {
    color: 'rgba(255, 255, 255, 0.08)',
}
const LeftSide = () =>{
    return(
        <div className="LeftSide">
            <LeftHeader />
            <LeftList />
             <br/>
            <br/>
            <span style={style}>____________________________________</span>
            <SubLeftList />
        </div>
    )
    
}

export default LeftSide

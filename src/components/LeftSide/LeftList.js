import '../../styles/Main.css'
const LeftList = () =>{
    return(
        <div className="LateralList">
            <li><i class="fa-solid fa-list-check"></i><a href="#todas"><span>Todas</span></a></li>
            <li><i class="fa-regular fa-calendar"></i><a href="#hoje"><span>Hoje</span></a></li>
            <li><i class="fa-solid fa-star"></i><a href="#importantes"><span>Importantes</span></a></li>
            <li><i class="fa-solid fa-check"></i><a href="#comcluidos"><span>Concluídas</span></a></li>
        </div>
    )
}

export default LeftList

import '../../styles/Main.css';
import './FormRightSide';

const data = new Date().toLocaleDateString('pt-AO', {
  day: 'numeric',
  weekday: 'long',
  month: 'long'
});

function OpenForm(){
    const Form = document.querySelector('.Form');
    Form.classList.toggle('Formulario');
}

const dataFormatada = data.charAt(0).toUpperCase() + data.slice(1);

const RightHeader = () =>{
    return(
        <div className='RightSideHeader'>
                <nav>
                    <p>{dataFormatada}</p>
                    <h1>As minhas tarefas</h1>
                </nav>
                <nav>
                    <button onClick={OpenForm}><span>+</span><span>Adicionar Tarefa</span></button>
                </nav>
        </div>
    )
}

export default RightHeader

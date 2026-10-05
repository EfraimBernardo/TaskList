import '../../styles/Main.css';
const Form = () =>{
    return(
        <div className='Form' id='Form'>
            <form>
                    <div>
                        <input id='WorkTitle' name='WorkTitle' className='WorkTitle'/>
                        <select>
                            <option>Projectos Pessoais</option>
                            <option>Estudo</option>
                            <option>Trabalho</option>
                            <option>Urgente</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>Adicionar Tarefa</button>
                    </div>
            </form>
        </div>
    )
}

export default Form
//  onSubmit={AddWork}
import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento  => props.aoDigitado(evento.target.value)}>
              <option value=''></option>
               {props.itens.map(item => <option key={item}>{item}</option>)}

            </select>
        </div>
    )
}

export default ListaSuspensa

/*mesma forma de fazer {props.itens.map(item => {
    return <option>{item}</option>}
*/

//Não colocar a Key do item como chave primaria, pode ocorrer erros na operação de Deletar pois o React com o Map rodando 
//vai jogar o proximo item no lugar do deletado, ai pode ocorrer do React 
//"pensar" que o item não foi excluido, dando problemas de render.
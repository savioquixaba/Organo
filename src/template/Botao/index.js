import './Botao.css'

const Botao = (props) => {
    return(
        <button className='botao'>{props.label}</button>
        // e aqui colocar props.children pois o React vai pegar o filho do botão que seria o conteudo dentro e aninhar.
    )
}

export default Botao
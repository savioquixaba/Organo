import './Jogador.css'

const Jogador = (props) => {
    return (
        <div className='jogador'>

            <div className='cabecalho' style={{backgroudColor:props.corDeFundo}}>
                <img src={props.imagem} alt={props.nick} />
            </div>
            <div className='rodape'>
                <h4>{props.nick}</h4>
                <h5>{props.lane}</h5>
            </div>
        </div>
    )
}

export default Jogador
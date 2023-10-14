import Jogador from '../Jogador'
import './Roles.css'

const Roles = (props) => {
    
    
    return(
        
        <section className='roles' style={{backgroundColor: props.corPrimaria}}>
            <h3 style={{borderColor: props.corSecundaria}}>
                {props.lane}
            </h3>
             <div className='jogadores'>
                {props.jogadores.map(card => <Jogador  corDeFundo={props.corPrimaria} key={card.nick} nick={card.nick} lane={card.lanes} imagem={card.splash}/>)}
            </div>      
        </section>
    )
}

export default Roles
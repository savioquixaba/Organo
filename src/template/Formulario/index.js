import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = () => {
    
    const lanes = ["Top", "Jungle", "Midlane", "ADCarry", "Support"]
    
    return (
        <section className="formulario">
            <form>
                <CampoTexto label="Nick" placeholder="coloque seu Nick no LoL" />
                <CampoTexto label="Main" placeholder="coloque seu Main" />
                <CampoTexto label="Splash-Art" placeholder="Coloque a Splash-Art do seu Main" />
                <ListaSuspensa label="Lanes" itens={lanes} />
            </form>
        </section>
    )
}

export default Formulario
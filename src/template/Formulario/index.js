import CampoTexto from "../CampoTexto"
import './Formulario.css'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <CampoTexto label="Nick" placeholder="coloque seu Nome!" />
                <CampoTexto label="Lane" placeholder="coloque seu Cargo!" />
                <CampoTexto label="Splash-Art" placeholder="coloque o endereço da sua imagem!" />

            </form>
        </section>
    )
}

export default Formulario
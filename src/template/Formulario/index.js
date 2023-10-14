import { useState } from "react"
import Botao from "../Botao"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import './Formulario.css'

const Formulario = (props) => {
    
   

    const [nick, SetNick] = useState('')
    const [main, SetMain] = useState('')
    const [splash, SetSplash] = useState('')
    const [lanes, SetLanes] = useState('')
    
    const aoSalvar= (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nick,
            main,
            splash,
            lanes
        })
        
        SetNick('')
        
        SetMain('')
        SetSplash('')
    
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <CampoTexto 
                Requirido={true} label="Nick" 
                placeholder="coloque seu Nick no LoL" 
                valor={nick}
                aoDigitado={valor => SetNick(valor)}
                />
                <CampoTexto Requirido={true} 
                label="Main" placeholder="coloque seu Main" 
                valor={main}
                aoDigitado={valor => SetMain(valor)}
                />
                <CampoTexto Requirido={true} label="Splash-Art" 
                placeholder="Coloque a Splash-Art do seu Main" 
                valor={splash}
                aoDigitado={valor => SetSplash(valor)}
                />
                <ListaSuspensa Requirido={true} 
                label="Lanes" itens={props.lanes} 
                valor={lanes}
                aoDigitado={valor => SetLanes(valor)}
                />
                <Botao label="Criar Card"/>
                {/* outra forma de fazer isso seria <botao> Criar Card</botao> */}
            </form>
        </section>
    )
}

export default Formulario
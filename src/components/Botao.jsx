import React from 'react';
import { BotaoCustomizado } from './styles'

const Botao = ({
    type,
    text,
    onClick,
    disable,

})  => {
    return (
        <BotaoCustomizado
        type={type}
        text={text} 
        onClick={onClick}
        />
    );
}

export default Botao;
import React, { Component } from 'react'
import { View, Text } from 'react-native'


const input = [{
    _id: "id_do_look_1",
    name: "nome do look 1",
    description: "descrição do look 1",
    clothe_torso: {
        image: "https://i.pinimg.com/originals/f0/28/bd/f028bd62bb1694460545da4b2dd82032.jpg", 
        manufacturer: "Renner",
        clothingModel: "casaquinho de lã",
        description: "casaco M, com pedras preciosas"
    },
    clothe_leg: {
        image: "https://cea.vteximg.com.br/arquivos/ids/10941770-468-560/Saia-Jeans-Feminina-Midi-com-Botoes-e-Fenda--Azul-Escuro-9817005-Azul_Escuro_1.jpg?v=637097831575430000", 
        manufacturer: "C&A",
        clothingModel: "Saia Jeans",
        description: "Saia Jeans G, abaixo do Joelho"
    },
    clothe_feet: {
        image: "https://a4.vnda.com.br/ortoponto/2017/08/16/or1031-bota-ortopedica-imobilizadora-de-tornozelo-curta-hidrolight-anatomica-com-antiderrapante-5600.jpg?1502912701", 
        manufacturer: "UsaFlex",
        clothingModel: "Bota Ortopédica",
        description: "Bota Ortopédica tam. 38, em alta na estação, combina com qualquer look"
    }
}
]

export default class Display extends Component {
    render() {
        return (
            <View>
                <Text>Display Peça</Text>
            </View>
        )
    }
}
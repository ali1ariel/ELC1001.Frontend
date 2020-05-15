import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'


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

const stylesImage = StyleSheet.create({
    container: {
      padding: 50,
      alignItems: "center",
      backgroundColor: "#DF928E"
    },
    logo: {
      width: 200,
      height: 200,
      resizeMode: "center",
      borderRadius: 30,
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 10,
        borderRadius: 30,
        backgroundColor: "#fff"
    }
  });

export default class Display extends Component {
    render() {
        return (
            <View>
                <View style={stylesImage.container}>
                    <View  style={stylesImage.boxWithShadow}>
                        <Image style={stylesImage.logo} source={{uri: input[0].clothe_leg.image}} />
                    </View>
                </View>
            </View>
        )
    }
}
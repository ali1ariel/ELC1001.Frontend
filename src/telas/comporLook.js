import React, { Component } from 'react'
import { View, Text } from 'react-native'

const input = [{
    _id: "id_do_look_1",
    name: "nome do look 1",
    description: "descrição do look 1",
    clothe_torso: {
        // Informações da roupa do tronco
    },
    clothe_leg: {
        // Informações da roupa das pernas
    },
    clothe_feet: {
        // Informações do calçado
    }
},
{
    _id: "id_do_look_2",
    name: "nome do look 2",
    description: "descrição do look 2",
    clothe_torso: {
        // Informações da roupa do tronco
    },
    clothe_leg: {
        // Informações da roupa das pernas
    },
    clothe_feet: {
        // Informações do calçado
    }
}
]


export default class ComporLook extends Component {
    render() {
        return (
            <View>
                <Text>Compor Look</Text>
            </View>
        )
    }
}
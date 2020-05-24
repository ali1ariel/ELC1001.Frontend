import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native'

const clothe = {
        image: "https://i.pinimg.com/originals/f0/28/bd/f028bd62bb1694460545da4b2dd82032.jpg", 
        manufacturer: "Renner",
        clothingModel: "Casaquinho de Lã",
        description: "casaco M, com pedras preciosas"
    }


export default class Display extends Component {
    
    render() {
        
        const {goBack} = this.props.navigation

        return (
          
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <View style={styles.title}>
                        <Text style={styles.h1}>{clothe.clothingModel}</Text>
                    </View>
          
                    <View  style={styles.boxWithShadow}>
                        <Image style={styles.logo} source={{uri: clothe.image}} />
                    </View>
          
                    <View style={styles.infomations}>
                        <Text style={styles.h2}>
                            <Text style={styles.textHighlight}>Fabricante: </Text>{clothe.manufacturer}
                        </Text>
                        <Text style={styles.h2}>
                            <Text style={styles.textHighlight}>Descrição: </Text>{clothe.description}
                        </Text>
                    </View>
          
                    <TouchableOpacity style={styles.button} onPress={() => goBack()}>
                        <Text style={styles.buttonText}>OK</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        padding: 50,
        alignItems: "center",
        backgroundColor: "#DF928E"
      },

      logo: {
        width: 250,
        height: 250,
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
          backgroundColor: "rgba(237, 237, 237, 0.9)"
      },

    container:{
        flex: 1,
        backgroundColor: '#C4D0D0',
        alignItems: 'center',
    },

    title: {
        padding: 24,
        borderRadius: 16,
        backgroundColor: 'rgba(237, 237, 237, 0.9)',
        marginBottom: 16,
        width: 250,
        alignItems: 'center',
        elevation: 2
    },

    infomations: {
        padding: 24,
        borderRadius: 16,
        backgroundColor: 'rgba(237, 237, 237, 0.9)',
        marginTop: 16,
        marginBottom: 16,
        width: 250,
        alignItems:'baseline',
        elevation: 2,
    },

    h1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ba7a77',
    },

    h2: {
        fontSize: 18,
        color: '#737380',
        marginTop: 4,
        marginBottom: 4,
    },
    
    textHighlight: {
        fontWeight: 'bold',
        color: '#55555e'
    },
    
    button: {
        width: 70,
        padding: 18,
        backgroundColor: '#cddada',
        borderRadius: 100,
        borderColor: '#FFF',
        justifyContent: "center",
        alignItems: 'center',
        elevation: 2
    },

    buttonText: {
        fontSize: 18,
        color: '#55555e',
        marginTop: 4,
        marginBottom: 4,
        fontWeight: 'bold'
    },

})
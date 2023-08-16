import React from 'react';
import { StyleSheet,Image, Dimensions, Text, View } from 'react-native';


import topo from '../../../assets/topo.png'

const width = Dimensions.get('screen').width;

export default function Carrinho (){
    return <>
    <Image source={topo} style={estilos.topo}/>
    <Text style={estilos.titulo}>Detalhe do carrinho</Text>
    <View>
      <Text>Carrinho de Compras</Text>
      <Text>Fazenda Etec Cidade do Livro</Text>
      <Text>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha </Text>
      <Text>
        R$ 40,00
      </Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
topo:{
  width: "100%",
  height: 578 / 768 * width
},
titulo:{
  fontSize:24,
  fontWeight:"bold",
  lineHeight:26,
  width:"100%",
  textAlign:"center",
  color: "white",
  position: "absolute",
  padding: 16
}
})

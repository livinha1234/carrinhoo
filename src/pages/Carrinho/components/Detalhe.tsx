import React from "react";
import {Text, Image, View, StyleSheet} from "react-native";
import logo from '../../../../assets/logo.png';

type Props={
  nome: string,
  nomeFazenda: string
  descricao: string,
  preco: string
}

export default function Detalhe({nome,nomeFazenda, descricao, preco}: Props){
    return<>
    <Text style={estilos.titulocarrinho}>{nome}</Text>
      <Text>Carrinho de Compras</Text>
      <View style={estilos.fazenda}>
        <Image style={estilos.imagemfazenda} source={logo}/>
      <Text style={estilos.nomesfazenda}>{nomeFazenda}</Text>
      </View>
      <Text style={estilos.descricao}>
      {descricao}
      </Text>
      
      <Text style={estilos.preco}>{preco}</Text> 
    </>
}

const estilos = StyleSheet.create({
    titulocarrinho:{
      fontSize:26,
      lineHeight:42,
      color:"#464646",
      fontFamily: "MontserratBold"
    
    
    },
    
    nomesfazenda:{
    fontSize:16,
    lineHeight:26,
    marginLeft:12,
    fontWeight:"bold"
    },
    
    imagemfazenda:{
      width:32,
      height:32
    },
    
    fazenda:{
      flexDirection:"row",
      paddingVertical:12
    },
    
     descricao:{
       color:"#A3A3A3",
       fontStyle:"italic"
     },
    
     preco:{
       fontSize:26,
       lineHeight:42,
       color:"#2A9F85",
       marginTop:8
     }
    })
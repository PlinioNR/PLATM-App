import React from "react";
import { Image, StyleSheet } from "react-native";

const DisplayImage = props => {
  // Como taskStatus já é o número (tasks.length), verificamos se ele é 0
  if (props.taskStatus === 0) {
    return (
      <Image 
        style={styles.image} 
        source={require('../../assets/logo.png')} // Certifique-se que o caminho está correto
      />
    );
  } else {
    // Se houver tarefas (maior que 0), não renderiza nada
    return null;
  }
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center', // Centraliza a imagem horizontalmente
    marginTop: 100 // Ajustado para não ficar tão longe no topo
  }
});

export default DisplayImage;
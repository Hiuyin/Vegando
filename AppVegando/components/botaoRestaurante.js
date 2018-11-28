import React from 'react';
import { TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

export const BotaoImagem = props => {
  return (
    <TouchableOpacity style={styles.botao} onPress={props.onPress || console.log('aqui')}>
      <Image source={props.imagem} style={styles.imgResto} />
      <Text>
        {props.nome}
        {`\n`}
        {`Tempo médio de atendimento ${props.tempo} min`}
        {`\n`}
        {`Avaliação dos clientes ${props.avaliacao}`}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#228B22',
    margin: 5,
    borderRadius: 5
  },
  imgResto: {
    height: 80,
    width: 80,
    margin: 10
  }
});

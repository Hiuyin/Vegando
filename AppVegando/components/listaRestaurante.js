import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Alert, Dimensions } from 'react-native';
import { BotaoImagem } from './';

export class Lista extends Component {
  render() {
    const { width, height } = Dimensions.get('window');
    return (
      <View>
        <ScrollView style={{ height: height}}>
          {this.props.data &&
            this.props.data.map((e, i) => {
              return (
                <BotaoImagem
                  key={i}
                  imagem={e.img}
                  nome={e.nome}
                  tempo={e.tempo}
                  avaliacao={e.avaliacao}
                  onPress={() => Alert.alert('Pressionou aqui')}
                />
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    padding: 10,
    borderColor: '#228B22',
    borderWidth: 1,
    borderRadius: 5
  },
  titulo: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#228B22',
    margin: 10
  }
});

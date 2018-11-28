import React from 'react';
import { ScrollView, StyleSheet,Alert ,View} from 'react-native';
import { dataRestaurantes, dataResto } from '../data';
import {Lista} from '../components/listaRestaurante'
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Lista de Restaurantes',
  };

  render() {
    return (
      <View>
       <Lista data={dataRestaurantes}/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

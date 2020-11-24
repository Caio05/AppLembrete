//Caio Castori de Oliveira RA 818234790
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, EventSubscriptionVendor, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { Component } from 'react';
import LembreteItem from './componentes/LembreteItem';
import LembreteInput from './componentes/LembreteInput'; 

export default function App() {

  const[lembretes, setLembretes]=useState([]);
  const[contadorLembretes, setContadorLembretes]=useState(0);

  //para adicionar o que foi digitado
  const adicionarLembrete = (lembrete) => {
    setLembretes(lembretes =>{ 
      console.log(lembretes);
      setContadorLembretes(contadorLembretes + 1);
      return [{key: contadorLembretes.toString(), value: lembrete},...lembretes];
    })
  };

  const removerLembrete=(keyASerRemovida)=>{
    setLembretes(lembretes=>{
      return lembretes.filter((lembrete)=>{
        lembrete.key!==keyASerRemovida
      })
    });   
  }

  return (
    <View style={styles.telaPrincipalView}>
      <LembreteInput onAdicionarLembrete={adicionarLembrete}/>
      <FlatList
        data={lembretes}
        renderItem={
          lembrete=>(
            <LembreteItem 
            chave ={lembrete.item.key}
            lembrete ={lembrete.item.value}
            onDelete={removerLembrete}
            />
          )
        }
      />  
    </View>
  );
}

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 50
  },
  lembreteView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  lembreteInputText: {
    width: '80%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 8
    },
    itemNaLista: {
      padding: 12,
      backgroundColor: '#CCC',
      borderColor: "#000",
      borderWidth: 1,
      marginBottom: 8,
      borderRadius: 8
    }
  })

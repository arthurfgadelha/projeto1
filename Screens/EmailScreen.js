import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList } from "react-native";

export default function EmailScreen ({ route }){
    const {id} = route.params;

    const [mensagem, setMensagem] = useState ([]);

    useEffect (() => {
        async function getData () {
            const response = await fetch ('https://mobile.ect.ufrn.br:3002/emails/' + id)
            const mensagem = await response.json();
            setMensagem(mensagem);
        }
        getData();
    }, []);


    function renderItem ({item}) {
        return <View>
            <Text>{item.from}</Text>
        </View>
    }


    return (
    <View style={styles.container}>
        <StatusBar style="auto"/>
        <View style={styles.tituloEmail}>
            <FlatList
                data={mensagem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tituloEmail: {
        height: 100,
      
    },
    infoRemetente: {
        height: 60,
        backgroundColor: 'green'
    },
    assunto: {
        flex: 1,
        backgroundColor: 'blue'
    },
    titulo: {
        fontWeight: 'bold',
    },
    userEmail: {
        height: 'auto',
        flexDirection: 'row',
    },

});
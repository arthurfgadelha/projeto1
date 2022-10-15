import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, FlatList, Image } from "react-native";

export default function EmailScreen ({ route }){
    const {id} = route.params;

    const [mensagem, setMensagem] = useState ([]);

    useEffect (() => {
        async function getData () {
            const response = await fetch ('https://mobile.ect.ufrn.br:3002/emails/' + id)
            const mensagem = await response.json();
            setMensagem([mensagem]);
        }
        getData();
    }, []);


    function renderItem ({item}) {
        return <View style={styles.userEmail}>
                    <View style={styles.tituloEmail}>
                        <Text>{item.tittle}</Text>
                    </View>
                    <View style={styles.infoRemetente}>
                        <Image style={styles.imgPerfil} source={{uri: item.picture}}/>
                        <Text>De {item.to} Para {item.from}</Text>
                        <Text>{item.time}</Text>
                    </View>
                    <View style={styles.assunto}>
                        <Text>{item.body}</Text>
                    </View>
        </View>
    }


    return (
     <View style={styles.container}>
        <StatusBar style="auto"/>
            <FlatList
                data={mensagem}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tituloEmail: {
        height: 100,
        backgroundColor: 'red',
    },
    infoRemetente: {
        height: 60,
        backgroundColor: 'green',
        justifyContent: 'space-between',
    },
    assunto: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    titulo: {
        fontWeight: 'bold',
    },
    userEmail: {
        height: 'auto',
        flexDirection: 'row',
    },
    imgPerfil: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },

});
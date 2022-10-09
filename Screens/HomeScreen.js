import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet ,View, Text, FlatList, Image } from "react-native";

export default function HomeScreen ({navigation}){
    const [listEmail, setListEmail] = useState([]);
    
    useEffect(() => {
        async function getData () {
            const response = await fetch('https://mobile.ect.ufrn.br:3002/emails');
            const listEmail = await response.json();
            setListEmail(listEmail);
        }
        getData();
    }, []);


    function renderItem({item}){
        return <View style={styles.userEmail}>
            <Image style={styles.imgPerfil} source={{uri: item.picture}}/>
                <View style={styles.textBox}>
                    <Text style={styles.nome}>{item.from}</Text>
                    <Text style={styles.titulo}>{item.tittle}</Text>
                    <Text>{item.summary}</Text>
                </View>
            
        </View>;
    }

    return (
        <View style={styles.container}>
             <StatusBar style="auto"/>
             <FlatList
                data={listEmail}
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
        backgroundColor: '#fff',
    },
    userEmail: {
        height: 60,
        flexDirection: 'row',
    },
    imgPerfil: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    textBox: {
        justifyContent: 'center',
    },
    nome: {
        fontWeight: 'bold',
    },
    titulo: {
        fontWeight: 'bold',
    }
})
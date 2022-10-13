import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet ,View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';


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
        return <TouchableOpacity style={styles.userEmail} onPress={() => navigation.navigate('EmailScreen', {id: item.id})}  >
            <Image style={styles.imgPerfil} source={{uri: item.picture}}/>
                <View style={styles.textBox} >
                    <View style={styles.nome}>
                        <Text>De {item.to} Para {item.from}</Text>
                        <Text>{item.time}</Text>
                    </View>
                        <Text style={styles.titulo}>{item.tittle}</Text>
                   <View style={styles.resumo}>
                        <Text>{item.summary}</Text>
                        <FontAwesome name="star" size={24} style={item.star ? styles.favorito : styles.Nofavorito}/>
                   </View>
                </View>
             </TouchableOpacity> ;
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
        height: 'auto',
        flexDirection: 'row',
    },
    imgPerfil: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 25,
    },
    textBox: {
        flex: 1,
        padding: 5,
    },
    nome: {
        fontWeight: 'bold',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titulo: {
        fontWeight: 'bold',
    },
    resumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    favorito: {
        color: 'yellow',
    },
    Nofavorito: {
        color: 'gray',
    },
});
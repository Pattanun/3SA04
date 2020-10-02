import React from 'react';
import { setStatusBarBackgroundColor, StatusBar } from 'expo-status-bar';
import { StyleSheet,View, Text, FlatList,ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { Name: 'Tang', id: '039' },
    { Name: 'JOB', id: '016' },
   
]

const ZipItem = ({ Name,id }) => (

        <View>
            <Text style={styles.text1}>{Name}</Text>
            <Text style={styles.text1}>{id}</Text>
        </View>
)

const _keyExtractor = item => item.code

export default function newpage() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg.jpg')} style={styles.backdrop}>
            
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
            </ImageBackground>
        </View>
    );

}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        color: 'white',
        width: '100%',
        height: '100%'
    },
    text1: {
        color: 'white',
        fontSize: 25
    }
});
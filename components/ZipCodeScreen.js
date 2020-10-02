import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight, Button,ImageBackground,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style = {styles.text1}>
            <Text style = {styles.text1}>{place}</Text>
            <Text style = {styles.text2}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <ImageBackground source={require('./bg2.jpg')} style={styles.backdrop}>
            <Button title = "PRESSME" color = "red" onPress={() => navigation.navigate('Picture')}/>
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

        width: '100%',
        height: '100%'
    },
    text1:{ 
        marginVertical: 'auto',       
        height: 'auto',        
        width: 'auto',
        color: 'white',
        fontSize: 50,
        backgroundColor: 'black',
    },
    text2:{    
        marginVertical: 'auto',
        height: 'auto',        
        width: 'auto',
        color: 'white',
        fontSize: 30,
        backgroundColor: 'black',
    },
});
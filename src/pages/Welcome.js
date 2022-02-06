import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Button from '../components/Button'

const Welcome = ({ navigation }) => {
    const goToSign = () => {
        
        navigation.navigate('MemberSign')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Fitness Salonu</Text>
            <Button text="Üye kaydı oluştur" onPress={ goToSign } />
        </SafeAreaView >
    );
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,

    }
})
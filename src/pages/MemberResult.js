import React from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

const MemberResult = ({ route }) => {
    const { user } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.massages} > Kayıt Tamamlandı </Text>

            </View>
            <Text style={styles.label}>Üye Adı :{user.username}</Text>
            <Text style={styles.label}>Üye Soyadı : {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı : {user.userAge}</Text>
            <Text style={styles.label}>Üye Mail :{user.userMail}</Text>

        </SafeAreaView >
    )
}

export default MemberResult;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        padding: 10,
        flex: 1

    },
    massages: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        margin: 15,
        textAlign: "center"
    },
    label: {
        margin: 10,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: "bold",

    }
})
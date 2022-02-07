import React, { useState } from 'react';
import { SafeAreaView, Text, Alert } from 'react-native';
import Input from '../components/Input'
import Button from '../components/Button'

const MemberSign = ({ navigation }) => {
    const [username, setUsername] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userMail, setUserMail] = useState(null);

    const handleSumbit = () => {
        if (!username || !userSurname || !userAge || !userMail) {
            Alert.alert("Fitness App", "Bilgiler Boş bırakılamaz!")
        }
        else {
            const user = { username, userSurname, userAge, userMail };

            navigation.navigate("MemberResult", { user })
        }

    }
    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz.." onChangeText={setUsername} />
            <Input label="Üye Soyadı" placeholder="Üye soyadını giriniz.." onChangeText={setUserSurname} />
            <Input label="Üye Yaşı" placeholder="Üye Yaşını giriniz.." onChangeText={setUserAge} />
            <Input label="Üye E-posta" placeholder="Üye E-posta giriniz.." onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" onPress={handleSumbit} />
        </SafeAreaView>
    )
}

export default MemberSign
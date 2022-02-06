import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import Input from '../components/Input'
import Button from '../components/Button'
const MemberSign = () => {
    const [username, setUsername] = useState('');
    const [userSurname, setUserSurname] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userMail, setUserMail] = useState('');

    const handleSumbit = () => {
        const user = { username, userSurname, userAge, userMail };
    }
    return (
        <SafeAreaView>
            <Input label="Üye Adı" placeholder="Üye ismini giriniz.." onChangeText={setUsername} />
            <Input label="Üye Soyadı" placeholder="Üye soyadını giriniz.." onChangeText={setUserSurname} />
            <Input label="Üye Yaşı" placeholder="Üye Yaşını giriniz.." onChangeText={setUserAge} />
            <Input label="Üye E-posta" placeholder="Üye E-posta giriniz.." onChangeText={setUserMail} />
            <Button text="Kaydı Tamamla" onPress={null} />
        </SafeAreaView>
    )
}

export default MemberSign
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addSubject }) => {
    const [subject, setSubject] = useState(null);
    console.log(subject);
    return(
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} label={'What would you like to focus on?'} onChangeText={setSubject}/>
                <View style={styles.button}>
                    <RoundedButton title="+" size={70} onPress={() => addSubject(subject)}></RoundedButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
    },
    container: {
        
    },
    inputContainer: {
        padding: spacing.lg,
        justifyContent: 'flex-start',
        flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        marginRight: spacing.md
    }
});
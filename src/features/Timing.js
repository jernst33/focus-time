import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
    return (
        <>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title='5' onPress={() => onChangeTime(5)}></RoundedButton>
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title='10' onPress={() => onChangeTime(10)}></RoundedButton>
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title='15' onPress={() => onChangeTime(15)}></RoundedButton>
        </View>
        <View style={styles.timingButton}>
            <RoundedButton size={75} title='30' onPress={() => onChangeTime(30)}></RoundedButton>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    timingButton: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})
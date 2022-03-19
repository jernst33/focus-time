import { useKeepAwake } from 'expo-keep-awake';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Timing } from '../features/Timing';
import { colors } from '../utils/colors';
import { spacing } from '../utils/sizes';
import { Countdown } from './Countdown';
import { RoundedButton } from './RoundedButton';

const SECOND_IN_MS = 1000;

const PATTERN = [
    1 * SECOND_IN_MS,
    1 * SECOND_IN_MS,
    1 * SECOND_IN_MS,
    1 * SECOND_IN_MS,
    1 * SECOND_IN_MS,
]

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {

    useKeepAwake();

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const [minutes, setMinutes] = useState(0.1);

    const onEnd = (reset) => {
        Vibration.vibrate(PATTERN);
        setIsStarted(false);
        setProgress(1);
        reset();
        onTimerEnd(focusSubject);
        clearSubject();
    }

    return (
        <View style={styles.container}>
            <View style={styles.countdown}>
                <Countdown minutes={minutes} isPaused={!isStarted} onProgress={setProgress} onEnd={onEnd}></Countdown>
                <View style={{paddingTop: spacing.xxl}}>
                    <Text style={styles.title}>Focusing on</Text>
                    <Text style={styles.task}>{focusSubject}</Text>
                </View>
            </View>
            <View style={{paddingTop: spacing.sm}}>
                <ProgressBar progress={progress} color={colors.progressBar} style={{height: spacing.sm}}></ProgressBar>
            </View>
            <View style={styles.buttonWrapper}>
                <Timing onChangeTime={setMinutes}></Timing>
            </View>
            <View style={styles.buttonWrapper}>
                {!isStarted && (<RoundedButton title='Start' onPress={() => setIsStarted(true)}></RoundedButton>)}
                {isStarted && (<RoundedButton title='Pause' onPress={() => setIsStarted(false)}></RoundedButton>)}
            </View>
            <View style={styles.clearSubjectWrapper}>
                <RoundedButton title='-' size={50} onPress={clearSubject}></RoundedButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    countdown: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    clearSubjectWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    title: {
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    task: {
        color: colors.white,
        textAlign: 'center'
    }
});
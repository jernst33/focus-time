import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import { Timer } from './src/components/Timer';
import { Focus } from './src/features/Focus';
import { FocusHistory } from './src/features/FocusHistory';
import { colors } from './src/utils/colors';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}></FocusHistory>
        </>
      ) : <Timer focusSubject={currentSubject} 
                 onTimerEnd={(subject) => setHistory([...history, subject])} 
                 clearSubject={() => setCurrentSubject(null)}></Timer>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white
  }
});

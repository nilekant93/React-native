import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = () => {
    const ageNumber = parseFloat(age);

    if (!isNaN(ageNumber)) {
      const lower = Math.round((220 - ageNumber) * 0.65);
      const upper = Math.round((220 - ageNumber) * 0.85);

      setLowerLimit(lower);
      setUpperLimit(upper);
    } else {
      // Handle invalid input
      setLowerLimit(null);
      setUpperLimit(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Your age:</Text>
      <TextInput
        placeholder='Set your age here'
        keyboardType='decimal-pad'
        style={styles.field}
        onChangeText={(text) => setAge(text)}
        value={age}
      />
      <Text style={styles.field}>Limits:</Text>
      <Text style={styles.field}>
        {lowerLimit !== null && upperLimit !== null
          ? `${lowerLimit}-${upperLimit} bpm`
          : ''}
      </Text>
      <Button title='Calculate' onPress={calculateHeartRateLimits} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 50,
  },
  field: {
    marginBottom: 10,
  },
});


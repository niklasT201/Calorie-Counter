/* import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(0);
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    // For demonstration purposes, let's assume scanned data is in the format: "FoodName:Calories"
    const [name, cal] = data.split(':');
    setFoodName(name);
    setCalories(parseInt(cal));
    Alert.alert(
      'Food Scanned!',
      `Name: ${name}\nCalories: ${cal}`,
      [{ text: 'OK', onPress: () => setScanned(false) }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Calorie Tracker</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter food name"
        value={foodName}
        onChangeText={text => setFoodName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter calories"
        keyboardType="numeric"
        value={calories.toString()}
        onChangeText={text => setCalories(parseInt(text))}
      />
      <Button title="Scan QR Code" onPress={() => setScanned(true)} />
      {scanned && (
        <BarCodeScanner
          style={StyleSheet.absoluteFillObject}
          onBarCodeScanned={handleBarCodeScanned}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
 */
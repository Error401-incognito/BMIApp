import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsScreen = ({ route }) => {
  const { bmi } = route.params;

  // Determine BMI category
  let category, message;

  if (bmi < 18.5) {
    category = 'Underweight';
    message = 'You are underweight. Consider gaining some weight for a healthier lifestyle.';
  } else if (bmi >= 18.5 && bmi < 25) {
    category = 'Normal';
    message = 'Congratulations! Your weight is within the normal range for your height.';
  } else {
    category = 'Overweight';
    message = 'You are overweight. Consider adopting a healthier diet and exercise routine.';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Your BMI:</Text>
      <Text style={styles.bmiText}>{bmi.toFixed(2)}</Text>
      <Text style={styles.categoryText}>{category}</Text>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    marginBottom: 8,
  },
  bmiText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'blue', // You can customize the color based on the category
  },
  messageText: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
});

export default ResultsScreen;

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeServiceApp = () => {
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/service/request');
      const data = await response.json();
      setResponseData(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Service App</Text>
      {responseData && <Text style={styles.responseText}>{responseData.message}</Text>}
      <Button title="Fetch Data" onPress={fetchData} />
    </View>
  );
};

const styles = StyleSheet.create({
  // Styles for your app interface
});

export default HomeServiceApp;

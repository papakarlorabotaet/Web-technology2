import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WeatherWidget from './components/WeatherWidget';

const App = () => {
  return (
    // SafeAreaView гарантирует, что контент будет отображаться в безопасной области экрана (например, под вырезом на iPhone)
    <SafeAreaView style={styles.container}>
      {/* Вставляем виджет погоды в основное приложение */}
      <WeatherWidget />
    </SafeAreaView>
  );
};

// Стили для контейнера приложения
const styles = StyleSheet.create({
  container: {
    flex: 1, // Занимает всю доступную высоту экрана
    justifyContent: 'center', // Центрируем содержимое по вертикали
    alignItems: 'center', // Центрируем содержимое по горизонтали
    padding: 20, // Отступы
  },
});

export default App;

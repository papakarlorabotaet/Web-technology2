// components/WeatherWidget.tsx
import React, { useState, useEffect } from 'react';
import { TextInput, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const WeatherWidget = () => {
  // Состояния компонента
  const [city, setCity] = useState(''); // Состояние для города
  const [loading, setLoading] = useState(false); // Состояние для индикатора загрузки
  const [weather, setWeather] = useState<number | null>(null); // Состояние для хранения температуры
  const [error, setError] = useState<string | null>(null); // Состояние для хранения ошибок
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null); // Таймер для задержки ввода

  // Функция для получения данных о погоде
  const fetchWeather = async (city: string) => {
    setLoading(true); // Включаем индикатор загрузки
    setError(null); // Сбрасываем возможные предыдущие ошибки
    setWeather(null); // Очищаем предыдущую температуру перед новым запросом
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500)); // Исскуственная задержка 2.5с

      // Выполняем запрос к API погоды
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ed3563057dc4011ec8ffe7134e2d6646&units=metric`
      );
      // Если запрос успешен, сохраняем температуру
      setWeather(response.data.main.temp);
    } catch (err) {
      // Если произошла ошибка, отображаем ее
      setError('Ошибка при получении данных');
      console.error(err); // Логируем ошибку в консоль
    } finally {
        
      setLoading(false); // Останавливаем индикатор загрузки
      
    }
  };

  // Обработчик изменений в поле ввода
  const handleInputChange = (text: string) => {
    setCity(text); // Обновляем состояние города

    // Если уже существует таймер, сбрасываем его
    if (timer) {
      clearTimeout(timer);
    }

    // Устанавливаем новый таймер, чтобы выполнить запрос через 800ms после последнего ввода
    setTimer(setTimeout(() => fetchWeather(text), 800)); // Задержка 800мс
  };

  return (
    <View style={styles.container}>
      {/* Поле ввода для названия города */}
      <TextInput
        style={styles.input}
        value={city}
        onChangeText={handleInputChange} // Вызываем обработчик при изменении текста
        placeholder="Введите город"
      />
      
      {/* Индикатор загрузки, показывается во время запроса */}
      {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />}
      
      {/* Если произошла ошибка, показываем сообщение об ошибке */}
      {error && <Text style={styles.error}>{error}</Text>}
      
      {/* Если погода получена, показываем температуру */}
      {weather !== null && !loading && (
        <Text style={styles.result}>Температура: {weather}°C</Text>
      )}
    </View>
  );
};

// Стили для компонентов
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingLeft: 10,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
  error: {
    color: 'red',
    marginTop: 20,
  },
  loader: {
    marginTop: 20, // Добавляем отступ, чтобы индикатор не перекрывал текст
  },
});

export default WeatherWidget;

https://github.com/user-attachments/assets/9cb39f10-9d77-489b-ab25-4c54108df1d6



Лаба «Виджет»
Требуется создать приложение с 'виджетом', который позволял бы вводить пользователю запрос, выполнял запрос к выбранному API-сервису и отображал полезные данные пользователю, либо же информировал пользователя об ошибке выполнения запроса.
Примечания:
1.	Допускается любая тематика виджета.
2.	API-сервис нужно подобрать самостоятельно. 
3.	Запрос на API-сервис должен выполняться автоматически после небольшой задержки при вводе пользователем данных для запроса. Кнопок в виджете быть не должно. Желательно реализовать фильтрацию частых запросов при быстром вводе (устранение дребезга при вводе) так, чтобы запрос выполнялся только после некоторой задержки ввода (0.5-1 сек).
4.	При получении ошибки при выполнении запроса, информацию об ошибке нужно залогировать (в JS/TS это можно сделать с использованием функции console.error()), а также отобразить пользователю предупреждение об ошибке в интерфейсе виджета.
5.	Виджет должен быть реализован отдельным компонентом в отдельном файле.
6.	Во время выполнения запроса должен появляться какого-либо вида индикатор выполнения.
7.	Чтобы виджет выглядел прилично можно использовать любую UI-библиотеку (например, https://reactnativepaper.com/, данная библиотека по умолчанию импортирована в стартовый проект https://snack.expo.io/), либо оформить элементы виджета самостоятельно.
Пример виджета: 
Виджет, отображающий погоду во введенном пользователем городе. При вводе пользователем в поле "Название города" значения, виджет ожидает 1 секунду окончания ввода, посылает запрос на погодный сервис, отображая бесконечный прогресс-бар до момента получении ответа, затем скрывает прогресс-бар и обрабатывает ответ. Если ответ успешно получен, то из данных ответа выбираются данные о температуре и отображаются пользователю. Если же произошла ошибка, то пользователю отображается сообщение, что запрос не удалось выполнить.


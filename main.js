
arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]; 

sum = 0;
posElCount = 0;
minEl = arr[0];
indexOfMin = 0;
maxEl = arr[0];
indexOfMax = 0;
negCount = 0;
oddPositiveCount = 0;
evenPositiveCount= 0;
oddSum = 0;
evenSum = 0;
multRes = 1;

for (i = 0; i < arr.length; i++) {
    //task1
    arr[i] > 0 ? (sum += arr[i]) && posElCount++ : null;
    //task2
    arr[i] <= minEl ? (minEl = arr[i]) && (indexOfMin = i) : null;
    //task3
    arr[i] >= maxEl ? (maxEl = arr[i]) && (indexOfMax = i) : null;
    //task4
    arr[i] < 0 ? (negCount++) : null;
    //task5-8
    arr[i] > 0 && arr[i] % 2 !== 0 ?(oddSum += arr[i]) && (oddPositiveCount++) : null;
    arr[i] > 0 && arr[i] % 2 === 0 ?(evenSum += arr[i]) && (evenPositiveCount++) : null;
    //task9
    arr[i] > 0 ? multRes *= arr[i] : null;
 }
//task10
 for (i = 0; i < arr.length; i++) {
   arr[i] < maxEl ? arr[i] = 0 : null;
 }
console.log("Сума позитивних елементів:", sum);
console.log("Кількість позитивних елементів:", posElCount);
console.log("Мінімальний елемент:", minEl);
console.log("Порядковий номер мінімального елемента:", indexOfMin);
console.log("Максимальний елемент:", maxEl);
console.log("Порядковий номер максимального елемента:", indexOfMax);
console.log("Кількість негативних елементів:", negCount);
console.log("Кількість непарних позитивних елементів:", oddPositiveCount);
console.log("Кількість парних позитивних елементів:", evenPositiveCount);
console.log("Сума непарних позитивних елементів:", oddSum);
console.log("Сума парних позитивних елементів:", evenSum);
console.log("Добуток позитивних елементів:", multRes);
console.log("Обнулити всі елементи масиву окрім найбільшого",arr);





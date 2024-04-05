//32.1
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let map = new Map();

map.set(arr1, 'data1');
map.set(arr2, 'data2');
map.set(arr3, 'data3');

console.log(map.get(arr1)); // Выведет: data1
console.log(map.get(arr2)); // Выведет: data2
console.log(map.get(arr3)); // Выведет: data3

//32.2

let obj1 = { key: 'value1' };
let obj2 = { key: 'value2' };
let obj3 = { key: 'value3' };

let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let map = new Map();

map.set(obj1, arr1);
map.set(obj2, arr2);
map.set(obj3, arr3);

console.log(map.get(obj1)); // Выведет: [1, 2]
console.log(map.get(obj2)); // Выведет: [3, 4]
console.log(map.get(obj3)); // Выведет: [5, 6]

//35.1 

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

let keysArray = Array.from(map.keys()); // Получаем массив ключей из коллекции Map

for (let key of keysArray) {
    console.log(key); // Выводим каждый ключ
}

//35.2

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

let entriesArray = Array.from(map.entries()); // Получаем массив элементов [ключ, значение] из коллекции Map

for (let [key, value] of entriesArray) {
    console.log(key + ' - ' + value); // Выводим каждый ключ и его значение
}

// 36.1
let inputs = document.querySelectorAll('input');
let map = new Map();

inputs.forEach((input, index) => {
  map.set(input, index + 1);
  input.addEventListener('click', function() {
    this.value = map.get(this);
  });
});

// 36.2
let numbersArray = [];

inputs.forEach(input => {
  input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      let number = parseInt(this.value);
      if (!isNaN(number)) {
        numbersArray.push(number);
      }
    }
  });

  input.addEventListener('blur', function() {
    console.log("Numbers entered:", numbersArray);
  });
});

//37.1
let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(3); // не добавится, так как уже есть

console.log(set); // выводим коллекцию Set в консоль

// 38.1
let arr = [1, 2, 3, 1, 3, 4];
let set1 = new Set(arr);
console.log(set1);

// 38.2
let set2 = new Set([1, 2, 3]);
set2.add(2); // попытка добавить дубль числа 2
console.log(set2);

// 39.1
let set1 = new Set([1, 2, 3]);
console.log("Размер коллекции Set1:", set1.size);

// 39.2
let set2 = new Set([1, 2, 3]);
console.log("Наличие элемента 3 в коллекции Set2:", set2.has(3));
console.log("Наличие элемента 4 в коллекции Set2:", set2.has(4));

//40.1

// Создание коллекции Set
let set = new Set();

// Добавление элементов в коллекцию
set.add(1);
set.add(2);
set.add(3);

// Перебор коллекции и вычисление суммы элементов
let sum = 0;
for (let elem of set) {
    sum += elem;
}

// Вывод суммы элементов в консоль
console.log("Сумма элементов коллекции Set:", sum);


// 41.1
let set = new Set([1, 2, 3]);

// Преобразование в массив с использованием деструктуризации
let arr1 = [...set];
console.log("Массив, полученный из Set с деструктуризацией:", arr1);

// Преобразование в массив с использованием метода Array.from
let arr2 = Array.from(set);
console.log("Массив, полученный из Set с использованием Array.from:", arr2);

// 41.2
let arr = [1, 2, 3];

// Преобразование массива в коллекцию Set
let set2 = new Set(arr);
console.log("Коллекция Set, полученная из массива:", set2);

// 42.1
// Функция для удаления дубликатов из массива
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Пример использования функции
let arr = [1, 2, 3, 1, 3, 4];
let result = removeDuplicates(arr);
console.log("Массив без дублей:", result);

// 43.1
// Получаем кнопку и все абзацы
let button = document.getElementById('clickButton');
let elems = document.querySelectorAll('p');

// Создаем коллекцию Set для хранения уникальных абзацев
let set = new Set();

// Перебираем абзацы и вешаем на них обработчик клика
elems.forEach(elem => {
    elem.addEventListener('click', function() {
        set.add(this); // Добавляем абзац в коллекцию Set
    });
});

// Добавляем обработчик клика на кнопку
button.addEventListener('click', function() {
    // Перебираем уникальные абзацы и добавляем восклицательный знак в конец текста
    set.forEach(elem => {
        elem.textContent += '!';
    });
});

//45.1
// Даны абзацы
let elems = document.querySelectorAll('p');

// Индексы
console.log("Первый элемент:", elems[0]);
console.log("Второй элемент:", elems[1]);
console.log("Третий элемент:", elems[2]);

// Длина
console.log("Длина псевдомассива:", elems.length);

// Цикл
console.log("Перебор элементов:");
for (let elem of elems) {
    console.log(elem);
}

//46.1

// Даны абзацы
let elems = document.querySelectorAll('p');

// Попытка использования методов массивов для переменной elems
console.log("Метод map():");
try {
    console.log(elems.map(elem => elem.textContent));
} catch (error) {
    console.log("Ошибка:", error.message);
}

console.log("Метод join():");
try {
    console.log(elems.join(", "));
} catch (error) {
    console.log("Ошибка:", error.message);
}

console.log("Метод slice():");
try {
    console.log(elems.slice(1, 3));
} catch (error) {
    console.log("Ошибка:", error.message);
}
//47.1

// Дан двухмерный массив
let test = [
    [1, 2, 3],
    {a: 1, b: 2, c: 3},
    [3, 4, 5],
    {x: 1, y: 2, z: 3}
];

// Перебор массива и проверка каждого элемента
test.forEach((element, index) => {
    let res = Array.isArray(element);
    console.log(`Элемент ${index + 1}: ${res ? 'Массив' : 'Не массив'}`);
});

//48

// Даны абзацы
let elems = document.querySelectorAll('p');

// 48.1
// Преобразование в массив первым способом (цикл)
let arr1 = [];
for (let elem of elems) {
    arr1.push(elem);
}

// Преобразование в массив вторым способом (деструктуризация)
let arr2 = [...elems];

// Преобразование в массив третьим способом (Array.from)
let arr3 = Array.from(elems);

// Вывод результатов
console.log("Массив (первый способ):", arr1);
console.log("Массив (второй способ):", arr2);
console.log("Массив (третий способ):", arr3);

// 48.2
// Получение всех абзацев, кроме первого и последнего, с помощью slice
let slicedElems = Array.from(elems).slice(1, -1);
console.log("Абзацы без первого и последнего:", slicedElems);

//49
// 49.1
// Проверка типа коллекции в свойстве childNodes
let childNodes = document.body.childNodes;
console.log("Тип коллекции в свойстве childNodes:", Object.prototype.toString.call(childNodes));

// 49.2
// Проверка типа коллекции в свойстве children
let children = document.body.children;
console.log("Тип коллекции в свойстве children:", Object.prototype.toString.call(children));

// 49.3
// Проверка типа коллекции, полученной через метод getElementsByClassName
let elementsByClassName = document.getElementsByClassName('example-class');
console.log("Тип коллекции, полученной через getElementsByClassName:", Object.prototype.toString.call(elementsByClassName));

//50

// Давайте сначала определим функцию для вывода информации о коллекции
function logCollectionInfo(collection, name) {
    console.log(`Состояние коллекции ${name}:`);
    console.log(collection);
    console.log(`Количество элементов в коллекции ${name}:`, collection.length);
    console.log("---------------------------------------------");
}

// Получаем родительский элемент и коллекции абзацев
let parent = document.querySelector('div');
let elems1 = document.getElementsByTagName('p'); // HTMLCollection
let elems2 = document.querySelectorAll('p');     // NodeList

// Выводим исходные коллекции
logCollectionInfo(elems1, "HTMLCollection");
logCollectionInfo(elems2, "NodeList");

// Создаем и добавляем новый абзац в родительский элемент
let p = document.createElement('p');
parent.appendChild(p);

// После добавления нового абзаца, HTMLCollection должна обновиться, а NodeList остаться без изменений
logCollectionInfo(elems1, "HTMLCollection (после добавления нового элемента)");
logCollectionInfo(elems2, "NodeList (после добавления нового элемента)");

//51

// Создание нескольких символов
let sym1 = Symbol();
let sym2 = Symbol();
let sym3 = Symbol();

// Вывод созданных символов в консоль
console.log("Символ 1:", sym1);
console.log("Символ 2:", sym2);
console.log("Символ 3:", sym3);

//52

// Создание символов с описаниями
let sym1 = Symbol('Первый символ');
let sym2 = Symbol('Второй символ');
let sym3 = Symbol('Третий символ');

// Вывод символов в консоль
console.log("Символ 1:", sym1);
console.log("Символ 2:", sym2);
console.log("Символ 3:", sym3);

//53.1

// Создание объекта с символьным ключом
let sym = Symbol();
let obj = {a: 1, b: 2, c: 3};
obj[sym] = 'text';

// 53.2

// Вывод объекта в консоль
console.log(obj);

//54

// Создание объекта с ключом типа Symbol
let sym = Symbol();
let obj = {a: 1, b: 2, c: 3};
obj[sym] = 'text';

// Перебор объекта циклом for-in
console.log("Перебор объекта:");
for (let key in obj) {
    console.log(key + ':', obj[key]);
}

//55

// Создание объекта
let obj = {a: 1, b: 2, c: 3};

// Создание символа
let sym = Symbol();

// Добавление функции в объект с ключом-символом
obj[sym] = function() {
    console.log(new Date().toLocaleTimeString());
};

// Вызов функции из объекта
let func = obj[sym];
func();

// 56.1
let obj = {a: 1, b: 2, c: 3};
let sym = Symbol();

obj[sym] = function() {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key];
        }
    }
    return sum;
};

let sumOfObj = obj[sym]();
console.log("Сумма элементов объекта:", sumOfObj);

// 56.2
let arr = [1, 2, 3];
let symArr = Symbol();

arr[symArr] = function() {
    let sum = 0;
    for (let elem of this) {
        sum += elem;
    }
    return sum;
};

let sumOfArr = arr[symArr]();
console.log("Сумма элементов массива:", sumOfArr);

// 56.3
arr.push(4, 5, 6);
let updatedSumOfArr = arr[symArr]();
console.log("Сумма элементов массива после добавления новых элементов:", updatedSumOfArr);

//57

let obj1 = {a: 1, b: 2, c: 3};
let obj2 = {x: 4, y: 5, z: 6};

let sym = Symbol.for('sum');

obj1[sym] = function() {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key];
        }
    }
    return sum;
};

obj2[sym] = function() {
    let sum = 0;
    for (let key in this) {
        if (typeof this[key] === 'number') {
            sum += this[key];
        }
    }
    return sum;
};

console.log("Сумма элементов obj1:", obj1[sym]());
console.log("Сумма элементов obj2:", obj2[sym]());

//58

let sym1 = Symbol.for('test1');
let sym2 = Symbol.for('test2');

let key1 = Symbol.keyFor(sym1);
let key2 = Symbol.keyFor(sym2);

console.log(key1); // Выведет 'test1'
console.log(key2); // Выведет 'test2'

// 59.1
let map = new Map();
let hasIterator = Symbol.iterator in map;
console.log(hasIterator); // Выведет false, так как Map не имеет ключа Symbol.iterator

// 59.2
let set = new Set();
hasIterator = Symbol.iterator in set;
console.log(hasIterator); // Выведет true, так как Set имеет ключ Symbol.iterator

//60 

// Пример с коллекцией Set
let set = new Set([1, 2, 3]);
for (let elem of set) {
    console.log(elem);
}

// Пример с объектом Map
let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (let [key, value] of map) {
    console.log(key, value);
}

// Пример с коллекцией NodeList
let paragraphs = document.querySelectorAll('p');
for (let paragraph of paragraphs) {
    console.log(paragraph.textContent);
}

// ------------------77-------------------

// Получаем таблицу
let table = document.getElementById('myTable');

// Получаем все ячейки таблицы
let cells = table.querySelectorAll('td');

// Пронумеруем каждую ячейку
for (let [index, cell] of cells.entries()) {
    cell.textContent += ' (' + (index + 1) + ')';
}

// -----------------76---------------------

// Получаем таблицу
let table = document.getElementById('myTable');

// Получаем все ячейки таблицы
let cells = table.querySelectorAll('td');

// Пронумеруем каждую ячейку
for (let [index, cell] of cells.entries()) {
    cell.textContent += ' (' + (index + 1) + ')';
}


// --------------75-------------------------

let num = 12345;

// Преобразуем число в строку, затем разбиваем строку на массив символов
// Используем map для преобразования каждого символа обратно в число
// Наконец, с помощью reduce вычисляем сумму всех чисел
let sum = [...String(num)].map(Number).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // Выведет 15


// ------------74------------------------

let str = '12345';
let sum = 0;

// Используем цикл for...of для перебора символов строки
for (let char of str) {
    // Преобразуем символ в число и добавляем его к сумме
    sum += parseInt(char);
}

console.log(sum); // Выведет 15


// -------------73-----------------------

let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function *(){
        for (let key in this){
            yield this[key];
        }
    }
};

// Разложение объекта с использованием оператора spread
let arr = [...obj];

console.log(arr); // [1, 2, 3]


// -----------------------72------------------------

let set = new Set();
set.add('a');
set.add('b');
set.add('c');

// Используем цикл for...of для перебора значений
for (let value of set.values()) {
    console.log(value); // 'a', 'b', 'c'
}

// Или можно разложить с помощью оператора spread
let arr = [...set];
console.log(arr); // ['a', 'b', 'c']

// -----------------71-----------------------

// 71.1----

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

let iter = map.entries();

// Перебираем итератор entries
for (let entry of iter) {
    console.log(entry); // ['a', 1], ['b', 2], ['c', 3]
}

// Деструктурируем при переборе
for (let [key, value] of iter) {
    console.log(key);   // 'a', 'b', 'c'
    console.log(value); // 1, 2, 3
}


// 71.2----

let set = new Set();
set.add('a');
set.add('b');
set.add('c');

let iter = set.entries();

// Перебираем итератор entries
for (let entry of iter) {
    console.log(entry); // ['a', 'a'], ['b', 'b'], ['c', 'c']
}

// Деструктурируем при переборе (значение и ключ будут одинаковыми)
for (let [key, value] of iter) {
    console.log(key);   // 'a', 'b', 'c'
    console.log(value); // 'a', 'b', 'c'
}


// 71.2----

let set = new Set();
set.add('a');
set.add('b');
set.add('c');

let iter = set.entries();

// Перебираем итератор entries
for (let entry of iter) {
    console.log(entry); // ['a', 'a'], ['b', 'b'], ['c', 'c']
}

// Деструктурируем при переборе (значение и ключ будут одинаковыми)
for (let [key, value] of iter) {
    console.log(key);   // 'a', 'b', 'c'
    console.log(value); // 'a', 'b', 'c'
}

// 71.1---- 

let nodeList = document.querySelectorAll('p');

let iter = nodeList.entries();

// Перебираем итератор entries
for (let entry of iter) {
    console.log(entry); // [0, <p>...</p>], [1, <p>...</p>], [2, <p>...</p>], ...
}

// Деструктурируем при переборе
for (let [key, value] of iter) {
    console.log(key);   // 0, 1, 2, ...
    console.log(value); // <p>...</p>, <p>...</p>, <p>...</p>, ...
}

// --------------------70-----------------

// 70.1----

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

let iter = map.keys();

// Перебираем итератор keys
for (let key of iter) {
    console.log(key); // 'a', 'b', 'c'
}


// 70.2----

let set = new Set();
set.add('a');
set.add('b');
set.add('c');

let iter = set.keys();

// Перебираем итератор keys
for (let key of iter) {
    console.log(key); // 'a', 'b', 'c'
}

// -------------69---------------

// 69.1----

let arr = [1, 2, 3];

let iter = arr.values();

for (let elem of iter) {
    console.log(elem); // 1, 2, 3
}

// 69.2----

let set = new Set();

set.add(1);
set.add(2);
set.add(3);

let iter = set.values();

for (let elem of iter) {
    console.log(elem); // 1, 2, 3
}

// -----------68----------

let obj = {
    a: 1,
    b: 2,
    c: 3,
    [Symbol.iterator]: function* () {
        for (let key in this) {
            yield this[key];
        }
    }
};

for (let elem of obj) {
    console.log(elem); // 1, 2, 3
}

// -------67---------

let obj = {a: 1, b: 2, c: 3};

obj[Symbol.iterator] = function* () {
    for (let key in this) {
        yield { key: key, val: this[key] };
    }
};

for (let elem of obj) {
    console.log(elem);
}


// ---------66---------

function *func(obj) {
	for (let key in obj) {
		yield [key, obj[key]];
	}
}

let iter = func({a: 1, b: 2, c: 3});

for (let elem of iter) {
	console.log(elem); // ['a', 1], ['b', 2], ['c', 3]
}


// ------------------65---------------

function* func() {
    for (let i = 1; i <= 3; i++) {
        yield i;
    }
}

// Создаем первый итератор
let elems1 = func();

// Первый проход
for (let elem of elems1) {
    console.log(elem); // 1, 2, 3
}

// Создаем второй итератор
let elems2 = func();

// Второй проход
for (let elem of elems2) {
    console.log(elem); // 1, 2, 3
}


// ---------64-----------

// 64.1-----

function* reverseCountdown() {
    let num = 10;
    while (num >= 0) {
        yield num--;
    }
}

let iter1 = reverseCountdown();
for (let elem of iter1) {
    console.log(elem); // Выводит числа от 10 до 0
}

// 64.2-----

function* decreaseByOne(num) {
    while (num > 0) {
        yield num--;
    }
}

let iter2 = decreaseByOne(5); // Начинаем с числа 5
for (let elem of iter2) {
    console.log(elem); // Выводит числа от 5 до 1
}


// 64.3-----

function* decreaseByHalf(num) {
    while (num >= 1) {
        yield num;
        num /= 2;
    }
}

let iter3 = decreaseByHalf(16); // Начинаем с числа 16
for (let elem of iter3) {
    console.log(elem); // Выводит числа 16, 8, 4, 2, 1
}


// 64.4-----

function* powersOfTwo() {
    let power = 1;
    while (true) {
        yield power;
        power *= 2;
    }
}

let iter4 = powersOfTwo();
for (let i = 0; i < 5; i++) {
    console.log(iter4.next().value); // Выводит первые пять степеней двойки
}

// 64.5--------

function* fibonacci() {
    let [prev, current] = [0, 1];
    while (true) {
        yield current;
        [prev, current] = [current, prev + current];
    }
}

let iter5 = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(iter5.next().value); // Выводит первые десять чисел Фибоначчи
}


// -----------------63-----------------

function* countdown() {
    let num = 5;
    while (num >= 1) {
        yield num--;
    }
}

let iter = countdown();

console.log(iter.next()); // {value: 5, done: false}
console.log(iter.next()); // {value: 4, done: false}
console.log(iter.next()); // {value: 3, done: false}
console.log(iter.next()); // {value: 2, done: false}
console.log(iter.next()); // {value: 1, done: false}
console.log(iter.next()); // {value: undefined, done: true}


// ---------------62---------------

// Получение итератора для коллекции Map
let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
let mapIter = map[Symbol.iterator]();
let mapResult = mapIter.next();
while (!mapResult.done) {
    console.log(mapResult.value);
    mapResult = mapIter.next();
}

// Получение итератора для коллекции NodeList
let nodeList = document.querySelectorAll('p'); // Пример выбора всех параграфов на странице
let nodeListIter = nodeList[Symbol.iterator]();
let nodeListResult = nodeListIter.next();
while (!nodeListResult.done) {
    console.log(nodeListResult.value);
    nodeListResult = nodeListIter.next();
}

// Получение итератора для коллекции HTMLCollection
let htmlCollection = document.getElementsByClassName('example'); // Пример выбора элементов с классом 'example'
let htmlCollectionIter = htmlCollection[Symbol.iterator]();
let htmlCollectionResult = htmlCollectionIter.next();
while (!htmlCollectionResult.done) {
    console.log(htmlCollectionResult.value);
    htmlCollectionResult = htmlCollectionIter.next();
}

// ----------61-------------

// Проверка для массива
let arr = [1, 2, 3];
let arrIteratorFunc = arr[Symbol.iterator];
console.log(typeof arrIteratorFunc); // function

// Проверка для строки
let str = "hello";
let strIteratorFunc = str[Symbol.iterator];
console.log(typeof strIteratorFunc); // function

// Проверка для Set
let set = new Set([1, 2, 3]);
let setIteratorFunc = set[Symbol.iterator];
console.log(typeof setIteratorFunc); // function

// Проверка для Map
let map = new Map([['a', 1], ['b', 2], ['c', 3]]);
let mapIteratorFunc = map[Symbol.iterator];
console.log(typeof mapIteratorFunc); // function

// Проверка для объекта
let obj = { a: 1, b: 2, c: 3 };
let objIteratorFunc = obj[Symbol.iterator];
console.log(typeof objIteratorFunc); // undefined


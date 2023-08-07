//1. Задайте правильні ts типи для класичних js;
// let age = 50;
// let name = "Max";
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => {
//   return 100 + a;
// };

// Відповіді
// let age: number;
// age = 50;

// let personName: string;
// personName = "Max";

// let toggle: boolean;
// toggle = true;

// let empty: null;
// empty = null;

// let notInitialize: undefined;
// notInitialize = undefined;

// let callback: (a: number) => number = (a) => 100 + a;


// 2. Задайте тип для змінної, в яку можна зберегти будь-яке значення.
// let anything = -20;
// anything = "Text";
// anything = {};

//Відповіді
// let anything: any;
// anything = -20;
// anything = "Text";
// anything = {};


//3. Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.
// let some: unknown;
// some = "Text";
// let str: string;
// str = some;

//Відповіді
// let some: unknown;
// some = "Text";
// let str: string;

// if (typeof some === "string") {
//   str = some;
// }


// 4. Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.
// let person = ['Max', 21];

//Відповіль

// let person: [string, number];
//  person = ["Max", 21];


// 5. Опишіть enum умову наступну: він повинен відображати статус завантаження. 
// Завантажується(LOADING) та завантажена(READY).
// Зробіть змінну, яка може приймати або рядок, або число.
// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'
// Вкажіть типи для наступних функцій

// function showMessage(message) {
//   console.log(message);
// }

// function calc(num1, num2) {
//   return num1 + num2;
// }

// function customError() {
//   throw new Error("Error");
// }

// Відповідь:

// enum Load {
//   LOADING,
//   READY,
// }

// const page = {
//     load: Load.READY
// }


// if (page.load === Load.LOADING) {
//   console.log("Сторінка завантажується");
// }
// if (page.load === Load.READY) {
//   console.log("Сторінка завантажена");
// }

// let union: string | number;
// let literal: "enable" | "disable";

// function showMessage(message: string): void {
//   console.log(message);
// }

// function calc (num1: number, num2: number): number {
//   return num1 + num2;
// }

// function customError(): never {
//   throw new Error("Error");
// }


// 6. Створіть свій тип даних на основі наявних даних.

// const page1 = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2 = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };

// type PageType = {
//   title: string;
//   likes: number;
//   accounts: string[];
//   status: "open" | "close";
//   details?: {
//     createAt: Date;
//     updateAt: Date;
//   };
// };

// const page1: PageType = {
//   title: "The awesome page",
//   likes: 100,
//   accounts: ["Max", "Anton", "Nikita"],
//   status: "open",
//   details: {
//     createAt: new Date("2021-01-01"),
//     updateAt: new Date("2021-05-01"),
//   },
// };

// const page2: PageType = {
//   title: "Python or Js",
//   likes: 5,
//   accounts: ["Alex"],
//   status: "close",
// };
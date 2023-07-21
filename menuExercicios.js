import promptSync from "prompt-sync"
import { exercicio1 } from "./moduloExercicio1.js";
import { exercicio2 } from "./moduloExercicio2.js";
import { exercicio3 } from "./moduloExercicio3.js";
import { exercicio4 } from "./moduloExercicio4.js";
import { exercicio5 } from "./moduloExercicio5.js";
import { exercicio6 } from "./moduloExercicio6.js";
import { exercicio7 } from "./moduloExercicio7.js";
import { exercicio8 } from "./moduloExercicio8.js";
import { exercicio9 } from "./moduloExercicio9.js";
import { exercicio10 } from "./moduloexercicio10.js";
let prompt = promptSync()
let resposta;


do {
    resposta = prompt("Informe o número de 1 à 6, para selecionar um exercicio, ou digite sair para finalizar: ")
    switch (resposta) {
        case "1":
            console.log("Você escolheu o exercicio 1")
            exercicio1()
            break;
        case "2":
            console.log("Você escolheu o exercicio 2")
            exercicio2()
            break;
        case "3":
            console.log("Você escolheu o exercicio 3")
            exercicio3()
            break;
        case "4":
            console.log("Você escolheu o exercicio 4")
            exercicio4()
            break;
        case "5":
            console.log("Você escolheu o exercicio 5")
            exercicio5()
            break;
        case "6":
            console.log("Você escolheu o exercicio 6")
            exercicio6()
            break;
        case "7":
            console.log("Você escolheu o exercicio 7")
            exercicio7()
            break;
        case "8":
            console.log("Você escolheu o exercicio 8")
            exercicio8()
            break;
        case "9":
            console.log("Você escolheu o exercicio 9")
            exercicio9()
            break;
        case "10":
            console.log("Você escolheu o exercicio 10")
            exercicio10()
            break;

        default:
            console.log("Essa opção é inválida")
            break;
    }

} while (resposta != "sair");
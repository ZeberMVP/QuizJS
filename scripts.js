const preguntas = [
    {
        nombre: "año",
        pregunta: "¿En qué año apareció JavaScript?",
        respuesta1: "1997",
        respuesta2: "1995",
        respuesta3: "2002",
        respuesta4: "2011"
    },
    {
        nombre: "inventor",
        pregunta: "¿Quién inventó el lenguaje JavaScript?",
        respuesta1: "Markus Persson",
        respuesta2: "Guido van Rossum",
        respuesta3: "Brendan Eich",
        respuesta4: "Steve Wozniak"
    },
    {
        nombre: "estándar",
        pregunta: "¿Cuál es el estándar actual de JavaScript?",
        respuesta1: "ECMAScript 4",
        respuesta2: "ECMAScript 5",
        respuesta3: "ECMAScript 6",
        respuesta4: "ECMAScript 7"
    },
    {
        nombre: "organización",
        pregunta: "¿Bajo que organización se encuentra oficialmente JavaScript?",
        respuesta1: "Mozilla Foundation",
        respuesta2: "Open Source Initiative",
        respuesta3: "Apache Software Foundation",
        respuesta4: "Free Software Foundation"
    },
    {
        nombre: "typeof",
        pregunta: "¿Cuál es el typeof de NaN?",
        respuesta1: "Number",
        respuesta2: "String",
        respuesta3: "null",
        respuesta4: "undefined"
    },
    {
        nombre: "framework",
        pregunta: "¿Cuál de los siguientes no es un framework de JavaScript?",
        respuesta1: "Angular",
        respuesta2: "Vue",
        respuesta3: "Svelte",
        respuesta4: "Laravel"
    },
    {
        nombre: "empresa",
        pregunta: "¿Qué empresa tiene registrada la marca JavaScript?",
        respuesta1: "Oracle",
        respuesta2: "Meta",
        respuesta3: "Google",
        respuesta4: "IBM"
    },
    {
        nombre: "primerNombre",
        pregunta: "¿Cuál fue el primer nombre de JavaScript?",
        respuesta1: "TypeScript",
        respuesta2: "LiveScript",
        respuesta3: "Mocha",
        respuesta4: "ECMAScript"
    },
    {
        nombre: "tiempo",
        pregunta: "¿Cuánto tiempo tardo en desarrollarse la primera versión de JavaScript?",
        respuesta1: "2 años",
        respuesta2: "10 días",
        respuesta3: "4 meses",
        respuesta4: "10 meses"
    },
    {
        nombre: "suma",
        pregunta: "¿Cuánto es 0.1 + 0.2 en JavaScript?",
        respuesta1: "0.3",
        respuesta2: "0.12",
        respuesta3: "NaN",
        respuesta4: "0.30000000000000004"
    }
]
let main = document.querySelector("main");
let form = document.createElement("form");
main.appendChild(form);
preguntas.forEach(element => {
    let fieldset = document.createElement("fieldset");
    form.appendChild(fieldset);

    let legend = document.createElement("legend");
    legend.innerText = element.pregunta;
    fieldset.appendChild(legend);

    let textoRespuesta1 = document.createElement("label");
    textoRespuesta1.setAttribute("for", element.respuesta1 + "-field");
    textoRespuesta1.innerText = element.respuesta1;
    fieldset.appendChild(textoRespuesta1);
    let radioRespuesta1 = document.createElement("input");
    radioRespuesta1.setAttribute("id", element.respuesta1 + "-field");
    radioRespuesta1.setAttribute("name", element.nombre);
    radioRespuesta1.setAttribute("value", element.respuesta1);
    radioRespuesta1.setAttribute("type", "radio");
    fieldset.appendChild(radioRespuesta1);

    let textoRespuesta2 = document.createElement("label");
    textoRespuesta2.setAttribute("for", element.respuesta2 + "-field");
    textoRespuesta2.innerText = element.respuesta2;
    fieldset.appendChild(textoRespuesta2);
    let radioRespuesta2 = document.createElement("input");
    radioRespuesta2.setAttribute("id", element.respuesta2 + "-field");
    radioRespuesta2.setAttribute("name", element.nombre);
    radioRespuesta2.setAttribute("value", element.respuesta2);
    radioRespuesta2.setAttribute("type", "radio");
    fieldset.appendChild(radioRespuesta2);


    let textoRespuesta3 = document.createElement("label");
    textoRespuesta3.setAttribute("for", element.respuesta3 + "-field");
    textoRespuesta3.innerText = element.respuesta3;
    fieldset.appendChild(textoRespuesta3);
    let radioRespuesta3 = document.createElement("input");
    radioRespuesta3.setAttribute("id", element.respuesta3 + "-field");
    radioRespuesta3.setAttribute("name", element.nombre);
    radioRespuesta3.setAttribute("value", element.respuesta3);
    radioRespuesta3.setAttribute("type", "radio");
    fieldset.appendChild(radioRespuesta3);

    let textoRespuesta4 = document.createElement("label");
    textoRespuesta4.setAttribute("for", element.respuesta4 + "-field");
    textoRespuesta4.innerText = element.respuesta4;
    fieldset.appendChild(textoRespuesta4);
    let radioRespuesta4 = document.createElement("input");
    radioRespuesta4.setAttribute("id", element.respuesta4 + "-field");
    radioRespuesta4.setAttribute("name", element.nombre);
    radioRespuesta4.setAttribute("value", element.respuesta4);
    radioRespuesta4.setAttribute("type", "radio");
    fieldset.appendChild(radioRespuesta4);

});

let button = document.createElement("button");
button.setAttribute("type", "submit");
form.appendChild(button);
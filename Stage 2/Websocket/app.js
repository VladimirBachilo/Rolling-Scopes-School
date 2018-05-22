'use strict';

const ws = new WebSocket("ws://wsc.2123.io");
ws.binaryType = "arraybuffer";

const config = {};
let token;

ws.onopen = () => ws.send(JSON.stringify({name: 'bachyla', command: 'challenge accepted'}));

ws.onmessage = event => {
    if(typeof event.data !== 'string') {  
        getBinaryArithmeticResult(event.data);
    } else {
        const e = JSON.parse(event.data);

        if(e.token) config.token = e.token;    
        if(e.next) config.next = e.next;

        console.log(event)

        if(e.task && e.name === 'arithmetic') getArithmeticResult(e.task.sign, e.task.values);
    }    
}; 

function getArithmeticResult(operator, arr) {
    let res;
    
    switch(operator) {
        case "+": res = arr.reduce((a, b) => a + b);
        break;

        case "-": res = arr.reduce((a, b) => a - b);
        break;

        case "*": res = arr.reduce((a, b) => a * b);
        break;    
    }
    
    config.answer = res;
}

function getBinaryArithmeticResult(arr) {
    if(arr.byteLength === 16) {
        config.answer = new Uint16Array(arr).reduce((a, b) => a + b);
    } else {
        config.answer = new Uint8Array(arr).reduce((a, b) => a + b);
    }     
}

ws.send(JSON.stringify({token: config.token, command: config.next, answer: config.answer}));
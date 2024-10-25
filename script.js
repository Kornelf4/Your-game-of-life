let UNIT = 5;
let FPS = 20;
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let timeout = null;
let cursorX = 0;
let cursorY = 0;
let selecting = { x: 0, y: 0 };
let canvasX = null;
let canvasY = null;
let running = false;

function getNeighbours(x, y) {
    let counter = 0;
    for (let i = 0; i < neighbours.length; i++) {
        if (y + neighbours[i].y == -1 || x + neighbours[i].x == -1) continue;
        if (map[y + neighbours[i].y] === undefined || map[y + neighbours[i].y][x + neighbours[i].x] === undefined) continue;
        if (map[y + neighbours[i].y][x + neighbours[i].x]) {
            counter++;
        }
    }
    return counter;
}

function generate2DArray(rows, columns) {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array[i] = [];
        for (let j = 0; j < columns; j++) {
            array[i][j] = false;
        }
    }
    return array;
}

let map = generate2DArray(Math.round(parseFloat(canvas.height) / UNIT), (Math.round(parseFloat(canvas.width) / UNIT)));

function tick() {
    ctx.clearRect(0, 0, parseFloat(canvas.width), parseFloat(canvas.height))
    ctx.fillRect(cursorX, cursorY, 5, 5);
    let toAdd = [];
    if (running) {
        for (let i = 0; i < map.length; i++) {
            for (let i2 = 0; i2 < map[i].length; i2++) {
                if (!map[i][i2]) {
                    toAdd.unshift({ x: i2, y: i, value: rulesDead[getNeighbours(i2, i)] });
                } else {
                    toAdd.unshift({ x: i2, y: i, value: rulesLive[getNeighbours(i2, i)] });
                }
            }
        }
        /*for (let i = 0; i < map.length; i++) {
            for (let i2 = 0; i2 < map[i].length; i2++) {
                if (map[i][i2]) {
                    toAdd.unshift({ x: i2, y: i, value: rulesLive[getNeighbours(i2, i)] });
                }
            }
        }*/
        for (let i = 0; i < toAdd.length; i++) {
            map[toAdd[i].y][toAdd[i].x] = toAdd[i].value;
        }
    }
    for (let i = 0; i < map.length; i++) {
        for (let i2 = 0; i2 < map[i].length; i2++) {
            if (running) {

            }
            if (map[i][i2]) {
                ctx.fillRect(i2 * UNIT, i * UNIT, UNIT, UNIT);
            }
        }
    }
    console.log("tickCalled")
}

function start() {
    timeout = setInterval("tick()", 1000 / FPS);
}

function pause() {
    timeout = null;
}

start()

let rect = canvas.getBoundingClientRect();
canvasX = (canvas.getBoundingClientRect().left).toFixed(5);
canvasY = (canvas.getBoundingClientRect().top).toFixed(5);
window.onmousemove = function (e) {
    cursorX = (e.clientX - canvasX) / (rect.right - canvasX) * parseFloat(canvas.width);
    cursorY = (e.clientY - canvasY) / (rect.bottom - canvasY) * parseFloat(canvas.height);
    selecting.x = Math.floor(cursorX / UNIT);
    selecting.y = Math.floor(cursorY / UNIT);
}
canvas.addEventListener('click', (event) => {
    if (map[selecting.y][selecting.x] == true) {
        map[selecting.y][selecting.x] = false;
    } else {
        map[selecting.y][selecting.x] = true;
    }
})
document.getElementById("unitBox").addEventListener("change", function(e) {
    UNIT = document.getElementById("unitBox").value;
})
document.getElementById("fpsBox").addEventListener("change", function(e) {
    FPS = document.getElementById("fpsBox").value;
    timeout = setInterval("tick()", 1000 / FPS);
})
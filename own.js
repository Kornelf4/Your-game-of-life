var rulesLive = {
    0: false,
    1: false,
    2: true,
    3: true,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false
}
var rulesDead = {
    0: false,
    1: false,
    2: false,
    3: true,
    4: true,
    5: false,
    6: false,
    7: false,
    8: false
}
var neighbours = [
    {x: -2, y: -2},
    {x: 2, y: -2},
    {x: -1, y: -1},
    {x: 1, y: -1},

    {x: -1, y: 1},
    {x: 1, y: 1},
    {x: -2, y: 2},
    {x: 2, y: 2}
]
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        go_up()
        go_down()
    }
    go_up()
    basic.showString("T N T")
})
function go_up () {
    for (let index = 0; index < 4; index++) {
        boat.move(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1000)
    }
    boat.turn(Direction.Right, 90)
    boat.move(1)
    basic.pause(1000)
    boat.turn(Direction.Right, 90)
}
function go_down () {
    for (let index = 0; index < 4; index++) {
        boat.move(1)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.clearScreen()
        basic.pause(1000)
    }
    boat.turn(Direction.Left, 90)
    boat.move(1)
    basic.pause(1000)
    boat.turn(Direction.Left, 90)
}
let boat: game.LedSprite = null
boat = game.createSprite(0, 5)
boat.turn(Direction.Left, 90)

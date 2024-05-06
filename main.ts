input.onButtonPressed(Button.A, function () {
    basic.showString("FB KRAL")
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # #
        . . # . .
        . . # # #
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})

let CELSIUS = 0
let FAHRENHEIT = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(CELSIUS)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(FAHRENHEIT)
})
basic.forever(function () {
    CELSIUS = input.temperature()
    FAHRENHEIT = CELSIUS * 1.8 + 32
})

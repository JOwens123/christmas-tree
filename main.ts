input.onButtonPressed(Button.A, function () {
    Delay += -10
    if (Delay < 1) {
        Delay = 1
    }
})
input.onButtonPressed(Button.B, function () {
    Delay += 10
})
let Delay = 0
Delay = 100
let strip = neopixel.create(DigitalPin.P2, 50, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    basic.pause(Delay)
    strip.rotate(1)
    strip.show()
})

input.onPinPressed(TouchPin.P0, function () {
    setMode()
})
input.onButtonPressed(Button.A, function () {
    Delay += -10
    if (Delay < 1) {
        Delay = 10
    }
})
input.onButtonPressed(Button.AB, function () {
    strip.clear()
    if (Mode >= 6) {
        Mode = 0
    } else {
        Mode += 1
    }
    setMode()
})
input.onButtonPressed(Button.B, function () {
    Delay += 10
})
input.onGesture(Gesture.Shake, function () {
    setMode()
})
function setMode () {
    if (Mode == 0) {
        strip.showRainbow(1, 360)
    } else if (Mode == 1) {
        for (let index = 0; index <= NumLEDs - 1; index++) {
            if (index % 3 == 0) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
            }
        }
    } else if (Mode == 2) {
        for (let index = 0; index <= NumLEDs - 1; index++) {
            if (index % 3 == 0) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
            }
        }
    } else if (Mode == 3) {
        for (let index = 0; index <= NumLEDs - 1; index++) {
            if (index % 3 == 0) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
            }
        }
    } else if (Mode == 4) {
        for (let index = 0; index <= NumLEDs - 1; index++) {
            if (index % 3 == 0) {
                strip.setPixelColor(index, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            }
        }
    } else if (Mode == 5) {
        Rand_r = randint(0, 255)
        Rand_g = randint(0, 255)
        Randb = randint(0, 255)
        for (let index = 0; index <= NumLEDs - 1; index++) {
            if (index % randint(0, 5) == 0) {
                strip.setPixelColor(index, neopixel.rgb(Rand_r, Rand_g, Randb))
            }
        }
    } else {
        strip.setPixelColor(randint(0, 49), neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
}
let Randb = 0
let Rand_g = 0
let Rand_r = 0
let Mode = 0
let Delay = 0
let strip: neopixel.Strip = null
let NumLEDs = 0
NumLEDs = 50
strip = neopixel.create(DigitalPin.P2, NumLEDs, NeoPixelMode.RGB)
Delay = 100
Mode = 0
strip.showRainbow(1, 360)
basic.forever(function () {
    if (Mode < 6) {
        basic.pause(Delay)
        strip.rotate(1)
        strip.show()
    } else {
        basic.pause(randint(0, Delay))
        strip.show()
        strip.setPixelColor(randint(0, 49), neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
    }
})

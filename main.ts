basic.forever(function () {
    serial.writeValue("Api", pins.digitalReadPin(DigitalPin.P1))
    pins.digitalWritePin(DigitalPin.P1, 1)
    if (pins.digitalReadPin(DigitalPin.P1) >= 1) {
        music.playMelody("C5 A B G E D A F ", 500)
    }
})
basic.forever(function () {
    serial.writeValue("Udara", pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) <= 420) {
        music.playMelody("C E B F A D G C5 ", 500)
    }
})

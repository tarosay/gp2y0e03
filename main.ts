let 距離 = 0
serial.redirectToUSB()
basic.forever(function () {
    距離 = 975 - 1.35 * pins.analogReadPin(AnalogReadWritePin.P1)
    serial.writeNumber(距離)
    serial.writeLine("")
    if (距離 < 70) {
        basic.showArrow(ArrowNames.East)
    } else if (距離 > 300) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})

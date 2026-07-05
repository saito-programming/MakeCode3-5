input.onButtonPressed(Button.A, function () {
    スイッチオン = 1
})
input.onButtonPressed(Button.B, function () {
    スイッチオン = 0
    アナログ値 = 0
})
let スイッチオン = 0
let アナログ値 = 0
アナログ値 = 0
スイッチオン = 0
basic.forever(function () {
    if (スイッチオン == 1) {
        アナログ値 += 1
    }
    pins.analogWritePin(AnalogPin.P0, アナログ値)
    basic.showNumber(アナログ値)
})

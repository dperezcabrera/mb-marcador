input.onButtonPressed(Button.A, function () {
    golesLocal += 1
})
input.onGesture(Gesture.Shake, function () {
    marcador = "" + golesLocal + ("-" + golesVisitante)
    basic.showString(marcador)
})
input.onButtonPressed(Button.AB, function () {
    golesLocal = 0
    golesVisitante = 0
})
input.onButtonPressed(Button.B, function () {
    golesVisitante += 1
})
let marcador = ""
let golesVisitante = 0
let golesLocal = 0
golesLocal = 0
golesVisitante = 0

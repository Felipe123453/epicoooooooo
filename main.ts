input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
})
basic.showLeds(`
    # . # . #
    # . # . .
    # # # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.ForeverInBackground)
})

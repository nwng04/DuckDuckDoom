controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    music.play(music.createSong(assets.song`
            quack 2
        `), music.PlaybackMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    music.play(music.createSong(assets.song`
            duck
        `), music.PlaybackMode.UntilDone)
})

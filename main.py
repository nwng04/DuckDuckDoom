def on_b_pressed():
    music.play(music.create_song(assets.song("""
            quack 2
        """)),
        music.PlaybackMode.UNTIL_DONE)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def on_a_pressed():
    music.play(music.create_song(assets.song("""
            duck
        """)),
        music.PlaybackMode.UNTIL_DONE)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

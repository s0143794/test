input.onButtonPressed(Button.A, function () {
    mouse.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (w0) {
        w0.delete()
        w1.delete()
        w2.delete()
    }
    if (w3) {
        w3.delete()
        w4.delete()
        w5.delete()
    }
    if (w6) {
        w6.delete()
        w7.delete()
        w8.delete()
    }
    basic.clearScreen()
    game.resume()
    score = 0
    run = 1
    run2 = 0
    run3 = 0
    time = 1000
})
input.onButtonPressed(Button.B, function () {
    mouse.change(LedSpriteProperty.X, 1)
})
let wall: number[] = []
let time = 0
let run3 = 0
let run2 = 0
let score = 0
let w8: game.LedSprite = null
let w7: game.LedSprite = null
let w6: game.LedSprite = null
let w5: game.LedSprite = null
let w4: game.LedSprite = null
let w3: game.LedSprite = null
let w2: game.LedSprite = null
let w1: game.LedSprite = null
let w0: game.LedSprite = null
let run = 0
let mouse: game.LedSprite = null
mouse = game.createSprite(2, 4)
let list = [
[1, 2, 3],
[0, 3, 4],
[0, 1, 2],
[1, 3, 4],
[2, 3, 4],
[0, 1, 4]
]
run = 0
basic.forever(function () {
    if (run == 1) {
        wall = list[randint(0, 5)]
        w0 = game.createSprite(wall[0], 0)
        w1 = game.createSprite(wall[1], 0)
        w2 = game.createSprite(wall[2], 0)
        w0.set(LedSpriteProperty.Brightness, 50)
        w1.set(LedSpriteProperty.Brightness, 50)
        w2.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            w0.set(LedSpriteProperty.Y, index)
            w1.set(LedSpriteProperty.Y, index)
            w2.set(LedSpriteProperty.Y, index)
            if (index == 2) {
                run2 = 1
            }
            basic.pause(time)
        }
        w0.delete()
        w1.delete()
        w2.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
        }
    }
})
basic.forever(function () {
    if (run2 == 1) {
        run2 = 0
        wall = list[randint(0, 5)]
        w3 = game.createSprite(wall[0], 0)
        w4 = game.createSprite(wall[1], 0)
        w5 = game.createSprite(wall[2], 0)
        w3.set(LedSpriteProperty.Brightness, 50)
        w4.set(LedSpriteProperty.Brightness, 50)
        w5.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            if (index == 2) {
                run3 = 1
            }
            w3.set(LedSpriteProperty.Y, index)
            w4.set(LedSpriteProperty.Y, index)
            w5.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        w3.delete()
        w4.delete()
        w5.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
        }
    }
})
basic.forever(function () {
    if (run3 == 1) {
        run3 = 0
        wall = list[randint(0, 5)]
        w6 = game.createSprite(wall[0], 0)
        w7 = game.createSprite(wall[1], 0)
        w8 = game.createSprite(wall[2], 0)
        w6.set(LedSpriteProperty.Brightness, 50)
        w7.set(LedSpriteProperty.Brightness, 50)
        w8.set(LedSpriteProperty.Brightness, 50)
        for (let index = 0; index <= 4; index++) {
            w6.set(LedSpriteProperty.Y, index)
            w7.set(LedSpriteProperty.Y, index)
            w8.set(LedSpriteProperty.Y, index)
            basic.pause(time)
        }
        w6.delete()
        w7.delete()
        w8.delete()
        if (game.isRunning()) {
            score += 1
            basic.pause(time)
            time += -20
        }
    }
})
basic.forever(function () {
    if (run == 1) {
        if (w0) {
            if (mouse.isTouching(w0) || (mouse.isTouching(w1) || mouse.isTouching(w2))) {
                game.pause()
            }
        }
        if (w3) {
            if (mouse.isTouching(w3) || (mouse.isTouching(w4) || mouse.isTouching(w5))) {
                game.pause()
            }
        }
        if (w6) {
            if (mouse.isTouching(w6) || (mouse.isTouching(w7) || mouse.isTouching(w8))) {
                game.pause()
            }
        }
    }
    if (game.isPaused()) {
        run = 0
        basic.showNumber(score)
    }
})

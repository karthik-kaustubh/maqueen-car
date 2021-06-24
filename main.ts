for (let index = 0; index < 4; index++) {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 128)
    basic.pause(2000)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 128)
    basic.pause(350)
}
maqueen.motorStop(maqueen.Motors.All)

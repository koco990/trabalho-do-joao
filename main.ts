let sensor_direita = 0
let sensor_esquerda = 0
let apito = 0
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
})
basic.forever(function () {
    sensor_direita = 0
    sensor_esquerda = 0
})
basic.forever(function () {
    sensor_direita = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Right)
    sensor_esquerda = Kitronik_Move_Motor.readSensor(Kitronik_Move_Motor.LfSensor.Left)
    apito = Math.abs(sensor_esquerda - sensor_direita)
    if (apito > 10) {
        if (sensor_direita > sensor_esquerda) {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorLeft)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorRight, Kitronik_Move_Motor.MotorDirection.Forward, 30)
        } else {
            Kitronik_Move_Motor.motorOff(Kitronik_Move_Motor.Motors.MotorRight)
            Kitronik_Move_Motor.motorOn(Kitronik_Move_Motor.Motors.MotorLeft, Kitronik_Move_Motor.MotorDirection.Forward, 30)
        }
    } else {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, 30)
    }
})
basic.forever(function () {
	
})

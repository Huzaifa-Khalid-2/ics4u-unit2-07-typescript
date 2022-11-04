/*
 * This program is a truck class.
 *
 * @author  Huzaifa Khalid
 * @version 1.0
 * @since   2020-11-01
 */

import Vehicle from './Vehicle'

class Truck extends Vehicle {
  private licensePlate: string

  constructor(colour: string, maxSpeed: number, licensePlate: string) {
    super(colour, maxSpeed)
    this.licensePlate = licensePlate
  }

  public status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
        --> MaxSpeed: ${super.getMaxSpeed()}
        --> License Plate: ${this.licensePlate}
        --> Colour: ${super.getColour()}`
    )
  }

  public getLicensePlate(): string {
    return this.licensePlate
  }

  public setLicensePlate(newLicensePlate: string): void {
    this.licensePlate = newLicensePlate
  }

  public provideAir(airPressure: number): void {
    super.setSpeed(super.getSpeed() - airPressure / 2)

    if (super.getSpeed() < 0) {
      super.setSpeed(0)
    }
  }
}

export = Truck

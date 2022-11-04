/*
 * This program is a bike class.
 *
 * @author  Huzaifa Khalid
 * @version 1.0
 * @since   2020-11-02
 */

import Vehicle from "./Vehicle";

class Bike extends Vehicle {
  public cadence = 0;

  // getter and setter
  public status(): void {
    console.log(
      `        --> Speed: ${super.getSpeed()}
          --> MaxSpeed: ${super.getMaxSpeed()}
          --> Color: ${super.getColour()}
          --> Cadence: ${this.cadence}\n`
    );
  }

  public getCadence(): number {
    return this.cadence;
  }

  // accelerate() method - increases the cadence
  public accelerate(appliedPower: number): void {
    this.cadence = this.cadence + appliedPower;
    super.setSpeed(this.cadence * 2);
  }

  // ringBell() method - prints a bell sound
  public ringBell(): void {
    console.log("Ding ding!\n");
  }
}

export = Bike;

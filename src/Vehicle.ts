/**
 * This class creates a vehicle
 *
 * By:      Huzaifa Khalid
 * Version: 1.0
 * Since:   2022-10-18
 */

class Vehicle {
  public speed: number = 0;
  public maxSpeed: number;
  public colour: string;

  constructor(colour: string, maxSpeed: number) {
    this.colour = colour;
    this.maxSpeed = maxSpeed;
  }

  // getters
  public getSpeed(): number {
    return this.speed;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public getColour(): string {
    return this.colour;
  }

  public setColour(theColour: string): void {
    this.colour = theColour;
  }

  public setSpeed(theSpeed: number): void {
    this.speed = theSpeed;
  }

  public accelerate(accelerationPower: number, accelerationTime: number): void {
    this.speed = accelerationPower * accelerationTime + this.speed;

    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
  }

  public break(breakPower: number, breakTime: number): void {
    this.speed = this.speed - breakPower * breakTime;

    if (this.speed < 0) {
      this.speed = 0;
    }
  }

  public status(): void {
    console.log(
      `        --> Speed: ${this.speed}
        --> MaxSpeed: ${this.maxSpeed}
        --> Colour: ${this.colour}`
    );
  }
}

export = Vehicle;

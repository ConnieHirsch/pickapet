export class Adoptees {
  public name: string;
  public imagePath: string;
  public description: string;
  public type: string;
  public breed: string;
  public age: number;

  constructor(
    name: string,
    imagePath: string,
    desc: string,
    type: string,
    breed: string,
    age: number
  ) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = desc;
    this.type = type;
    this.breed = breed;
    this.age = age;
  }
}

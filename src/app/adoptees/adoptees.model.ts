export class Adoptees {
  public name: string;
  public description: string;
  public imagePath: string;
  public type: string;
  public breed: string;
  public age: number;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    type: string,
    breed: string,
    age: number
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.type = type;
    this.breed = breed;
    this.age = age;
  }
}

export class Adoptees {
  public name: string;
  public imagePath: string;
  public description: string;
  public type: string;
  public breed: string;
  public age: number;
  public shelter: string;
  public url: string;

  constructor(
    name: string,
    imagePath: string,
    desc: string,
    type: string,
    breed: string,
    age: number,
    shelter: string,
    url: string
  ) {
    this.name = name;
    this.imagePath = imagePath;
    this.description = desc;
    this.type = type;
    this.breed = breed;
    this.age = age;
    this.shelter = shelter;
    this.url = url;
  }
}

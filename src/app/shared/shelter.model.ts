export class Shelter {
  public name: string;
  public street: string;
  public city: string;
  public state: string;
  public zip: string;
  public phone: string;
  public email: string;

  constructor(
    name: string,
    street: string,
    city: string,
    state: string,
    zip: string,
    phone: string,
    email: string
  ) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }
}

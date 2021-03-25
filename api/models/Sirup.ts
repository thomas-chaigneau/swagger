import { TViscosity } from '../../constants/types'

class Sirup {
  name: string;
  price: number;
  flavor: string;
  viscosity: TViscosity;
  constructor(name: string, price: number, flavor: string, viscosity: TViscosity) {
    this.name = name;
    this.price = price;
    this.flavor = flavor;
    this.viscosity = viscosity;
  }
}

export {
  Sirup,
}
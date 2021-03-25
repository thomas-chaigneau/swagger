import { TViscosity } from '../../constants/types';

class Soda {
  name: string;
  price: number;
  isFromFruit: boolean;
  sugarPercentage: number;
  viscosity: TViscosity;
  constructor(name: string, price: number, isFromFruit: boolean, sugarPercentage: number, viscosity: TViscosity = 'low') {
    this.name = name;
    this.price = price;
    this.isFromFruit = isFromFruit;
    this.sugarPercentage = sugarPercentage;
    this.viscosity = viscosity;
  }
}

export {
  Soda,
}
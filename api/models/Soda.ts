import { TViscosity } from '../../constants/types';
import { SchemaObject } from '../../swagger/types';

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

const sodaSchemaObject: SchemaObject = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    isFromFruit: {
      type: "boolean"
    },
    price: {
      type: "integer",
    },
    sugarPercentage: {
      type: "integer",
    },
    viscosity: {
      type: "string",
    }
  },
}

export {
  Soda,
  sodaSchemaObject,
}
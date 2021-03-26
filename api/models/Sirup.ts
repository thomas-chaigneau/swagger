import { TViscosity } from '../../constants/types';
import { SchemaObject } from '../../swagger/types';

class Sirup {
  name: string;
  price: number;
  viscosity?: TViscosity;
  constructor(name: string, price: number, viscosity: TViscosity = 'moderate') {
    this.name = name;
    this.price = price;
    this.viscosity = viscosity;
  }
}

const siropSchemaObject: SchemaObject = {
  type: "object",
  properties: {
    name: {
      type: "string"
    },
    price: {
      type: "number"
    },
    viscosity: {
      type: "string",
    },
  },
}

export {
  Sirup,
  siropSchemaObject,
}
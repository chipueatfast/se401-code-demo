import { IProduct } from "../IProduct/IProduct";

/**
* Concrete Products provide various implementations of the Product interface.
*/
export class ConcreteProduct1 implements IProduct {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

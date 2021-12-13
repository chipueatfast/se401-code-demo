import { Creator } from "../abstractCreator/Creator";
import { IProduct } from "../IProduct/IProduct";
import { ConcreteProduct2 } from "../concreteProducts/ConcreteProduct2";

/**
* Concrete Creators override the factory method in order to change the
* resulting product's type.
*/
export class ConcreteCreator2 extends Creator {
  public factoryMethod(): IProduct {
    return new ConcreteProduct2();
  }
}

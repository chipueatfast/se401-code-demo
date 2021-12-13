import { IAbstractProductB } from './../IAbstractProducts/IAbstractProductB';
import { IAbstractProductA } from './../IAbstractProducts/IAbstractProductA';
import { IAbstractFactory } from './../abstractInterface/IAbstractFactory';
import { ConcreteProductA1, ConcreteProductB1 } from '../ConcreteProducts/ConcreteProducts';

/**
* Concrete Factories produce a family of products that belong to a single
* variant. The factory guarantees that resulting products are compatible. Note
* that signatures of the Concrete Factory's methods return an abstract product,
* while inside the method a concrete product is instantiated.
*/
export class ConcreteFactory1 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB1();
  }
}

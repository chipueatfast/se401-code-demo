import { IAbstractFactory } from './../abstractInterface/IAbstractFactory';
import { IAbstractProductB } from './../IAbstractProducts/IAbstractProductB';
import { IAbstractProductA } from './../IAbstractProducts/IAbstractProductA';
import { ConcreteProductA2, ConcreteProductB2 } from '../ConcreteProducts/ConcreteProducts';

/**
* Each Concrete Factory has a corresponding product variant.
*/
export class ConcreteFactory2 implements IAbstractFactory {
  public createProductA(): IAbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): IAbstractProductB {
    return new ConcreteProductB2();
  }
}

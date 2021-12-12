import { IAbstractProductB } from './../IAbstractProducts/IAbstractProductB';
import { IAbstractProductA } from './../IAbstractProducts/IAbstractProductA';

/**
* These Concrete Products are created by corresponding Concrete Factories.
*/
class ConcreteProductA1 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A1.';
  }
}

class ConcreteProductA2 implements IAbstractProductA {
  public usefulFunctionA(): string {
    return 'The result of the product A2.';
  }
}


/**
* These Concrete Products are created by corresponding Concrete Factories.
*/
class ConcreteProductB1 implements IAbstractProductB {

  public usefulFunctionB(): string {
    return 'The result of the product B1.';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of IAbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B1 collaborating with the (${result})`;
  }
}

class ConcreteProductB2 implements IAbstractProductB {

  public usefulFunctionB(): string {
    return 'The result of the product B2.';
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of IAbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: IAbstractProductA): string {
    const result = collaborator.usefulFunctionA();
    return `The result of the B2 collaborating with the (${result})`;
  }
}

export { ConcreteProductA1, ConcreteProductA2, ConcreteProductB1, ConcreteProductB2 };
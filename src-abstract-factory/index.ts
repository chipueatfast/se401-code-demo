import { IAbstractFactory } from './abstractInterface/IAbstractFactory';
import { ConcreteFactory1 } from './ConcreteFactorys/ConcreteFactory1';
import { ConcreteFactory2 } from './ConcreteFactorys/ConcreteFactory2';

/**
* The client code works with factories and products only through abstract
* types: AbstractFactory and AbstractProduct. This lets you pass any factory or
* product subclass to the client code without breaking it.
*/
function clientCode(factory: IAbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productB.usefulFunctionB());
  console.log(productB.anotherUsefulFunctionB(productA));
}

/**
* The client code can work with any concrete factory class.
*/
console.log('Client: Testing client code with the first factory type...');
clientCode(new ConcreteFactory1());

console.log('');

console.log('Client: Testing the same client code with the second factory type...');
clientCode(new ConcreteFactory2());
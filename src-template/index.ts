
 abstract class HouseSkeleton {
    /**
     * The template method pattern
     */
    public buildHouse(): void {
        this.createFoundation();
        this.designBlueprint();
        this.addMainDoor();

        this.prepareMaterial();
        this.paintHouse();
        this.installWindow();
        this.cleanUpConstruction();
    }

    /**
     * default implementation
     */
    protected createFoundation(): void {
        console.log('AbstractClass says: I am doing the bulk of the work');
    }

    protected designBlueprint(): void {
        console.log('AbstractClass says: But I let subclasses override some operations');
    }

    protected installWindow(): void {
        console.log('AbstractClass says: But I am doing the bulk of the work anyway');
    }

    /**
     *  need to be implemented
     */
    protected abstract addMainDoor(): void;

    protected abstract paintHouse(): void;

    /**
     * hooks, not mandatory
     */
    protected prepareMaterial(): void { }

    protected cleanUpConstruction(): void { }
}

/**
 * implement all abstract operations of the base class.
 */
class MinimalHouse extends HouseSkeleton {
    protected addMainDoor(): void {
        console.log('ConcreteClass1 says: Implemented shut door');
    }

    protected paintHouse(): void {
        console.log('ConcreteClass1 says: Implemented red paint');
    }
}

/**
 * only a fraction of base class' operations.
 */
class PreparedHouse extends HouseSkeleton {
    protected addMainDoor(): void {
        console.log('ConcreteClass2 says: Implemented scroll door');
    }

    protected paintHouse(): void {
        console.log('ConcreteClass2 says: Implemented blue paint');
    }

    protected prepareMaterial(): void {
        console.log('ConcreteClass2 says: bought sand, paint and cement');
    }
}

/**
 * The client code calls the template method to execute the algorithm. Client
 * code does not have to know the concrete class of an object it works with, as
 * long as it works with objects through the interface of their base class.
 */
function clientCode(abstractClass: HouseSkeleton) {
    // ...
    abstractClass.buildHouse();
    // ...
}

console.log('Same client code can work with different subclasses:');
clientCode(new MinimalHouse());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new PreparedHouse());
namespace state {
    class Context {

        private state?: State = undefined;
    
        constructor(state: State) {
            this.transitionTo(state);
        }
    
        public transitionTo(state: State): void {
            console.log(`Context: Transition to ${(<any>state).constructor.name}.`);
            this.state = state;
            this.state.setContext(this);
        }
    
        public request1(): void {
            if (!this.state) {
                throw new Error('state not initialized');
            }
            this.state.handle1();
        }
    
        public request2(): void {
            if (!this.state) {
                throw new Error('state not initialized');
            }
            this.state.handle2();
        }
    }
    
    abstract class State {
        protected context?: Context = undefined;
    
        public setContext(context: Context) {
            this.context = context;
        }
    
        public abstract handle1(): void;
    
        public abstract handle2(): void;
    }
    
    class ConcreteStateA extends State {
        public handle1(): void {
            if (!this.context) {
                throw new Error('context not initialized');
            }
            console.log('ConcreteStateA handles request1.');
            console.log('ConcreteStateA wants to change the state of the context.');
            this.context.transitionTo(new ConcreteStateB());
        }
    
        public handle2(): void {
            console.log('ConcreteStateA handles request2.');
        }
    }
    
    class ConcreteStateB extends State {
        public handle1(): void {
            console.log('ConcreteStateB handles request1.');
        }
    
        public handle2(): void {
            if (!this.context) {
                throw new Error('context not initialized');
            }
            console.log('ConcreteStateB handles request2.');
            console.log('ConcreteStateB wants to change the state of the context.');
            this.context.transitionTo(new ConcreteStateA());
        }
    }
    
    /**
     * The client code.
     */
    const context = new Context(new ConcreteStateA());
    context.request1();
    // ConcreteStateA handles request1.
    // should be "ConcreteStateA wants to change the state of the context."
    context.request2();
    // ConcreteStateB handles request2.
    // should be "ConcreteStateB wants to change the state of the context."
}

import { Subject } from "../interface/subject";
/**
* The RealSubject contains some core business logic. Usually, RealSubjects are
* capable of doing some useful work which may also be very slow or sensitive -
* e.g. correcting input data. A Proxy can solve these issues without any
* changes to the RealSubject's code.
*/
export class RealSubject implements Subject {
  public request(): void {
    console.log('RealSubject: Handling request.');
  }
}

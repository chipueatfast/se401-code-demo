import { ProxyClass } from './proxy/proxy';
import { RealSubject } from './service/realSubject';
import { Subject } from './interface/subject';

/**
* The client code is supposed to work with all objects (both subjects and
* proxies) via the Subject interface in order to support both real subjects and
* proxies. In real life, however, clients mostly work with their real subjects
* directly. In this case, to implement the pattern more easily, you can extend
* your proxy from the real subject's class.
*/
function clientCode(subject: Subject) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new ProxyClass(realSubject);
clientCode(proxy);
// one-to-may relationship of dependencies

// es6

class _Subject {
  constructor() {
    this._observers = [];
  }
  
  subscribe(observer) {
    this._observers.push(observer);
  }
  
  unsubscribe(observer) {
    this._observers = this._observers.filter(obs => observer !== obs);
  }
  
  notify() {
    this._observers.forEach(obs => obs.say());
  }
}

class _Observer1 {
  constructor() {}
  
  say() {
    console.log("Hello, I am the Observer1");
  }
}

class _Observer2 {
  constructor() {}
  
  say() {
    console.log("Hello, I am the Observer2");
  }
}

class _Observer3 {
  constructor() {}
  
  say() {
    console.log("Hello, I am the Observer3");
  }
}

const _subject = new _Subject();

const _observer1 = new _Observer1();
const _observer2 = new _Observer2();
const _observer3 = new _Observer3();

console.log("=========== SUBSCRIBE OBSERVER 1, 2 and 3 ==============");

_subject.subscribe(_observer1);
_subject.subscribe(_observer2);
_subject.subscribe(_observer3);

_subject.notify();

console.log("=========== UNSUBSCRIBE OBSERVER 3 ==============");

_subject.unsubscribe(observer3);

_subject.notify();

console.log("*******************************************************");
console.log("*******************************************************");
console.log("*******************************************************");


// es5

function Subject() {
  this.observers = []; // list of observer functions
}

Subject.prototype = {
  subscribe: function(observer) {
    this.observers.push(observer)
  },
  unsubscribe: function(observer) {
    this.observers = this.observers.filter(function(o) {
      return observer !== o
    });
  },
 notify: function() {
   this.observers.forEach(function(o) {
     return o.call()
   })
 }
};

function observer1 () {
  console.log("Hello, I am the Observer1");
}

function observer2 () {
  console.log("Hello, I am the Observer2");
}

function observer3 () {
  console.log("Hello, I am the Observer3");
}

var subject = new Subject();

console.log("=========== SUBSCRIBE OBSERVER 1, 2 and 3 ==============");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify();

console.log("=========== UNSUBSCRIBE OBSERVER 3 ==============");

subject.unsubscribe(observer3);

subject.notify();


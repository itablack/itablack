class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter((obs) => obs !== observer);
    }
  
    notifyObservers(phoneNumber) {
      this.observers.forEach((observer) => {
        observer.notify(phoneNumber);
      });
    }
  
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    removePhoneNumber(phoneNumber) {
      this.phoneNumbers = this.phoneNumbers.filter((num) => num !== phoneNumber);
    }
  
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        this.notifyObservers(phoneNumber);
        console.log(Dialing ${phoneNumber});
      } else {
        console.log(PhoneNumber {phoneNumber}not found.);
      }
    }
  }
  
  class PhoneNumberObserver {
    notify(phoneNumber) {
      console.log(PhoneNumber: ${phoneNumber});
    }
  }
  
  class DialingObserver {
    notify(phoneNumber) {
      console.log(NowDialing: ${phoneNumber});
    }
  }
  
  // Example:
  const telephone = new Telephone();
  
  const phoneNumberObserver = new PhoneNumberObserver();
  const dialingObserver = new DialingObserver();
  
  telephone.addObserver(phoneNumberObserver);
  telephone.addObserver(dialingObserver);
  
  telephone.addPhoneNumber("1234567890");
  telephone.addPhoneNumber("9876543210");
  
  telephone.dialPhoneNumber("1234567890");
  telephone.dialPhoneNumber("9999999999");
   // Not added, won't dial
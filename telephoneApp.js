class Observer {
    // Method to be called by the telephone class to notify the observer
    update(phoneNumber) {
      // Default behavior: print the phone number
      console.log(phoneNumber);
    }
  }
  
  class Telephone {
    constructor() {
      this.phoneNumbers = [];
      this.observers = [];
    }
  
    // Method to add a new phone number
    addPhoneNumber(phoneNumber) {
      this.phoneNumbers.push(phoneNumber);
    }
  
    // Method to remove a phone number
    removePhoneNumber(phoneNumber) {
      const index = this.phoneNumbers.indexOf(phoneNumber);
      if (index !== -1) {
        this.phoneNumbers.splice(index, 1);
      }
    }
  
    // Method to dial a phone number and notify observers
    dialPhoneNumber(phoneNumber) {
      if (this.phoneNumbers.includes(phoneNumber)) {
        // Notify observers
        this.observers.forEach(observer => observer.update(phoneNumber));
      } else {
        console.log("Phone number not found");
      }
    }
  
    // Method to add an observer
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    // Method to remove an observer
    removeObserver(observer) {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  }
  
  // Create observers
  const printObserver = new Observer();
  const customObserver = {
    update: function(phoneNumber) {
      console.log("Now Dialling", phoneNumber);
    }
  };
  
  // Create telephone instance
  const telephone = new Telephone();
  
  // Add observers to telephone instance
  telephone.addObserver(printObserver);
  telephone.addObserver(customObserver);
  
  // Test adding phone numbers
  telephone.addPhoneNumber("2347023232");
  
  // Test dialing a phone number
  telephone.dialPhoneNumber("2347023232");

   // Test remove a phone number
   telephone.removePhoneNumber("2347023232");
  
  
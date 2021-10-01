class List {
  #list;

  constructor(initialValue = []) {
    this.#list = initialValue;
  }

  addPerson(person) {
    if (person) {
      const nameValidation = validateName(person.name);
      const ageValidation = validateAge(person.age);

      if (nameValidation.isValid && ageValidation.isValid) {
        this.#list.push(
          new Person(person.name, person.age, this.#list.length + 1)
        );
        return { error: false };
      } else {
        return {
          nameError: nameValidation.error,
          ageError: ageValidation.error,
        };
      }
    } else {
      throw new Error(
        "Must send a Person Object when callind addPerson method!"
      );
    }
  }

  get getList() {
    return [...this.#list];
  }

  removePerson(id) {
    const index = this.#list.findIndex((person) => person.getId === id);
    this.#list.splice(index, 1);
  }

  sortByName(orientation) {
    if (orientation === "as") {
      return [...this.#list].sort((p1, p2) => {
        if (p1.getName.toLowerCase() > p2.getName.toLowerCase()) {
          return 1;
        } else if (p1.getName.toLowerCase() < p2.getName.toLowerCase()) {
          return -1;
        } else {
          // Names are the same
          if (p1.getAge > p2.getAge) {
            return 1;
          } else if (p1.getAge < p2.getAge) {
            return -1;
          } else {
            // Same name same age
            return 0;
          }
        }
      });
    } else {
      return [...this.#list].sort((p1, p2) => {
        if (p1.getName.toLowerCase() < p2.getName.toLowerCase()) {
          return 1;
        } else if (p1.getName.toLowerCase() > p2.getName.toLowerCase()) {
          return -1;
        } else {
          // Names are the same
          if (p1.getAge > p2.getAge) {
            return 1;
          } else if (p1.getAge < p2.getAge) {
            return -1;
          } else {
            // Same name same age
            return 0;
          }
        }
      });
    }
  }

  sortByAge(orientation) {
    if (orientation === "as") {
      return [...this.#list].sort((p1, p2) => {
        if (p1.getAge > p2.getAge) {
          return 1;
        } else if (p1.getAge < p2.getAge) {
          return -1;
        } else {
          // Ages are the same
          if (p1.getName.toLowerCase() > p2.getName.toLowerCase()) {
            return 1;
          } else if (p1.getName.toLowerCase() < p2.getName.toLowerCase()) {
            return -1;
          } else {
            // Same name same age
            return 0;
          }
        }
      });
    } else {
      return [...this.#list].sort((p1, p2) => {
        if (p1.getAge < p2.getAge) {
          return 1;
        } else if (p1.getAge > p2.getAge) {
          return -1;
        } else {
          // Ages are the same
          if (p1.getName.toLowerCase() > p2.getName.toLowerCase()) {
            return 1;
          } else if (p1.getName.toLowerCase() < p2.getName.toLowerCase()) {
            return -1;
          } else {
            // Same name same age
            return 0;
          }
        }
      });
    }
  }

  getTotal() {
    return this.#list.length;
  }
}
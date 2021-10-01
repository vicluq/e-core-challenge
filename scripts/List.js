class List {
  #list;

  constructor(initialValue = []) {
    this.#list = initialValue;
  }

  addPerson(person) {
    if (person) this.#list.push(person);
    else
      throw new Error(
        "Must send a Person Object when callind addPerson method!"
      );
  }

  get getList() {
    return this.#list;
  }

  removePerson(index) {
    // splice
  }

  sortByName() {}

  sortByAge() {}

  // Se der tempo
  editPerson(newData) {
    // create setter in Person class
  }

  getTotal() {
    return this.#list.length;
  }
}

/**
 * when clicking sort button, call the sort method => pass to render list function the new list and re render it
 * same idea when adding, removing, etc
 */

class Person {
  // Private content can't change/access it with dot notation. # prevents double naming
  #name;
  #age;
  #classification;

  constructor(name, age) {
    this.#age = age;
    this.#name = name;

    if (age >= 0 && age <= 12) this.#classification = "Criança";
    else if (age >= 13 && age <= 19) this.#classification = "Adolescente";
    else if (age >= 20 && age <= 65) this.#classification = "Adulto";
    else this.#classification = "Criança";
  }

  get getName() {
    return this.#name
  }

  get getAge() {
    return this.#age;
  }

  get getClassification() {
    return this.#classification;
  }
}

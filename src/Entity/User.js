export class User {
  #id;
  #firstName;
  #lastName;
  #email;
  #password;
  #discount;

  constructor(id, firstName, lastName, email, password, discount) {
    this.#id = id;
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#email = email;
    this.#password = password;
    this.#discount = discount;
  }

  setId(id) {
    this.#id = id;
    return this;
  }

  getId() {
    return this.#id;
  }

  setFirstName(firstName) {
    this.#firstName = firstName;
    return this;
  }

  getFirstName() {
    return this.#firstName;
  }

  setLastName(firstName) {
    this.#firstName = firstName;
    return this;
  }

  getLastName() {
    return this.#lastName;
  }

  setEmail(email) {
    this.#email = email;
    return this;
  }

  getEmail() {
    return this.#email;
  }

  setPassword(password) {
    this.#password = password;
    return this;
  }

  getPassword() {
    return this.#password;
  }

  setDiscount(discount) {
    this.#discount = discount;
    return this;
  }

  getDiscount() {
    return this.#discount;
  }

}

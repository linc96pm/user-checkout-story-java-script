import request from '../../mock/requests/userRequest';

export class UserRequest {

  #userRepository;
  #userFactory;

  constructor(
    userRepository,
    userFactory
  ) {
    this.#userRepository = userRepository;
    this.#userFactory = userFactory;
  }

  async fetch(url) {
    return request(url).then((data) => {
      this.#userRepository.setUser(
        this.#userFactory.createEntity(data)
      )
    })
  }
}

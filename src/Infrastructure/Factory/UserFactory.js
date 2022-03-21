import { checkIsNumber, checkIsString } from '../../Helper/typeGuards';
import { User } from '../../Entity/User';

export class UserFactory {
  constructor() {
  }

  createEntity(data) {
    const { id, firstName, lastName, email, password, discount } = data || {};

    return new User(
      checkIsString(id) ? id : '',
      checkIsString(firstName) ? firstName : '',
      checkIsString(lastName) ? lastName : '',
      checkIsString(email) ? email : '',
      checkIsString(password) ? password : '',
      checkIsNumber(discount) ? discount : 0,
    )
  }
}

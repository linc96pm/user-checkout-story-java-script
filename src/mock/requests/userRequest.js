import { users } from '../data/users';

export default function request(url) {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr('/users/'.length), 10);
    users[userID]
      ? resolve(users[userID])
      : reject({
        message: 'User with such id: ' + userID + ' isn\'t found.',
      });
  });
}

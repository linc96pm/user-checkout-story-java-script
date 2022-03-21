// Define our state and initialize it
let user;

// Define the functions that will expose that state
const UserRepository = {
  setUser: (newUser) => { user = newUser },
  getUser: () => user
}

// Disallow new properties on our object
Object.freeze(UserRepository);

export default UserRepository;

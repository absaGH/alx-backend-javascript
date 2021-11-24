import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  const allPromises = Promise.all([promise1, promise2]);
  allPromises
    .then((values) => console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  promise1.then((result) => ({ status: 'satisfied', value: result }));
  promise2.catch((error) => ({ status: 'failed', value: error.toString() }));
  return Promise.resolve([promise1, promise2]);
}

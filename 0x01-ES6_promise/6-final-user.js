import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  let photo;
  let user;
  try {
    photo = await uploadPhoto(fileName);
  } catch (err) {
    photo = err.toString();
  }
  try {
    user = await signUpUser(firstName, lastName);
  } catch (err) {
    user = err.toString();
  }
  return { photo, user };
}

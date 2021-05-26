import { auth } from "./../firebase";

export const signUpWithEmailAndPassword = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};
export const signInWithEmailAndPassword = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};
export const currentUserDetails = auth.currentUser;
// export const currentUserDetails = () => {
//   return auth.currentUser;
// };
export const signOutCurrentUser = (e) => {};
export const userDetails = auth.onAuthStateChanged(function (user) {
  if (user) {
    console.log("user is", user);
  } else {
    console.log("no user");
  }
});

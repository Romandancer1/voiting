export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('voting_app_user'));
  if (user) {
    return { 'email': user.email };
  } else {
    return {};
  }
}
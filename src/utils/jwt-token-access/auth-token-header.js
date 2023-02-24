export default function authHeader() {

  const obj = JSON.parse(localStorage.getItem("authUser"))
//console.log('objeto ', obj)
  if (obj && obj.accessToken) {
    return { Authorization: obj.accessToken }
  } else {
    return {}
  }
}

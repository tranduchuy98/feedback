

function submitForm(e, form) {
const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://learn-be-37y5.onrender.com/auth/getForm", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error))
}
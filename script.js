//let url = "https://reqres.in/api/users?page=2";
let url = "https://reqres.in/api/users";
fetch(url)
  .then(function (res) {
    //console.log(res);
    return res.json();
  })
  .then(function (fetched_details) {
    console.log(fetched_details.data);
    displayUI(fetched_details.data);
  })
  .catch(function (err) {
    console.log("err:" + err);
  });
const cointainer = document.querySelector(".main");
function displayUI(data) {
  data.forEach(function (data) {
    console.log(data);
    var div = document.createElement("div");
    div.classList.add("card");
    var category = document.createElement("p");
    category.innerHTML = data.first_name;
    var img = document.createElement("img");
    img.src = data.avatar;
    var title = document.createElement("p");
    title.innerHTML = data.last_name;
    var email = document.createElement("div");
    email.textContent = data.email;
    div.append(img, category, title, email);

    cointainer.append(div);
  });
}

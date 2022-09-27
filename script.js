// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// search input
const searchUser = document.getElementById("searchUser");

// search input event listener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  searchText = e.target.value;
  if (searchText !== "") {
    // make http call to github API
    github
      .get(searchText)
      .then((user) => {
        if (user.profile.message === "Not Found") {
          // show alert user not found
          ui.showAlert("User not found", "alert alert-danger");
        } else {
          // show user profile
          ui.showProfile(user.profile);
        }
      })
      .catch((err) => console.error(err));

    // console.log(searchText);
  } else {
    // clear user profile
    ui.clearProfile();
  }
});

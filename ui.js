class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  // Show profile
  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3 text-center">
            <img class="img-fluid border border-primary rounded-circle mb-3" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary w-100 rounded-pill mb-4">View Profile</a>
        </div>

        <div class="col-md-9">
          <span class="badge text-bg-primary">Public Repos: ${user.public_repos}</span>
          <span class="badge text-bg-secondary">Public Gists: ${user.public_gists}</span>
          <span class="badge text-bg-success">Followers: ${user.followers}</span>
          <span class="badge text-bg-info">Following: ${user.following}</span>

          <br><br>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Company: ${user.company}</li>
            <li class="list-group-item">Website/Blog: ${user.blog}</li>
            <li class="list-group-item">Location: ${user.location}</li>
            <li class="list-group-item">Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
    </div>

    <h3 class="fs-4 mb-3">Latest Repos</h3>
    <div id="repos"></div>
     `;
  }

  // Clear profile
  clearProfile() {
    this.profile.innerHTML = "";
  }

  // Clear Alert
  clearAlert() {
    const currentAlert = document.querySelector(".alert");

    if (currentAlert) {
      currentAlert.remove();
    }
  }

  //Show Alert Message
  showAlert(message, className) {
    // Clear any remaining Alert
    this.clearAlert();

    // creat div
    const div = document.createElement("div");
    div.className = className;

    // Add text
    div.appendChild(document.createTextNode(message));

    // Get & append to parent
    const container = document.querySelector(".searchContainer");

    // Get search box
    const search = document.querySelector(".search");

    // Insert an Alert
    container.insertBefore(div, search);

    // Timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
}

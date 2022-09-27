class Github {
  constructor() {
    this.client_id = "";
    this.client_secret = "";
    this.token = "";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // GET USER
  async get(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
      {
        headers: {
          Authorization: `token ${this.token}`,
        },
      },
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`,
      {
        headers: {
          Authorization: `token ${this.token}`,
        },
      },
    );

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos,
    };
  }
}

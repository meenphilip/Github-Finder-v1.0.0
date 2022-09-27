class Github {
  constructor() {
    this.client_id = "1b84a4152d287846a1af";
    this.client_secret = "550d899c6bea14328c08ea12e1b9d22b88c8811e";
    this.token = "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";
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

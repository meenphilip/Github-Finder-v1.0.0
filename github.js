class Github {
  constructor() {
    this.client_id = "1b84a4152d287846a1af";
    this.client_secret = "e92af4625335db4259b507144909cc077a2cc98e";
  }

  // GET USER
  async get(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`,
    );
    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

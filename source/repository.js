export default class GithubRepository {
  static getReadMe(username, repository) {
    return fetch(
      `https://api.github.com/repos/${username}/${repository}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3.html"
        }
      }
    ).then(response => response.json());
  }

  static getUser(username) {
    return fetch(`https://api.github.com/users/${username}`).then(response =>
      response.json()
    );
  }

  static getRepository(username) {
    return fetch(`https://api.github.com/users/${username}/repos`).then(
      response => response.json()
    );
  }
}

let userRepos = []

async function fetchGithubRepositories(username) {
  await fetch(`https://api.github.com/users/italocavalcanti3/repos`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      userRepos.push({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
      })
    });
  });

  console.log(userRepos);
}

fetchGithubRepositories('italocavalcanti3');
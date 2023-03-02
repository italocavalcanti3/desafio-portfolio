async function fetchGithubRepositories(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=8`);
  const repos = await response.json();
  return repos;
}

async function main() {
  const repos = await fetchGithubRepositories('italocavalcanti3');
  const repositories = document.getElementById('repositories');

  repos.forEach(repo => {
    const repoDiv = document.createElement('button');

    const repository = {
      id: repo.id,
      name: repo.name,
      description: repo.description ?? '-',
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count
    };

    repoDiv.innerHTML = `<div class="repository">
                          <div class="repo-name">
                            <img src="./assets/folder.svg" alt="Ícone de pasta">
                            <h1>${repository.name}</h1>
                          </div>
                          <span class="repo-description">${repository.description}</span>
                          <div class="repo-footer">
                            <div class="engages">
                              <div class="engage">
                                <img src="./assets/star.svg" alt="Ícone de estrela">
                                <span>${repository.stars}</span>
                              </div>
                              <div class="engage">
                                <img src="./assets/git-branch.svg" alt="Ícone de branch">
                                <span>${repository.forks}</span>
                              </div>
                            </div>
                            <div class="language">
                              <img src="./assets/elipse.svg" alt="Ícone de elipse">
                              <span>${repository.language}</span>
                            </div>
                          </div>
                        </div>`;

    repoDiv.onclick = () => {
      window.open(repository.url);
    }

    repositories.appendChild(repoDiv);

  });

  const divs = document.querySelectorAll('.repo-description');
  let maxHeight = 0;
  divs.forEach(description => {
    if (description.clientHeight > maxHeight) {
      maxHeight = description.clientHeight;
    }
  });
  divs.forEach(description => {
    const heightRem = maxHeight / 16;
    description.style.flexBasis = `${heightRem}rem`
    console.log(heightRem * 16);
  })
}

main()
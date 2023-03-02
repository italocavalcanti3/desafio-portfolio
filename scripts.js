const reposInfo = [];

async function getUserData(username) {
  const userInfo = await fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => response.json())
  .then(data => { return data });
  
  reposInfo.push({
    name: userInfo.name,
    url: userInfo.html_url,
    description: userInfo.description,
  })

  console.log(reposInfo)
}

getUserData('italocavalcanti3');

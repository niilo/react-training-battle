export async function fetchPopularRepos(language) {
  const encodedURI = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );
  const init = {
    method: "GET",
    mode: "cors",
    cache: "default"
  };
  let data = await (await fetch(encodedURI, init)).json();
  return data.items;
  /* same without async/await 
  return fetch(encodedURI, init)
    .then(reponse => {
      return reponse.json();
    })
    .then(data => {
      return data.items;
    });
  */
}

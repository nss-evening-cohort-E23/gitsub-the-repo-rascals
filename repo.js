const repos = [
  {
    id: 1,
    name: 'repo1',
    desc: 'desc',
  },
  {
    id: 2,
    name: 'repo2',
    desc: 'desc',
  },
]



const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

const cardsOnDom = (array) => {
  let domString = '';
  for (const repo of array) {
    domString +=
    `<div class="col">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <p>${repo.desc}</p>
      </div>
      </div>
    </div>
    `
  }

  renderToDom('#cards', domString);
}

cardsOnDom(repos);

const form = document.querySelector('#repoform');

const addRepo = (e) => {
  e.preventDefault();

  const newRepoObj = {
    id: repos.length + 1,
    name: document.querySelector('#reponame').value,
    desc: document.querySelector('#repodesc').value
  }
  
  repos.push(newRepoObj);
  cardsOnDom(repos);
  form.reset();
}

form.addEventListener('submit', addRepo);
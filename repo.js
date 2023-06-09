import { repos } from "../data/repos.js";

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}

const cardsOnDom = (array) => {
  let domString = '';
  
  for (const [index, repo] of array.entries()) {
    domString +=
    `<div class="col">
      <div class="card">
      <div class="card-body">
        <h5 class="card-title">${repo.name}</h5>
        <p>${repo.desc}</p>
        <p>${repos[index].languages[0].language}</p>
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
    desc: document.querySelector('#repodesc').value,
    languages: [
      {
        language: document.querySelector('#repolang').value,
      }
    ],
    isPinned: false
  }
  
  repos.push(newRepoObj);
  cardsOnDom(repos);
  form.reset();
}

form.addEventListener('submit', addRepo);

import { repos } from "../data/repos.js";
console.log(repos)

const pinnedRepos = [
  {
    id: 1,
    name: "getting-started",
    description: "beginners workshop"
  },
  {
    id: 2,
    name: "word generator",
    description:"random word generator"
  }
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}


const cardsOnDom = (array) => {
let domString = "";
for (const repo of array){
  domString += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${repo.name}</h5>
    <p class="card-text">${repo.description}</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>`;
}
renderToDom("#pinned-repos", domString);

}
cardsOnDom(pinnedRepos);
cardsOnDom(repos)

// create form 

const form = document.querySelector('#form');

const createRepo = (e) =>{
  e.preventDefault();

  const newRepoObject = {
    id: pinnedRepos.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value
  }

  pinnedRepos.push(newRepoObject);
  cardsOnDom(pinnedRepos);
  form.reset();
}
form.addEventListener('submit', createRepo);

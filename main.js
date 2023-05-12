import { repos } from "../data/repos.js";
console.log(repos)

const pinnedRepos = [
  {
    id: 1,
    name: "getting-started",
    description: "beginners workshop",
    isPinned: true,
  },
  {
    id: 2,
    name: "word generator",
    description:"random word generator",
    isPinned: true,
  },
  {
    id: 3,
    name: "rocket power",
    description: "makes a rocket",
    isPinned: false
  }

];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
}


const cardsOnDom = (array) => {
let domString = "";
  for (const repo of array){
  domString += (repo.isPinned ?
  `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${repo.name}</h5>
    <p class="card-text">${repo.description}</p>
    <p class="card-text">${repo.isPinned}</p>
    <a href="#" class="card-link">Card link</a>
  </div>
</div>` : ""
  );
}
renderToDom("#pinned-repos", domString);
} 
cardsOnDom(pinnedRepos);




// create form 

const form = document.querySelector('#form');

const createRepo = (e) =>{
  e.preventDefault();

  const newRepoObject = {
    id: pinnedRepos.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    isPinned: true
  }
  pinnedRepos.push(newRepoObject);
  cardsOnDom(pinnedRepos)
  form.reset();
}
form.addEventListener('submit', createRepo);

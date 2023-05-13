console.log('projects page');

const projects = [
    {
        id: 1,
        name: "Gossip Girl Fan Page",
        description: "All things Gossip Girl",

    },

    {
        id: 2,
        name: "Gumball Counting App",
        description: "At last I can win that game",
    },

    {
        id: 3,
        name: "Top Secret",
        description: "Top secret",
    },

    {
        id: 4,
        name: "Only Blurry Pictures of Cats",
        description: "AHHHHH",
    },

    {
        id: 5,
        name: "All My Jams",
        description: "No jelly in here",
    },
];

const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
    let domString = "";
    for (const project of array) {
        domString += `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${project.name}</h5>
          <h7 class="card-text">${project.description}</h7>
        </div>
      </div>`
    };

    console.log("domString")
    renderToDom("#projects-list", domString);
};
cardsOnDom(projects)

const form = document.querySelector('#form');

const createProject = (e) => {
    e.preventDefault();

const newProjectObj = {
    id: projects.length + 1,
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,

 } 
 
 projects.push(newProjectObj);
 cardsOnDom(projects);
 form.reset();
 };

 form.addEventListener('submit', createProject);
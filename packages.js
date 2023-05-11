const packages = [
  {
    id: 1,
    pkgName: "Docker",
    pkgDescript: "Vehicula, gravida ipsum condimentum sed sed. Ad, parturient fusce taciti. Venenatis accumsan luctus varius sem varius maecenas euismod ipsum placerat."
  },
  {
    id: 2,
    pkgName: "NuGet",
    pkgDescript: "Dictumst ipsum sociosqu tincidunt vulputate! Luctus id dapibus proin. Ac lacinia turpis mi! Rhoncus lacinia facilisis conubia pharetra felis vivamus feugiat pulvinar primis eget leo?"
  }, 
  {
    id: 3,
    pkgName: "RubyGems",
    pkgDescript: "Parturient fringilla porta platea ac class mattis nostra pellentesque, felis tristique penatibus molestie. Litora elementum commodo mattis imperdiet lacinia nascetur est class."
  },
  {
    id: 4,
    pkgName: "npm",
    pkgDescript: "Aenean porta amet, eros fringilla sociosqu et etiam. Habitasse ultricies imperdiet elit. Dui nisl sociosqu consectetur. Purus pretium eleifend, ante nisl risus tincidunt nibh ornare senectus."},
  {
    id: 5,
    pkgName: "Docker",
    pkgDescript: "Nunc consequat rhoncus sollicitudin nam ipsum adipiscing pulvinar hac vehicula. Morbi velit sem fames ipsum augue volutpat. Velit nascetur lacinia neque blandit adipiscing hac. Urna cras sagittis aenean faucibus felis aliquet congue penatibus arcu torquent!"
  },
  {
    id: 6,
    pkgName: "Containers",
    pkgDescript: "Ante aliquet eu iaculis condimentum augue blandit pretium blandit non consectetur vestibulum. Urna felis mauris pretium cum vehicula ad nisl magnis velit. Mi semper viverra integer facilisis penatibus ultrices."
  },
];




const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const packagesOnDom = (packages) => {
  let domString ="";
  for (const package of packages) {
    domString += `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${package.pkgName}</h5>
      <p class="card-text">${package.pkgDescript}</p>
      <button class="btn btn-outline-dark" id="pkgLearn">Learn More</button>
      <button class="btn btn-outline-dark" id="pkgDelete--${package.id}">Delete</button>
    </div>
  </div>`;
  }

  renderToDom("#pkgCards", domString);
};


const startApp = () => {
  packagesOnDom(packages);
}

startApp();




//console.log('packages page');

//add function to the delete buttons
//target the div
const deleteCards = document.querySelector("#pkgCards");

//add event listener
deleteCards.addEventListener('click', (e) => {
  
  if (e.target.id.includes("pkgDelete")) {
  const [, id] = e.target.id.split("--");

  const index = packages.findIndex(e => e.id === Number(id));

  packages.splice(index, 1);

  packagesOnDom(packages);
  }

})



//form function

const form = document.querySelector('#form');

const createPkg = (e) => {
  e.preventDefault();

  const newPkgObj = {
    id: packages.length + 1,
    pkgName: document.querySelector("#pkg-name").value,
    pkgDescript: document.querySelector("#pkg-descript").value
  }
  
  packages.push(newPkgObj);
  packagesOnDom(packages);
  form.reset();

};

form.addEventListener('submit', createPkg);

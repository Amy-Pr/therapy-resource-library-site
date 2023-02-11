const template = document.querySelector("template");
const resources = document.querySelector("#resourcesContainer");
const btnFilter = document.querySelectorAll(".btnFilter");
let category="all"; //loads with all shown, can change later
let filteredDataResources = [];

const dataResources = [
    {title: "The Literacy Shed",
     link: "https://www.literacyshed.com/",
     description: "A collection of short videos, mostly animated, some wordless.",
     tags: ["all", "videos", "language"]
    },

    {title: "Boom Cards",
     link: "https://wow.boomlearning.com/",
     description: "Great activities for on-screen use.",
     tags: ["all", "language", "articulation", "fluency", "pragmatics",  "games"]
    },

    {title: "ReadWorks",
     link: "https://www.readworks.org/",
     description: "Tons of free reading material searchable by grade, goals, and genre.",
     tags: ["all", "stories", "expository text"]
    },

    {title: "Baamboozle",
     link: "https://www.baamboozle.com/",
     description: "Tons of card-based language games, some already created by teachers and therapists. Create your own!",
     tags: ["all", "articulation", "games", "language"]
    }
    
  ]


// CLEARING AND FILLING CONTAINER WITH CARDS ON CLICK
function fillResourcesContainer(e) {
  resources.innerHTML = "";
  category = this.id;
  resources;
  filterResources(category)
}


//FILTER FUNCTION


function filterResources(category) {
  filteredDataResources = dataResources.filter( resourceData => { // resourceData is the object, we are filtering through each one
    if (resourceData.tags.includes(category)) {
       // clone new card
       const resourceCard = copyTemplateCard(resourceData);
       // attach new card to container
       resources.appendChild(resourceCard); //could I use just .append()? 
    } 
  })
}

// call filterResources function to display cards by category selected

filterResources(category); //do I need this? 


//COPY TEMPLATE FUNCTION
function copyTemplateCard(resourceData) {

  // clone template
  const resourceTemplate = document.importNode(template.content, true);
  const card = resourceTemplate.querySelector("#resource");

  // insert title information and link from array
  const title = card.querySelector("#title");
  title.innerText = resourceData.title;
  title.href = resourceData.link;


  // insert description information from array
  const description = card.querySelector("#description");
  description.innerText = resourceData.description;


  // insert tag information from array  
  const tagsContainer = card.querySelector("#tagsContainer");

  // map though tags to create a tag element for each tag in the array (we're working through the tags array within the array!)
  resourceData.tags.map(resourceDataTag => {
    const individualTag = document.createElement("span");
    if ( resourceDataTag !== 'all' ) {
      // add styles
      individualTag.classList.add("tag");
      // add text
      individualTag.innerHTML = `${resourceDataTag}`
      // append/attach tag to tags container
      tagsContainer.appendChild(individualTag);
    } 
  })

  // return the new cloned card with the information from the array inserted into it.
  return card;

} 


//EVENT LISTENER 
btnFilter.forEach(function(btn) {
  btn.addEventListener("click", fillResourcesContainer);
});










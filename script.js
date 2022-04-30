const data = {
  mainTitle: "My Favourite Websites",
  cardContents: [
    {
      name: "9gag",
      imageLink:
        // "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/4/42/9gag_logo.svg", 
    },
    {
      name: "twitter",
      imageLink:
        // "https://images.unsplash.com/photo-1600100397608-f010f423b971?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=975&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1920px-Twitter-logo.svg.png"
    },
    {
      name: "facebook",
      imageLink:
        // "https://images.unsplash.com/photo-1581953636842-74649fd3e004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1280px-2021_Facebook_icon.svg.png",
    },
    {
      name: "youtube",
      imageLink:
        // "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=850&q=80",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/1280px-YouTube_social_white_square_%282017%29.svg.png",
    },
  ],
  userData: { name: "ojasthakur.com", tagLine: "one small step for ojas!" },
};


// Plug in title data to HTML
let mainTitleElement = document.getElementById("main-title");
mainTitleElement.innerHTML += data.mainTitle;


// Create template for card content
let getCardStructure = (name, imageLink) => {
  return `<div class="col-12 col-sm-6 mb-4">
  <div class="tile">
    <div class="tile-text text-center">
      <h5>${name}</h5>
    </div>
    <img 
      src="${imageLink}" />
  </div>
</div>`;
};

let cardRow = document.getElementById("card-row");

// Plug in card data to HTML
data.cardContents.forEach((cardContent) => {
  let { name, imageLink } = cardContent;
  cardRow.innerHTML += getCardStructure(name, imageLink);
});

// Create template for footer content
let getFooterStructure = (name, tagLine) => {
  return `<h3 class="me-3"><i class="fas fa-heart"></i> ${name}</h3>
    <p>${tagLine}</p>`;
};

let footerContent = document.getElementById("footer");
let { name, tagLine } = data.userData;

// Plug in footer data to HTML
footerContent.innerHTML += getFooterStructure(name, tagLine);

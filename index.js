//Contador de vistas
const content = [
  {
    url: "https://www.youtube.com/watch?v=QRBugY6TZNA&list=PL6FSSv5-PZT74cUEya_TknjovH9B8a1hI",
    views: 0,
    color: "green",
    title: "Verde",
  },
  {
    url: "https://www.youtube.com/watch?v=OTXBdolI3-k&list=PL6FSSv5-PZT74cUEya_TknjovH9B8a1hIs",
    views: 0,
    color: "blue",
    title: "Azul",
  },
  {
    url: "https://www.youtube.com/watch?v=fu3s9jLOdVE&list=PL6FSSv5-PZT74cUEya_TknjovH9B8a1hI",
    views: 0,
    color: "golden",
    title: "Dorada",
  },
  {
    url: "https://www.youtube.com/watch?v=57qBirMGcEM&list=PL6FSSv5-PZT74cUEya_TknjovH9B8a1hI",
    views: 0,
    color: "white",
    title: "Blanca",
  },
];

const meditation = document.getElementById("content");
const addElement = () => {
  content.map((item) => {
    const { url, views, color, title } = item;
    //Creación del elemento div
    const divElement = document.createElement("div");
    // Atributos del elemento div
    divElement.setAttribute("class", "column-2");
    meditation.appendChild(divElement);
    // Creación del elemento a
    const itemElement = document.createElement("a");
    // Atributos del elemento a
    itemElement.setAttribute("href", url);
    itemElement.setAttribute("class", `color-${color}`);
    itemElement.setAttribute("target", "_blank");
    itemElement.innerHTML = `Meditación de la llama ${title}`;
    divElement.appendChild(itemElement);
    //Creación del elemento span
    const spanElement = document.createElement("span");
    //Atributos del elemento span
    spanElement.setAttribute("class", "views");
    spanElement.innerHTML = `${views} días`;
    divElement.appendChild(spanElement);
  });
};

addElement();

const divElements = meditation.children;
const onClickEvent = () => {
  for (let i = 0; i < divElements.length; i++) {
    const aElement = divElements[i].getElementsByTagName("a")[0];
    aElement.onclick = (e) => {
      e.preventDefault(); //Está para que no abra el link en la prueba pero no corresponde
      const { href } = e.target;
      const contentMatch = content.find((item) => item.url === href);
      const { views } = contentMatch;
      contentMatch.views = views + 1;
      e.target.nextSibling.innerHTML = `${views + 1} días`;
      if(contentMatch.views === 21) {
        alert("Cumpliste tu objetivo!")
      }
    };
  }
};

onClickEvent();



const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

/* const boxesContainer = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

function liElement(element) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${element.original}">
          <img class="gallery-image" 
          src="${element.preview}"
           data-source="${element.original}" alt="${element.description}" />
        </a>
      </li>`
}

function liElements(arr) {
  return arr.map(liElement).join("")
}

const markup = liElements(images);

//fragment.appendChild(markup);
//fragment.innerHTML =markup;
boxesContainer.innerHTML = markup;


//prevent download
const imgLinkEl = document.querySelectorAll('.gallery-link');
imgLinkEl.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
    });
});




//const gallery = document.querySelector('.gallery');

boxesContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('gallery-item')) {
    // Обробка кліку на елементі галереї
    const imageDescription = event.target.textContent;
    console.log(`Вибрано зображення: ${imageDescription}`);
  }
});




 */



const gallery = document.querySelector('.gallery');
const galleryItem = images
  .map(image =>`<li class="gallery-item">
  <a class="gallery-link" href="${image.original}">
    <img
      class="gallery-image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`)
  .join('');
gallery.insertAdjacentHTML('afterbegin', galleryItem);


gallery.addEventListener('click', event => {
  event.preventDefault();

  const galleryLink = event.target.closest('.gallery-link');
  if (!galleryLink) return;

  const largeImage = event.target.dataset.source;
  console.log(largeImage);

  const revision = basicLightbox.create(
    `<img src="${largeImage}" width="800" height="600">`
  );
  revision.show();
});










/* 
const boxesContainer = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();
images.forEach((image) => {
    const listItem = document.createElement("li");
    listItem.class = listItem.classList.add("gallery-item");

    const aParagraph = document.createElement("a");
    aParagraph.class = aParagraph.classList.add("gallery-link");
    aParagraph.class = aParagraph.classList.add("data-source=[large-image.jpg]");
    aParagraph.href = image.original;


    const imgItem = document.createElement("img");
    imgItem.src = image.preview;
    imgItem.alt = image.description;
    listItem.appendChild(imgItem);
    aParagraph.appendChild(listItem);
    fragment.appendChild(aParagraph);
              
    }
)
boxesContainer.appendChild(fragment);
boxesContainer.classList.add("gallery-flexbox"); 

console.log(boxesContainer);
 */
/*

{
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  }
*/


/*
<li class="gallery-item">
        <a class="gallery-link" href="large-image.jpg">
          <img class="gallery-image" 
          src="https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg"
           data-source="large-image.jpg" alt="purple flower" />
        </a>
      </li>

*/


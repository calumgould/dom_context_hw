document.addEventListener('DOMContentLoaded', () => {
  const newActorForm = document.querySelector('.new-actor-form');
  newActorForm.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
});

const handleFormSubmit = (event) => {
  event.preventDefault();

  const actorListItem = createActorListItem(event.target);



  const actorList = document.querySelector('.actor-list');
  actorList.appendChild(actorListItem);


  event.target.reset()
};

const createActorListItem = function (form) {

  const actorListItem = document.createElement('li');
  actorListItem.classList.add('actor-list-item');

  const actorName = document.createElement('h2');
  actorName.textContent = form.name.value;
  actorListItem.appendChild(actorName);

  const favouriteFilm = document.createElement('h3');
  favouriteFilm.textContent = form.film.value;
  actorListItem.appendChild(favouriteFilm);

  const genderSelect = document.createElement('h4');
  genderSelect.textContent = form.gender.value;
  actorListItem.appendChild(genderSelect);

  return actorListItem;
};

const handleDeleteAllClick = function (event) {
  const actorList = document.querySelector('.actor-list');
  actorList.innerHTML = '';
}

// GENERATE ELEMENT FUNCTION FOR REFACTOR //
// const generateElement = (container, tag, content, classes = []) => {
//   const element = document.createElement(tag);
//   element.textContent = content;
//
//   classes.forEach((className) => {
//     element.classList.add(className);
//
//     container.appendChild(element);
//   });
// };

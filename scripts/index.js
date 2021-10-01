// IDEIA:
// BACK END IS THE DATA AND DATA HANDLING LOGIC
// FRONT END PULLS IT FROM SERVER

const listContentDiv = document.querySelector(".List-Content");
const form = document.getElementById("person-form");

const personList = new List([]);
personList.addPerson({ name: "Victor", age: 19 });
personList.addPerson({ name: "Victor", age: 44 });
personList.addPerson({ name: "Victor", age: 19 });
personList.addPerson({ name: "Victor", age: 22 });
personList.addPerson({ name: "Victor", age: 19 });
personList.addPerson({ name: "Victor", age: 24 });
personList.addPerson({ name: "Victor", age: 6 });
// function sendFormWarning() {}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formContent = new FormData(form);
  const data = {
    name: formContent.get("name"),
    age: formContent.get("age"),
  };

  const { nameError, ageError } = addPersonDB(data);

  if (nameError) {
    if (!document.querySelector(".error-message.name-error")) {
      document.querySelector(
        ".name-input"
      ).innerHTML += `<p class="error-message name-error">${nameError}</p>`;
    }
  } else {
    const errorMessage = document.querySelector(".error-message.name-error");
    if (!ageError) document.querySelector("input#person-name").value = "";
    if (errorMessage) {
      document.querySelector(".name-input").removeChild(errorMessage);
    }
  }

  if (ageError) {
    if (!document.querySelector(".error-message.age-error")) {
      document.querySelector(
        ".age-input"
      ).innerHTML += `<p class="error-message age-error">${ageError}</p>`;
    }
  } else {
    const errorMessage = document.querySelector(".error-message.age-error");
    if (!nameError) document.querySelector("input#person-age").value = "0";
    if (errorMessage) {
      document.querySelector(".age-input").removeChild(errorMessage);
    }
  }

  reRender();
});

function getPersonItemHTML(personData, index) {
  return `
    <div class="List-Item">
      <div class="Content">
        <div class="Person-Data">
          <p class="Item-Id">Id: ${personData.getId}</p>
          <p class="Item-Name">Name: ${personData.getName}</p>
          <p class="Item-Age">Age: ${personData.getAge}</p>
          <p class="Item-Class">Group: ${personData.getClassification}</p>
        </div>
        <div class="Delete-Person">
          <button onclick="deletePerson(${personData.getId})">remove</button>
        </div>
      </div>
    </div>
    `;
}

// Render List Function
function renderList(listToRender) {
  let htmlToAppend = "";
  // Normal view
  if (listToRender) {
    listToRender.forEach((person, index) => {
      htmlToAppend += getPersonItemHTML(person, index);
    });
  } else {
    personList.getList.forEach((person, index) => {
      htmlToAppend += getPersonItemHTML(person, index);
    });
  }

  listContentDiv.innerHTML = htmlToAppend;
}

renderList();

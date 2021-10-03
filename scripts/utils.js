function validateName(name) {
  let error = "",
    isValid = true;

  if (!name && !name.trim()) {
    isValid = false;
    error = "Cannot add an empty name, only whitespaces or special characters!";
  } else if (
    name.match(/[0-9]+/) ||
    name.match(/[`!@#$%^&*()_+\=\[\]{};':"\\|,.<>\/?~]/)
  ) {
    // only allow '-' for compound names
    isValid = false;
    error = "Cannot add an empty name, only whitespaces or special characters!";
  }

  return {
    error,
    isValid,
  };
}

function validateAge(age) {
  let error = "",
    isValid = true;

  if (!age || age < 0 || age % 1 !== 0) {
    isValid = false;
    error = "The age must be an integer and higher or equal to 0!";
  }

  return {
    error,
    isValid,
  };
}

function setListViewMode(sorting) {
  // onclick to buttons calls this
  const currViewMode = listContentDiv.getAttribute("viewMode");
  console.log("Sorting\nCurr ViewMode", currViewMode);

  if (sorting === "age" && currViewMode === "sort_age_as") {
    // second click on sorting by age butt
    listContentDiv.setAttribute("viewMode", "sort_age_ds");
    renderList(personList.sortByAge("ds"));
  } else if (sorting === "age" && currViewMode === "sort_age_ds") {
    // last click on sorting by age butt -> disable
    listContentDiv.setAttribute("viewMode", "default");
    renderList(personList.getList);
  } else if (sorting === "age" && !currViewMode.includes("age")) {
    // first click on sorting by age butt
    listContentDiv.setAttribute("viewMode", "sort_age_as");
    renderList(personList.sortByAge("as"));
  } else if (sorting === "name" && !currViewMode.includes("name")) {
    // first click on sorting by name butt
    listContentDiv.setAttribute("viewMode", "sort_name_as");
    renderList(personList.sortByName("as"));
  } else if (sorting === "name" && currViewMode === "sort_name_as") {
    // second click on sorting by age butt
    listContentDiv.setAttribute("viewMode", "sort_name_ds");
    renderList(personList.sortByName("ds"));
  } else if (sorting === "name" && currViewMode === "sort_name_ds") {
    // last click on sorting by age butt -> disable
    listContentDiv.setAttribute("viewMode", "default");
    renderList(personList.getList);
  }

  console.log("Next ViewMode ", listContentDiv.getAttribute("viewMode"));
}

function reRender() {
  console.log("[LIST]", personList.getList);
  const viewMode = listContentDiv.getAttribute("viewMode");
  if (viewMode === "default") {
    renderList();
  } else if (viewMode.includes("name")) {
    renderList(personList.sortByName(viewMode.includes("as") ? "as" : "ds"));
  } else {
    renderList(personList.sortByAge(viewMode.includes("as") ? "as" : "ds"));
  }
}

function deletePerson(id) {
  personList.removePerson(id);
  reRender();
}

function addPersonDB(person) {
  const validation = personList.addPerson(person);
  return validation;
}

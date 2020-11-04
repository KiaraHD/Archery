//List of all Parcours and Users
let parcourList = [];
let userList = [];

//Show data on account.html
function showUserData()
{
    let h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "Konto";

    let br = document.createElement("br");

    let pFirstname = document.createElement("p");
    pFirstname.innerHTML = "Vorname:";

    let pLastname = document.createElement("p");
    pLastname.innerHTML = "Nachname:";

    let pNickname = document.createElement("p");
    pNickname.innerHTML = "Nickname:";

    let pPassword = document.createElement("p");
    pPassword.innerHTML = "Passwort:";

    let button = document.createElement("button");
    button.innerHTML = "Kontodaten bearbeiten";
    button.setAttribute("onclick", "editUserData()");
    button.style.borderRadius = "11px";

    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    document.getElementsByClassName("container-fluid")[0].appendChild(pFirstname);
    document.getElementsByClassName("container-fluid")[0].appendChild(pLastname);
    document.getElementsByClassName("container-fluid")[0].appendChild(pNickname);
    document.getElementsByClassName("container-fluid")[0].appendChild(pPassword);
    document.getElementsByClassName("container-fluid")[0].appendChild(button);
}

//Create editable form on account.html
function editUserData()
{
    let form = document.createElement("form");

    let label = document.createElement("label");
    label.innerHTML = "Vorname: ";
    form.append(label);

    let br = document.createElement("br");
    form.append(br);

    let input = document.createElement("input");
    input.type = "text";
    input.id = "firstname";
    input.value = "[Firstname from Backend]";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    label = document.createElement("label");
    label.innerHTML = "Nachname: ";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "lastname";
    input.value = "[Lastname from Backend]";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    label = document.createElement("label");
    label.innerHTML = "Nickname: ";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "Nickname";
    input.value = "[Nickname from Backend]";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    label = document.createElement("label");
    label.innerHTML = "Passwort: ";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "password";
    input.value = "********";
    form.append(input);

    br = document.createElement("br");
    form.append(br);
    br = document.createElement("br");
    form.append(br);

    let button = document.createElement("button");
    button.innerHTML = "Bestätigen";
    button.setAttribute("onclick", "writeToDatabase(); body.reload()");
    button.style.borderRadius = "11px";

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}

function editParcourData()
{
    let form = document.createElement("form");

    let label = document.createElement("label");
    label.innerHTML = "Name:";
    form.append(label);

    let br = document.createElement("br");
    form.append(br);

    let input = document.createElement("input");
    input.type = "text";
    input.id = "name";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    label = document.createElement("label");
    label.innerHTML = "Ort:";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "place";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    label = document.createElement("label");
    label.innerHTML = "Anzahl der 3D-Tiere:";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "nrofAnimals";
    form.append(input);

    br = document.createElement("br");
    form.append(br);
    br = document.createElement("br");
    form.append(br);

    let createParcourButton = document.createElement("button");
    createParcourButton.innerHTML = "Parcour erstellen";
    createParcourButton.setAttribute("onclick", "writeToDatabase(); body.reload()");
    createParcourButton.style.borderRadius = "11px";

    form.append(createParcourButton);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}
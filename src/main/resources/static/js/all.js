//List of all Parcours and Users
let parcourList = [];
localStorage.setItem("someletKey", parcourList);
let userList = [];

//List all users on index.html
function createUserForm()
{
    let form = document.createElement("form");

    let idName = "user";

    let h2 = document.createElement("h2");
    h2.style = "color: #0066cc";
    h2.innerHTML = "Benutzer auswählen:";
    form.append(h2);

    for (let i = 1; i < 4; i++)
    {
        let checkboxButton = document.createElement("input");
        checkboxButton.type = "checkbox";
        checkboxButton.id = (idName + i);
        checkboxButton.value = (idName + i);
        form.append(checkboxButton);
        let label = document.createElement("label");
        label.innerHTML = ("[User from Backend]" + i);
        label.htmlFor = (idName + i);

        form.append(label);

        let br = document.createElement("br");
        form.append(br);
    }
    
    br = document.createElement("br");
    form.append(br);

    h2 = document.createElement("h2");
    h2.style = "color: #0066cc";
    h2.innerHTML = "Parcour auswählen:";
    form.append(h2);

    document.getElementsByClassName("container-fluid")[0].appendChild(form);

    form = document.createElement("form");

    let select = document.createElement("select");
    select.name = "parcours";
    select.id = "parcours";
    select.style = "width: 220px"

    for (let i = 1; i < 4; i++)
    {
        let option = document.createElement("option");
        option.value = ("parcour" + i);
        option.innerHTML = ("Parcour" + i);

        select.append(option);
    }

    document.getElementsByClassName("container-fluid")[0].appendChild(select);

    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);

    let button = document.createElement("button");
    button.setAttribute('onclick', 'onclickStartEvent()');
    button.style.borderRadius = "11px";
    button.innerHTML = "Event starten";

    document.getElementsByClassName("container-fluid")[0].appendChild(button);
}

function onclickStartEvent()
{
    let users = document.querySelectorAll("*[id^='user']");

    let selectedUsers = [];

    for (let i = 0; i < users.length; i++)
    {
        if (users[i].id.includes("user"))
        {
            let input = document.getElementById(users[i].id);

            if (input.checked == true)
            {
                selectedUsers.push(input);
            }
        }
    }

    let selectParcour = document.getElementById("parcours");
    
    let value = selectParcour.options[selectParcour.selectedIndex].innerHTML;
    
    let h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = value;
    
    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(h1);

    window.onbeforeunload = function (evt) 
    {
        let message = 'Are you sure you want to leave?';
        if (typeof evt == 'undefined') 
        {
          evt = window.event;
        }
        if (evt) 
        {
          evt.returnValue = message;
        }
        return message;
      }
}

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

function showUsers()
{
    let h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "Benutzer";

    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
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

function getParcoursFromDatabase()
{

}

//Save changes in database
function writeToDatabase()
{
    let nameInput = document.getElementById("name");
    let placeInput = document.getElementById("place");
    let nrOfAnimals = document.getElementById("numberOfAnimals");

    let parcour = {nameInput, placeInput, nrOfAnimals};
    parcourList.push(parcour);
}

//Parcour-Stuff
function createParcourList()
{
    let h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "Parcoure";

    let table = document.createElement("table");
    table.style = "width: 100%";

    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerHTML = "Name";

    let th2 = document.createElement("th");
    th2.innerHTML = "Ort";

    let th3 = document.createElement("th");
    th3.innerHTML = "Anzahl der 3D-Tiere";

    tr.append(th1);
    tr.append(th2);
    tr.append(th3);

    table.append(tr);

    //TODO

    for (let i = 0; i < parcourList.length; i++)
    {
        let tr = document.createElement("tr");

        for (let j = 0; j < parcourList[i].length; j++)
        {
            let td = document.createElement("td");
            td.innerHTML = parcourList[i][j];

            tr.append(td);
        }

        table.append(tr);
    }

    let button = document.createElement("button");
    button.innerHTML = "Neuen Parcour erstellen";
    button.setAttribute("onclick", "editParcourData()");
    button.style.borderRadius = "11px";

    br = document.createElement("br");

    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    document.getElementsByClassName("container-fluid")[0].appendChild(table);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    document.getElementsByClassName("container-fluid")[0].appendChild(button);
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
    input.id = "numberOfAnimals";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    br = document.createElement("br");
    form.append(br);
    br = document.createElement("br");
    form.append(br);

    let button = document.createElement("button");
    button.innerHTML = "Parcour erstellen";
    button.setAttribute("onclick", "writeToDatabase(); body.reload()");
    button.style.borderRadius = "11px";

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}
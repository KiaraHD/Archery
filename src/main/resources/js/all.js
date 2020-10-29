//List all users on index.html
function createUserForm()
{
    var form = document.createElement("form");

    var idName = "user";

    

    for (var i = 1; i < 4; i++)
    {
        var radioButton = document.createElement("input");
        radioButton.type = "checkbox";
        radioButton.id = (idName + i);
        radioButton.value = (idName + i);
        form.append(radioButton);
        var label = document.createElement("label");
        label.innerHTML = ("[User from Backend]" + i);
        label.htmlFor = (idName + i);

        form.append(label);

        var br = document.createElement("br");
        form.append(br);
    }
    
    document.getElementsByClassName("container-fluid")[0].appendChild(form);

    form = document.createElement("form");

    var label = document.createElement("label");
    label.innerHTML = "Parcour auswählen: ";
    label.htmlFor = "parcours";

    var select = document.createElement("select");
    select.name = "parcours";
    select.id = "parcours";

    for (var i = 1; i < 4; i++)
    {
        var option = document.createElement("option");
        option.value = ("parcour" + i);
        option.innerHTML = ("Parcour" + i);

        select.append(option);
    }

    var br = document.createElement("br");

    document.getElementsByClassName("container-fluid")[0].appendChild(label);
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    document.getElementsByClassName("container-fluid")[0].appendChild(select);

    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);

    var button = document.createElement("button");
    button.setAttribute('onclick', 'onclickStartRound()');
    button.innerHTML = "Neue Runde starten";

    document.getElementsByClassName("container-fluid")[0].appendChild(button);
}

//Show data on account.html
function showUserData()
{
    var h1 = document.createElement("h1");
    h1.style = "color: blue";
    h1.innerHTML = "Konto";

    var br = document.createElement("br");

    var pFirstname = document.createElement("p");
    pFirstname.innerHTML = "Vorname:";

    var pLastname = document.createElement("p");
    pLastname.innerHTML = "Nachname:";

    var pNickname = document.createElement("p");
    pNickname.innerHTML = "Nickname:";

    var pPassword = document.createElement("p");
    pPassword.innerHTML = "Passwort:";

    var button = document.createElement("button");
    button.innerHTML = "Kontodaten bearbeiten";
    button.setAttribute("onclick", "editUserData()");

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
    var form = document.createElement("form");

    var label = document.createElement("label");
    label.innerHTML = "Vorname: ";
    form.append(label);

    var br = document.createElement("br");
    form.append(br);

    var input = document.createElement("input");
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

    var button = document.createElement("button");
    button.innerHTML = "Bestätigen";
    button.setAttribute("onclick", "writeToDatabase(); body.reload()");

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}

//Save changes in database
function writeToDatabase()
{
    
}

//Parcour-Stuff
function createParcourList()
{
    var button = document.createElement("button");
    button.innerHTML = "Neuen Parcour erstellen";
    button.setAttribute("onclick", "editParcourData()");

    document.getElementsByClassName("container-fluid")[0].appendChild(button);
}

function editParcourData()
{
    var form = document.createElement("form");

    var label = document.createElement("label");
    label.innerHTML = "Name:";
    form.append(label);

    var br = document.createElement("br");
    form.append(br);

    var input = document.createElement("input");
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

    var button = document.createElement("button");
    button.innerHTML = "Parcour erstellen";
    button.setAttribute("onclick", "writeToDatabase(); body.reload()");

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}

//Run the events;Backend data not available yet
function startEvent()
{
    var parcour = {name:"", place:"", nrOfAnimals:0};

    for (var i = 0; i < parcour.nrOfAnimals; i++)
    {
    }
}
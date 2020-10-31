//List of all Parcours and Users
var parcourList = [];
localStorage.setItem("someVarKey", parcourList);
var userList = [];

//List all users on index.html
function createUserForm()
{
    var form = document.createElement("form");

    var idName = "user";

    var h2 = document.createElement("h2");
    h2.style = "color: #0066cc";
    h2.innerHTML = "Benutzer auswählen:";
    form.append(h2);

    for (var i = 1; i < 4; i++)
    {
        var checkboxButton = document.createElement("input");
        checkboxButton.type = "checkbox";
        checkboxButton.id = (idName + i);
        checkboxButton.value = (idName + i);
        form.append(checkboxButton);
        var label = document.createElement("label");
        label.innerHTML = ("[User from Backend]" + i);
        label.htmlFor = (idName + i);

        form.append(label);

        var br = document.createElement("br");
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

    var select = document.createElement("select");
    select.name = "parcours";
    select.id = "parcours";
    select.style = "width: 220px"

    for (var i = 1; i < 4; i++)
    {
        var option = document.createElement("option");
        option.value = ("parcour" + i);
        option.innerHTML = ("Parcour" + i);

        select.append(option);
    }

    document.getElementsByClassName("container-fluid")[0].appendChild(select);

    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);

    var button = document.createElement("button");
    button.setAttribute('onclick', 'onclickStartEvent()');
    button.style.borderRadius = "11px";
    button.innerHTML = "Event starten";

    document.getElementsByClassName("container-fluid")[0].appendChild(button);
}

function onclickStartEvent()
{
    var users = document.querySelectorAll("*[id^='user']");

    var selectedUsers = [];

    for (var i = 0; i < users.length; i++)
    {
        if (users[i].id.includes("user"))
        {
            var input = document.getElementById(users[i].id);

            if (input.checked == true)
            {
                selectedUsers.push(input);
            }
        }
    }

    var selectParcour = document.getElementById("parcours");
    
    var value = selectParcour.options[selectParcour.selectedIndex].innerHTML;
    
    var h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = value;
    
    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);

    for (var i = 1; i < 11; i++)
    {
        h1.innerHTML = value + " - Tier " + i;

        
        for (var j = 1; j < 4; j++)
        {
            var h3 = document.createElement("h3");
            h3.style = "color: #0066cc";
            h3.innerHTML = "User " + j;
            document.getElementsByClassName("container-fluid")[0].appendChild(h3);
            
            var points = 20;

            for (var k = 1; k < 4; k++)
            {
                var label = document.createElement("label");
                label.innerHTML = "Pfeil " + k + ":";
    
                var select = document.createElement("select");
                select.name = "arrow1";
                select.id = "arrow1";
                select.style = "width: 220px"
    
                for (var l = 1; l < 4; l++)
                {
                    var option = document.createElement("option");
                    option.value = ("arrow" + k);
                    option.innerHTML = points;
                    select.append(option);
                    points -= 2;
                }

                document.getElementsByClassName("container-fluid")[0].appendChild(label);
                document.getElementsByClassName("container-fluid")[0].appendChild(select);
                br = document.createElement("br");
                document.getElementsByClassName("container-fluid")[0].appendChild(br);
            }
        }

        var buttonContinue = document.createElement("button");
        buttonContinue.style.borderRadius = "11px";
        buttonContinue.innerHTML = "Nächstes 3D-Tier";
        document.getElementsByClassName("container-fluid")[0].appendChild(buttonContinue);
    }

    window.onbeforeunload = function (evt) 
    {
        var message = 'Are you sure you want to leave?';
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
    var h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
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
    var h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "Benutzer";

    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
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
    var nameInput = document.getElementById("name");
    var placeInput = document.getElementById("place");
    var nrOfAnimals = document.getElementById("numberOfAnimals");

    var parcour = {nameInput, placeInput, nrOfAnimals};
    parcourList.push(parcour);
}

//Parcour-Stuff
function createParcourList()
{
    var h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "Parcoure";

    var table = document.createElement("table");
    table.style = "width: 100%";

    var tr = document.createElement("tr");

    var th1 = document.createElement("th");
    th1.innerHTML = "Name";

    var th2 = document.createElement("th");
    th2.innerHTML = "Ort";

    var th3 = document.createElement("th");
    th3.innerHTML = "Anzahl der 3D-Tiere";

    tr.append(th1);
    tr.append(th2);
    tr.append(th3);

    table.append(tr);

    //TODO

    for (var i = 0; i < parcourList.length; i++)
    {
        var tr = document.createElement("tr");

        for (var j = 0; j < parcourList[i].length; j++)
        {
            var td = document.createElement("td");
            td.innerHTML = parcourList[i][j];

            tr.append(td);
        }

        table.append(tr);
    }

    var button = document.createElement("button");
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
    button.style.borderRadius = "11px";

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
}
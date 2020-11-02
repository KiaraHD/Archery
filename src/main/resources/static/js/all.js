//List of all Parcours and Users
let parcourList = [];
let userList = [];

function onclickStartEvent()
{
    let users = document.querySelectorAll("*[id^='user']");

    let selectedUsers = [];

    for (let i = 0; i < users.length; i++)
    {
        let input = document.getElementById(users[i].id);

        if (input.checked == true)
        {
            selectedUsers.push(input);
        }
    }

    let selectParcour = document.getElementById("parcours");
    
    let value = selectParcour.options[selectParcour.selectedIndex].innerHTML;
    
    let h1 = document.createElement("h1");
    h1.style = "color: #0066cc";

    //Should be replaced with actual Parcour number of animals plz
    let nrofAnimals = 10;

    nextAnimal(1, h1, value, selectedUsers, nrofAnimals, "Nächstes 3D-Tier");

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

function nextAnimal(i, h1, value, selectedUsers, nrofAnimals, buttonText)
{
    document.getElementsByClassName("container-fluid")[0].innerHTML = "";

    h1.innerHTML = value + " - Tier " + i;
    document.getElementsByClassName("container-fluid")[0].appendChild(h1);
    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);
            
    for (var j = 0; j < selectedUsers.length; j++)
    {
        var h3 = document.createElement("h3");
        h3.style = "color: #0066cc";
        h3.innerHTML = selectedUsers[j].id;
        document.getElementsByClassName("container-fluid")[0].appendChild(h3);
            
        var label = document.createElement("label");
        label.innerHTML = "Pfeil:";
    
        var select = document.createElement("select");
        select.name = "arrow1";
        select.id = "arrow1";
        select.style = "width: 220px"
    
        for (var k = 1; k < 4; k++)
        {
            var option = document.createElement("option");
            option.value = ("arrow" + k);
            option.innerHTML = k;
            select.append(option);
        }

        document.getElementsByClassName("container-fluid")[0].appendChild(label);
        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);
        document.getElementsByClassName("container-fluid")[0].appendChild(select);

        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);

        label = document.createElement("label");
        label.innerHTML = "Bereich:";

        var select = document.createElement("select");
        select.name = "arrow1";
        select.id = "arrow1";
        select.style = "width: 220px"
    
        var option = document.createElement("option");
        option.value = "body";
        option.innerHTML = "Körper";
        select.append(option);

        option = document.createElement("option");
        option.value = "kill";
        option.innerHTML = "Kill";
        select.append(option);

        option = document.createElement("option");
        option.value = "innerKill";
        option.innerHTML = "Inner Kill";
        select.append(option);

        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);
        document.getElementsByClassName("container-fluid")[0].appendChild(label);
        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);
        document.getElementsByClassName("container-fluid")[0].appendChild(select);

        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);
        br = document.createElement("br");
        document.getElementsByClassName("container-fluid")[0].appendChild(br);
    }

    if (buttonText == "Nächstes 3D-Tier")
    {
        var buttonContinue = document.createElement("button");
        buttonContinue.id = "buttonContinue";
        buttonContinue.style.borderRadius = "11px";
        buttonContinue.innerHTML = buttonText;
        buttonContinue.addEventListener("click", function()
        {
            if (i + 1 < nrofAnimals)
            {
                nextAnimal(i+1, h1, value, selectedUsers, nrofAnimals, buttonText);
            }
            else
            {
                nextAnimal(i+1, h1, value, selectedUsers, nrofAnimals, "Event beenden");
            }
        });
        document.getElementsByClassName("container-fluid")[0].appendChild(buttonContinue);
    }
    else
    {
        var buttonFinishEvent = document.createElement("button");
        buttonFinishEvent.id = "buttonFinishEvent";
        buttonFinishEvent.style.borderRadius = "11px";
        buttonFinishEvent.innerHTML = buttonText;
        buttonFinishEvent.addEventListener("click", function()
        {
            finishEvent();
        });
        document.getElementsByClassName("container-fluid")[0].appendChild(buttonFinishEvent);
    }

}

function finishEvent()
{
    var mainDiv = document.createElement("div");
    mainDiv.id = "overlay";

    var childDiv = document.createElement("div");
    childDiv.id = "text";
    childDiv.innerHTML = "Ergebnisse";
    
    var closeButton = document.createElement("button");
    closeButton.id = "button";
    closeButton.style.borderRadius = "11px";
    closeButton.innerHTML = "Zurück zum Start";
    closeButton.setAttribute("onclick", "window.location.reload()");
    mainDiv.append(childDiv);
    mainDiv.append(closeButton);

    document.getElementsByClassName("container-fluid")[0].appendChild(mainDiv);
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
    var h1 = document.createElement("h1");
    h1.style = "color: #0066cc";
    h1.innerHTML = "User";
    document.getElementsByClassName("container-fluid")[0].appendChild(h1);

    br = document.createElement("br");
    document.getElementsByClassName("container-fluid")[0].appendChild(br);

    var createParcourButton = document.createElement("button");
    createParcourButton.style.borderRadius = "11px";
    createParcourButton.innerHTML = "User hinzufügen";
    createParcourButton.setAttribute("onclick", "addUser()");
    document.getElementsByClassName("container-fluid")[0].appendChild(createParcourButton);
}

function addUser()
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
    label.innerHTML = "Nickname:";
    form.append(label);

    br = document.createElement("br");
    form.append(br);

    input = document.createElement("input");
    input.type = "text";
    input.id = "nickname";
    form.append(input);

    br = document.createElement("br");
    form.append(br);

    br = document.createElement("br");
    form.append(br);
    br = document.createElement("br");
    form.append(br);

    let button = document.createElement("button");
    button.innerHTML = "User hinzufügen";
    button.setAttribute("onclick", "writeToDatabase(); body.reload()");
    button.style.borderRadius = "11px";

    form.append(button);

    document.getElementsByClassName("container-fluid")[0].innerHTML = "";
    document.getElementsByClassName("container-fluid")[0].appendChild(form);
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
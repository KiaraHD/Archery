//List of all Parcours and Users
let parcourList = [];
localStorage.setItem("someletKey", parcourList);
let userList = [];

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
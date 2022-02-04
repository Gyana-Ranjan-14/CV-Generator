// when click onn add btn create new field like work expierence field
// Adding Educational Details

// validation of form 

// validation of name
const name = document.getElementById('namefield');
namefield.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = namefield.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        namefield.classList.remove('is-invalid');
        validUser = true;
    } else {
        console.log('Your name is not valid');
        namefield.classList.add('is-invalid');
        validUser = false;

    }
})

// validation of email
const email = document.getElementById('emailfield');
emailfield.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = emailfield.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        emailfield.classList.remove('is-invalid');
        validEmail = true;
    } else {
        console.log('Your email is not valid');
        emailfield.classList.add('is-invalid');
        validEmail = false;
    }
})

// validation of numer
const phone = document.getElementById('contactfield');
contactfield.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        contactfield.classList.remove('is-invalid');
        validPhone = true;
    } else {
        console.log('Your phone is not valid');
        contactfield.classList.add('is-invalid');
        validPhone = false;

    }
})

function addNewWefield() {
    // in this function here we create a textarea
    let newNode = document.createElement("textarea");

    // the below are some class and attribute to add in the textarea
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    //    we have to insert this text area above the academic so we take its reference
    let weob = document.getElementById("we");
    let weAddButtonob = document.getElementById("weAddButton");

    weob.insertBefore(newNode, weAddButtonob); //means insert before weAddButton the newNode
}

// finction for adding Skills
function AqNewField() {
    // in this function here we create a textarea
    let newnodeaq = document.createElement("textarea");

    // the below are some class and attribute to add in the textarea
    newnodeaq.classList.add("form-control");
    newnodeaq.classList.add("eqField");
    newnodeaq.classList.add("mt-3");
    newnodeaq.setAttribute("rows", 3);
    newnodeaq.setAttribute("placeholder", "Enter here");

    // we have to insert this text area below the academic so we take its reference
    let aqobj = document.getElementById("Aq");
    let aqaddbuttonobj = document.getElementById("aqAddButton");

    aqobj.insertBefore(newnodeaq, aqaddbuttonobj);
}

// function for adding Awards
function addawardfield() {
    // in this function here we create a textarea
    let newNode = document.createElement("textarea");

    // the below are some class and attribute to add in the textarea
    newNode.classList.add("form-control");
    newNode.classList.add("awards");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    //    we have to insert this text area above the academic so we take its reference
    let awardob = document.getElementById("aw");
    let nob = document.getElementById("awardadd");

    awardob.insertBefore(newNode, nob); //means insert before weAddButton the newNode
}
// function to add awards
// function for adding Awards
function addcertificatefield() {
    // in this function here we create a textarea
    let newNode = document.createElement("textarea");

    // the below are some class and attribute to add in the textarea
    newNode.classList.add("form-control");
    newNode.classList.add("certi");
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    //    we have to insert this text area above the academic so we take its reference
    let certdob = document.getElementById("cw");
    let nob = document.getElementById("certify");

    certdob.insertBefore(newNode, nob); //means insert before weAddButton the newNode
}

// generating cv
function generatecv() {
    // for seting the name we take value from namfield and then set dynamically in nameT1 and nameT2

    // .value means take the value
    let namefield = document.getElementById("namefield").value; //here we take the value from user
    let nameT1 = document.getElementById("nameT1"); //target the field by id
    nameT1.textContent = namefield; //here we assign that name what he type
    // shortcut to assign easily the samething
    // document.getElementById('nameT2').textContent=namefield;

    // position
    let positionfield = document.getElementById("positionfield").value; //here we take the value from user
    let positionT = document.getElementById("positionT"); //target the field by id
    positionT.textContent = positionfield;
    // setting the contact number
    let contactfield = document.getElementById("contactfield").value;
    let contactT1 = (document.getElementById("contactT1").textContent =
        contactfield);

    // settingup the emailfield
    let emailfield = document.getElementById("emailfield").value;
    let emailT = (document.getElementById("emailT").textContent =
        emailfield);
    // setting the adressfield
    let Adressfield = document.getElementById("Adressfield").value;
    let addressT = (document.getElementById("addressT").textContent =
        Adressfield);

    // linkedin details
    let twitfield = document.getElementById("twitfield").value;
    let TwitT = (document.getElementById("TwitT").href = twitfield);

    let linkedfield = document.getElementById("linkedfield").value;
    let linkT = (document.getElementById("linkT").href = linkedfield);

    let gitfield = document.getElementById("twitfield").value;
    let GitT = (document.getElementById("GitT").href = gitfield);

    // settingup objective
    document.getElementById("objectiveT").textContent =
        document.getElementById("objectivefield").value;

    // setting up work education
    let wes = document.getElementsByClassName("weField");

    let str = "";

    // e will store the wes once the user start fill
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    // skills
    let aqs = document.getElementsByClassName("eqField");

    let strin = "";

    // e will store the wes once the user start fill
    for (let e of aqs) {
        strin = strin + `<li> ${e.value} </li>`;
    }
    document.getElementById("aqT").innerHTML = strin;

    // Awards Section
    let awd = document.getElementsByClassName("awards");

    let strn = "";

    // e will store the wes once the user start fill
    for (let e of awd) {
        strn = strn + `<li> ${e.value} </li>`;
    }
    document.getElementById("awT").innerHTML = strn;

    // certificates & courses
    let cwd = document.getElementsByClassName("certi");

    let srn = "";

    // e will store the wes once the user start fill
    for (let e of cwd) {
        srn = srn + `<li> ${e.value} </li>`;
    }
    document.getElementById("cwT").innerHTML = srn;
    // java script for img

    // we make here files because it is an array 
    // we need a single file so we give [0]
    let file = document.getElementById('imgfield').files[0];
    //we have to set reader to read the file to read
    let reader = new FileReader();
    // now reader will get our file
    reader.readAsDataURL(file);

    // set image in template
    reader.onloadend = function() {
        document.getElementById('imgtemplate').src = reader.result;
    }

    // making form visible and template none
    document.getElementById('cv-form').style.display = 'none';
    document.getElementById('cv-template').style.display = 'block';


}

// print the cv
function printcv() {
    const ele = document.getElementById("cv-template");

    window.print();
    // html2pdf()
    //     .from(ele)
    //     .save();
}
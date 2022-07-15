var customerName = "Alliance Dragon";

// <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
function addCustomerName() {

    let title = document.getElementById('title')
    title.textContent = customerName;
    
    // <h1 id="tm-header" class="tm-brand text-uppercase"></h1> <!--todo: Add Customer Name-->
    let tmHeader = document.querySelector("#tm-header");
    tmHeader.textContent = customerName;

    // <h2 id="introheader" class="tm-section-title mb-5 text-uppercase tm-color-primary"></h2> <!--todo: Add Customer Name-->
    let introHeader = document.querySelector("#introHeader");
    introHeader.textContent = customerName;
};

function toggleColors() {
    // <!-- todo: Change all classes named 'tm-white-rect' to 'tm-blue-rect' -->
    const something = document.querySelectorAll(".tm-white-rect");
    // console.log("something", something);
    something.forEach((thing) => {
        thing.classList.add("tm-blue-rect");
        thing.classList.remove("tm-white-rect");
        // let classString = thing.getAttribute("class");
        // console.log(classString);
        // let classChopped = classString.split(" ");
        // console.log(classChopped);
        // classChopped[1] = "tm-blue-rect";
        // console.log(classChopped);
        // classString = classChopped.join(" ");        
        // console.log(classString);
    });
}

function hideElement() {
    //<ul class="nav flex-row tm-social-links">  <!--todo: Hide social links-->
    const social = document.querySelector("#social-links");
    console.log(social);
    social.style.visibility = "none";
};

 function addText() {

    //<p id="intropara1" class="tm-color-gray">  <!--todo: Add customer company introduction text about their founding year-->
    let intro = document.getElementById('intropara1');
    intro.textContent = "Alliance was founded in 1931 by Albert Daniels.";
    //<p id="intropara2" class="mb-0 tm-color-gray"> <!--todo: Add customer company introduction text about what they lead in-->
    let intro2 = document.getElementById('intropara2');
    intro2.textContent = "The company is a leader in P.C. Manufacturing";
     //<p id="aboutpara1" id="a" class="mb-5"> <!--todo: Add customer company about text-->
    let aboutPara1 = document.getElementById('aboutpara1');
    aboutPara1.textContent = "We deliver the best service this side of creation";
    //<p id="aboutpara2"> <!--todo: Add customer company motto text-->
    let aboutPara2 = document.getElementById('aboutpara2');
    aboutPara2.textContent = "Our motto is satisfaction guaranteed";
    // <p id="addresspara" class="mb-3"> <!--todo: Add customer company phone number text-->
    let addressPara = document.getElementById('addresspara');
    addressPara.textContent = "1-800-565-5656";
}; 




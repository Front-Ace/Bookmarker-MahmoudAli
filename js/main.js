var  firstInput = document.getElementById("site-name");
var secondInput = document.getElementById("site-url");
var allSites = [];
if (localStorage.getItem("allSites") != null) {
        allSites = JSON.parse(localStorage.getItem("allSites"));
        displayAllSites();
}
function addNewSite() {
        if (validateURL()) {
                var newSite = {
                        name: firstInput.value ,
                        link: secondInput.value 
                    };
                    allSites.push(newSite);
                    console.log(allSites);
                    clearForm()
                    displayAllSites()
                    
                    localStorage.setItem("allSites", JSON.stringify(allSites))
        } else{
                Swal.fire({
                        icon: 'info',
                        title: 'Enter a valid URL',
                        text: 'your URL must starts with "https://" and ends with ".com"',
                        footer: '<a href="">Why do I have this issue?</a>'
                      })
        }
        

    
}

function clearForm() {
        firstInput.value= "";
    secondInput.value="";
}
function displayAllSites() {
        var cartona= "";
        for(i=0 ; i< allSites.length ; i++){
                cartona += `<div class="reading row py-2 d-flex align-items-center">
                <div class="col-3"> ${i} </div>
                <div class="col-3"> ${allSites[i].name} </div>
                <div class="col-3 "><button onclick="visitLink( ${i} )" id="visit" class="btn btn-success px-3"><i class="fa-solid fa-eye me-1"></i>
                        Visit</button></div>
                <div class="col-3 "><button onclick="deleteElement( ${i} )" id="delete" class="btn btn-danger "><i class="fa-solid fa-trash-can me-1"></i>
                        Delete</button></div>
                </div>` ;
        
        }
        document.getElementById("sec-row").innerHTML= cartona;
}
function deleteElement(idx) {
        allSites.splice(idx,1);
        displayAllSites()
        localStorage.setItem("allSites", JSON.stringify(allSites))

}
function visitLink(idxlink) {
        open(allSites[idxlink].link)
}

function validateURL() {
        var regex = /^https:\/\/.*\.com$/;
        return regex.test(secondInput.value);
}



//------------bag array
var allSites = []
//--------------inputs
var  firstInput = document.getElementById("site-name");
var secondInput = document.getElementById("site-url");



function addNewSite() {
    var newSite = {
        name: firstInput.value ,
        link: secondInput.value 
    };
    // console.log(newSite);
    allSites.push(newSite);
    console.log(allSites);
    clearForm()
    displayAllSites()
    
    
//     document.getElementById("sec-row").innerHTML= `<div class="reading row py-2 d-flex align-items-center">
//         <div class="col-3">1</div>
//         <div class="col-3">index</div>
//         <div class="col-3 "><button class="btn btn-success px-3"><i class="fa-solid fa-eye me-1"></i>
//                 Visit</button></div>
//         <div class="col-3 "><button class="btn btn-danger "><i class="fa-solid fa-trash-can me-1"></i>
//                 Delete</button></div>
//         </div>`;
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
}
function visitLink(idxlink) {
        open(allSites[idxlink].link)
}



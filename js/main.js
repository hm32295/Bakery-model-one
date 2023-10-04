





let nameOut = document.getElementById("name-form-out"),
     numberOut = document.getElementById("number-form-out"),
     saveOut = document.getElementById("save-form-out"),
     pLeft = document.getElementById("p-left"),
     tableLeft = document.getElementById("table-left"),
     listSearch = document.getElementById("list-search-ou"),
     close = document.getElementById("close"),
     pText = document.querySelector(".msg-error .text p"),
     msgError =  document.getElementById("msg-error");
     
// Show Data In Screen
function tableData(e){
    tableLeft.innerHTML = `
                    <table id="table-left">
                        <tr>
                            <td>الإسم:</td>
                            <td>${e.name}</td>
                        </tr>
                        <tr>
                            <td>عدد الأفراد:</td>
                            <td>${e.number}</td>
                        </tr>
                        <tr>
                            <td>الرقم القومى:</td>
                            <td>${e.national}</td>
                        </tr>
                        <tr>
                            <td>الرقم الذكى:</td>
                            <td>${e.id}</td>
                        </tr>
                        <tr>
                            <td>الحصة اليومية:</td>
                            <td>${e.dailyQuota}</td>
                        </tr>
                        <tr>
                            <td>الكمية المصروفة:</td>
                            <td>${e.totalAmount(e.amount)}</td>
                        </tr>
                        <tr>
                            <td>الكمية الباقية :</td>
                            <td>${e.remainingQuantity(e.dailyQuota ,e.totalAmount(e.amount))}</td>
                        </tr>
                    </table>
        
                `;

}
function showData (e){


    for(let i = 0 ; i < data.length ; i++){

            if(data[i].name === e.target.innerHTML){
                pLeft.style.display = 'none';
                nameOut.value = e.target.innerHTML;
                tableData(data[i]);
            }
    }
}
// Show Result List Search

nameOut.onkeyup = function(){
         
    listSearch.innerHTML = "";
         
         for(let i = 0 ; i < data.length ; ++i){
             

             if(data[i].name.includes(nameOut.value)){
                 listSearch.innerHTML += `
                <li class="liListSearch">${data[i].name}</li>
                `;
            }

    }
    
    if(!nameOut.value ){
        listSearch.innerHTML = "";
        pLeft.style.display = 'block';
        tableLeft.innerHTML = `
        <table id="table-left"></table>
        `
    }
    
}


// Creat Table Result Click Li Of The Result Search

document.addEventListener("click" , function(e){

    if(e.target.className === "liListSearch"){

        
        showData(e)
    }


    listSearch.innerHTML = "";
})




// Save Data Of Out Data 
saveOut.onclick = () =>{
    let a= true;
    if(!nameOut.value || !numberOut.value){
       
        msgError.style.display = "flex";
        pText.innerHTML = "من فضلك أدخل البيانات كاملة الإسم والكمية" 
        return;
    }
    for(let i = 0 ; i < data.length ; i++){
        if(nameOut.value === data[i].name){
            data[i].amount.push(+numberOut.value);
            tableData(data[i]);  
            a= false; 
        }
    }
    if(a){
       
        msgError.style.display = "flex";
        pText.innerHTML = "هذا الإسم غير مسجل" 
        return;
    }
    nameOut.value = "";
    numberOut.value = "";
}


//////////////////////////////////////

// Creat New Nam

// Get Element

let nameFormIn = document.getElementById("name-form-in"),
    numberFormIn = document.getElementById("number-form-in"),
    nationalFormIn = document.getElementById("national-form-in"),
    idFormIn = document.getElementById("id-form-in"),
    beardFormIn = document.getElementById("beard-form-in"),
    secretFormIn = document.getElementById("secret-form-in"),
    delerFormIn = document.getElementById("deler-form-in"),
    nothFormIn = document.getElementById("noth-form-in"),
    clearFormIn = document.getElementById("clear-form-in"),
    saveFormIn = document.getElementById("save-form-in");



 
function clearInputNew(){
    nameFormIn.value = "";
    numberFormIn.value = "";
    nationalFormIn.value = "";
    idFormIn.value = "";
    beardFormIn.value = "";
    secretFormIn.value = "";
    delerFormIn.value = "";
    nothFormIn.value = "";
    
}

clearFormIn.onclick = () =>{
    clearInputNew()
}

saveFormIn.onclick = () =>{
     let a = false;
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].name === nameFormIn.value ||
            data[i].national === nationalFormIn.value ||
            data[i].id === idFormIn.value 
            ){
                a = true;
                break;
            }
    }

    if(a){
       
        msgError.style.display = "flex";
        pText.innerHTML = "هذا الإسم أو الرقم القومى أو الرقم الذكى موجود من <br>قبل من فضلك أدخل البيانات مرة أخرى"
        return;
    }

    data.push(
        {
            id : idFormIn.value,
            name:nameFormIn.value,
            number:numberFormIn.value,
            national:nationalFormIn.value,
            delar : delerFormIn.value,
            secrit: secretFormIn.value,
            dailyQuota: beardFormIn.value, 
            amount:[],
            totalAmount : (e) =>{
                let a = 0; 
                    for(let i =0 ; i < e.length ; ++i ){
                        a += e[i];

                    }
                    return a;   
            },
            remainingQuantity : (e,b)=>{
                return 30*e - b;
            }

        }
    );
   
       
    msgError.style.display = "flex";
    pText.innerHTML = "تم الحفظ بنجاح";
    
   
    clearInputNew();
}
// Nav Bar

let homeNav = document.getElementById("home-nav"),
    newNav = document.getElementById("new-nav"),
    formOut = document.getElementById("form-out"),
    formIn = document.getElementById("form-in");



homeNav.onclick = ()=>{
    formOut.style.display = "flex";
    formIn.style.display = "none";
}
newNav.onclick = ()=>{
    formIn.style.display = "flex";
    formOut.style.display = "none";
}

// Close OverFlow

close.onclick = ()=>{
    msgError.style.display = "none";
}
var currentState = [];

function allMe() {
    alert(currentState.toString());
}
function getCookie() {
    var name = "checklistState=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    //return ca;
    for(var i = 0; i <ca.length; i++) {
        
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
//            alert("Returning " + c.toString());
            return c.substring(name.length, c.length);
        }
    }
    return 1;
}
function loadDefault(){
    
    var loadedState = getCookie();
    var split = JSON.parse(loadedState);
    
   // alert("getCookie.split result: " + split.toString());
    //alert("split 0: " + split[0]);
    //alert("split 1: " + split[1]);
    
    //  alert("Cookie: " + arrayQ);
    if(split[0] ==1){
//        alert("spot0 = 1" );
        currentState[0] = 1;
        document.getElementById("0").checked = true;
    }
    else{
  //      alert("spot0 = 0" );

        currentState[0]=0;
        document.getElementById("0").checked = false;
    }
    if(split[1] ==1){
    //    alert("spot1 = 1" );

        currentState[1] = 1;
        
        document.getElementById("1").checked = true;
    }
    else{
     //   alert("spot1 = 0" );

        currentState[1]=0;
        
        document.getElementById("1").checked = false;
    }
}
function makeDefaultCookie(){
    var array = [0,0];
    var arrAsJson = JSON.stringify(array);
    document.cookie = "checklistState = " + arrAsJson + "; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/";
}
function deleteCookie(){
    document.cookie = "checklistState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function alertCookieValues() {
    alert(decodeURIComponent(document.cookie));
}
function updateCookie(){
    var arrAsJson = JSON.stringify(currentState);
    document.cookie = "checklistState = " + arrAsJson + "; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/";
}


function boxChecked(chkBox){
 //   alert("Box " + chkBox.id + "before:" + currentState[chkBox.id]);
    if(chkBox.checked){
        currentState[chkBox.id] = 1;
    }
    else{
        currentState[chkBox.id] = 0;
    }
    //alert("Box " + chkBox.id + "after:" + currentState[chkBox.id]);
    updateCookie()
}

function createSavedChecklist(){
    var twoDSave = [
                               { isChecked: '0', Task: 'doX', id: 0 },
                               { isChecked: '0', Task: 'doY', id: 1 },
                               { isChecked: '1', Task: 'doZ', id: 2 }
                               ];
var arrAsJson = JSON.stringify(twoDSave);
     document.cookie = "twoDArray = " + arrAsJson + "; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/";
}


function loadTwoDCookie() {
    var name = "twoDArray=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    //
    for(var i = 0; i <ca.length; i++) {
        
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            var parsed = JSON.parse(c.substring(name.length, c.length));
            alert("Results of 2D Parse:" + parsed[0].isChecked + ", Task: " + parsed[0].Task );
            
            return parsed;
            
        }
    }
    return "";
}

function clickForAlert(){
    alert("hello world");
}
function createHandler(i) {
    // The value of `i` is local to this variable scope
    
    // Return your handler function, which accesses the scoped `i` variable
    return function() {
        alert("i: " +  i);
    }
}
function populateDynamicDiv(){
    var thisArr = loadTwoDCookie();
    var listHolder = document.getElementById("dynamicTest");
        for (var i = 0; i < thisArr.length; i++) {
            var checkBox = document.createElement("input");
            var label = document.createElement("label");
            checkBox.type = "checkbox";
            checkBox.value = thisArr[i].Task;
            checkBox.id = thisArr[i].id;
            if(thisArr[i].isChecked!= 0){
                checkBox.checked = true;
                
            }
            //checkBox.checked = thisArr[i].isChecked;
            //todo pass an arg below
            checkBox.addEventListener("click", createHandler(thisArr[i].id), false);
            listHolder.appendChild(checkBox);
            alert("This should append ");
            listHolder.appendChild(label);
           label.appendChild(document.createTextNode(thisArr[i].Task));
            linebreak = document.createElement("br");
            listHolder.appendChild(linebreak);
            
        }
}


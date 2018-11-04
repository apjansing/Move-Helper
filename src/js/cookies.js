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
    var stringTemp = loadTwoDCookie();
    if(stringTemp == ""){
        createSavedChecklist();
        populateDynamicDiv();
    }
    else{
        populateDynamicDiv();
    }
    var loadedState = getCookie();
    var split = JSON.parse(loadedState);
    //populateDynamicDiv()

}

function deleteCookie(){
    document.cookie = "checklistState=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function updateCookie(){
    var arrAsJson = JSON.stringify(currentState);
    document.cookie = "twoDArrayB = " + arrAsJson + "; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/";
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
                    { isChecked: '1', Task: 'doX', id: 0 },
                    { isChecked: '0', Task: 'doY', id: 1 },
                    { isChecked: '0', Task: 'doZ', id: 2 },
                    { isChecked: '0', Task: 'do3', id: 3 },
                    { isChecked: '0', Task: 'do4', id: 4 },
                    { isChecked: '0', Task: 'do5', id: 5 },
                    { isChecked: '0', Task: 'do6', id: 6 },
                    { isChecked: '0', Task: 'do7', id: 7 },
                    { isChecked: '0', Task: 'do8', id: 8 },
                    { isChecked: '0', Task: 'do9', id: 9 },
                    { isChecked: '0', Task: 'do10', id: 10 },
                    { isChecked: '0', Task: 'do11', id: 11 },
                    { isChecked: '0', Task: 'do12', id: 12 },
                    { isChecked: '0', Task: 'do13', id: 13 },
                    { isChecked: '1', Task: 'do14', id: 14 }
                               ];
var arrAsJson = JSON.stringify(twoDSave);
     document.cookie = "twoDArrayB = " + arrAsJson + "; expires=Thu, 31 Dec 2020 12:00:00 UTC; path=/";
}


function loadTwoDCookie() {
    var name = "twoDArrayB=";
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
          //  alert("Results of 2D Parse:" + parsed[0].isChecked + ", Task: " + parsed[0].Task );
            
            return parsed;
            
        }
    }
    return "";
}

function clickForAlert(){
    alert("hello world");
}
function createHandler(i) {
    //thank you stack overflow
    return function() {
        var state = currentState[i].isChecked;
        if(state == 0){
            currentState[i].isChecked = 1;
            
        }
        else{
            currentState[i].isChecked = 0;
        }
        //alert("i now: " +  currentState[i].isChecked);
        updateCookie();
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
            //alert("This should append ");
            listHolder.appendChild(label);
           label.appendChild(document.createTextNode(thisArr[i].Task));
            linebreak = document.createElement("br");
            listHolder.appendChild(linebreak);
            currentState.push(new Array(3));
            currentState[i] = thisArr[i];
           // isChecked: '1', Task: 'doX', id: 0
            //currentState[i].i
        }
}
function clearDiv()
{
    document.getElementById("dynamicTest").innerHTML = "";
}


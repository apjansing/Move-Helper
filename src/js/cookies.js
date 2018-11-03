var currentState = [0,0];
function allMe() {
    alert(currentState.toString());
}
function getCookie() {
    var name = "checklistState=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    return ca;
    for(var i = 0; i <ca.length; i++) {
        
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function loadDefault(){
    var loadedState = getCookie();
    
    //  alert("Cookie: " + arrayQ);
    if(loadedState[0] ==1){
        currentState[0] = 1;
        document.getElementById("0").checked = true;
    }
    else{
        currentState[0]=0;
        document.getElementById("0").checked = false;
    }
    if(loadedState[1] ==1){
        currentState[1] = 1;
        
        document.getElementById("1").checked = true;
    }
    else{
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
    alert("Box " + chkBox.id + "before:" + currentState[chkBox.id]);
    if(chkBox.checked){
        currentState[chkBox.id] = 1;
        
    }
    else{
        currentState[chkBox.id] = 0;
    }
    alert("Box " + chkBox.id + "after:" + currentState[chkBox.id]);
    updateCookie()
}

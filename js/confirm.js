function displayCookieInfo() {
    let x = document.cookie;
    const newInfo = JSON.parse(x);
    for(var i in newInfo){
        const result = i.replace(/([A-Z])/g, " $1");
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        document.getElementById('keys').innerHTML += finalResult + ': \<br> ';
        document.getElementById('values').innerHTML += newInfo[i] + '\<br> ';
    }
}

window.onload = displayCookieInfo();
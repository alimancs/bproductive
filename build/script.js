let toDos = []
function createToDo(toDos) {
    const textval = document.getElementById("new-td");
    if (textval.value == "") {
        alert("you have to make an input in the text field.");
    } else {
        const indicator = document.getElementById("ind");
        const main = document.getElementById("to-dos");
        const box = document.createElement("div");
        const checkboxcontainer = document.createElement("div");
        const checkboxcontainerattri = document.createAttribute("id");
        let indnum = 1 + Number(indicator.innerText);
        indicator.innerHTML=indnum;
        
        const boxattri = document.createAttribute("id");
        let boxname = "box" + String(indnum);
    
        boxattri.value = boxname;
        checkboxcontainerattri.value="check-container";
        checkboxcontainer.setAttributeNode(checkboxcontainerattri);
        box.setAttributeNode(boxattri);
    
        const newtodo = document.createElement("p");
        const newtodoattri = document.createAttribute("id");
        newtodoattri.value="text";
        newtodo.setAttributeNode(newtodoattri);
        const checker = document.createElement("input");
        const checkerattri = document.createAttribute("type");
        checkerattri.value = "checkbox";
        checker.setAttributeNode(checkerattri);
        main.appendChild(box);
        box.appendChild(checkboxcontainer);
        checkboxcontainer.appendChild(checker);
        box.appendChild(newtodo);
        const text = document.createTextNode(textval.value);
        newtodo.appendChild(text);
        const deletebutton = document.createElement("button");
        const delclick = document.createAttribute("onclick");
        const deltext = document.createTextNode("×");
        const delbox = document.createElement("div");
        const delboxattri = document.createAttribute("id");
        delboxattri.value="del-container";
        delbox.setAttributeNode(delboxattri);
        delclick.value=`deleteToDo(${indnum})`;
        deletebutton.setAttributeNode(delclick);
        deletebutton.appendChild(deltext);
        box.appendChild(delbox);
        delbox.appendChild(deletebutton);
        toDos.push(box);
        textval.value='';
    }

}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const textval = document.getElementById("new-td");
        if (textval.value == "") {
            alert("you have to make an input in the text field.");
        } else {
            const indicator = document.getElementById("ind");
            const main = document.getElementById("to-dos");
            const box = document.createElement("div");
            const checkboxcontainer = document.createElement("div");
            const checkboxcontainerattri = document.createAttribute("id");
            let indnum = 1 + Number(indicator.innerText);
            indicator.innerHTML=indnum;
            
            const boxattri = document.createAttribute("id");
            let boxname = "box" + String(indnum);
        
            boxattri.value = boxname;
            checkboxcontainerattri.value="check-container";
            checkboxcontainer.setAttributeNode(checkboxcontainerattri);
            box.setAttributeNode(boxattri);
        
            const newtodo = document.createElement("p");
            const newtodoattri = document.createAttribute("id");
            newtodoattri.value="text";
            newtodo.setAttributeNode(newtodoattri);
            const checker = document.createElement("input");
            const checkerattri = document.createAttribute("type");
            checkerattri.value = "checkbox";
            checker.setAttributeNode(checkerattri);
            main.appendChild(box);
            box.appendChild(checkboxcontainer);
            checkboxcontainer.appendChild(checker);
            box.appendChild(newtodo);
            const text = document.createTextNode(textval.value);
            newtodo.appendChild(text);
            const deletebutton = document.createElement("button");
            const delclick = document.createAttribute("onclick");
            const deltext = document.createTextNode("×");
            const delbox = document.createElement("div");
            const delboxattri = document.createAttribute("id");
            delboxattri.value="del-container";
            delbox.setAttributeNode(delboxattri);
            delclick.value=`deleteToDo(${indnum})`;
            deletebutton.setAttributeNode(delclick);
            deletebutton.appendChild(deltext);
            box.appendChild(delbox);
            delbox.appendChild(deletebutton);
            toDos.push(box);
            textval.value='';
        }
    }
})

function deleteToDo(boxnumber) {
    let boxname = "box" + boxnumber;
    const box = document.getElementById(boxname);
    box.style.display = "none";
}

function startTimer(interval) {
    const startbutton = document.getElementById("start");
    const setbox = document.getElementById("set-timerbox");
    const resetbutton = document.getElementById("reset");
    let seconds = document.getElementById("seconds");
    let minutes = document.getElementById("minutes");
    let sN = document.getElementById("setsecond");
    let mN = document.getElementById("setminute");
    seconds.innerHTML = sN.value;
    minutes.innerHTML = mN.value;
    resetbutton.style.display = "inline";
    setbox.style.visibility = "hidden";
    startbutton.style.display = "none";
    down = setInterval(function() {
        let seconds = document.getElementById("seconds");
        let minutes = document.getElementById("minutes");

        if (Number(seconds.innerText)===0) {
            value2 = Number(minutes.innerText)-1;
            minutes.innerHTML=value2;
            seconds.innerHTML=60;
        } else {

            value1 = Number(seconds.innerText)-1;
            seconds.innerHTML=value1;
        }
        if (Number(seconds.innerText)==0 && Number(minutes.innerText==0)) {
            clearInterval(down);
        }
    }, 1000)
    global
}

function pauseTimer(down) {
   clearInterval(down);
}
function continueTimer() {
    down = setInterval(function() {
        let seconds = document.getElementById("seconds");
        let minutes = document.getElementById("minutes");

        if (Number(seconds.innerText)===0) {
            value2 = Number(minutes.innerText)-1;
            minutes.innerHTML=value2;
            seconds.innerHTML=60;
        } else {

            value1 = Number(seconds.innerText)-1;
            seconds.innerHTML=value1;
        }
        if (Number(seconds.innerText)==0 && Number(minutes.innerText==0)) {
            clearInterval(down);
        }
    }, 1000)
}
function resetTimer(down) {
    let seconds = document.getElementById("seconds");
    let minutes = document.getElementById("minutes");
    const startbutton = document.getElementById("start");
    const setbox = document.getElementById("set-timerbox");
    const resetbutton = document.getElementById("reset");
    let sN = document.getElementById("setsecond");
    let mN = document.getElementById("setminute");
    clearInterval(down)
    seconds.innerHTML=0;
    minutes.innerHTML=0;
    resetbutton.style.display = "none";
    setbox.style.visibility = "visible";
    startbutton.style.display = "inline";
    sN.value=0;
    mN.value=0;
}

let weather = {
    key:'fca951a4460bdc5dfd67303ebdb06216',
    fetchLocation:function() {
        navigator.geolocation.getCurrentPosition(this.success, this.error);
    },
    success:function (position) {
         const {latitude, longitude} = position.coords;
         console.log(latitude)
         lati = String(latitude);
         long = String(longitude);
         weather.fetchWeather();
    },
    error:function () {
        console.log("unable to get user location");
    },
    fetchWeather:function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lati+"&lon="+long+"&units=metric&appid=fca951a4460bdc5dfd67303ebdb06216").then((response) => response.json()).then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const location = document.querySelector("#location");
        const tempinfo = document.querySelector("#temp");
        const cloud = document.querySelector("#w-type");
        const humi = document.querySelector("#humidity");
        const wsp = document.querySelector("#w-speed");
        const ico =  document.querySelector("#icon")
        const {main:{temp, humidity}, sys:{country}, name, weather:{0:{main, icon}}, wind:{speed}} = data;
        location.innerHTML = `weather in ${name}, ${country}`;
        tempinfo.innerHTML = `${temp}℃`;
        cloud.innerHTML = `${main}`;
        humi.innerHTML = `Humidity : ${humidity}%`;
        wsp.innerHTML = `Wind Speed : ${speed}Km/H`;
        ico.src = "http://openweathermap.org/img/wn/"+ icon +".png";
        location.style.display = 'block';
        tempinfo.style.display = 'block';
        cloud.style.display = 'block';
        humi.style.display = 'block';
        wsp.style.display = 'block';
        ico.style.display = 'block';
        document.querySelector("#loader").style.display = "none";
    }
};
weather.fetchLocation();





    

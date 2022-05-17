let numCommander;

window.addEventListener("load", () => { 
    document.querySelector(".loader").classList.add("fade");
    add()
    document.querySelector(".odot-logo").addEventListener("click", odot);
});

let add = () => {
    for (let i = 1; i <= data.length; i++) {
        let item = El("div",{class : "banner"},
            El("img",{attributes: {class: `background-img-commander`, id: `${i}`, src : `assets/media/600ppi/mefaked_${i}-100.jpg` , alt : `mefaked_${i}`}, listeners : {click : next}}),
            El("p",{class: `background-name`},`מפקד מספר ${i} - ${data[i - 1].nameCommander}`,),            
        );
        document.querySelector(`.start`).append(item)
    }
}

let next = (event) => {
    numCommander = event.target.id;
    document.querySelector(`.start`).style.display = "none";  
    document.querySelector(`.secondPart`).style.display = "block";  
    document.querySelector(`#num-com`).innerHTML = `מפקד מספר ${numCommander} : <br> ${data[numCommander - 1].nameCommander}`;  
    document.querySelector(`#quote`).innerHTML = `ציטוט ידוע: <br> ${data[numCommander - 1].quote}`;  
    document.querySelector(`#story`).innerHTML = `רקע: <br> ${data[numCommander - 1].story}`;  
    document.querySelector(`#img-com`).setAttribute("src", `assets/media/600ppi/small_mefaked_${numCommander}-100.jpg`);
    document.querySelector(`#back-button`).addEventListener("click" , () => {
        document.querySelector(`.start`).style.display = "block";  
        document.querySelector(`.secondPart`).style.display = "none";
    })
}

let odot = () => {
    document.querySelector(`.start`).style.display = "none";
    document.querySelector(`.secondPart`).style.display = "none";
    document.querySelector(`.div-odot`).style.display = "block";  
    document.querySelector(`.body`).style.overflow = "hidden";
    document.querySelector(`.title`).innerHTML = "אודות";
    document.querySelector(`.odot-logo`).style.visibility = "hidden";  
    document.querySelector(`#back-button-odot`).addEventListener("click", () => {
        document.querySelector(`.start`).style.display = "block";
        document.querySelector(`.div-odot`).style.display = "none";  
        document.querySelector(`.odot-logo`).style.visibility = "visible";  
        document.querySelector(`.body`).style.overflow = "scroll";
        document.querySelector(`.title`).innerHTML = "הכר את המפקד";
    })
}
    

let El = (tagName, options = {}, ...children) => {
    let el = Object.assign(document.createElement(tagName), options.fields || {});
    if (options.classes && options.classes.length) el.classList.add(...options.classes);
    else if (options.class) el.classList.add(options.class);
    if (options.id) el.id = options.id;
    el.append(...children.filter(el => el));
    for (let listenerName of Object.keys(options.listeners || {}))
        if (options.listeners[listenerName]) el.addEventListener(listenerName, options.listeners[listenerName], false);
    for (let attributeName of Object.keys(options.attributes || {})) {
        if (options.attributes[attributeName] !== undefined) el.setAttribute(attributeName, options.attributes[attributeName]);
    }
    return el;
}

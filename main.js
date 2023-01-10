let numCommander;

const info = [
    // מפקד מספר 1
    {
        nameCommander : "גל גנסין",
        story : "גל נולדה וגדלה בירושלים, 2 אחים קטנים. גל בעלת חלומות גדולים ותושיה רבה, תמיד רצתה לתרום כמה שיותר ולכן החליטה להתגייס לTASA. בנוסף גל הייתה גם מצטיינת הקורס.",
        years : "2017-2022",
    },
    // מפקד מספר 2
    {
        nameCommander : "אלון מזרחי",
        story : "אלון נולד וגדל בירוחם למשפחה בת 6 אחים. נכון להיום הוא מחזיק ב2 תארים. גר בגבעת אריאל שרון",
        years : "2017-2021",
    },
    // מפקד מספר 3
    {
        nameCommander : "אורן כהן",
        story : "אורן נולד והתחנך בכרמיאל, יש לו 3 אחיות ואח. החלום שלו אחרי שיסיים את התואר השני הוא ללמוד לגלוש.",
        years : "2018-2022",
    },
    // מפקד מספר 4
    {
        nameCommander : "ניצן סלמון",
        story : "ניצן נולדה בשארלוט שבצפון קרולינה ועשתה עליה ארצה כדי לשרת בTASA. בת יחידה",
        years : "2017-2021",
    },
    // מפקד מספר 5
    {
        nameCommander : "עמית גייסמר",
        story : "עמית נולד וגדל בגבעתיים, בן יחיד. מאז שהיה קטן החלום שלו היה לשרת בTASA, וכמובן להיות מפקד",
        years : "2015-2020",
    },
    // מפקד מספר 6
    {
        nameCommander : "אור שביט",
        story : "אור נולד וגדל בקסריה עם 2 אחיות. כשאביו נהרג במהלך שירותו בTASA החליט אור לשרת ולפקד לזכרו",
        years : "2017-2022",
    },
    // מפקד מספר 7
    {
        nameCommander : "מעיין אשר",
        story : "מעיין נולדה בתל אביב ועברה בגיל 3 לחיפה, בת יחידה. שני הוריה שירתו בTASA, כשגדלה החליטה ללכת בעקבותיהם ולהתגייס גם לTASA",
        years : "2016-2020",
    },
    // מפקד מספר 8
    {
        nameCommander : "אלכס טייטר",
        story : "אלכס נולד בסקט פטרבוגר שברוסיה. כשעלה ארצה עם אמו ואחיו הוא החליט לעשות את הצעד הגדול ולהתגייס לTASA",
        years : "2019-2022",

    },
    // מפקד מספר 9
    {
        nameCommander : "פנחס אלרוד",
        story : "פנחס גדל בבני ברק למשפחה חרידית מרובת ילדים. כשחזר בשאלה החליט גם להתגייס לTASA",
        years : "2021-2022",
    },
    // מפקד מספר 10
    {
        nameCommander : "שיר סטופ",
        story : "שיר נולדה ביוסטון טקסס ועשתה עליה עם הוריה ואחותה בגיל שלוש",
        years : "2015-2020",
    },
    // מפקד מספר 11
    {
        nameCommander : "מישה טל",
        story : "מישה נולד וגדל בחיפה. 2 אחים, הוא החליט להתגייס לTASA בעקבות חברתו הטובה סימה",
        years : "2016-2021",
    },
    // מפקד מספר 12
    {
        nameCommander : "סימה שמואלי",
        story : "סימה נולדה וגדלה בבאר יעקב, 3 אחים, סימה תמיד רצתה לחקור ולגלות דברים חדשים ולכן בחרה להתגייס לTASA",
        years : "2016-2020",
    },
    // מפקד מספר 13
    {
        nameCommander : "איציק ספנסיב",
        story : "איציק נולד וגדל ברמלה, 3 אחים גדולים שכולם שירתו גם בTASA וכמותם בחר להמשיך את השושלת המשפחתית",
        years : "2016-2020",
    },
    // מפקד מספר 14
    {
        nameCommander : "טלי משפט",
        story : "טלי נולדה וגדלה ברחובות, בת יחידה. היום היא במהלך התואר השני שלה במדעי המחשב בטכניון בחיפה",
        years : "2020-2022",
    },
    // מפקד מספר 15
    {
        nameCommander : "עזרא חשמונאי",
        story : "עזרא נולד וגדל בברוקלין ניו יורק לאם חד הורית. הוא החליט לעשות עליה בעקבות חבריו מבית הספר שעלו לארץ והתגייסו לעשות שירות משמעותי",
        years : "2017-2021",
    },
]

window.addEventListener("load", () => { 
    document.querySelector(".loader").classList.add("fade");
    add()
    document.querySelector(".odot-logo").addEventListener("click", odot);
});

let add = () => {
    for (let i = 1; i <= info.length; i++) {
        let item = El("div",{class : "banner"},
            El("img",{attributes: {class: `background-img-commander`, id: `${i}`, src : `assets/media/600ppi/mefaked_${i}.png` , alt : `mefaked_${i}`}, listeners : {click : next}}),
            El("p",{class: `background-name`}, info[i - 1].nameCommander,),            
        );
        document.querySelector(`.start`).append(item)
    }
}

let next = (event) => {
    numCommander = event.target.id;
    document.querySelector(`.start`).style.display = "none";  
    document.querySelector(`.secondPart`).style.display = "block";
    document.querySelector(`.title`).innerHTML = info[numCommander - 1].nameCommander;  
    document.querySelector(`#num-com`).innerHTML =  `שנות פעילות: <br> ${info[numCommander - 1].years}`;  
    document.querySelector(`#quote`).innerHTML = `ציטוט ידוע: <br> ${data[numCommander - 1].quote}`;  
    document.querySelector(`#story`).innerHTML = `רקע: <br> ${info[numCommander - 1].story}`;  
    document.querySelector(`#img-com`).setAttribute("src", `assets/media/600ppi/mefaked_${numCommander}.png`);
    document.querySelector(`#back-button`).addEventListener("click" , () => {
        document.querySelector(`.title`).innerHTML = "הכר את המפקד";  
        document.querySelector(`.start`).style.display = "flex";  
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
        document.querySelector(`.start`).style.display = "flex";
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

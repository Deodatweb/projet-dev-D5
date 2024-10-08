document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.nav-link');

    // Fonction pour sélectionner l'élément de menu
    function selectMenuItem(event) {
        // Retirer la classe 'selected' de tous les éléments de menu
        menuItems.forEach(item => item.classList.remove('active'));

        // Ajouter la classe 'selected' à l'élément cliqué
        event.target.classList.add('active');
    }

    // Attacher l'événement à chaque élément de menu
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prévenir le comportement par défaut du lien
            selectMenuItem(event);
            
            // Naviguer à l'ancre correspondante
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Gérer l'état initial basé sur l'URL
    const initialHash = window.location.hash;
    if (initialHash) {
        const initialElement = document.querySelector(`a[href="${initialHash}"]`);
        if (initialElement) {
            initialElement.classList.add('active');
        }
    }
});




function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}



myID = document.getElementById("myID");

var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.className = "gotopbtn show"
  } else {
    myID.className = "gotopbtn hide"
  }
};

window.addEventListener("scroll", myScrollFunc);





// Prise de RDV
// function getDaysInMonth(month, year) {
//     return new Date(year, month, 0).getDate();
// }

// function createCalendar(month, year) {
//     const calendar = document.querySelector("#calendar");
//     calendar.innerHTML = '';

//     let date = 1;
//     const daysInMonth = getDaysInMonth(month + 1, year);

//     for (let i = 0; i < 6; i++) {
//         let week = document.createElement('tr');

//         for (let j = 0; j < 7; j++){
//             if (i === 0 && j < new Date(year, month, 1).getDay() || date > daysInMonth) {
//                 let day = document.createElement('td');
//                 day.classList.add('jour');
//                 week.appendChild(day);
//             }
//             else {
//                 let day = document.createElement('td');
//                 day.classList.add('jour');
//                 day.innerText = date;
//                 week.appendChild(day);
//                 date++;
//             }
//         }

//         calendar.appendChild(week);
//     }    
// }

// const currentDate = new Date();

// createCalendar(currentDate.getMonth(), currentDate.getFullYear());




// Ajout élément au title
// let title = document.title;

// let ajout = "ajout - ";
// document.title = ajout + title;



// calendrier 

const daysContainer = document.querySelector(".days"),
nextBtn = document.querySelector(".next-btn"),
prevBtn = document.querySelector(".prev-btn"),
month = document.querySelector(".month");


const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];

const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

// current date
const date = new Date();

// current month
let currentMonth = date.getMonth();

// current year
let currentYear = date.getFullYear();

// fonction render days
function renderCalendar() {
    date.setDate(1);
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const lastDayIndex = lastDay.getDay();
    const lastDayDate = lastDay.getDate();
    const prevLastDay = new Date(currentYear, currentMonth, 0);
    const prevLastDayDate = prevLastDay.getDate();
    const nextDays = 7 - lastDayIndex - 1;

    // update current year and month in header
    month.innerHTML = `${months[currentMonth]} ${currentYear}`;

    // update dayd html
    let days = "";

    //prev days html
    for (let x = firstDay.getDay(); x > 0; x--) {
        days += `<div class="day prev-btn>${prevLastDayDate - x + 1}</div>`;
    }

    // current month days
    for (let i = 1; i <= lastDayDate; i++) {
        // check if its today then add today class
        if (
            i=== new Date().getDate() &&
            currentMonth === new Date().getMonth() && 
            currentYear === new Date().getFullYear()
        ) {
            // if date month year matches
            days += `<div class="day today">${i}</div>`;
        } else {
            // else dont add today
            days += `<div class="day ">${i}</div>`;
        }
    }

    // next month days
    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="day next">${j}</div>`;
    }

    // hideTodayBtn();
    daysContainer.innerHTML = days;
}

renderCalendar();


nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } 
    renderCalendar();
});

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(); 
});


todayBtn.addEventListener("click", () => {
    currentMonth = date.getMonth();
    currentYear = getFullYear();
    renderCalendar();
});

// function hideTodayBtn() {
//     if (
//         currentMonth === new Date().getMonth() &&
//         currentyear === new Date().getFullYear()
//     ) {
//         todayBtn.style.display = "none";
//     } else {
//         todayBtn.style.display = "flex";
//     }
// }

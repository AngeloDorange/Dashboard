// Search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}


// second chart


var ctx1 = $("#mySecondChart").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["9:00AM", "12:00PM", "6:00PM", "9:00PM", "12:00AM", "6:00AM", "9:00AM"],
            datasets: [{
                    label: "Open",
                    data: [350, 300, 550, 570, 600, 780, 750],
                    backgroundColor: "#00cc00"
                },
                {
                    label: "Click",
                    data: [590, 350, 400, 600, 700, 550, 790],
                    backgroundColor: "#4a6cf7"
                },
                {
                    label: "Click Second Time",
                    data: [320, 250, 450, 550, 650, 700, 600],
                    backgroundColor: "#b30000"
                }
            ]
            },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            onResize: function (chart, size) {
              if (size.width < 500) {
                  chart.options.legend.display = false;
              } else {
                  chart.options.legend.display = true;
              }
              chart.update();
          }
        }
});




// third chart
var xValues = ["Open", "Bounce", "Unsuscribe"];
var yValues = [70, 20, 10];
var barColors = [
  "#00cc00",
  "#4a6cf7",
  "#b30000"
];

new Chart("myThirdChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      responsive: true,
      maintainAspectRatio: true,
      text: "Email Performance from 2021 to 2024",
      onResize: function (chart, size) {
        if (size.width < 500) {
            chart.options.legend.display = false;
        } else {
            chart.options.legend.display = true;
        }
        chart.update();
    }
    }
  }
});



// full calendar js

var eventsArray = [
  {
    title  : 'event1',
    start  : '2019-07-20'
  },
  {
    title  : 'event2',
    start  : '2019-08-05',
    end    : '2019-08-07'
  },
  {
    title  : 'event3',
    start  : '2019-09-03'
  },
  {
    title  : 'event3',
    start  : '2019-10-05'
  }
];

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('appCalendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      height: 400,
      plugins: [ 'dayGrid', 'interaction' ],
      
      dateClick: function(info) {
          alert('Clicked on: ' + info.dateStr);
        
        eventsArray.push({
          date: info.dateStr,
          title: "test event added from click"
        });
        
        calendar.refetchEvents();
      },
    
      eventClick: function(info) {
        alert(info.event.title)
      },
    
      events: function(info, successCallback, failureCallback) {
        successCallback(eventsArray);
      }
  });

  calendar.render();
});


// year update

const yearUpdate = new Date().getFullYear();
document.getElementById('year').innerHTML = yearUpdate;



// animation js
new WOW().init();



// navbar open desktop

if (window.matchMedia('(min-width: 1041px)').matches) {
  let estado = "open";

function showNavbar() {
  let links = document.getElementsByClassName('nav-link');

  if (estado == "open"){
    document.getElementById('sidebar').style.width = '0px';
    document.getElementById('sidebar').style.paddingRight = '0px';
    document.getElementById('sidebar').style.paddingLeft = '0px';
    document.getElementById('main').style.marginLeft = '0px';
    document.getElementById('logo').style.display = 'none';
    document.getElementById('upgrade').style.display = 'none';

    for (var i = links.length - 1; i >= 0; i--) {
      links[i].style.display = 'none';
    }

    estado = "close";
  }

  else if (estado == "close"){
    document.getElementById('sidebar').style.width = '250px';
    document.getElementById('sidebar').style.paddingRight = '20px';
    document.getElementById('sidebar').style.paddingLeft = '20px';
    document.getElementById('main').style.marginLeft = '250px';
    document.getElementById('logo').style.display = 'block';
    document.getElementById('upgrade').style.display = 'block';

    for (var i = links.length - 1; i >= 0; i--) {
      links[i].style.display = 'inline-block';
    }

    estado = "open";
  }

}
}


if (window.matchMedia('(max-width: 1040px)').matches) {
  function showNavbar() {

    document.getElementById('sidebar').style.left = "0%"

    const filterNav = document.querySelector('.filter_modal');
    filterNav.style.display = "block";

    filterNav.addEventListener('click', () => {
      document.getElementById('sidebar').style.left = "-100%";
      filterNav.style.display = "none";
    })
  }
}
const alertBannar = document.getElementById("alert");
alertBannar.innerHTML =
`<strong>Alert </strong>This is an alert box.
<span class="close-btn" onclick="this.parentElement.style.display='none';">&times;</span>`;

const trafficCanvas = document.getElementById("traffic-chart");
let trafficData1 = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [7, 12, 10, 20, 15, 17, 12, 18, 22, 15,
    25],
    backgroundColor: "rgb(255,165,0, .6)",
    borderWidth: 1,
    borderColor:"rgb(255,165,0, .1)",
  }]
  };

let trafficData2 = {
  labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
  "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [130, 158, 240, 480, 390,470, 430, 320, 400, 400,
    600],
    backgroundColor: "rgb(255,165,0, .6)",
    borderWidth: 1,
    borderColor:"rgb(255,165,0, .1)",
  }]
  };  

  let trafficData3 = {
    labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [700, 750, 700, 1200, 1300, 1750, 950, 1350, 950, 1500,
      1300],
      backgroundColor: "rgb(255,165,0, .6)",
      borderWidth: 1,
      borderColor:"rgb(255,165,0, .1)",
    }]
  };  
  
  let trafficData4 = {
    labels: ["1-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
      data: [3500, 4400, 2500, 5000, 4800, 6100, 3500, 5000, 4200, 6500,
      5200],
      backgroundColor: "rgb(255,165,0, .6)",
      borderWidth: 1,
      borderColor:"rgb(255,165,0, .1)",
    }]
  };  


  let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
      duration: 1000,
      easing:"linear"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true,
        }
      }]
    },
    legend : {
      display: false
    }
    };

let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData1,
  options: trafficOptions
  });

let test = document.getElementsByClassName("time-wrap")[0];
console.log(test);
test.addEventListener("click", (e) => {
 let test2 = e.target.innerHTML;
  if ( test2 === "Hourly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData1,
      options: trafficOptions
      });
  } else if (test2 === "Daily") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData2,
      options: trafficOptions
      });
  } else if (test2 === "Weekly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData3,
      options: trafficOptions
      });
  } else if (test2 === "Monthly") {
    let trafficChart = new Chart(trafficCanvas, {
      type: 'line',
      data: trafficData4,
      options: trafficOptions
      });
 }
})

const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: "rgb(255,165,0, .6)",
    borderWidth: 1
  }]
  };

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  cornerRadius:10,
  legend : {
  display: false
  }
}

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart");
const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
      label: '# of Users',
      data: [2000, 550, 500],
      borderWidth: 0,
      backgroundColor: [
      "rgb(255,165,0, .8)",
      "rgb(66,133,244, .8)",
      "rgb(200,200,200, .8)"
      ]
    }]
  };

const mobileOptions = {
  legend: {
    position: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  // ensure user and message fields are filled out
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
  });

  //   creating datalist element
  //   additon member name to the list 
  //   get inputed value from input tag 
  //   checking the value include member name 
  //   if it is not included member name, delete from the screen 
   

  //Serch bar function of message user
  let namesList = document.getElementById("names").getElementsByTagName("option");
  console.log(namesList[0].innerHTML.toLowerCase());

  user.addEventListener("keyup", (e)=> {
    let userString = e.target.value;
    userString.toLowerCase();
    for (i = 0; i < namesList.length; i ++) {
      if ( userString.includes(namesList[i].innerHTML.toLowerCase() === false)) {
        namesList[i].style.display = "";
      }
    }
  })

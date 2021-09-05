let date = new Date()
let year = date.getFullYear()
let month = String(date.getMonth() + 1).padStart(2, '0')
let currentDate = String(date.getDate()).padStart(2, '0')
let dateString = year + '-' + month + '-' + currentDate;

let thisForm = document.getElementById("form")
let date_picked = document.getElementById("date-picker")
let container = document.getElementById("container")
   
$('#date-picker').datetimepicker({
    timepicker:false,
    datepicker:true,
    value: date_picked,
    format:'Y-m-d',
    yearEnd: date.getFullYear(),
    minDate: new Date('1995-06-16'),
    maxDate: dateString
});


thisForm.addEventListener("submit", (e)=> {
    e.preventDefault()
    showImage(date_picked.value)
})

async function showImage(x) {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${x}`)
    const data = await response.json()
    const fetched_image = data.url

    container.innerHTML = `
    <div class="row h-100 justify-content-center">
    <div class="col-md-10 text-center">
    <h4 class="text-center mt-4" style="font-weight:600">${data.title}</h4>
    </br>
    <img src="${fetched_image}" class="img-thumbnail">
    <p>${data.date}</p>
    </br>
    <p id="data-explanation">${data.explanation}</p>
    </div>
    </div>
    `
}

var load = document.getElementById("loading")

$(window).on('load', function () {
    $('#loading').hide();
  }) 
  
function load() {
    load.style.display = 'none';
}

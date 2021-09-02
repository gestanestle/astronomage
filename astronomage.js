let date = new Date()
//let year = date.getFullYear()
//let month = String(date.getMonth() + 1).padStart(2, '0')
//let currentDate = String(date.getDate()).padStart(2, '0')
//let dateString = year + '-' + month + '-' + currentDate;
//document.getElementById('date-picker').value = dateString

let thisForm = document.getElementById("form")
let date_picked = document.getElementById("date-picker")
let container = document.getElementById("container")
   
$('#date-picker').datetimepicker({
    timepicker:false,
    datepicker:true,
    value: date_picked,
    format:'Y-m-d',
    monthEnd: date.getMonth(),
    yearEnd: date.getFullYear(),
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
    <h4 class="text-center mt-4">${data.title}</h4>
    <img src="${fetched_image}" class="img-thumbnail">
    </div>
    `
}

const button = document.querySelector('#but');
const time = document.querySelector('#time')

setInterval(function(){
    const time1 = new Date().toLocaleTimeString()
time.innerHTML= `${time1}`
},1000)

// button.addEventListener('click', function(e){
//     e.preventDefault();

//     const time1 = new Date().toLocaleTimeString()
//     console.log(time1);
//     time.innerHTML= `${time1}`
// })
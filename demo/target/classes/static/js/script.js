// Scroll suave
function scrollToSection(id){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}

// Gráfica Lineal
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type:'line',
    data:{
        labels:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
        datasets:[{
            label:'Litros consumidos',
            data:[12,19,14,17,15,20,18],
            borderColor:'#00bfff',
            backgroundColor:'rgba(0,191,255,0.2)',
            fill:true,
            tension:0.4,
            borderWidth:3
        }]
    },
    options:{responsive:true,plugins:{legend:{labels:{color:'#fff'}}},scales:{y:{ticks:{color:'#fff'}},x:{ticks:{color:'#fff'}}}}
});

// Gráfica de Barras
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type:'bar',
    data:{
        labels:['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'],
        datasets:[{
            label:'Litros consumidos',
            data:[12,19,14,17,15,20,18],
            backgroundColor:'rgba(0,191,255,0.6)',
            borderColor:'#00bfff',
            borderWidth:2
        }]
    },
    options:{responsive:true,plugins:{legend:{labels:{color:'#fff'}}},scales:{y:{ticks:{color:'#fff'}},x:{ticks:{color:'#fff'}}}}
});

// Formulario
document.getElementById('contactForm').addEventListener('submit',function(e){
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias!');
    this.reset();
});

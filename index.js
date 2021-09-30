const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function(){
    document.body.classList.toggle('bg-biru')
}) 

//warna random
//tombol acakWarna
const tAcakWarna = document.createElement('button');
const textTAcakWarna = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(textTAcakWarna);
tUbahWarna.after(tAcakWarna);
//function acakWarna
tAcakWarna.addEventListener('click', function(){
    
    function acakRGB(){
        return Math.round(Math.random() * 255);
    }

    const r = acakRGB()
    const g = acakRGB()
    const b = acakRGB()

    console.log(r,g,b)
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})


//range
const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')'
})
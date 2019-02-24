var btn = document.getElementById('submit');
btn.addEventListener('click' , function(e){
alert('Success!!');
e.stopPropogation();
})

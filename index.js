const dodger = document.getElementById('dodger');
dodger.style.backgroundColor = '#FF69B4';
dodger.style.bottom = '100px';
dodger.style.left = '0px';

document.addEventListener('keydown' function (e){
  if(event.key === 'ArrowLeft') {
    const leftNumbers = dodger.style.left.replace('px', '');
    cosnt left = parseInt(leftNumbers, 10);
    
    dodger.style.left = `${left -1}px`;
  }
});
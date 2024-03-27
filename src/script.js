for(i=0; i<5; i++){
    document.getElementById(`star-${i+1}`).addEventListener('hover', function(){
        this.style.fill = '#FACC15';
    });
}
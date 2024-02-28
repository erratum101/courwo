function showLoader() {
    var loader = document.getElementById('loader');
    loader.classList.remove('hidden');
    
    setTimeout(function() {
        loader.classList.add('hidden');
    }, 5000); 
}

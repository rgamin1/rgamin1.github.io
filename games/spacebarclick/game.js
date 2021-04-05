var hits = 0;
var hitElement = document.querySelector('hits');
document.body.onkeyup = function(e) {
    if(e.keyCode == 32) {
        addHit();
    }
}

function addHit() {
    hits++;
    renderHits();
}

function renderHits() {
    hitElement.textContent = hits;
}

function resetHits() {
    hits = 0;
    renderHits();
}
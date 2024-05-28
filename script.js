document.getElementById('no-btn').onmouseover = function() {
    this.style.position = 'absolute';
    this.style.left = Math.random() * (window.innerWidth - this.offsetWidth) + 'px';
    this.style.top = Math.random() * (window.innerHeight - this.offsetHeight) + 'px';
};

function showNote() {
    window.location.href = 'note.html';
}

const carousel = document.querySelector(".carousel")

let isDragStart = false;

const dragStart = () => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
    
}

const dragStop = () => {
    isDragStart = false;
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
document.addEventListener('DOMContentLoaded', function () {
    const bigBall = document.querySelector('.cursor__ball--big');
    const smallBall = document.querySelector('.cursor__ball--small');
    const hoverables = document.querySelectorAll('.hoverable');
  
    // Listeners
    document.body.addEventListener('mousemove', onMouseMove);
    hoverables.forEach(hoverable => {
      hoverable.addEventListener('mouseenter', onMouseHover);
      hoverable.addEventListener('mouseleave', onMouseHoverOut);
    });
  
    // Move the cursor
    function onMouseMove(e) {
      bigBall.style.transform = `translate3d(${e.pageX - 15}px, ${e.pageY - 15}px, 0)`;
      smallBall.style.transform = `translate3d(${e.pageX - 5}px, ${e.pageY - 7}px, 0)`;
    }
  
    // Hover an element
    function onMouseHover() {
      bigBall.style.transform = 'scale(4)';
    }
  
    function onMouseHoverOut() {
      bigBall.style.transform = 'scale(1)';
    }
  });
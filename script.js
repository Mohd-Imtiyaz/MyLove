function showLove() {
    document.getElementById('message').innerText = 'Jaan stay same jaan...💘';
  }
  
  function changePosition() {
    const noButton = document.getElementById('noBtn');
    const windowWidth = window.innerWidth - 150; // Adjusted to ensure button doesn't go off-screen
    const windowHeight = window.innerHeight - 50; // Adjusted to ensure button doesn't go off-screen
  
    // Generate random positions
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
  
    // Apply new position
    noButton.style.top = `${randomY}px`;
    noButton.style.left = `${randomX}px`;
  }
  
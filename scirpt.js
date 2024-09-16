const createRandom = () => {
  let next = document.getElementById('next');
  let randomNumber = Math.floor(Math.random() * 7) + 1;
  switch (randomNumber) {
    case 1:
      next.textContent = 'Your next topic is : Bangla';
      break;
    case 2:
      next.textContent = 'Your next topic is : English';
      break;
    case 3:
      next.textContent = 'Your next topic is : Math';
      break;
    case 4:
      next.textContent = 'Your next topic is : Physics';
      break;
    case 5:
      next.textContent = 'Your next topic is : Chemistry';
      break;
    case 6:
      next.textContent = 'Your next topic is : H Math';
      break;
    default:
      next.textContent = 'Your next topic is : Biology';
  }
};

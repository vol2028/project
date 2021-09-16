function changeBG() {
    let arr = [
      'img/pic_1.jpg',
      'img/pic_2.jpg',
      'img/pic_3.jpg',
    ]
    
   
    let i = Math.floor(Math.random() * 3);
  
    document.body.style.backgroundImage = "url(" + arr[i] + ")";
  }
  

  setInterval(changeBG, 4000); 
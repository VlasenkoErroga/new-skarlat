function imageZoom(img, resultID) {
    let  lens, result, cx, cy;
    
    result = document.createElement('div');
    result.id = resultID;
    result.classList.add('img-zoom-result');
    document.getElementById('zoom').append(result);
    result.style.display = 'flex';
    
    lens = document.createElement("DIV");
    lens.setAttribute("class", "img-zoom-lens");
    
    img.parentElement.insertBefore(lens, img);
    
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundRepeat = "no-repeat";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy + 100) + "px";
    result.style.height = `${img.parentNode.parentNode.getBoundingClientRect().height}px`;
    result.style.width = `${img.parentNode.parentNode.getBoundingClientRect().width}px`;
    
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
  
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    
    function moveLens(e) {
      let pos, x, y;

      e.preventDefault();
    
      pos = getCursorPos(e);

      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);

      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}

      lens.style.left = x + "px";
      lens.style.top = y + "px";
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }

    function getCursorPos(e) {
      let a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }

export default function zoomInit(){
    let slider = document.getElementsByClassName('product-gallery')[0];
    let enter = (e)=>{
      let item = document.getElementsByClassName('product-gallery__item active')[0];
      let imgItem = item.children[0].children[0];
      imageZoom(imgItem , "zoom-result");
  };

    let leave = (e)=>{
        document.getElementById('zoom-result').remove();
        document.getElementsByClassName('img-zoom-lens')[0].remove();
    };

    window.addEventListener('resize', toggleZoomInit, false);

    function toggleZoomInit(){
      if(slider && window.innerWidth > 1200){
        slider.children[0].addEventListener('mouseenter', enter, false);
        slider.children[0].addEventListener('mouseleave', leave,false);
      } else if(slider){
              slider.children[0].removeEventListener('mouseenter', enter, false);
              slider.children[0].removeEventListener('mouseleave', leave,false);
      }
    }
    toggleZoomInit();

}

zoomInit();

// rewrite on the class


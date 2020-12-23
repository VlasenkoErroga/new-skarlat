export default function custommSelect(element){

  let x, i, j, selElmnt, a, b, c;
 
  x = document.getElementsByClassName(element);
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    
    
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    if(selElmnt.options[selElmnt.selectedIndex].dataset.icon){
      a.setAttribute("class", `select-selected ${selElmnt.options[selElmnt.selectedIndex].dataset.icon}`)
    }
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;

 
    
    x[i].appendChild(a);

    b = document.createElement("div");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {

      c = document.createElement("a");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.setAttribute('hrf', selElmnt.options[j].dataset.url)

      c.addEventListener("click", function(e) {

          let y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];

          h = this.parentNode.previousSibling;
          
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;

              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");

                a.setAttribute("class", `select-selected ${e.target.innerHTML}`)
              
              break;
            }
          }
          
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  }
}

custommSelect('select');


function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  let x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);
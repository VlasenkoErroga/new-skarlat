import './libs/_lazy_load';
import './libs/_checkout';
import './libs/_select';
import './libs/_modal';
import './libs/_swipers';
import './libs/_zoom';
import './libs/_collapse';
import './libs/_basket';
import './libs/_burger';
import './libs/_tab';
import './libs/_search';
import './libs/_validation';
import './libs/_sendForm';
import './libs/_changeContentOrder';
import zoomInit from './libs/_zoom';
import { state } from './libs/state';
import Base from './libs/_base';

'use strict';



//another function

// class CategoryMain extends Base{

//     constructor (){
//         super();

//         this.section = document.querySelector('.category');
//         this.init = this.init.bind(this)
//     }

//     init(){

//         const container = this._createNode('div')
//         container.classList.add('container')
//         const row = this._createNode('div')
//         row.classList.add('row')

//         state.nav.category.child.map(item => {
//             let el = this._createNode('div')
//             el.classList.add('col-6','col-md-4','col-lg-3')
//             el.insertAdjacentHTML('beforeend', `
//                 <div class="category-item">
//                     <img class="category-item__img" src="${item.img}" alt="${item.text}">
//                     <span class="category-item__title">
//                     ${item.text}
//                     </span>
//                 </div>
//             `)
//             this._append(row, el)
//         })

//         this._append(container, row)

//         if(this.section){

//             this._append(this.section, container)
//         }
//     }

// }

// new CategoryMain().init()



// let getPos = (e)=>{
//     if((e.path[1].scrollY || e.path[1].screenY || e.path[1].screenTop) > 50){
//         document.querySelector('header').style.boxShadow = '0 2px 10px 0 rgba(5,5,5,.15)';

//     } else {
//         document.querySelector('header').removeAttribute('style')
//     }
// }


// function addShadowHeader(){

//     window.addEventListener('scroll',getPos, false )
// }

// addShadowHeader();









//change grid


function changeGrid(){
    let buttonArr = Array.from(document.getElementsByClassName('filters-grid-btn'));
    let grid = document.getElementById('change-grid');
    if(grid){
        grid = Array.from(grid.children)
    }
    let handlerChangeGrid = (e)=>{
        if(e.target.dataset.gridTwo){
            grid.map(item => {
                item.classList.replace('col-12', 'col-6')
            })
        } else if(e.target.dataset.gridOne){
            grid.map(item => {
                item.classList.replace('col-6', 'col-12')
            })
        }


    }


    if(Array.isArray(buttonArr)){
        buttonArr.map(item =>{
            item.addEventListener('click', handlerChangeGrid, false)
        })
    }
    
}

changeGrid()


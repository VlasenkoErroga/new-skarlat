import Base from "./_base";
// import { state } from './state';
import { basket } from './_basket'

export default class Tab extends Base {

    constructor(){
        super()
        this.nav = document.getElementById('header-nav-info');
        this.navItem = document.querySelectorAll('.header-list__item')
        this.tabWrap = document.querySelector('.header-tab__wrapper')
        this.header = document.querySelector('header')

        this.list = Array.from(document.querySelectorAll('.header-tab-content__list'))


        this.handlerNav = null;
        this.tabContent = null;
        this.switchTab = true;
        this.switchNewCreate = true;

        this.shadow = this._createNode('div');
        this.shadow.classList.add('bg-shadow');
        this.shadow.setAttribute('data-close', true);

        

        this._handler = this._handler.bind(this);
        this.init = this.init.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this._handlerResize = this._handlerResize.bind(this);
        this.tabAnimation = this.tabAnimation.bind(this)



        this.navInit = false;
    }

    tabAnimation (e) {
        this.list.map((el)=>{
            if(!el.classList.contains('hide')){
                el.classList.add('hide')
            }
    
            if(el.dataset.tab === e.target.dataset.tab){
               el.classList.remove('hide')
               Array.from(el.children).map((item, ind) => {
                item.classList.remove('animation')
    
                const timeAnimation = setTimeout(()=>{
                    item.classList.add('animation')
                    clearInterval(timeAnimation)
                },200 * ind );
                    
               })
            } 
        })
    }

  
    _handler(e){
        if(e.target.dataset.tab){
            if(!this.tabWrap.classList.contains('show')){
                this.open();
                this.tabAnimation(e)
            }
        } else if(e.target.dataset.close){
            this.close();
        }
        return this;
    }

    open(){
        if(this.switchTab || window.innerWidth > 992){
            console.log(this.navItem)

            Array.from(this.navItem).map((item, ind)  => {
                if(ind > this.navItem.length - 3)
                    item.classList.add('svg-white')
            })

            this.header.classList.add('theme-shadow')
            basket.close();
            this.tabWrap.classList.add('show');
            this._append(document.body, this.shadow);
        }

        return this;
    }

    _handlerResize(){
        let resize = ()=>{
            this.switchTab = window.innerWidth <= 992;
            if(!this.switchTab){
                this.close();
                
            }
        }
        window.addEventListener('resize', resize, false);

        return this;
    }

    close(){
        if(this.tabWrap.classList.contains('show')){
            Array.from(this.navItem).map(item  => {
                
                    item.classList.remove('svg-white')
            })
            this.header.classList.remove('theme-shadow')
            this.tabWrap.classList.remove('show');
            this._remove(this.shadow);
        }
        
        return this;
    }

    init(){

        this.shadow.addEventListener('click', this._handler, false);
        
        this.nav.addEventListener('click', this._handler, false);
        this.navInit = true;
        this._handlerResize()
        
        return this;
    }
}

 export const tabNavHeader = new Tab().init();
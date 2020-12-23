import Base from "./_base";
import { tabNavHeader } from "./_tab";

export default class Basket extends Base {

    constructor(){
        super()
        this.basket = document.getElementById('basket');
        this.shadow = document.createElement('div');
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.header = document.querySelector('header')
        this.empty = this.empty.bind(this);
        this.handler = this.handler.bind(this);
        this.btnBasket = document.getElementById('header-basket-btn')
        this.shadow = this._createNode('div');
        this.shadow.classList.add('bg-shadow');
        this.shadow.setAttribute('data-close', true);


        this.shadow.addEventListener('click', this.handler, false);
        this.basket.addEventListener('click', this.handler, false);
        this.btnBasket.addEventListener('click', this.handler, false);
    }

    open(){
        if(!document.getElementById('menu').classList.contains('show')){
            this.btnBasket.parentNode.classList.add('triangle')
            this.header.classList.add('theme-shadow')
            tabNavHeader.close()
            this.basket.classList.add('show');

            this.shadow.classList.add('bg-shadow');
            this.shadow.addEventListener('click', this.handler, false);
            if(window.innerWidth > 992){
                this.shadow.style.opacity = '0'
            }
            this._append(document.body, this.shadow);

            document.getElementById('burger').style.pointerEvents = 'none'
        }
        return this; 
    }

    handler(e){
        if(e.currentTarget.id == 'header-basket-btn'){
            
            this.open();
        } else if(e.currentTarget.classList.contains('bg-shadow')){
            this.header.classList.remove('theme-shadow')
            this.close();
        }else if(e.target.dataset.remove){
            e.target.parentNode.parentNode.remove()             
        }

    }

    close(){
        
        if(this.basket.classList.contains('show')){
            this.btnBasket.parentNode.classList.remove('triangle')
            this.basket.classList.remove('show');
            this.shadow.parentNode.removeChild(this.shadow);
            document.getElementById('burger').removeAttribute('style')
        }
        return this; 
    }    

    empty(){
        if(!this.basketEmpty){
            const span = this._createNode('span');
            span.classList.add('basket-aside-message');
            span.textContent = 'Ваша корзина пуста';
            this.basket.querySelector('.basket-aside-product__list').append(span);
            this.basket.querySelector('.basket-aside-buy.primary').remove();
        }
        return this;
    }

}

export const basket = new Basket()

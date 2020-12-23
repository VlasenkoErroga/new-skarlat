import  Base  from "./_base";
import { state } from './state';

export default class Checkout extends Base {

    constructor(props) {
        super()
        this.props = props;
        this.containerBody = document.body.querySelector('.basket-block-body');
        this.containerHead = document.body.querySelector('.basket-block-head');
        this.containerFooter = document.body.querySelector('.basket-block-footer');
        this.product = '';
        
        this.prodList = this._createNode('ul');
        this.prodList.classList.add('basket-list');
        this.content = document.body.querySelector('main');

        this._handler = this._handler.bind(this);
        this.initBody = this.initBody.bind(this);
        this.initHeader = this.initHeader.bind(this);
        this.init = this.init.bind(this);
        this._updateSumm = this._updateSumm.bind(this);

        this.initBody()

    }

    initHeader(){
        this.titleTotalPrice = this._createNode('h2');
        this._append(this.containerHead, this.titleTotalPrice);
            this.titleTotalDelivery = this._createNode('h2');
            this.titleTotalDelivery.textContent = `Доставка и возврат всех заказов выполняются бесплатно.`;
            this._append(this.containerHead, this.titleTotalDelivery);
        
        return this;
    }

    initBody(){

    this.product = Array.from(document.querySelectorAll('.basket-list__item'));
    this.product.map(el => el.addEventListener('click', this._handler, false))
    
    }


    init(){
        this.initHeader()
        this.initBody()
        return this;
    }

    _updateSumm(item){

        if(this.props.products.length > 0){
            this.titleTotalPrice.textContent = `Товары в вашей корзине на сумму `;
            this.titleTotalPrice.insertAdjacentHTML('beforeend', `${state.order.summ} грн`) 
        } else{
            this.titleTotalPrice.textContent = `Ваша корзина пуста.`;
            this.containerHead.style = 'background-image:url("./../img/empty.jpg");background-repeat:no-repeat;background-position:center center;height:50vh;justify-content:flex-start';
            this._remove(this.containerFooter);
            this._remove(this.containerBody)
        }

        this.BMD = document.querySelector('.basket-middle__delivery-value');
        this.BTP = document.querySelector('.basket-total__price-value');

       

        if(this.BTP){
            this.BTP.innerHTML = `${state.order.summ}<span class="basket-total__price-currency">грн</span>`;
        }

        if(item){

            item.querySelector('.basket-product-price__value').textContent = state.order.summ;
        }

      
      
    }


    _handler(e){
        if(e.target.dataset.remove){
            this._remove(e.currentTarget)
        } else if(e.target.dataset.buy){

            confirm("You did it! Pleace to expect request from us.")
        } else if(e.target.classList.contains('product-quantity')){
            
        } else if(e.target.dataset.increment){
            e.currentTarget.querySelector('.product-quantity-value').textContent = Number(e.currentTarget.querySelector('.product-quantity-value').textContent) + 1 ;
        } else if(e.target.dataset.decrement){
      
            if(Number(e.currentTarget.querySelector('.product-quantity-value').textContent) > 1){
                e.currentTarget.querySelector('.product-quantity-value').textContent = Number(e.currentTarget.querySelector('.product-quantity-value').textContent) - 1 ;
               
            }

        }

    }

   

}


if(document.querySelector('.basket-block-head-wrap')){
    new Checkout(state.order).init()
}

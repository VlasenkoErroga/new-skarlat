import  Base   from './_base';
import { state } from './state';
import custommSelect from './_select'
import Valid from './_validation';

export default class ChangeOrderContent extends Base{

    constructor(){
        super()
        this.head = document.querySelector('.order-block-head');
        this.body = document.querySelector('.order-block-body');
        this.footer = document.querySelector('.order-block-footer');
        this.tabDeliveryNav = document.getElementsByClassName('order-tab-delivery-nav__item');
        this.tabPaymentNav = document.getElementsByClassName('order-tab-payment-nav__item');
        this.tabDeliveryContent = document.getElementsByClassName('order-tab-delivery__content');
        this.tabPaymentContent = document.getElementsByClassName('order-tab-payment__content');

        this._isAuth = this._isAuth.bind(this)
        this.init = this.init.bind(this)
        this._createProd = this._createProd.bind(this)
        this._handler = this._handler.bind(this)
        this._removeProd = this._removeProd.bind(this)

    }
    
    _handler(e){

        if(e.target.dataset.remove){
            this._removeProd(e.currentTarget)
            this._remove(e.currentTarget);
        } else if(e.target.dataset.delivery){      
            this._changeTab(e, this.tabDeliveryNav, this.tabDeliveryContent) 
            document.getElementById(e.target.dataset.delivery).classList.add('active');
        }else if(e.target.dataset.payment){      
            this._changeTab(e, this.tabPaymentNav, this.tabPaymentContent) 
            document.getElementById(e.target.dataset.payment).classList.add('active');
        } else if(e.target.dataset.sendOrder){
            state.sendOrder = {
                products: '',
                delivery: {
                    type: document.querySelector('.order-tab-payment-nav__item.active').textContent,
                    city:document.querySelector('.order-tab-delivery__content.active').querySelector('.select-selected').textContent? document.querySelector('.order-tab-delivery__content.active').querySelector('.select-selected').textContent:'',
                    post:document.querySelector('.post').querySelector('.select-selected').textContent? document.querySelector('.post').querySelector('.select-selected').textContent:'',
                    street:document.getElementsByTagName('input').street.value?document.getElementsByTagName('input').street.value:'',
                    hous:document.getElementsByTagName('input').house.value?document.getElementsByTagName('input').house.value:'',
                    comment:document.getElementsByTagName("textarea").textContent?document.getElementsByTagName("textarea").textContent:'',
                }, 
                payments:{
                    type: document.querySelector('.order-tab-payment-nav__item.active').textContent,
                    isPaid: false
                },
                totalSum: state.user.order.summ
            }
        } else if(e.target.dataset.mask){
            new Valid(e.target).init()
        }

    }

    _removeProd(element){

        state.user.order.products.map((item, index) => {
            if(element.id == item.sku){
                state.user.order.products.splice(index, 1)
            }
        })
    }

    init(){
        
            this._isAuth()
    
        return this
    }

    _isAuth(){
        if(state.user.order.viewSumm){
            this._remove(this.body.children[0])
            this.head.children[0].textContent = `Ваш закакз составит ${state.user.order.summ}грн`;          
            this._append(this.body, this._createProd())

            this.footer.insertAdjacentHTML('beforeend', `
            <div class="order-delivery-wrap">
            <div class="order-tab-delivery-nav">
                <button class="order-tab-delivery-nav__item label active" data-delivery="self" >Самовывоз</button>
                <button class="order-tab-delivery-nav__item label" data-delivery="nova" >Нова почта</button>
                <button class="order-tab-delivery-nav__item" data-delivery="curier" >Доставка курьером</button>
            </div>
            
            <div id="nova" class="order-tab-delivery__content" >
                <span class="order-delivery-city-select">Ваш город:</span>
                    <form action="" id="send-nova" onsubmit="return false">
                        <div class="select city">
                            <select>
                                <option value="0">Выберите город:</option>
                                <option value="1">Киев</option>
                                <option value="2">Харьков</option>
                                <option value="3">Днепр</option>
                                <option value="4">Одесса</option>
                                <option value="5">Львов</option>
                            </select>
                        </div>
                        <div class="select post">
                            <select>
                                <option value="0">Выберите отделение:</option>
                                <option value="1">Отделение №1</option>
                                <option value="2">Отделение №1</option>
                                <option value="3">Отделение №1</option>
                                <option value="4">Отделение №1</option>
                                <option value="5">Отделение №1</option>
                                <option value="6">Отделение №1</option>
                                <option value="7">Отделение №1</option>
                                <option value="8">Отделение №1</option>
                                <option value="9">Отделение №1</option>
                                <option value="10">Отделение №1</option>
                                <option value="11">Отделение №1</option>
                            </select>
                        </div>
                        <div class="form-group-row">
                    <input type="text" placeholder="Ведите имя" name="name" autocomplete="name" required>
                    <input type="text" placeholder="Введите фамилию" name="surname" autocomplete="surname">
                </div>
                    <input type="text" name="phone" required>
                </form>
            </div>
            
            <div id="self" class="order-tab-delivery__content active">
                <h3>Самовывоз</h3>
            </div>
            
            <div id="curier" class="order-tab-delivery__content">
                <form action="" onsubmit="return false">
                    <div class="select city">
                        <select>
                            <option value="0">Выберите город:</option>
                            <option value="1">Киев</option>
                            <option value="2">Харьков</option>
                            <option value="3">Днепр</option>
                            <option value="4">Одесса</option>
                            <option value="5">Львов</option>
                        </select>
                    </div>

                    <div class="form-group-row">
                        <input type="text" placeholder="Ведите имя" name="name" autocomplete="name">
                        <input type="text" placeholder="Введите фамилию" name="surname" autocomplete="surname" required>
                    </div>
                    <div class="form-group-row">
                        <input type="text" placeholder="Ведите улицу" name="street" autocomplete="strit" required>
                        <input type="text" placeholder="Номер дома" name="house" autocomplete="house" required>
                    </div>
                    <div class="form-group">
                        <input type="text"  placeholder="+38 (0__) ___-__-__" data-mask="+38 (0__) ___-__-__" name="phone" autocomplete="phone" required>
                        <textarea name="coment" id="" placeholder="Коментарий к заказу"></textarea>
                    </div>
            </form>
            </div>
            </div>






                                            <div class="order-payment-wrap">
                                            <div class="order-tab-payment-nav">
                                            <button class="order-tab-payment-nav__item active" data-payment="cach" >Наличными</button>
                                                <button class="order-tab-payment-nav__item" data-payment="visa" >Картой на сайте</button>
                                                <button class="order-tab-payment-nav__item" data-payment="privat" >Privat 24</button>
                                                <button class="order-tab-payment-nav__item" data-payment="mono" >Mono</button>
                                            </div>
                                            
                                            <div id="visa" class="order-tab-payment__content">
                                                <h3>Visa/MasterCard</h3>
                                                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex nobis atque aliquid. Tempore itaque repellendus quibusdam maxime dolor error voluptate iste iusto cupiditate distinctio at cum tempora molestiae facilis fugit reprehenderit eveniet, quisquam reiciendis asperiores vero sit consectetur? Porro nisi, eos modi cumque nesciunt qui obcaecati dolore maiores tempora eveniet perferendis rerum repudiandae laborum odit maxime ipsa fugit facere, animi iure nemo aspernatur? Magnam nulla rerum et asperiores commodi illo iste minus recusandae corrupti esse obcaecati neque, tempora impedit eius ut. Pariatur, nam inventore? Quod, laboriosam. Nemo laudantium cupiditate, quia maxime rem velit ipsum provident suscipit, expedita deleniti aspernatur!   </p>
                                                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex nobis atque aliquid. Tempore itaque repellendus quibusdam maxime dolor error voluptate iste iusto cupiditate distinctio at cum tempora molestiae facilis fugit reprehenderit eveniet, quisquam reiciendis asperiores vero sit consectetur? Porro nisi, eos modi cumque nesciunt qui obcaecati dolore maiores tempora eveniet perferendis rerum repudiandae laborum odit maxime ipsa fugit facere, animi iure nemo aspernatur? Magnam nulla rerum et asperiores commodi illo iste minus recusandae corrupti esse obcaecati neque, tempora impedit eius ut. Pariatur, nam inventore? Quod, laboriosam. Nemo laudantium cupiditate, quia maxime rem velit ipsum provident suscipit, expedita deleniti aspernatur!   </p>
                                            </div>
                                            
                                            <div id="privat" class="order-tab-payment__content">
                                                <h3>Privat</h3>
                                                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
                                            </div>
                                            
                                            <div id="mono" class="order-tab-payment__content">
                                                <h3>Mono</h3>
                                                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nemo laudantium cupiditate, quia maxime rem velit ipsum provident suscipit, expedita deleniti aspernatur!   </p>
                                            </div>

                                            <div id="cach" class="order-tab-payment__content active">
                                                <h3>Наличные</h3>
                                                <p>   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ex nobis atque aliquid. Tempore itaque repellendus quibusdam maxime dolor error voluptate iste iusto cupiditate distinctio at cum tempora molestiae facilis fugit reprehenderit eveniet, quisquam reiciendis asperiores vero sit consectetur? Porro nisi, eos modi cumque nesciunt qui obcaecati dolore maiores tempora eveniet perferendis rerum repudiandae laborum odit maxime ipsa fugit facere, animi iure nemo aspernatur? Magnam nulla rerum et asperiores commodi illo iste minus recusandae corrupti esse obcaecati neque, tempora impedit eius ut. Pariatur, nam inventore? Quod, laboriosam. Nemo laudantium cupiditate, quia maxime rem velit ipsum provident suscipit, expedita deleniti aspernatur!   </p>
                                            </div>
                                            </div>

                                            <button class="primary" data-send-order="true" id="send-order">Отправить</button>
            `)
            
            this.footer.addEventListener('click', this._handler, false)
            custommSelect('city')
            custommSelect('post')
        }

       
        return this
    }

    _changeTab(e, nav, content) {          
        for (let i = 0; i < nav.length; i++) {
            nav[i].classList.remove('active');
            content[i].classList.remove('active');
          }
              e.target.classList.add('active')  
    }
    

    _createProd(){

                let list = this._createNode('ul')
                list.classList.add('order-product__list');
                state.user.order.products.map(item => {
    
                    let li = this._createNode('li')
                    li.id = item.sku;
                    li.classList.add('order-product__item');
                    li.insertAdjacentHTML('beforeend', `<div class="product">
                                        <button class="product-remove" data-remove="true" title="Удалить товар из корзины"></button>
                                        <a href="${item.href}" class="product-img-block">
                                        <div class="product-img__wrapper">
                                            <img
                                                src="${item.img}"
                                                alt="Изображение ${item.name}"
                                                class="product-img"></div></a>
                                                <div class="product-info">
                                            <div class="product-title">
                                                <a class="product-name" href="${item.href}">
                                                   ${item.name}
                                                   </a>
                                                   ${item.quantity && item.quantity > 1? `<p>${item.quantity}шт</p>`: ''}
                                            </div>
                                            <div class="product-price">
                                            <div class="product-price-new">
                                             <span class="product-price-new__value">${item.price}</span>
                                             <span class="product-price-new__currency">${item.currency}</span>
                                            </div>
                                            ${
                                                item.oldPrice? `<div class="product-price-old">
                                                <span class="product-price-old__value">${item.oldPrice}</span>
                                                <span class="product-price-old__currency">${item.currency}</span>
                                               </div>`:''
                                            }
                                            
                                             
                                        </div>
                                            </div>
                                        </div>`);

                                li.addEventListener('click', this._handler, false)
                                list.append(li);
                });

                
                return list;
        
    }
}


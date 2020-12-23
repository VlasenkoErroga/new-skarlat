import  Base  from "./_base";

export default class Search extends Base {
    constructor() {
        super()
        this.props ={};
        this.SEARCH_BTN = document.getElementById('header-search-btn');
        this.SEARCH_BLOCK = document.getElementById('header-search-block');
        this.RESET_BTN = document.getElementById('header-search-reset');
        this.SEARCH_HEADER = document.getElementById('header-search');
        this.BTN_BASKET = document.getElementById('header-basket-btn');
        this.RESET_BTN.style.display = 'none';
        this.header = document.querySelector('header');
        this.nav = document.querySelectorAll('.header-list__item')

        this._createNode = this
            ._createNode
            .bind(this);
        this._append = this
            ._append
            .bind(this);

        this._remove = this
            ._remove
            .bind(this);

        this._handler = this
            ._handler
            .bind(this);

        this.open = this
            .open
            .bind(this);

        this.close = this
            .close
            .bind(this);
        this.init = this
            .init
            .bind(this);

    }

    _handler(e) {
        if (e.currentTarget.dataset.reset) {
            this.SEARCH_HEADER.value = '';
            this.close();
            this.SEARCH_BTN.removeAttribute('data-query');
            this.SEARCH_BTN.setAttribute('data-open', 'true')
            setTimeout(() => {
                this.SEARCH_BLOCK.style.display = 'none';

            }, 500)
        } else if (e.currentTarget.dataset.open) {
            this.open();
            e.currentTarget.setAttribute('data-query', 'true');
            e.currentTarget.removeAttribute('data-open');
            this
                .RESET_BTN
                .removeAttribute('style');
        } else if(e.currentTarget.dataset.query){
            this.props.query = this.SEARCH_HEADER.value;
            
        }
    }
    open() {
        this.SEARCH_BLOCK.style.display = 'flex';
        this.header.classList.add('theme-shadow');
        
        Array.from(this.nav).map((item, ind)  => {
            if(ind < this.nav.length - 1 )
                item.style.opacity = '0'
        })
        this.SEARCH_HEADER.focus();
        this
            .RESET_BTN
            .classList
            .replace('hide', 'show');
        this
            .BTN_BASKET
            .classList
            .replace('show', 'hide');
        this
            .SEARCH_BLOCK
            .classList
            .replace('hide', 'show');
    }

    close(btn) {
        this.header.classList.remove('theme-shadow');

        Array.from(this.nav).map((item, ind)  => {
            if(ind < this.nav.length - 1 )
                item.removeAttribute('style')
        })
        
        this
            .RESET_BTN
            .classList
            .replace('show', 'hide');
        this
            .BTN_BASKET
            .classList
            .replace('hide', 'show');
        this
            .SEARCH_BLOCK
            .classList
            .replace('show', 'hide');
    }

    reset() {
        this
            .RESET_BTN
            .addEventListener('click', this._handler, false)
    }

    init() {

        if (this.SEARCH_BTN && this.RESET_BTN) {
            this
                .SEARCH_BTN
                .addEventListener('click', this._handler, false);
            this
                .RESET_BTN
                .addEventListener('click', this._handler, false);
        }

    }

}

new Search().init();

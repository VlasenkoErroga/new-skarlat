import Base from "./_base";
// import { state } from "./state";

export default class Burger extends Base {
    constructor() {
        super();
        this.category = Object.assign(state.nav);
        this.burgerMenu = document.getElementById('menu');
        this.header = document.querySelector('header');
        this.burger = document.getElementById('burger');
        this.burgerNavMenu = document.getElementById('burger-nav-menu')
        this.menu = document.getElementById('menu-category')

        this.btnBasket = document.getElementById('header-basket-btn')
        this.listCat = null
        this.isBurgerOpen = false;
        this.liCatalog = null

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
        this._openMenuCollapse = this
            ._openMenuCollapse
            .bind(this)
        this._closeMenuCollapse = this
            ._closeMenuCollapse
            .bind(this)

    }

    _handler(e) {

        if (e.currentTarget == this.burger) {
            if (!this.isBurgerOpen) {
                this.open()
            } else {
                this.close()
            }
        } else if (e.target.parentElement.dataset.category) {

            if (!e.target.parentElement.classList.contains('active')) {

                e
                    .target
                    .parentElement
                    .classList
                    .add('active')
                this
                    .menu
                    .classList
                    .add('active')
            } else {
                e
                    .target
                    .parentElement
                    .classList
                    .remove('active')
                this._closeMenuCollapse(Array.from(e.currentTarget.parentElement.children))
            }

        } else if (e.target.parentElement.dataset.brand) {
            e
                .currentTarget
                .classList
                .add('active')
            this._openMenuCollapse(e.target.parentElement.querySelector('.menu-collapse'))
        } else if (e.target.parentElement.classList.contains('menu-item') && !e.target.parentElement.dataset.brand) {

            this._closeMenuCollapse(
                Array.from(e.currentTarget.querySelectorAll('.menu-item'))
            )
            e
                .target
                .parentElement
                .classList
                .add('active')
            if (e.currentTarget.querySelector('.menu-collapse')) {

                this._openMenuCollapse(e.target.parentElement.querySelector('.menu-collapse'))
            }
        }

    }
    _openMenuCollapse(item) {
        if (item) {
            item.style.maxHeight = `${item.scrollHeight + 36}px`;
        }
    }

    _closeMenuCollapse(arr) {
        console.log(arr)
        arr.map(i => {
            if (i.classList.contains('active')) {
                i
                    .classList
                    .remove('active')

                Array
                    .from(i.children)
                    .map(el => {
                        if (el.classList.contains('menu-collapse')) {
                            el.removeAttribute('style')
                        }
                    })

            }
        })
    }

    open() {

        this
            .burger
            .classList
            .add('active');
        this
            .burgerMenu
            .classList
            .replace('hide', 'show');
        this.header.style.borderColor = 'transparent';
        this.btnBasket.style = 'opacity: 0; transition: all .6s cubic-bezier(.4,.01,.165,.99); pointer-events:' +
                ' none;';
        this.isBurgerOpen = true;

    }

    close() {

        this
            .burger
            .classList
            .remove('active');
        this
            .burgerMenu
            .classList
            .replace('show', 'hide');
        this
            .header
            .removeAttribute('style');
        this
            .btnBasket
            .removeAttribute('style');
        this.isBurgerOpen = false;
    }

    init() {
        this
            .burgerNavMenu
            .addEventListener('click', this._handler, false);
        this
            .burger
            .addEventListener('click', this._handler, false);
        this
            .menu
            .addEventListener('click', this._handler, false);

        return this;
    }

}

export const burger = new Burger().init();

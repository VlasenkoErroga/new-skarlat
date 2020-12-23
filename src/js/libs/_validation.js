import  Base   from './_base';
import { InputMask } from './maskInputPhone';

export default class Valid extends Base {
    constructor(el){
        super()
        this.input = el;
        this.valid = null;
        this.errorMessage = null;
        this.message = null;
        this.value = '';
        this.result = null;


        //regular exeption
        this._test_email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        this._test_pass = /^(?=.*[A-Za-zА-Яа-я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,}$/g;
        this._test_phone = /^[+]\d\d+\s*[(]{0,1}[0-9]{1,4}[)]+\s+[-\s\./0-9]*$/g;
        this._test_name = /^[a-z0-9_-]{3,16}$/g;

        this._createNode = this._createNode.bind(this);
        this._append = this._append.bind(this);
        this._remove = this._remove.bind(this);
        this._handler = this._handler.bind(this);
        this.check = this.check.bind(this);
        this.init = this.init.bind(this);
        this.isError = this.isError.bind(this);
        this.isSuccess = this.isSuccess.bind(this);
        this.inputEmpty = this.inputEmpty.bind(this);
        this.getResult = this.getResult.bind(this);
        this.destroy = this.destroy.bind(this);


     


    }

    init(){
        this.input.addEventListener('change', this._handler, false);
        this.input.addEventListener('blur', this._handler, false);
        this.input.addEventListener('input', this._handler, false);
        this.input.addEventListener('focus', this._handler, false);
        return this;
    }

    destroy(){
        this.input.removeEventListener('change', this._handler, false);
        this.input.removeEventListener('blur', this._handler, false);
        this.input.removeEventListener('input', this._handler, false);
        this.input.removeEventListener('focus', this._handler, false);
    }

    _handler(e){
        this.value = e.currentTarget.value;
        

        if(e.currentTarget.name == 'email'){
            this.message = '*Такого E-mail не существует'
            this.inputEmpty(5, this._test_email)
        } else if (e.currentTarget.name == 'password'){
            this.message = '*Не верный пароль';          
         this.inputEmpty(0,this._test_pass)
        }
        else if (e.currentTarget.name == 'name'){
            this.message = '*Не менее 3 символов';          
            this.inputEmpty(0,this._test_name)
        }

        else if (e.currentTarget.name == 'phone'){
            this.message = '*Не верный пароль';
            this.inputEmpty(0,this._test_phone)

            new InputMask({
                selector: e.currentTarget, 
                layout: e.currentTarget.dataset.mask
              })
        }   

    }



    inputEmpty(count, check){
        if(this.value.length > count ){
            this.check(check)
        } else if(this.value.length == 0){
            this.input.classList.remove('invalid', 'valid')
            if(this.input.parentNode.querySelector('span')){
                this._remove(this.errorMessage);
            }
        }
        return this;
    }

    isSuccess(){
            this.input.classList.add('valid')
            this.input.classList.remove('invalid')
            if(this.input.parentNode.querySelector('span')){
                this._remove(this.input.parentNode.querySelector('span'));
            }

            
        return this;
    }

    isError(){
        this.input.classList.add('invalid')
        this.input.classList.remove('valid')
        this.errorMessage = this._createNode('span')
        this.errorMessage.classList.add('error');
        this.errorMessage.textContent = this.message;
    
        if(!this.input.parentNode.querySelector('span')){
            this._append(this.input.parentNode, this.errorMessage);
        }
        return this
    }

    check(typeCheck){
                
        new Promise(res => {
          
                this.valid = typeCheck.test(this.input.value);
        



            console.log(this.valid, typeCheck.test(this.input.value))
            res();
        }).then(()=>{ 
            if(this.valid){
                console.info('starting success')
                this.isSuccess()
            } else{
                this.isError()
            }

        })

        return this
    }

    getResult(){
         
        if(this.valid){
            this.result = Promise.resolve()
        } else {
            this.result = Promise.reject()
        }

        console.log(this.result, 'validation')
        return this.result
    }

}
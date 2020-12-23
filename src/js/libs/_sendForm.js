import Valid from './_validation'
import ChangeOrderContent from './_changeContentOrder'
import { state } from './state';
import  Base  from './_base';

export default class SendForm extends Base{
    constructor(props){

        super()
        this.props = props

        this.result = null
        this.buttons = document.querySelectorAll('.send-form')
        this.emailStatus = new Valid(document.getElementById('email-user')).init();
        this.passStatus = new Valid(document.getElementById('pass-user')).init();
        this.phoneStatus = new Valid(document.getElementById('phone-user')).init()
        this.nameStatus = new Valid(document.getElementById('name-user')).init()
        this.returnStatus = this.returnStatus.bind(this);


        this.togleSendForm = false;
        this.parent = null;


        this.init = this.init.bind(this)
        this._handler = this._handler.bind(this)
        this.returnStatus = this.returnStatus.bind(this)

    }

    init(){
        // if(state.user){
        //     new ChangeOrderContent().init()

        // } else {
            this.buttons.forEach(item =>{           
                item.parentNode.addEventListener('change', this._handler, false)  
                item.addEventListener('click', this._handler, false)  
            })
        // }
        
        return this
    }

    _handler(e){
        

        if(e.type == 'change'){
            if(e.currentTarget.classList == 'order-form-auth'){
                Promise.all([this.emailStatus.getResult(), this.passStatus.getResult()]).then(()=>{    
                }).catch(()=>{
                    console.warn(`В форме ${e.currentTarget.classList} не все поля заполднены. Пожайлуста заполните все поля`);
                })
            } else {
                Promise.all([this.phoneStatus.getResult(), this.nameStatus.getResult()]).then(()=>{
                    
                }).catch(()=>{
                    console.warn(`В форме ${e.currentTarget.classList} не все поля заполднены. Пожайлуста заполните все поля`);
                })
            }

            e.stopPropagation();
        }



        if(e.type == 'click'){
                if(e.currentTarget.dataset.sendAuth){
                    this.result = {
                        email:this.emailStatus.value,
                        pass: this.passStatus.value
                    }
                    this.props.map(item =>{
    
                        if(this.result.email == item.email){
                     
                            if(this.result.pass == item.pass){
                                this.result.auth = true;
                            }else{
                                console.warn('This password wrong')
                                this.result.auth = false;
                            }
                        }
    
                       
                    })
                } else if(e.currentTarget.dataset.sendCallback){
                        this.result.auth = false;
                }  
            state.user.order.viewSumm = this.result.auth;
            new ChangeOrderContent().init()

        }

    }

    returnStatus(){
        return this.result
    }
}

if(document.getElementById('email-user')){

    new SendForm(state.allUsers).init()
}
import  custommSelect from "./_select";
import Base  from "./_base";

const filters= [
         {
             title:'защита',
             id:'filter',
             value:[
                 'IP 67', 'IP 68','IP 69',
             ]
         },
         {
             title:'материал',
             id:'filter',
             value: ['стекло','пластик','поликарбонат',]
         },
         {
             title:'источник света',
             id:'filter',
             value: ['2','3','4','5','6']
         },
         {
             title:'защита',
             id:'filter',
             value:[
                 'IP 67', 'IP 68','IP 69',
             ]
         },
         {
             title:'защита',
             id:'filter',
             value:[
                 'IP 67', 'IP 68','IP 69',
             ]
         },
         {
             title:'защита',
             id:'filter',
             value:[
                 'IP 67', 'IP 68','IP 69',
             ]
         },
     ];

const BTN_FILTERS_MODAL = document.getElementById("modalFilters");


function createFilters(filters){

    let form = document.createElement('form');
    form.id = 'form-filter';
    if(filters){
        filters.map((item, index) => {
                        
            let fieldset = document.createElement('fieldset');
            fieldset.classList.add('filter');
            let filterTitle = document.createElement('div');
            filterTitle.classList.add('filter-title');
            let lagend = document.createElement('lagend');
            lagend.textContent = item.title;

            let filterContent = document.createElement('div');
            filterContent.classList.add('filter-content');
            filterTitle.append(lagend);
            fieldset.append(filterTitle);

            if(Array.isArray(item.value)){
                
                item.value.map((i,ind)=>{
                    let filterItem = document.createElement('div');
                    filterItem.classList.add('filter-item');
                    let input = document.createElement('input');
                    input.classList.add('checkbox');
                    input.setAttribute('type','checkbox');
                    let label = document.createElement('label');
                    label.classList.add('label');
                    input.setAttribute('id',`${item.id}-${index}${ind}`);
                    input.setAttribute('value',`${i}`);
                    label.setAttribute('for',`${item.id}-${index}${ind}`);
                    label.textContent = `${i}`
                    filterItem.append(input, label);
                    filterContent.append(filterItem);

                });

                fieldset.append(filterContent);
                form.append(fieldset);
            }
        })
        return form;
    }

    
}

 export default class newModal extends Base {
    constructor(options){
        super()
        
        this.options = options;
        this.modal = null;
        this.sortInit = false;
        this.sort = [];

        this.init = this.init.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.create = this.create.bind(this);
        this.destroy = this.destroy.bind(this);
        this.insetContentit = this.setContent.bind(this);
        this.handlerModal = this.handlerModal.bind(this);
        
        this._append = this._append.bind(this);
        this._createNode = this._createNode.bind(this);
        this._remove = this._remove.bind(this);
        this.createSort = this.createSort.bind(this);
        this._setSort = this._setSort.bind(this);
       

        //flag
        this.openModal = false;
        this.closeModal = false;
        this.initModal = false;
        this.createModal = false;
        this.destroyModal = false;
    }

    create(){

        if(!document.getElementById(this.options.id)){
        
        this.modal = document.createElement('div');
        this.modal.setAttribute('id', `${this.options.id || 'newModal'}`);
        this.modal.setAttribute('data-close', true);
        this.modal.classList.add('modal')
        this.modal.insertAdjacentHTML('beforeend', `
                                                    <div class="modal-content">
                                                    <div class="modal-header">
                                                            <h2>${this.options.title}</h2>

                                                            ${this.options.btnClose? `<button class="close" data-close="true">
                                                            <span></span>
                                                            <span></span>
                                                        </button>`: ''}
                                                        </div>
                                                        
                                                        <div class="modal-body">
                                                            ${this.options.body || 'test'}
                                                        </div>
                                                            
                                                        </div>
                                                        
                                                    </div>
                                                `);

                                                if(this.options.footer){
                                                    let wrap = document.createElement('div')
                                                    wrap.classList.add('modal-footer');
                                                    this.options.footer.map(item =>{
                                                        let btn = document.createElement('button');
                                                        btn.setAttribute('type', `${item.type || ''}`);
                                                        btn.textContent = item.text;
                                                        if(item.class){
                                                            btn.classList.add(`${item.class}`)
                                                        }
                                                        btn.setAttribute('name', `${item.name || ''}`);
                                                        btn.setAttribute('form', `${item.form || ''}`);
                                                        btn.onclick = item.handler;
                                                        wrap.append(btn);
                                                    });
                                                    this.modal.querySelector('.modal-content').append(wrap)
                                                }

                                            }
                                            else {
                                                 throw Error(`Modal with this ID '${this.options.id}' exists. Please change ID, and try agen.`);
                                                 return null;
                                            }

        return this;
    }

    init(){
        document.body.querySelector('main').append(this.modal);
        this.modal.addEventListener('click', this.modalHandler);
        this.modal.addEventListener('click', this.handlerModal, false);

        this.openModal = true;
        return this;
    }

    handlerModal(event){
        if(event.target.dataset.close){
            console.log(event.target.dataset.close)
            this.close();
        }
    }

    destroy(){
        if(!this.destroyModal){
            this.modal.removeEventListener('click', this.modalHandler, false);
            this.modal.parentElement.removeChild(this.modal);
            this.openModal = false;
            this.closeModal = false;
            this.destroyModal = true;
        }
        return this;
    }

    open(){
        if(this.openModal){
            this.modal.classList.add('active');
            this.closeModal = true;
            this.openModal = false;
        }

        this._setSort();

        
        return this;
    }

    close(){
        if(this.closeModal){
            this.modal.classList.remove('active');
            this.closeModal= false;
            this.openModal = true;
        }
        return this;
    }

    setContent(content){
        this.modal.querySelector('.modal-body').innerHTML = '';
        this.modal.querySelector('.modal-body').append(content);
        
        return this;
    }

    createSort(obj){
        let fieldset = this._createNode('fieldset')
        fieldset.classList.add('filter')
        for(let key in obj){
            let div = this._createNode('div');
            div.classList.add('select', 'mob-sort');
            let select = this._createNode('select');
                obj[key].map((item, index) =>{
                    let option =  this._createNode('option');
                    option.setAttribute('value', `${index}`);
                    option.textContent = item;
                    select.appendChild(option);
                })
            this._append(div, select)
            this._append(fieldset, div)
        }
        this.sort = fieldset

        
        return this;
    }

    _setSort(){

        if(window.innerWidth < 992){
            this.modal.querySelector('#form-filter').insertAdjacentElement('afterbegin', this.sort);
            if(!this.sortInit){
                custommSelect('mob-sort');
                this.sortInit = true;
            }
        }
    }
    
}



function getWidth(){

    let width = 0;
    window.addEventListener('resize', ()=>{
        width = window.innerWidth;
    },false)
    console.log(width)

    if(BTN_FILTERS_MODAL){
        let filterModal = new newModal(
            {
            title: 'Фильтры', 
            id:'filterModal',
            btnClose: true,
            footer:[
                {text: 'Очистить фильтры', type:'reset', name:'reset-data',  form:'form-filter', handler: (e)=>{
                    
                }},
                {text: 'Подобрать', type:'submit', name:'send-data', class:'primary', form:'form-filter', handler: (e)=>{
                    console.warn('You clicked on button for send porperties ')
                }}
            ]
        }).create().init().setContent(createFilters(filters))
        .createSort({category:['Категория:','Skarlat Premium','Трековые системы','LOFT','Умные светильники','Светильники для ванной','Уличные светильники','Детские светильники','Настольные лампы','Торшеры','Комплектующие','Наборы DIY'],
                     type:['Фурнитура:','4','5','6','7'],
                     furniture:['Тип:','1','2','3']
                    })
    
        let btnHandlerModalFilters = (event)=>{
            filterModal.open();
        } 
    
        BTN_FILTERS_MODAL.addEventListener('click', btnHandlerModalFilters, false );
    
    }
}
getWidth()











        
  
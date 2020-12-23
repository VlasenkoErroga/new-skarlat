

export const state = {

    propertiesBasket: {
        nav:[
            {text:'Корзина', class:'basket', href:'javascript:void(0)'},
            {text:'Избранное', class:'favorite', href:'javascript:void(0)'},
            {text:'Аккаунт', class:'account',  href:'javascript:void(0)'},
            {text:'Регистрация', class:'registration', href:'javascript:void(0)'},
        ],
        buy: true,
    },

    addProduct:[
        {id:444,name:'Skarlat premium super', quantity:111, price:9, currency:'uah', cat:'Трековый светильники', href:'javascript:void(0)', src:'./../img/17.jpg'}
    ],



    nav: {
        category:{text:'Категории', href:'javascript:void(0)', 
            child:[
                {text:'Premium', href:'javascript:void(0)', img: './img/category/1.jpg'},
                {text:'LED - светильники', href:'javascript:void(0)', img: './img/category/2.jpg',
                    child:[
                        {text:'Точечные', href:'javascript:void(0)'},
                        {text:'Споты', href:'javascript:void(0)'},
                        {text:'Настенные и бра', href:'javascript:void(0)'},
                        {text:'Подвесные', href:'javascript:void(0)'}
                    ]},
                {text:'Трековые системы', href:'javascript:void(0)', img: './img/category/3.jpg',
                    child:[
                        {text:'Трековые светильники', href:'javascript:void(0)'},
                        {text:'Комплектующие для трековых систем', href:'javascript:void(0)'},
                    ]},
                {text:'LOFT', href:'javascript:void(0)', img: './img/category/4.jpg',
                    child:[
                        {text:'Люстры-подвесы', href:'javascript:void(0)'},
                        {text:'Потолочные люстры', href:'javascript:void(0)'},
                        {text:'Настенные и бра', href:'javascript:void(0)'},
                        {text:'Потолочные светильники', href:'javascript:void(0)'},
                        {text:'Подвесные светильники', href:'javascript:void(0)'},
                        {text:'Настольные лампы', href:'javascript:void(0)'}
                    ]},
                {text:'Умные светильники', href:'javascript:void(0)', img: './img/category/5.jpg',}, 
                {text:'Светильники для ванной', href:'javascript:void(0)', img: './img/category/6.jpg',
                    child:[
                        {text:'Потолочные светильники для ванной', href:'javascript:void(0)'},
                        {text:'Точечные светильники для ванной', href:'javascript:void(0)'},
                        {text:'Бра для ванной', href:'javascript:void(0)'}
                    ]},
                {text:'Уличные светильники', href:'javascript:void(0)', img: './img/category/7.jpg',},
                {text:'Детские светильники', href:'javascript:void(0)', img: './img/category/12.jpg', 
                    child:[
                        {text:'Люстры в детскую', href:'javascript:void(0)'},
                        {text:'Светильники в детскую', href:'javascript:void(0)'},
                        {text:'Бра в детскую', href:'javascript:void(0)'},
                        {text:'Настольные лампы в детскую', href:'javascript:void(0)'}
                    ]},
                {text:'Настольные лампы', href:'javascript:void(0)', img: './img/category/8.jpg',},
                {text:'Торшеры', href:'javascript:void(0)', img: './img/category/9.jpg',},
                {text:'Комплектующие', href:'javascript:void(0)', img: './img/category/10.jpg',
                    child:[
                        {text:'LED лампы', href:'javascript:void(0)'},
                        {text:'LED лента', href:'javascript:void(0)'},
                        {text:'Блоки питания', href:'javascript:void(0)'},
                        {text:'Алюминиевый профиль', href:'javascript:void(0)'}
                    ]},
                {text:'Наборы DIY', href:'javascript:void(0)' , img: './img/category/11.jpg'},
            ]},
        
        brand: {text:'Бренды', href:'javascript:void(0)', child:[
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/index.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Dio D`arte'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/catalog_product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Arte Lamp'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Artemide'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/subcategory.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Bejorama'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Brilliant'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Bohemia Ivele'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'De Markt'}
        ]},
        about: {text:'О компании', href:'javascript:void(0)', child:[
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/index.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 1'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/catalog_product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 2'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 3'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 4'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/subcategory.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 5'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 6'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'About 7'}
        ]},
        help: {text:'Помощь', href:'javascript:void(0)', child:[
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/index.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 1'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/catalog_product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 2'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 3'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 4'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/subcategory.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 5'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 6'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Help 7'}
        ]},
        info: {text:'Информация', href:'javascript:void(0)', child:[
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/index.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 1'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/catalog_product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 2'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 3'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/product.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 4'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/subcategory.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 5'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 6'},
            {link: 'https://vlasenkoerroga.github.io/no-name-deploy/category.html', img: 'https://via.placeholder.com/300x200/000000/FFFFFF', text: 'Info 7'}
        ]},
    },

    allUsers:[
        {email:'user@user.com', pass:'12345qwerty'},
        {email:'test@test.com', pass:'12345qwerty'}
    ],

    user:{
        city:'Киев',
        post:'Отделение №15',
        email:'test@test.com',
        pass:'12345qwerty',
        phone:'248688575',
        name:'Акардион',
        surname:'Сьюриманович',
        orders:{
            order:[ '12.02.19',
                {id:1,name:'Skarlat DG0712-LED 36W WH 6000K', quantity:5, price:797, currency:'грн', cat:'Подвесной ветильники', href:'https://skarlat.ua/skarlat_dg0712-led_36w_wh_6000k', src:'https://skarlat.ua/frontend/web/uploads/items/15850771037.jpg'},
                {id:2,name:'Skarlat SP18-100W 6400K', quantity:1, price:796, currency:'грн', cat:'Светильники', href:'https://skarlat.ua/skarlat__sp18-100w_6400k', src:'https://skarlat.ua/frontend/web/uploads/items/1572852803IMG_2575.jpg'},
                {id:3,name:'Skarlat H209B-COB 18W BK 4000K', quantity:2, price:664, currency:'грн', cat:'Трековый светильники', href:'https://skarlat.ua/skarlat__h209b-cob_18w_bl_40', src:'https://skarlat.ua/frontend/web/uploads/items/1576767496H209B-COB%2018W%20BK.jpg'},
            ],
            order:[ '25.05.19',
                {id:1,name:'Skarlat DG0712-LED 36W WH 6000K', quantity:5, price:797, currency:'грн', cat:'Подвесной светильники', href:'https://skarlat.ua/skarlat_dg0712-led_36w_wh_6000k', src:'https://skarlat.ua/frontend/web/uploads/items/15850771037.jpg'},
                {id:2,name:'Skarlat SP18-100W 6400K', quantity:1, price:796, currency:'грн', cat:'Светильники', href:'https://skarlat.ua/skarlat__sp18-100w_6400k', src:'https://skarlat.ua/frontend/web/uploads/items/1572852803IMG_2575.jpg'},
                {id:3,name:'Skarlat H209B-COB 18W BK 4000K', quantity:2, price:664, currency:'грн', cat:'Трековый светильники', href:'https://skarlat.ua/skarlat__h209b-cob_18w_bl_40', src:'https://skarlat.ua/frontend/web/uploads/items/1576767496H209B-COB%2018W%20BK.jpg'},
            ]
        },
        order:{
            products: [
                {
                    sku:1057629,
                    name: 'Premium Skarlat RHL74110 6×3W (BK 4000K 24)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581001212HL74110.jpg',
                    url: 'https://skarlat.ua/skarlat__rhl74110_6%C3%973w_(bk_4000k_24)',
                    price: 11872,
                    oldPrice: 12000,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057692,
                    name: 'Premium Skarlat  RWLB099 7W (WH 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1584899201%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb099_7w_(wh_3000k)',
                    price: 3286,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057693,
                    name: 'Premium Skarlat RWLB099 7W (BK 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1584899188%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb099_7w_(bk_3000k)',
                    price: 3286,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057682,
                    name: 'Premium Skarlat RWLB098 12W (WH 4000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581075763WLB098-12W.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb098_12w_(wh_4000k)_',
                    price: 1653,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057664,
                    name: 'Premium Skarlat RWLB102 12W (BK 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581063580WLB102.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb102_12w_(bk_3000k)_',
                    price: 2713,
                    currency: 'грн',
                    quantity: 1
                }
            ],
            delivery: {
                metod: "Курьер",
                client: "Нова почта",
                price: 'По тарифам перевозчика',
                currency: 'грн'
            },
            summ:123456,
            viewSumm: true,
        },
        favorites:{
            products: [
                {
                    sku:1057629,
                    name: 'Premium Skarlat RHL74110 6×3W (BK 4000K 24)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581001212HL74110.jpg',
                    url: 'https://skarlat.ua/skarlat__rhl74110_6%C3%973w_(bk_4000k_24)',
                    price: 11872,
                    oldPrice: 12000,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057692,
                    name: 'Premium Skarlat  RWLB099 7W (WH 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1584899201%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D0%B1%D0%B5%D0%BB%D1%8B%D0%B9.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb099_7w_(wh_3000k)',
                    price: 3286,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057693,
                    name: 'Premium Skarlat RWLB099 7W (BK 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1584899188%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9%20%D1%87%D0%B5%D1%80%D0%BD%D1%8B%D0%B9.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb099_7w_(bk_3000k)',
                    price: 3286,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057682,
                    name: 'Premium Skarlat RWLB098 12W (WH 4000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581075763WLB098-12W.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb098_12w_(wh_4000k)_',
                    price: 1653,
                    currency: 'грн',
                    quantity: 1
                }, {
                    sku:1057664,
                    name: 'Premium Skarlat RWLB102 12W (BK 3000K)',
                    img: 'https://skarlat.ua/frontend/web/uploads/items/1581063580WLB102.jpg',
                    url: 'https://skarlat.ua/skarlat__rwlb102_12w_(bk_3000k)_',
                    price: 2713,
                    currency: 'грн',
                    quantity: 1
                }
            ],
        }
    }

}

window.state = state;

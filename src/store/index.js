import { createStore } from 'vuex'

export default createStore({
    state: {
        products: [
            {
                id: 1,
                title: 'Макарони',
                image: 'https://pesto-italy.com.ua/image/cache/catalog/blog/2021/makarony-vydy-populyarni-brendy-ta-yak-pravylno-hotuvaty-1000x400.jpg',
                price: 48,
            },
            {
                id: 2,
                title: 'Ковбаса',
                image: 'https://www.macik.ua/wp-content/uploads/2020/03/salami_sl.jpg',
                price: 320,
            },
            {
                id: 3,
                title: 'Хліб',
                image: 'https://life.pravda.com.ua/images/doc/d/8/d8c527d-hlib.jpg',
                price: 25,
            },
            {
                id: 4,
                title: 'Сир',
                image: 'https://img.tsn.ua/cached/491/tsn-84ee4f9844c21d3af2b3cfbad2c9c711/thumbs/1036x648/f1/73/701864ca3dc677356daf34b0138e73f1.jpeg',
                price: 298,
            },
        ],
        gallerys: [
            {
                id: 1,
                image: 'https://st.depositphotos.com/1307373/4543/i/950/depositphotos_45436821-stock-photo-dew-and-butterfly.jpg',
            },
            {
                id: 2,
                image: 'https://st4.depositphotos.com/14883968/21324/i/1600/depositphotos_213244388-stock-photo-landscape-glacial-black-lake-mountains.jpg',
            },
            {
                id: 3,
                image: 'https://st.depositphotos.com/1307373/3789/i/950/depositphotos_37896767-stock-photo-love-ladybug-sitting-on-the.jpg',
            },
            {
                id: 4,
                image: 'https://st2.depositphotos.com/2916765/9812/i/950/depositphotos_98125250-stock-photo-sunrise-at-moraine-lake.jpg',
            },
        ],

        suppliers: [
            {
                id: 1,
                title: 'Політ',
                image: 'https://emozzi.ua/uploads/__sized__/emotiongallery/2020/03/03/paragliding-kyiv2-crop-c0-5__0-5-790x440-70.jpg',
                icon: [
                    { id: 1, prefix: 'fas', iconName: 'jet-fighter' },
                    { id: 2, prefix: 'fas', iconName: 'truck-pickup' },
                ],
            },
            {
                id: 2,
                title: 'Надійність',
                image: 'https://vesti.ua/wp-content/uploads/2023/06/Zastavka-570x380.jpg',
                icon: [{ id: 1, prefix: 'fas', iconName: 'truck-pickup' }],
            },
            {
                id: 3,
                title: 'Швидка',
                image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/B-2_rear_view.jpg',
                icon: [
                    { id: 2, prefix: 'fas', iconName: 'truck-pickup' },
                    { id: 1, prefix: 'fas', iconName: 'jet-fighter' },
                ],
            },
            {
                id: 4,
                title: 'Економ',
                image: 'https://term.com.ua/images/2018/10/econom/econom.jpg',
                icon: [
                    { id: 1, prefix: 'fas', iconName: 'truck-pickup' },
                    { id: 2, prefix: 'fas', iconName: 'dragon' },
                ],
            },
        ],
        searchVal: null,
    },
    getters: {
        getGallerysList: (state) => state.gallerys,
        getSuppliersList: (state) => state.suppliers,
        getFilteredProductList: (state) => {
            if (state.searchVal)
                return state.products.filter((product) =>
                    product.title.toLowerCase().includes(state.searchVal.toLowerCase())
                )
            return state.products
        },
        getSearchVal: (state) => state.searchVal,
    },
    mutations: {
        searchVal(state, value) {
            state.searchVal = value
        },
        addProducts(state, objProduct) {
            state.products.push(objProduct)
        },
    },
    actions: {
        setSearchVal({ commit }, value) {
            commit('searchVal', value)
        },
        addProducts({ commit }, objProduct) {
            commit('addProducts', {
                id: new Date().getTime(),
                ...objProduct,
            })
        },
    },
    modules: {},
})

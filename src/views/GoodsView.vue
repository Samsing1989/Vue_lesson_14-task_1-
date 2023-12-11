<template>
    <main-master-page>
        <h1>Оберіть продукт</h1>
        <div class="container-item">
            <router-link to="/goods/selector" class="item">Знайти</router-link>
            <router-link to="/goods/editor" class="item">Додати </router-link>
        </div>
        <router-view />
        <div class="card">
            <data-card
                v-for="product in getFilteredProductList"
                :key="product.id"
                :info="{
                    image: product.image,
                    title: product.title,
                }"
            >
                <template #price>
                    <span>{{ product.price }} грн</span>
                </template>
            </data-card>
        </div>
        <template #right-text>
            <div>Статус: <span class="open">Відкритро</span></div>
        </template>
    </main-master-page>
</template>

<script>
import { mapGetters } from 'vuex'
import MainMasterPage from '../masterpages/MainMasterPage.vue'
import DataCard from '@/components/DataCard.vue'

export default {
    name: 'GoodsView',
    components: {
        DataCard,
        MainMasterPage,
    },
    computed: {
        ...mapGetters(['getFilteredProductList']),
    },
}
</script>

<style lang="scss" scoped>
span {
    color: red;
    font-size: 24px;
}
.card {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 20px;
}

.continer-product {
    font-size: 20px;
}
.open {
    color: green;
}

.container-item {
    display: flex;
    gap: 30px;
    justify-content: space-evenly;
    margin-bottom: 20px;
}
.item {
    color: goldenrod;
    text-decoration: none;
    font-weight: bold;
}
</style>

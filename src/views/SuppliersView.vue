<template>
    <main-master-page>
        <h2>Оберіть продукти</h2>
        <div class="content">
            <data-card
                v-for="supplier in getSuppliersList"
                :key="supplier.id"
                :info="{
                    image: supplier.image,
                    title: supplier.title,
                }"
            >
                <template #icon>
                    <font-awesome-icon
                        v-for="icons in supplier.icon"
                        :key="icons.id"
                        :icon="[icons.prefix, icons.iconName]"
                    />
                </template>
            </data-card>
        </div>
        <template #left-text>
            <div>Набільш популярний: <span class="open">Економ</span></div>
        </template>
        <template #right-text>
            <div class="right-side">Статус: <span class="open">Відкрито</span></div>
        </template>
    </main-master-page>
</template>

<script>
import DataCard from '../components/DataCard'
import MainMasterPage from '@/masterpages/MainMasterPage.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'SuppliersView',
    components: {
        DataCard,
        MainMasterPage,
    },

    computed: {
        ...mapGetters(['getSuppliersList']),
    },
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}
.footer {
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.open {
    color: green;
}
.card {
    margin-bottom: 20px;
}
</style>

<template>
    <h2><router-link to="/" class="button">На головна</router-link></h2>
    <div>Правила купівлі:</div>
    <ul class="list">
        <li class="item">Купуємо багато</li>
        <li class="item">Платимо швидко</li>
        <li class="item">Насолоджуємось товаром</li>
    </ul>
    <h3 class="title-contact">Галерея</h3>
    <gallery-list />
</template>

<script>
import GalleryList from '@/components/GalleryList.vue'

export default {
    name: 'PurchaseRulesView',
    components: {
        GalleryList,
    },
}
</script>

<style lang="scss" scoped></style>

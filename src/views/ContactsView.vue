<template>
    <div class="container-contacts">
        <h2><router-link to="/" class="button">На головна</router-link></h2>
        <h3 class="title-contact">Наші контакти:</h3>
        <div class="text">Адреса магазина: біля дудинку Баби Галі</div>
        <div class="text">Менеджер: дід Петро</div>
        <div class="text">онука Софія</div>
        <h3 class="title-contact">Галерея</h3>
        <gallery-list />
    </div>
</template>

<script>
import GalleryList from '@/components/GalleryList.vue'

export default {
    name: 'ContactsView',
    components: {
        GalleryList,
    },
}
</script>

<style lang="scss" scoped></style>

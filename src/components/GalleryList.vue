<template>
    <div>
        <div v-for="gallery in getGallerysList" :key="gallery.id" class="gallery">
            <img :src="gallery.image" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'GalleryList',

    computed: {
        ...mapGetters(['getGallerysList']),
    },
}
</script>

<style lang="scss" scoped>
.gallery {
    display: inline-block;
    &:not(:last-child) {
        margin-right: 10px;
    }
    img {
        display: block;
        border-radius: 10px;
        max-width: 200px;
    }
}
</style>

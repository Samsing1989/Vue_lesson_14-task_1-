<template>
    <div class="card">
        <div class="image">
            <img :src="isValid(info.image) ? info.image : defaultImage" />
        </div>
        <div class="title">
            {{ info.title }}
        </div>
        <div class="slot">
            <slot name="price"></slot>
            <slot name="icon"></slot>
        </div>
        <button class="button">Купити</button>
    </div>
</template>

<script>
export default {
    name: 'DataCard',
    props: {
        info: {
            type: Object,
            default: () => ({}),
        },
        defaultImage: {
            type: String,
            default:
                'https://img.freepik.com/premium-vector/circle-with-crossed-line-red-prohibition-sign_79145-715.jpg?w=740',
        },
    },

    methods: {
        isValid(image) {
            const url = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
            return url.test(image)
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    max-width: 250px;
    border-radius: 10px;
    border: 3px solid green;
    padding: 10px;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.image {
    display: block;
    img {
        max-width: 150px;
        height: 150px;
        transition: all 0.3s;
        &:hover {
            transform: scale(1.1);
        }
    }
    margin-bottom: 20px;
}
.title {
    font-size: 24px;
}
</style>

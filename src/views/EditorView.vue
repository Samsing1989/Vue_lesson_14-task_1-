<template>
    <div class="add">
        <div class="product">
            <label
                >Назва
                <input v-model="newProd.title" type="text" />
            </label>
            <label
                >Картинка
                <input v-model="newProd.image" type="text" />
            </label>
            <label
                >Ціна
                <input v-model="newProd.price" type="number" />
            </label>
        </div>
        <div>
            <button :disabled="isDisabled" class="button" @click="onAdd">Додати</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'EditorView',

    data() {
        return {
            newProd: {},
        }
    },
    computed: {
        isDisabled() {
            return ['title', 'image', 'price'].some((key) => !this.newProd[key])
        },
    },
    methods: {
        ...mapActions(['addProducts']),
        onAdd() {
            this.addProducts(this.newProd)
            this.newProd = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.add {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}
.product {
    padding: 30px;
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    align-items: center;
    input {
        border-radius: 5px;
        padding: 5px 10px;
    }
}
</style>

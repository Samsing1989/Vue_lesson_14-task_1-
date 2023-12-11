<template>
    <div>
        <label class="lable">
            Пошук:
            <input v-model="currentSearchVal" type="text"
        /></label>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'SearchView',

    computed: {
        ...mapGetters(['getSearchVal']),
        currentSearchVal: {
            get() {
                return this.getSearchVal
            },
            set(value) {
                return this.setSearchVal(value)
            },
        },
    },

    methods: {
        ...mapActions(['setSearchVal']),
    },
}
</script>

<style lang="scss" scoped>
.lable {
    margin-left: 100px;
    margin-bottom: 20px;
    display: flex;
    gap: 20px;
    input {
        padding: 5px 10px;
        border-radius: 5px;
    }
}
</style>

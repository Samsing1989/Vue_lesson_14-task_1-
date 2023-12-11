<template>
    <div class="home">
        <main-master-page>
            <h1>Вітаємо!</h1>

            <p>Сподіваюсь ви будете чемними, і обов'язково щось купите.</p>
        </main-master-page>
        <div></div>
    </div>
</template>

<script>
// @ is an alias to /src
import MainMasterPage from '@/masterpages/MainMasterPage.vue'

export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },
}
</script>
<style lang="scss" scoped>
.home {
    font-size: 20px;
}
.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.name {
    font-size: 24px;
}
.image {
    img {
        max-width: 100px;
    }
}
</style>

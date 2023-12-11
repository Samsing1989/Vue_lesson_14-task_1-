<template>
    <nav>
        <router-link to="/">Головна</router-link> | <router-link to="/goods">Товари</router-link> |
        <router-link to="/suppliers">Постачальники</router-link> | <router-link to="/contacts">Контакти</router-link> |
        <router-link to="/purchase">Правила Купівлі</router-link>
    </nav>
    <slot></slot>

    <footer class="footer">
        <slot name="left-text">
            <div>Рейтинг магазину: 54449</div>
        </slot>
        <slot name="right-text">
            <div class="right-text">
                Баба Галя: <img src="https://static.hdrezka.ac/i/2021/4/12/r2dcb76f0fd07dw59w43n.png" />
            </div>
        </slot>
    </footer>
</template>

<script>
export default {
    name: 'MainMasterPage',
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.right-text {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
        max-width: 100px;
        border-radius: 5px;
    }
}
</style>

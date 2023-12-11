<template>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    //   text-align: center;
    color: #2c3e50;
    padding: 0px 100px;
    font-size: 20px;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.button {
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    transition: all 0.3s;
    display: inline-block;

    &:hover {
        background-color: #6eecb4;
    }
}
</style>

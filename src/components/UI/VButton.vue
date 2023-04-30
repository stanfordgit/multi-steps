<template>
    <button class="v-button">
       <slot/>
    </button>
</template>

<script>
    export default {
        name: 'VButton',
        props: {
            type:{   
                type: String,
                default: null,
            },
        },
    }
</script>

<style lang="scss" scoped>
    .v-button{
        height: 40px;
        padding: 8px 16px;

        border-radius: 20px;
        color: $color-white;
        font-weight: 600;
        background-color: #1D2452;
        cursor: pointer;
    }
</style>
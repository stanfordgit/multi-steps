<template>
    <label class="v-toggle-switch">
        <input type="checkbox">
        <span class="slider"></span>
        <div class="label"><slot/></div>
    </label>
</template>

<script>
    export default {
        name: "VToggleSwitch",
        props: {
            label:{   
                type: String,
                default: null,
            },
            name: {
                type: String,
                default: null,
            },
        },
        
    }
</script>

<style lang="scss" scoped>
.v-toggle-switch{
    display: flex;
    align-items: center;
    input {
        opacity: 0;
        width: 0;
        height: 0;
        &:checked + .slider {
            background-color: $color-blue;
            &::before{
                -webkit-transform: translateX(20px);
                -ms-transform: translateX(20px);
                transform: translateX(20px);
            }
        }
    }
    .slider {
        position: relative;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        width: 44px;
        height: 24px;
        bottom: 0;
        border-radius: 12px;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
        &::before{
            position: absolute;
            content: "";
            height: 20px;
            width: 20px;
            left: 2px;
            bottom: 2px;
            border-radius: 50%;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
        }
    }
    .label{
        display: flex;
        flex-direction: row;
        margin-left: 8px;
        font-size: 16px;
    }
}

</style>
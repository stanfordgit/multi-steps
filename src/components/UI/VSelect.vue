<template>
    <div class="v-select">
        <VFieldLabel :required="required">{{label}}</VFieldLabel>
        <select v-model="selectedOption" :disabled="disabled">
            <option v-for="option in options" :key="option.id" :value="option.value">{{option.label}}</option>
        </select>
    </div>
</template>

<script>
    import VFieldLabel from './VFieldLabel';
    export default {
        name: 'VSelect',
        computed:{
            selectedOption(){
                return this.value
            }
        },
        components: { VFieldLabel },
        props:{
            label: {
                type: String,
                default: null,
            },
            required:{
                type: Boolean,
                default: false
            },
            options:{
                type: Array,
                default: () => [],
                required: true,
            },
            value: {
                type: String,
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-select{
    select{
        height: 40px;
        width: 100%;
        padding-left: 8px;


        font-weight: 500;
        background-color: $color-white;
        color: $color-navy-blue;
        border-radius: 8px;
        border: 1px solid rgba($color-navy-blue, 0.1);
        -moz-appearance:none; /* Firefox */
        -webkit-appearance:none; /* Safari and Chrome */
        appearance:none;
        background: url(@/assets/images/select-mark.svg) no-repeat center;
        background-position: calc(100% - 16px) center !important;
        &:active{
            outline: none !important;
            border: 1px solid $color-blue;
        }
        &:focus{
            outline: none;
        }
        option{
            font-weight: 500;
            color: $color-navy-blue;
        }
        &:disabled{
            background-color: rgba(#ebebeb, 0.5);

            color: rgba($color-grey, 0.5);
            cursor: not-allowed;
        }
    }
}

</style>
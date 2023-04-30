<template>
    <div class="v-input-text">
        <VFieldLabel :required="required">{{label}}</VFieldLabel>
        <input type="text" :name="name" :required="required" :value="value" :disabled="disabled">
    </div>
</template>

<script>
import VFieldLabel from './VFieldLabel';
    export default {
        name: 'VInputText',
        components: { VFieldLabel },
        props:{
            label:{   
                type: String,
                default: null,
            },
            name: {
                type: String,
                default: null,
            },
            value:{   
                type: String,
                required: true
            },
            required:{
                type: Boolean,
                default: false
            },
            disabled:{
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-input-text{
    input{ 
        height: 40px;
        width: 100%;
        padding: 9px 8px;
        border-radius: 8px;
        font-weight: 500;
        border: 1px solid rgba($color-navy-blue, 0.1);
        color: $color-navy-blue;
        background-color: $color-white;
        &:focus{
            outline: none !important;
            border: 1px solid $color-blue;
        }
        &:disabled{
            background-color: rgba(#ebebeb, 0.4);
            cursor: not-allowed;
        }
    }
}
</style>
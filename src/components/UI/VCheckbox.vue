<template>
    <div class="v-checkbox">
        <label class="checkbox">
            <input type="checkbox" :name="name" :value="value"/>
            <span class="checkmark"></span>
            <slot/>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'VCheckbox',
        props:{
            name: {
                type: String,
                default: null,
            },
            value:{   
                type: String,
                required: true
            },
        }
        
    }
</script>

<style lang="scss" scoped>
    .v-checkbox{
        font-weight: 500;
        width: max-content;
        .checkbox{
            display: flex;
            align-items: center;
            cursor: pointer;
            gap: 8px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            input{
                cursor: pointer;
                display: none;
                height: 0;
                width: 0;
                &:checked ~ .checkmark {
                    background-color: $color-blue;
                    &::after{
                        display: block;
                    }
                }
            }
            .checkmark{
                position: relative;
                height: 18px;
                width: 18px;
                border-radius: 4px;
                background-color: $color-white;
                border: 1px solid $color-night-blue;
                &::after{
                    position: absolute;
                    display: none;
                    left: 3px;
                    top: -6px;
                    content: url(@/assets/images/checkbox-mark.svg);
                }
            }
        }
    }
</style>
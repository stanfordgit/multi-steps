<template>
    <div class="v-field-label">
        <slot/><span v-if="required" class="required">*</span>
    </div>
</template>

<script>
    export default {
        name: 'VFieldLabel',
        props: {
            required: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<style lang="scss" scoped>
.v-field-label{
    font-size: 12px;
    font-weight: 600;
    color: rgba($color-navy-blue, 0.5);
    margin-bottom: 4px;
    .required{
        color: #F5455A;
        padding-left: 5px;
    }
}

</style>
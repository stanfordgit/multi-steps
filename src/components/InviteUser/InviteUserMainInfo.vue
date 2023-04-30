<template>
    <div class="invite-user__main-info">
        <v-input-text label="First Name" name="firstName" :disabled="formDisabled" :value="getMainInfoFirstName" @input="setFirstName($event.target.value)"/>
        <v-input-text label="Last Name" name="lastName" :disabled="formDisabled" :value="getMainInfoLastName" @input="setLastName($event.target.value)"/>
        <v-input-text label="Email Address" name="emailAddress" :disabled="formDisabled" :value="getMainInfoEmailAddress" @input="setEmailAddress($event.target.value)"/>
        <v-input-text label="Phone Number" name="phoneNumber" :disabled="formDisabled" :value="getMainInfoPhoneNumber" @input="setPhoneNumber($event.target.value)"/>
        <v-input-text label="Position" name="position" :disabled="formDisabled" :value="getMainInfoPosition" @input="setPosition($event.target.value)"/>
        <v-select label="Available in company" :disabled="formDisabled" :options="company" :value="getMainInfoAvailableInCompany" @input="setAvailableInCompany($event.target.value)"/>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        name: 'InviteUserMainInfo',
        data(){
            return{
                company: [
                    {
                        id: 1,
                        label:'Precoro',
                        value: 'precoro'
                    }, 
                    {
                        id: 2,
                        label:'No name',
                        value: 'noName'
                    }
                ]
            }
        },
        props:{
            formDisabled: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            ...mapGetters([
            'getMainInfoFirstName',
            'getMainInfoLastName',
            'getMainInfoEmailAddress',
            'getMainInfoPhoneNumber',
            'getMainInfoPosition',
            'getMainInfoAvailableInCompany'
            ]),
            
        },
        methods: {
            ...mapMutations({
            setFirstName: 'SET_MAININFO_FIRSTNAME',
            setLastName: 'SET_MAININFO_LASTNAME',
            setEmailAddress: 'SET_MAININFO_EMAILADDRESS',
            setPhoneNumber: 'SET_MAININFO_PHONENUMBER',
            setPosition: 'SET_MAININFO_POSITION',
            setAvailableInCompany: 'SET_MAININFO_AVAILABLEINCOMPANY',
            }),
        }
    }
</script>

<style lang="scss" scoped>
.invite-user__main-info{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media screen and (max-width: 600px) { 
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>
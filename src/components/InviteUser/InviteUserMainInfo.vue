<template>
    <div class="invite-user__main-info">
        <v-input-text label="First Name" name="firstName" :value="getMainInfoFirstName" @input="setFirstName($event.target.value)"/>
        <v-input-text label="Last Name" name="lastName" :value="getMainInfoLastName" @input="setLastName($event.target.value)"/>
        <v-input-text label="Email Address" name="emailAddress" :value="getMainInfoEmailAddress" @input="setEmailAddress($event.target.value)"/>
        <v-input-text label="Phone Number" name="phoneNumber" :value="getMainInfoPhoneNumber" @input="setPhoneNumber($event.target.value)"/>
        <v-input-text label="Position" name="position" :value="getMainInfoPosition" @input="setPosition($event.target.value)"/>
        <v-select label="Available in company" :options="company" :value="getMainInfoAvailableInCompany" @input="setAvailableInCompany($event.target.value)"/>
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
            firstName: {
                type: String,
                default: '',
            },
            lastName:{   
                type: String,
                default: '',
            },
            emailAddress:{   
                type: String,
                default: '',
            },
            phoneNumber:{   
                type: String,
                default: '',
            },
            position:{   
                type: String,
                default: '',
            },
            availableInCompany:{   
                type: String,
                default: '',
            },
            activeAllCompanies:{
                type: Boolean,
                default: false,
            }
        },
        computed: {
            ...mapGetters([
            'getMainInfoFirstName',
            'getMainInfoLastName',
            'getMainInfoEmailAddress',
            'getMainInfoPhoneNumber',
            'getMainInfoPosition',
            'getMainInfoAvailableInCompany'
            ])
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
}

</style>
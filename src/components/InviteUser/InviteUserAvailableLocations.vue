<template>
    <div class="invite-user__available-locations">
        <v-select class="select-location" label="Main Location" :disabled="formDisabled" :options="mainLocations" :value="getAvailableLocationsMainLocation" @input="setAvailableLocationsMainLocation($event.target.value)" required/>
        <div class="h-checkbox check-all-locations">
            <label class="checkbox">
                <input type="checkbox" name="locationAll" v-model="checkedLocationAll" :disabled="formDisabled" @change="setAvailableLocationsLocationAll($event.target.checked)" />
                <span class="checkmark"></span>
                <span class="label">Select All Locations</span>
            </label>
        </div>
        <div class="locations">
            <div class="locations__title">Available Locations</div>
            <div class="locations__group">
                <div v-for="location in availableLocations" :key="location.id" class="h-checkbox">
                    <label class="checkbox">
                        <input 
                            type="checkbox"
                            :name="location.name"
                            :disabled="formDisabled"
                            :value="location.value" 
                            v-model="checkedAvailableLocations" 
                            @change="updateAvailableLocations"/>
                        <span class="checkmark"></span>
                        <span class="label">{{location.label}}</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        name: 'InviteUserAvailableLocations',
        data(){
            return{
                checkedLocationAll: false,
                checkedAvailableLocations: [],
                mainLocations: [
                    {
                        id: 1,
                        label:'Main Precoro US',
                        value: 'mainPrecoroUS'
                    }, 
                    {
                        id: 2,
                        label:'No name',
                        value: 'noName'
                    }
                ],
                availableLocations: [
                    {
                        id: 1,
                        name: 'availableLocationBerlin',
                        value: 'berlin',
                        label: 'Berlin'
                    },
                    {
                        id: 2,
                        name: 'availableLocationPolandOffice',
                        value: 'polandOffice',
                        label: 'Poland Office'
                    },
                    {
                        id: 3,
                        name: 'availableLocationVeniceOffice',
                        value: 'veniceOffice',
                        label: 'Venice Office'
                    },
                    {
                        id: 4,
                        name: 'availableLocationMexico',
                        value: 'mexico',
                        label: 'Mexico'
                    },
                    {
                        id: 5,
                        name: 'availableLocationUSAOffice',
                        value: 'usaOffice',
                        label: 'USA Office'
                    },
                    {
                        id: 6,
                        name: 'availableLocationUkraineOffice',
                        value: 'ukraineOffice',
                        label: 'Ukraine Kyiv Lukivska 7 Main Office',
                        
                    },
                    {
                        id: 7,
                        name: 'availableLocationCanada',
                        value: 'canada',
                        label: 'Canada'
                    },
                ]
            }
        },
        props:{
            formDisabled: {
                type: Boolean,
                default: false,
            },
        },
        mounted(){
            this.checkedLocationAll = this.getAvailableLocationsLocationAll
            this.checkedAvailableLocations = this.getAvailableLocationsLocations;
        },
        computed: {
            ...mapGetters([
            'getAvailableLocationsMainLocation',
            'getAvailableLocationsLocationAll',
            'getAvailableLocationsLocations',
            ]),
            updateAvailableLocations(){
                return this.setAvailableLocationsLocations(this.checkedAvailableLocations);
            }
        },
        methods: {
            ...mapMutations({
            setAvailableLocationsMainLocation: 'SET_AVAILABLELOCATIONS_AVAILABLEINCOMPANY',
            setAvailableLocationsLocationAll: 'SET_AVAILABLELOCATIONS_LOCATIONALL',
            setAvailableLocationsLocations: 'SET_AVAILABLELOCATIONS_LOCATIONS',
            }),
        }
    }
</script>

<style lang="scss" scoped>
.invite-user__available-locations{
    .select-location{
        width: 345px;
        @media screen and (max-width: 600px) { 
            width: 100%;
        }
    }
    .check-all-locations{
        margin-top: 24px;
        margin-bottom: 16px;
    }
    .locations{
        display: flex;
        flex-direction: column;
        overflow-x: auto;
        gap: 10px;
        &__title{
            font-weight: 500;
            color: rgba($color-navy-blue, 0.6);
        }
        &__group{
            display: grid;
            grid-template-columns: repeat(2, max-content);
            grid-template-rows: repeat(4, 1fr);
            grid-column-gap: 55px;
            grid-row-gap: 16px;
            @media screen and (max-width: 600px) { 
                grid-template-columns: repeat(1, max-content);
            }
        }
    }
}
</style>
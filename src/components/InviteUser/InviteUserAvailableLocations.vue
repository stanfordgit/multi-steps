<template>
    <div class="invite-user__available-locations">
        <v-select class="select-location" label="Main Location" :options="mainLocations" required/>
        <v-checkbox class="check-all-locations" name="locationAll" value="locationAll">Select All Locations</v-checkbox>
        <div class="locations">
            <div class="locations__title">Available Locations</div>
            <div class="locations__group">
                <v-checkbox name="locationBerlin" value="locationBerlin">Berlin</v-checkbox>
                <v-checkbox name="locationPolandOffice" value="locationPolandOffice">Poland Office</v-checkbox>
                <v-checkbox name="locationVeniceOffice" value="locationVeniceOffice">Venice Office</v-checkbox>
                <v-checkbox name="locationMexico" value="locationMexico">Mexico</v-checkbox>
                <v-checkbox name="locationUSAOffice" value="locationUSAOffice">USA Office</v-checkbox>
                <v-checkbox name="locationUkraineOffice" value="locationUkraineOffice">Ukraine Kyiv Lukivska 7 Main Office</v-checkbox>
                <v-checkbox name="locationCanada" value="locationCanada">Canada</v-checkbox>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InviteUserAvailableLocations',
        data(){
            return{
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
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
.invite-user__available-locations{

    .select-location{
        width: 345px;
    }
    .check-all-locations{
        margin-top: 24px;
        margin-bottom: 16px;
    }
    .locations{
        display: flex;
        flex-direction: column;
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
        }
    }
}
</style>
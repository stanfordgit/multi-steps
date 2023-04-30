<template>
    <div class="invite-user">
      <div class="invite-user__header header">
        <div class="header__top top">
            <div class="top__label">
                Invite User
            </div>
            <div class="top__close">
                <img src="@/assets/images/close.svg" alt="close">
            </div>
        </div>
        <div class="header__steps steps">
            <div v-for="step in steps" :key="step.id" class="steps__step step" :class="{active: activeStep==step.isActiveStep, completed: step.isActiveStep < activeStep}" @click="changeStep(step.id)">
                <div class="step__icon">
                    <img v-if="step.isActiveStep < activeStep" src="@/assets/images/step-mark.svg" alt="step-mark">
                    <span v-else>{{step.id}}</span>
                </div>
                <div class="step__label">{{step.label}}</div>
            </div>
        </div>
      </div>
      <div class="invite-user__content">
        <InviteUserMainInfo :formDisabled="isFormDisabled" v-if="activeStep == 1"/>
        <InviteUserAvailableLocations :formDisabled="isFormDisabled" v-else-if="activeStep == 2"/>
        <InviteUserRoles :formDisabled="isFormDisabled" v-else/>
      </div>
      <div class="invite-user__footer">
        <div class="h-toggle-switch" v-if="activeStep == 1">
            <label class="toggle-switch">
                <input type="checkbox" v-model="checkedAllCompanies" :disabled="isFormDisabled" @change="setMainInfoAllCompanies($event.target.checked)">
                <span class="slider"></span>
                <span class="label">Active in all companies<img class="icon-info" src="@/assets/images/info.svg" alt="info"></span>
            </label>
        </div>
        <v-button class="nextStep" :disabled="isFormDisabled" @click="nextStep">
            <span v-if="activeStep == 3">Invite User</span>
            <span v-else-if="activeStep==4">...</span>
            <span v-else>Next Step</span>
        </v-button>
      </div>
    </div>
</template>

<script>
    import InviteUserMainInfo from '@/components/InviteUser/InviteUserMainInfo';
    import InviteUserAvailableLocations from '@/components/InviteUser/InviteUserAvailableLocations';
    import InviteUserRoles from '@/components/InviteUser/InviteUserRoles';
    import { mapMutations, mapGetters } from 'vuex';
    export default {
        name: 'InviteUser',
        data(){
            return{
                isFormDisabled: false,
                checkedAllCompanies: false,
                activeStep: 1,
                steps: [
                    {
                        id: 1,
                        label: 'Main Info',
                        isActiveStep: 1,
                    },
                    {
                        id: 2,
                        label: 'Available Locations',
                        isActiveStep: 2,
                    },
                    {
                        id: 3,
                        label: 'Roles',
                        isActiveStep: 3,
                    }
                ]
            }
        },
        components:{
            InviteUserMainInfo, 
            InviteUserAvailableLocations, 
            InviteUserRoles
        },
        methods:{
            changeStep(num){
                this.activeStep = num;
                
            },
            ...mapMutations({
                setMainInfoAllCompanies: 'SET_MAININFO_ACTIVEALLCOMPANIES',
            }),
            nextStep(){
                if(this.activeStep < 3){
                    this.activeStep += 1;
                }
                else if(this.activeStep == 3){
                    this.submitForm();
                }
                else{
                    console.log("+");
                }
            },
            submitForm(){
                this.isFormDisabled = true;
                this.activeStep =4;
                try {
                    console.log(JSON.stringify(this.getUser))
                } catch (error) {
                    console.error(error);
                } finally{
                    setTimeout(() => {
                        this.activeStep = 3;
                        this.isFormDisabled = false;
                    }, 2000);
                }
            }
        },
        computed: {
            ...mapGetters([
            'getMainInfoActiveAllCompanies',
            'getUser'
            ]),
            
        },
        mounted(){
            this.checkedAllCompanies = this.getMainInfoActiveAllCompanies;
        }
    }
</script>

<style lang="scss" scoped>
    .invite-user{
        padding: 24px;
        max-width: 1000px;
        margin: auto;

        background-color: $color-white;
        box-shadow: 0px 8px 16px rgba(#363E71, 0.24);
        border-radius: 16px;
        @media screen and (max-width: 400px) { 
            padding: 10px;
        }
        .invite-user__header{
            display: flex;
            flex-direction: column;
            overflow: hidden;
            gap: 14px;
            padding: 0 24px;
            margin: 0 -24px;
            
            border-bottom: 1px solid rgba($color-black, 0.1);
            @media screen and (max-width: 600px) { 
                margin: 0 -10px;
                padding: 0 10px;
            }
            .header__top{
                display: flex;
                align-items: center;
                justify-content: space-between;
               
                .top__label{
                    font-weight: 600;
                    font-size: 24px;
                    
                }
                .top__close{
                    cursor: pointer;
                }
            }
            
            .header__steps {
                display: flex;
                gap: 24px;
                @media screen and (max-width: 510px) { 
                    overflow-x: auto;
                }
                .steps__step{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    padding-bottom: 18px;
                    .step__icon{
                        height: 30px;
                        width: 30px;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        font-size: 14px;
                        font-weight: 600;
                        border-radius: 50%;
                        background-color: rgba($color-grey, 0.05);
                        color: $color-grey;
                    }
                    .step__label{
                        display: flex;
                        align-items: center;
                        color: rgba($color-navy-blue, 0.5);
                        font-weight: 500;
                        @media screen and (max-width: 510px) { 
                            width: max-content;
                        }
                    }
                    &.active{
                        border-bottom: 2px solid $color-blue;
                        padding-bottom: 16px;
                        .step__icon{
                            background-color: rgba($color-blue, 0.05);
                            color: $color-blue;
                        }
                        .step__label{
                            color: $color-blue;
                        }
                    }
                    &.completed{
                        .step__icon{
                            background-color: $color-blue;
                        }
                        .step__label{
                            color: rgba($color-navy-blue, 0.5);
                        }
                    }
                }
            }
        }
        .invite-user__content{
            padding: 24px 0px 32px;
            
        }
        .invite-user__footer{
            display: flex;
            align-items: center;
            padding: 0 24px;
            margin: 0 -24px;
            padding-top: 20px;
            border-top: 1px solid rgba($color-black, 0.1);
            @media screen and (max-width: 400px) { 
                margin: 0 -10px;
                padding: 10px;
            }
            .v-button{
                margin-left: auto;
              
            }
            .h-toggle-switch{
                .icon-info{
                    margin-left: 8px;
                }
            }
            @media screen and (max-width: 470px) {
                flex-direction: column;
                gap: 20px;
                .nextStep{
                    width: 100%;
                }
            }
        }
    }
    
</style>
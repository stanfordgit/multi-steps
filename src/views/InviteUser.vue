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
        test
      </div>
      <div class="invite-user__footer">
        <v-toggle-switch v-if="activeStep==1">Active in all companies<img class="icon" src="@/assets/images/info.svg" alt="info"></v-toggle-switch>
        <v-button>
            <span v-if="activeStep == 3">Invite User</span>
            <span v-else>Next Step</span>
        </v-button>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'InviteUser',
        data(){
            return{
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
        methods:{
            changeStep(num){
                this.activeStep = num;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .invite-user{
        padding: 24px;
        background-color: $color-white;
        box-shadow: 0px 8px 16px rgba(#363E71, 0.24);
        border-radius: 16px;
        .invite-user__header{
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding: 0 24px;
            margin: 0 -24px;
            
            border-bottom: 1px solid rgba($color-black, 0.1);
            .header__top{
                display: flex;
                align-items: center;
                justify-content: space-between;
                .top__label{
                    font-weight: 600;
                    font-size: 24px;
                    
                }
            }
            .header__steps {
                display: flex;
                gap: 24px;
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
        .invite-user__footer{
            display: flex;
            align-items: center;
            padding: 0 24px;
            margin: 0 -24px;
            padding-top: 20px;
            border-top: 1px solid rgba($color-black, 0.1);
            .v-button{
                margin-left: auto;
              
            }
            .v-toggle-switch{
                .icon{
                    margin-left: 8px;
                }
            }
        }
    }
    
</style>
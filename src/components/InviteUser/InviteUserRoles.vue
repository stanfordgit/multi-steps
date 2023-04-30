<template>
    <div class="invite-user__roles roles">
        <div class="roles__group">       
            <div class="access">
                <div class="grid-column">
                    <div class="title-column">Access to:</div>
                    <div class="all-bellow">All bellow</div>
                    <div>Warehouse requests</div>
                    <div>Purchase requests</div>
                    <div>Request for proposals</div>
                    <div>Purchase orders</div>
                    <div>Receipts</div>
                    <div>Invoices</div>
                    <div>Expenses</div>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">View only</div>
                       <!-- All-Bellow -->
                    <div class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="viewOnlyAllBellow"
                                :disabled="formDisabled"
                                :checked="checkedAccess.viewOnly.length == 7"
                                @change="updateAllBellowAccessViewOnly($event.target.checked)"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                       <!-- All-Bellow -->
                    <div v-for="item in accessItems" :key="item.id" class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                :name="item.name"
                                :value="item.value" 
                                :disabled="formDisabled"
                                v-model="checkedAccess.viewOnly" 
                                @change="updateItemAccess"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Create</div>
                       <!-- All-Bellow -->
                    <div class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="createAllBellow"
                                :disabled="formDisabled"
                                :checked="checkedAccess.create.length == 7"
                                @change="updateAllBellowAccessCreate($event.target.checked)"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <!-- All-Bellow -->
                    <div v-for="item in accessItems" :key="item.id" class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                :name="item.name"
                                :value="item.value" 
                                :disabled="formDisabled"
                                v-model="checkedAccess.create" 
                                @change="updateItemAccess"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Approve</div>
                       <!-- All-Bellow -->
                    <div class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="approveAllBellow"
                                :disabled="formDisabled"
                                :checked="checkedAccess.approve.length == 7"
                                @change="updateAllBellowAccessApprove($event.target.checked)"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                       <!-- All-Bellow -->
                    <div v-for="item in accessItems" :key="item.id" class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                :name="item.name"
                                :value="item.value" 
                                :disabled="formDisabled"
                                v-model="checkedAccess.approve" 
                                @change="updateItemAccess"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Pay</div>
                       <!-- All-Bellow -->
                    <div class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="payAllBellow"
                                :disabled="formDisabled"
                                :checked="checkedAccess.pay.length == 2"
                                @change="updateAllBellowAccessPay($event.target.checked)"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                        <!-- All-Bellow -->
                    <div class="h-checkbox" style="grid-area: 8 / 1 / 9 / 2">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="invoices"
                                value="invoices" 
                                :disabled="formDisabled"
                                v-model="checkedAccess.pay" 
                                @change="updateItemAccess"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="h-checkbox" style="grid-area: 9 / 1 / 10 / 2">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="expenses"
                                value="expenses" 
                                :disabled="formDisabled"
                                v-model="checkedAccess.pay" 
                                @change="updateItemAccess"/>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="management">
                <div class="grid-column">
                    <div class="management__title title-column">
                        Management: <img class="icon-info" src="@/assets/images/info.svg" alt="info">
                    </div>
                       <!-- All-Bellow -->
                    <div class="h-checkbox all-bellow">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="managementAllBellow"
                                :disabled="formDisabled"
                                :checked="checkedManagement.length == 6"
                                @change="updateAllBellowManagement($event.target.checked)"/>
                            <span class="checkmark"></span>
                            <span class="label">All belllow</span>
                        </label>
                    </div>
                       <!-- All-Bellow -->
                    <div v-for="management in managementItems" :key="management.id" class="h-checkbox">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                :name="management.name"
                                :value="management.value" 
                                :disabled="formDisabled"
                                v-model="checkedManagement" 
                                @change="updateItemManagement"/>
                            <span class="checkmark"></span>
                            <span class="label">{{management.label}}</span>
                        </label>
                    </div>
                    <div class="h-checkbox" style="grid-area: 9 / 1 / 10 / 2">
                        <label class="checkbox">
                            <input 
                                type="checkbox"
                                name="managementAdmin"
                                value="admin" 
                                v-model="checkedManagement"
                                :disabled="formDisabled" 
                                @change="updateItemManagement"/>
                            <span class="checkmark"></span>
                            <span class="label">
                            Admin (Full access) <img class="icon-warning" src="@/assets/images/warning.svg" alt="warning"></span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="roles__information">
            <img class="icon-info" src="@/assets/images/info.svg" alt="info">
            <div class="text-info">The user becomes a <a href><span class="link-info">Power user</span></a> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.</div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
    export default {
        name: 'InviteUserRoles',
        data(){
            return{
                checkedManagement: [],
                checkedAccess: {
                    viewOnly: [],
                    create: [],
                    approve: [],
                    pay: [],
                },
                arrayAllBellowAccessTo: ['warehouseRequests', 'purchaseRequests', 'requestForProposals', 'purchaseOrders', 'receipts', 'invoices', 'expenses'],
                accessItems: [
                    {
                        id: 1,
                        name: 'warehouseRequests',
                        value: 'warehouseRequests',
                    },
                    {
                        id: 2,
                        name: 'purchaseRequests',
                        value: 'purchaseRequests',
                    },
                    {
                        id: 3,
                        name: 'requestForProposals',
                        value: 'requestForProposals',
                        
                    },
                    {
                        id: 4,
                        name: 'purchaseOrders',
                        value: 'purchaseOrders',
                    },
                    {
                        id: 5,
                        name: 'receipts',
                        value: 'receipts',
                    },
                    {
                        id: 6,
                        name: 'invoices',
                        value: 'invoices',
                    },
                    {
                        id: 7,
                        name: 'expenses',
                        value: 'expenses'
                    },
                ],
                managementItems:[
                    {
                        id: 1,
                        name: 'managementConfiguration',
                        value: 'configuration',
                        label: 'Configuration'
                    },
                    {
                        id: 2,
                        name: 'managementSuppliersAndItems',
                        value: 'suppliersAndItems',
                        label: 'Suppliers and items'
                    },
                    {
                        id: 3,
                        name: 'managementBudgets',
                        value: 'budgets',
                        label: 'Budgets'
                    },
                    {
                        id: 4,
                        name: 'managementWarehouseManager',
                        value: 'warehouseManager',
                        label: 'Warehouse manager'
                    },
                    {
                        id: 5,
                        name: 'managementReports',
                        value: 'reports',
                        label: 'Reports'
                    }
                ]
            }
        },
        mounted(){
            this.checkedManagement = this.getRolesManagement;
            this.checkedAccess = this.getRolesAccess;
        },
        props:{
            formDisabled: {
                type: Boolean,
                default: false,
            },
        },
        computed: {
            ...mapGetters([
            'getRolesManagement',
            'getRolesAccess'
            ]),
        },
        methods: {
            ...mapMutations({
            setRolesAccess: 'SET_ROLES_ACCESS',
            setRolesAccessViewOnly: 'SET_ROLES_ACCESS_VIEWONLY',
            setRolesAccessCreate: 'SET_ROLES_ACCESS_CREATE',
            setRolesAccessApprove: 'SET_ROLES_ACCESS_APPROVE',
            setRolesAccessPay: 'SET_ROLES_ACCESS_PAY',
            setRolesManagement: 'SET_ROLES_MANAGEMENT',
            }),
            updateAllBellowAccessViewOnly(event){
                if(event){
                    this.setRolesAccessViewOnly(this.checkedAccess.viewOnly = this.arrayAllBellowAccessTo);
                }
                else{
                    this.setRolesAccessViewOnly(this.checkedAccess.viewOnly = []);
                }
            },
            updateAllBellowAccessCreate(event){
                if(event){
                    this.setRolesAccessCreate(this.checkedAccess.create = this.arrayAllBellowAccessTo);
                }
                else{
                    this.setRolesAccessCreate(this.checkedAccess.create = []);
                }
            },
            updateAllBellowAccessApprove(event){
                if(event){
                    this.setRolesAccessApprove(this.checkedAccess.approve = this.arrayAllBellowAccessTo);
                }
                else{
                    this.setRolesAccessApprove(this.checkedAccess.approve = []);
                }
            },
            updateAllBellowAccessPay(event){
                if(event){
                    var arrayAllBellowAccessToPay = ['invoices', 'expenses'];
                    this.setRolesAccessPay(this.checkedAccess.pay = arrayAllBellowAccessToPay);
                }
                else{
                    this.setRolesAccessPay(this.checkedAccess.pay = []);
                }
            },
            updateAllBellowManagement(event)
            {
                if(event){
                    var arrayAllBellowManagementTo = ['configuration', 'suppliersAndItems', 'budgets', 'warehouseManager', 'reports', 'admin'];
                    this.setRolesManagement(this.checkedManagement = arrayAllBellowManagementTo);
                }
                else{
                    this.setRolesManagement(this.checkedManagement = []);
                }
            },
            updateItemManagement(){
                this.setRolesManagement(this.checkedManagement);
            },
            updateItemAccess(){
                this.setRolesAccess(this.checkedAccess)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .invite-user__roles{
        font-weight: 500;
        .roles__group{
            display: flex;

            @media screen and (max-width: 600px) { 
                
                flex-direction: column;
            }
            .access{
                display: grid;
                grid-template-columns: repeat(5, max-content);
                grid-template-rows: 1fr;
                grid-column-gap: 30px;
                grid-row-gap: 16px;
                overflow-y: hidden;
                overflow-x: scroll;
                padding-right: 41px;
                .center-column{
                    justify-items: center;
                }
                .grid-column{
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: repeat(9, 20px);
                    grid-column-gap: 0px;
                    grid-row-gap: 16px;
                    align-items: center;
                }
            }
            .management{
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: repeat(9, 20px);
                grid-column-gap: 0px;
                grid-row-gap: 16px;
                padding-left: 31px;
                border-left: 1px solid $color-night-blue;
                @media screen and (max-width: 600px) { 
                    border-left: none;
                    padding-left: 0px;
                    margin-top: 30px;
                }
                .grid-column{
                    display: grid;
                    grid-template-rows: repeat(9, 20px);
                    grid-column-gap: 0px;
                    grid-row-gap: 16px;
                    align-items: center;
             
                }        
                .management__title{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .icon-info{
                        margin-left: 6px;
                    }
                }
                .icon-warning{
                    margin-left: 9px;
                }
            }
            .all-bellow{
                font-weight: 600;
            }
            .title-column{
                font-weight: 600;
                margin-bottom: 8px;
                color: $color-secondary;
            }
        }

    .roles__information{            
        min-height: 56px;
        max-width: 645px;
        padding: 18px 14px;
        margin-top: 32px;
        display: flex;
        flex-direction: row;
        align-items: center;

        background:rgba(#f4f4ff, 0.5);
        border-radius: 8px;
        .icon-info{
            width: 24px;
            height: 24px;
        }
        .text-info{
            color: rgba($color-navy-blue, 0.5);
            font-size: 14px;
            font-weight: 500;
            padding-left: 10px;
            .link-info{
                color: $color-blue;
                border-bottom: 1px solid rgba($color-blue, 0.5);
            }
        }
    }
}
</style>
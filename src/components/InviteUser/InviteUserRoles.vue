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
                    <v-checkbox/> 
                    <!-- ^all-bellow^ -->
                    <v-checkbox name="viewOnlyWarehouseRequests" value="viewOnlyWarehouseRequests"/>
                    <v-checkbox name="viewOnlyPurchaseRequests" value="viewOnlyPurchaseRequests"/>
                    <v-checkbox name="viewOnlyRequestForProposals" value="viewOnlyRequestForProposals"/>
                    <v-checkbox name="viewOnlyPurchaseOrders" value="viewOnlyPurchaseOrders"/>
                    <v-checkbox name="viewOnlyReceipts" value="viewOnlyReceipts"/>
                    <v-checkbox name="viewOnlyInvoices" value="viewOnlyInvoices"/>
                    <v-checkbox name="viewOnlyExpenses" value="viewOnlyExpenses"/>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Create</div>
                    <v-checkbox/> 
                    <!-- ^all-bellow^ -->
                    <v-checkbox name="createWarehouseRequests" value="createWarehouseRequests"/>
                    <v-checkbox name="createPurchaseRequests" value="createPurchaseRequests"/>
                    <v-checkbox name="createRequestForProposals" value="createRequestForProposals"/>
                    <v-checkbox name="createPurchaseOrders" value="createPurchaseOrders"/>
                    <v-checkbox name="createReceipts" value="createReceipts"/>
                    <v-checkbox name="createInvoices" value="createInvoices"/>
                    <v-checkbox name="createExpenses" value="createExpenses"/>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Approve</div>
                    <v-checkbox/> 
                    <!-- ^all-bellow^ -->
                    <v-checkbox name="approveWarehouseRequests" value="approveWarehouseRequests"/>
                    <v-checkbox name="approvePurchaseRequests" value="approvePurchaseRequests"/>
                    <v-checkbox name="approveRequestForProposals" value="approveRequestForProposals"/>
                    <v-checkbox name="approvePurchaseOrders" value="approvePurchaseOrders"/>
                    <v-checkbox name="approveReceipts" value="approveReceipts"/>
                    <v-checkbox name="approveInvoices" value="approveInvoices"/>
                    <v-checkbox name="approveExpenses" value="approveExpenses"/>
                </div>
                <div class="grid-column center-column">
                    <div class="title-column">Pay</div>
                    <v-checkbox />
                       <!-- ^all-bellow^ -->
                    <v-checkbox name="payInvoices" value="payInvoices" style="grid-area: 8 / 1 / 9 / 2"/>
                    <v-checkbox name="payExpenses" value="payExpenses" style="grid-area: 9 / 1 / 10 / 2"/>
                </div>
            </div>
            <div class="management">
                <div class="grid-column">
                    <div class="management__title title-column">
                        Management: <img class="icon-info" src="@/assets/images/info.svg" alt="info">
                    </div>
                    <v-checkbox class="all-bellow">All bellow</v-checkbox>
                    <v-checkbox name="managementConfiguration" value="managementConfiguration">Configuration</v-checkbox>
                    <v-checkbox name="managementSuppliersAndItems" value="managementSuppliersAndItems">Suppliers and items</v-checkbox>
                    <v-checkbox name="managementBudgets" value="budgets">Budgets</v-checkbox>
                    <v-checkbox name="managementWarehouseManager" value="warehouseManager">Warehouse manager</v-checkbox>
                    <v-checkbox name="managementReports" value="reports">Reports</v-checkbox>
                    <v-checkbox class="grid8" name="managementAdmin" value="managementAdmin">Admin (Full access) <img class="icon-warning" src="@/assets/images/warning.svg" alt="warning"></v-checkbox>
                </div>
            </div>
        </div>
        <div class="roles__information">
            <img class="icon-info" src="@/assets/images/info.svg" alt="info">
            <div class="text-info">The user becomes a <span class="link-info">Power user</span> if at least ONE of the following roles is selected: Approve, View only, Configuration, Suppliers and Items, Budgets, Warehouse manager.</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InviteUserRoles',
    }
</script>

<style lang="scss" scoped>
    .invite-user__roles{
        font-weight: 500;
        .roles__group{
            display: flex;
            .access{
                display: grid;
                grid-template-columns: repeat(5, max-content);
                grid-template-rows: 1fr;
                grid-column-gap: 30px;
                grid-row-gap: 16px;
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
                .grid-column{
                    display: grid;
                    grid-template-rows: repeat(9, 20px);
                    grid-column-gap: 0px;
                    grid-row-gap: 16px;
                    align-items: center;
             
                }
                .grid8 { grid-area: 9 / 1 / 10 / 2; }
        
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
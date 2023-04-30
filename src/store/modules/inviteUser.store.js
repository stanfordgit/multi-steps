

export default {
  state: {
    user: {
        mainInfo:{
            firstName: '',
            lastName: '',
            emailAddress: '',
            phoneNumber: '',
            position: '',
            availableInCompany: '',
            activeAllCompanies: false,
        },
        availableLocations:{
            mainLocation: '',
            locationAll: false,
            locations: []
        },
        roles:{
            access: {
                viewOnly:[],
                create: [],
                approve: [],
                pay: [],
            },
            management: []
        }
    }
  },
  getters: {
    //MainInfo
    getMainInfoFirstName(state){
        return state.user.mainInfo.firstName;
    },
    getMainInfoLastName(state){
        return state.user.mainInfo.lastName;
    },
    getMainInfoEmailAddress(state){
        return state.user.mainInfo.emailAddress;
    },
    getMainInfoPhoneNumber(state){
        return state.user.mainInfo.phoneNumber;
    },
    getMainInfoPosition(state){
        return state.user.mainInfo.position;
    },
    getMainInfoAvailableInCompany(state){
        return state.user.mainInfo.availableInCompany;
    },
    getActiveAllCompanies(state){
        return state.user.mainInfo.activeAllCompanies;
    },
    //availableLocations
    getAvailableLocationsMainLocation(state){
        return state.user.availableLocations.mainLocation;
    },
    getAvailableLocationsLocationAll(state){
        return state.user.availableLocations.locationAll;
    },
    getAvailableLocationsLocations(state){
        return state.user.availableLocations.locations;
    },
    //roles
    getRolesAccess(state){
        return state.user.roles.access;
    },
    getRolesManagement(state){
        return state.user.roles.management;
    },
  },
  mutations: {
    //mainInfo
    SET_MAININFO_FIRSTNAME(state, payload) {
        state.user.mainInfo.firstName = payload;
    },
    SET_MAININFO_LASTNAME(state, payload) {
        state.user.mainInfo.lastName = payload;
    },
    SET_MAININFO_EMAILADDRESS(state, payload) {
        state.user.mainInfo.emailAddress = payload;
    },
    SET_MAININFO_PHONENUMBER(state, payload) {
        state.user.mainInfo.phoneNumber = payload;
    },
    SET_MAININFO_POSITION(state, payload) {
        state.user.mainInfo.position = payload;
    },
    SET_MAININFO_AVAILABLEINCOMPANY(state, payload) {
        state.user.mainInfo.availableInCompany = payload;
    },
    SET_MAININFO_ACTIVEALLCOMPANIES(state, payload) {
        state.user.mainInfo.activeAllCompanies = payload;
    },
    //availableLocations
    SET_AVAILABLELOCATIONS_AVAILABLEINCOMPANY(state, payload) {
        state.user.availableLocations.mainLocation = payload;
    },
    SET_AVAILABLELOCATIONS_LOCATIONALL(state, payload) {
        state.user.availableLocations.locationAll = payload;
    },
    SET_AVAILABLELOCATIONS_LOCATIONS(state, payload) {
        state.user.availableLocations.locations = payload;
    },
    //roles
    SET_ROLES_ACCESS_VIEWONLY(state, payload){
        state.user.roles.access.viewOnly = payload;
    },
    SET_ROLES_ACCESS_CREATE(state, payload){
        state.user.roles.access.create = payload;
    },
    SET_ROLES_ACCESS_APPROVE(state, payload){
        state.user.roles.access.approve = payload;
    },
    SET_ROLES_ACCESS_PAY(state, payload){
        state.user.roles.access.pay = payload;
    },
    SET_ROLES_ACCESS_MANAGEMENT(state, payload){
        state.user.roles.management = payload;
    },
  },
}
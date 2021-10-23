import axios from 'axios';
import config from "../config/config";

const login = (user) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.loginUrl,
            data: user
        })
    )
}

const adduser = (user) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.adduserUrl,            
            headers: { 'content-type': 'application/json' },
            data: user
        })
    )
}

const deleteuser = (user) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.deleteuserUrl,            
            headers: { 'content-type': 'application/json' },
            data: user
        })
    )
}

const activateuser = (user) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.activateusersUrl,            
            headers: { 'content-type': 'application/json' },
            data: user
        })
    )
}

const adddiscount = (discount) => {    
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.adddiscountUrl,
            headers: { 'content-type': 'application/json' },
            data: discount
        })
    )
}

const editdiscount = (discount) => {    
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.editdiscountUrl,
            headers: { 'content-type': 'application/json' },
            data: discount
        })
    )
}

const deletediscount = (discount_id) => {    
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.deletediscountUrl,
            headers: { 'content-type': 'application/json' },
            data: discount_id
        })
    )
}

const discountslist = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.discountslistUrl,
            headers: { 'content-type': 'application/json' },
        })
    )
}

const mylittle = (little) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.mylittleUrl,
            headers: { 'content-type': 'application/json' },
            data: little
        })
    )
}

const userinfo = (info) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.userInformationUrl,
            headers: { 'content-type': 'application/json' },
            data: info
        })
    )
} 
const userdetails = (user) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.userdetailsUrl,
            headers: { 'content-type': 'application/json' },
            data: user
        })
    )
}

const sendpasswordresetmail = (email) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.forgotpasswordUrl,
            headers: { 'content-type': 'application/json' },
            data: email
        })
    )
}

const activeusers = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.activeusersUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const inactiveusers = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.inactiveusersUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const bigsusers = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.bigsusersUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const agencyusers = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.agencyusersUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const addnotification = (notification) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.addnotificationUrl,
            headers: { 'content-type': 'application/json' },
            data: notification
        })
    )
}

const editnotification = (notification) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.editnotificationUrl,
            headers: { 'content-type': 'application/json' },
            data: notification
        })
    )
}

const deletenotification = (notify_id) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.deletenotificationUrl,
            headers: { 'content-type': 'application/json' },
            data: notify_id
        })
    )
}

const allnotifications = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.allnotificationsUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const sentnotifications = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.sentnotificationsUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const schedulednotifications = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.schedulednotificationsUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const permissions = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.permissionUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const accountsettings = (settings) =>{
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.accountsettingsUrl,
            headers: { 'content-type': 'application/json' },
            data: settings
        })
    )
}

const gallery = (user_id) =>{
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.photogalleryUrl,
            headers: { 'content-type': 'application/json' },
            data: user_id
        })
    )
}

const deletephoto = (photo_id) =>{
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.deletephotoUrl,
            headers: { 'content-type': 'application/json' },
            data: photo_id
        })
    )
}

const getresources = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.resourceslistUrl,            
            headers: { 'content-type': 'application/json' },
        })
    )
}

const addresource = (resource) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.addresourceUrl,            
            headers: { 'content-type': 'application/json' },
            data: resource
        })
    )
}

const editresource = (resource) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.editresourceUrl,            
            headers: { 'content-type': 'application/json' },
            data: resource
        })
    )
}

const deleteresource = (resource_id) => {
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.deleteresourceUrl,            
            headers: { 'content-type': 'application/json' },
            data: resource_id
        })
    )
}

const eventtypes = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.eventtypesUrl,            
            headers: { 'content-type': 'application/json' },            
        })
    )
}

const eventslist = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.eventslistUrl,            
            headers: { 'content-type': 'application/json' },            
        })
    )
}

const bigseventslist = () => {
    return(
        axios({
            method: config.apiMethods.getMethod,
            url: config.apiUrl.bigseventslistUrl,            
            headers: { 'content-type': 'application/json' },            
        })
    )
}
const allEventsList = (data) =>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.allEventsList,
            headers:{'content-type': 'application/json'},
            data: data
        })
    )
}
const addevent = (eventdata) =>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.addeventUrl,
            headers:{'content-type': 'application/json'},
            data: eventdata
        })
    )
}

const editevent = (eventdata) =>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.editeventUrl,
            headers:{'content-type': 'application/json'},
            data: eventdata
        })
    )
}

const deleteevent = (event_id) =>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.inactivateeventUrl,
            headers:{'content-type': 'application/json'},
            data: event_id
        })
    )
}

const sendmessage = (sendmessagedata) =>{
    console.log('service',sendmessagedata);
    return(
        axios({
            method: config.apiMethods.postMethod,
            url:config.apiUrl.sendmessage,
            headers:{'content-type': 'application/json'},
            data:sendmessagedata

        })
    )
}

const recievedmessages = (user_id) =>{
    return(
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.recievedmessages,
            headers: {'content-type': 'application/json'},
            data: user_id
        })
    )
}

const deletemessage=(message_id)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.deletemessage,
            headers:{'content-type':'application/json'},
            data:message_id

        })
    )

}

const trashmessages =(user_id)=>{
    return(
        axios({
                method:config.apiMethods.postMethod,
                url:config.apiUrl.trashmessages,
                headers:{'content-type':'application/json'},
                data:user_id
            })
    )
}

const sentmessages =(user_id)=>{
    return(
        axios({
                method:config.apiMethods.postMethod,
                url:config.apiUrl.sentmessages,
                headers:{'content-type':'application/json'},
                data:user_id
            })
    )
}

const draftsmessages =(user_id)=>{
    return(
        axios({
                method:config.apiMethods.postMethod,
                url:config.apiUrl.draftsmessages,
                headers:{'content-type':'application/json'},
                data:user_id
            })
    )
}

const viewmessage =(message_id,user_id)=>{
    return(
        axios({
                method:config.apiMethods.postMethod,
                url:config.apiUrl.viewmessage,
                headers:{'content-type':'application/json'},
                data:message_id,user_id
            })
    )
}
const deleteDiscountdocument=(document_id)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.deleteDiscountdocument,
            headers:{'content-type':'application/json'},
            data:document_id

        })
    )
} 

const profilepicUpload=(photodata)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.profilepicUpload,
            headers:{'content-type':'application/json'},
            data:photodata
        })
    )
} 

const Allusersphotos=(user_id)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.Allusersphotos,
            headers:{'content-type':'application/json'},
            data:user_id
        })
    )
} 

const getusertypename = (usertype_id) => {
    return (
        axios({
            method: config.apiMethods.postMethod,
            url: config.apiUrl.getusertypename,
            headers: { 'content-type': 'application/json' },
            data: usertype_id
        })
    )
}

const photoDownload = (image_name) => {
    return (
        axios({
            url: config.apiUrl.photoDownload,
            method: 'POST',
            responseType: 'blob',
            data: image_name
        }).then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', image_name.image_name);
            document.body.appendChild(link);
            link.click();
        })
    )
}
const ToListUsersSearch=(name)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.toListUsers,
            headers:{'content-type':'application/json'},
            data:name
        })
    )
} 
const caseManager=()=>{
    return(
        axios({
            method:config.apiMethods.getMethod,
            url:config.apiUrl.caseManager,
            headers:{'content-type':'application/json'},
           
        })
    )
} 
const notificationLog=(user_id)=>{
    return(
        axios({
            method:config.apiMethods.postMethod,
            url:config.apiUrl.notificationLog,
            headers:{'content-type':'application/json'},
            data:user_id
        })
    )
} 


export default {
    login,
    adduser,
    adddiscount,
    editdiscount,
    deletediscount,
    activeusers,
    inactiveusers,
    bigsusers,
    agencyusers,
    sendpasswordresetmail,
    addnotification,
    editnotification,
    deletenotification,
    allnotifications,
    sentnotifications,
    schedulednotifications,
    discountslist,
    mylittle,
    userinfo,
    userdetails,
    permissions,
    accountsettings,
    gallery,
    deletephoto,
    deleteuser,
    activateuser,
    getresources,
    addresource,
    editresource,
    deleteresource,
    eventtypes,
    eventslist,
    bigseventslist,
    addevent,
    editevent,
    deleteevent,
    sendmessage,
    recievedmessages,
    deletemessage,
    trashmessages,
    sentmessages,
    draftsmessages,
    viewmessage,
    deleteDiscountdocument,
    profilepicUpload,
    Allusersphotos,
    getusertypename,
    photoDownload,
    ToListUsersSearch,
    caseManager,
    notificationLog,
    allEventsList
}
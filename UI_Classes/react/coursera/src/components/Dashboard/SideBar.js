import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ListAltIcon from '@material-ui/icons/ListAlt';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ForumIcon from '@material-ui/icons/Forum';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HomeIcon from '@material-ui/icons/Home';
import PollIcon from '@material-ui/icons/Poll';


export default class SideBar extends Component {
    render(){
        return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" id="left-nav">
        <div className="sidebar">      
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column mainmenu" data-widget="treeview" role="menu" data-accordion="false">          
              <li className="nav-item">
                
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/home' activeStyle={{
                 background:'#3c3b54',
                 fontWeight:'500',
                 borderLeft:'5px solid #7cc9a9',
                    display: 'flex',
                  alignItems: 'center',
                
                }} >
                  <img className='homesvg'></img>
                  
                {/* <span><i className="fas fa-home nav-icon"></i></span> */}
                <span className="text-mini">Home</span></NavLink>
              </li>
              <li  className="nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}}  to='/dashboard/newdashboard' activeStyle={{
                 background:'#3c3b54',
                  fontWeight:'500',
                  borderLeft:'5px solid #7cc9a9',
                     display: 'flex',
                  alignItems: 'center',
                
                  
                }} >
                <img className='dashboard'></img>
               <span className="text-mini">Dashboard</span>  </NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{padding:'10px' , marginLeft:'-5px'}} to='/dashboard/user_management' activeStyle={{
                background:'#3c3b54',
                fontWeight:'500',
                borderLeft:'5px solid #7cc9a9',
                   display: 'flex',
                  alignItems: 'center',
                }}>
                   {/* <span><i className="far fa-user nav-icon"></i></span> */}
                <img className='usermanagement'></img>               
                <span className ="text-mini">User Management</span></NavLink>
              </li>
              <li className="nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/activities' activeStyle={{
                  background:'#3c3b54',
                  fontWeight:'500',
                  borderLeft:'5px solid #7cc9a9',
                     display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="far fa-chart-bar nav-icon"></i></span> */}
                <img className='activities'></img>
                <span className="text-mini">Activities</span>
                </NavLink>
              </li>
             
              <li className="nav-icon nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/resources' activeStyle={{
                background:'#3c3b54',
                fontWeight:'500',
                borderLeft:'5px solid #7cc9a9',
                   display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="fas fa-poll nav-icon"></i></span> */}
                <img className='resources'></img>
               <span className="text-mini">Resources</span> </NavLink>
              </li>

              <li className="nav-icon nav-item disp-block">
                <div 
                  data-toggle="collapse"
                 data-target="#submenu2sub2"
                >             
                   <a style={{padding:'10px',marginLeft:'-5px'}}>  
                   {/* <span><i className="fas fa-calendar nav-icon"></i></span>     */}
                      <img className='events'></img>
                      <span style={{ width: '100%'}} className="text-mini">Events</span>
                      <i class="fa fa-caret-down" aria-hidden="true"></i>
                    </a>
                   
                </div>
                  <div className="collapse" id="submenu2sub2" aria-expanded="false">
                      <ul className="flex-column nav pl-4">
                          <li className="nav-item">
                          <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/agencysponsored_events' activeStyle={{
                            background:'#3c3b54',
                            fontWeight:'500',
                            borderLeft:'5px solid #7cc9a9',
                            display: 'flex',
                              alignItems: 'center',
                            }}>
                            <span className="text-mini">Agency Sponsored Events </span> </NavLink>                              
                          </li>
                          <li class="nav-item">
                          <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/agencysponsored_tags' activeStyle={{
                            background:'#3c3b54',
                            fontWeight:'500',
                            borderLeft:'5px solid #7cc9a9',
                            display: 'flex',
                              alignItems: 'center',
                            }}>
                              <span className="text-mini">Agency Sponsored Events Tags </span> </NavLink>
                          </li>
                          <li class="nav-item">
                          <NavLink style={{padding:'10px 5px',marginLeft:'-5px'}} to='/dashboard/bigsconnect_community' activeStyle={{
                            background:'#3c3b54',
                            fontWeight:'500',
                            borderLeft:'5px solid #7cc9a9',
                            display: 'flex',
                              alignItems: 'center',
                            }}>
                            <span className="text-mini">BIGS Connect Community</span> </NavLink>  
                          </li>
                      </ul>
                  </div>
              </li>

              <li className="nav-icon dropdown disp-block">              
                <div 
                data-toggle="collapse"
                 data-target="#submenu1sub1">                 
              <a style={{padding:'10px',marginLeft:'-5px'}}>
               {/* <span><i className="fas fa-envelope nav-icon"></i></span> */}
               <img className='messaging'></img>
                  <span  style={{width: '100%'}} className="text-mini">
                  Messaging & Notifications</span>
                  <i style={{paddingLeft:'7px'}} class="fa fa-caret-down" aria-hidden="true"></i>
                  </a>
                  
                </div>
                  <div className="collapse" id="submenu1sub1" aria-expanded="false">
                      <ul className="flex-column nav pl-4">
                          <li className="nav-item">
                            <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/messages' 
                                data-toggle="collapse"
                                 data-target="#subMessaging" activeStyle={{
                                  background:'#3c3b54',
                                  fontWeight:'500',
                                  borderLeft:'5px solid #7cc9a9',
                                  display: 'flex',
                                  alignItems: 'center',
                                }}>
              
                              <a className="nav-link collapsed py-1" href="#subMessaging" ><span className="text-mini">Messaging</span></a>
                            </NavLink>
                          </li>
                          <li class="nav-item">
                            <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/notifications' 
                              data-toggle="collapse"
                               data-target="#subNotifications" activeStyle={{
                                background:'#3c3b54',
                                fontWeight:'500',
                                borderLeft:'5px solid #7cc9a9',
                                display: 'flex',
                                alignItems: 'center',
                              }}>
                                
                                <a className="nav-link collapsed py-1" href="#subNotifications" ><span className="text-mini">Notifications</span></a>
                              </NavLink>
                          </li>
                      </ul>
                  </div>
              </li>
         
              <li className="nav-icon nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/discount_programs' activeStyle={{
                background:'#3c3b54',
                fontWeight:'500',
                borderLeft:'5px solid #7cc9a9',
                display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="fas fa-user-tag nav-icon"></i></span> */}
                <img className='discounts'></img>
               <span className="text-mini">Discount Programs</span> 
                </NavLink>
              </li>
              
              <li className="nav-icon nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/photo_gallery' activeStyle={{
                 background:'#3c3b54',
                 fontWeight:'500',
                 borderLeft:'5px solid #7cc9a9',
                 display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="far fa-images nav-icon"></i></span> */}
                <img className='settings'></img>
                <span className="text-mini">Photo Gallery</span></NavLink>
              </li>
              <li className="nav-icon nav-item">
                
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/help_center' activeStyle={{
                  background:'#3c3b54',
                  fontWeight:'500',
                  borderLeft:'5px solid #7cc9a9',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="far fa-question-circle nav-icon"></i></span> */}
                <img className='helpcenter'></img>
                <span className="text-mini">Help Center</span></NavLink>
              </li>
              <li className="nav-icon nav-item">
                <NavLink style={{padding:'10px',marginLeft:'-5px'}} to='/dashboard/settings' activeStyle={{
                background:'#3c3b54',
                fontWeight:'500',
                borderLeft:'5px solid #7cc9a9',
                display: 'flex',
                  alignItems: 'center',
                }}>
                {/* <span><i className="fas fa-cog nav-icon"></i></span> */}
                <img className='settings'></img>
                <span className="text-mini">Settings</span></NavLink>
              </li>
            </ul>
          </nav>     
        </div>    
      </aside>
    )
    }
}

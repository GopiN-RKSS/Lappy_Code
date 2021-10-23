import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NotificationLogList } from '../../Store/notifications/notificationLogaction';
import { withRouter } from 'react-router-dom';
import ViewMessage from '../Messages/ViewMessage';
import MessagesList from '../Messages/MessagesList';
import Timeago from 'react-timeago'

class Header extends Component {
  constructor() {
    super();
    this.state = {
      displayProfile: "",
      first_name:"",
      last_name:"",
      displayEmail:"",
      notifications:[],
      activeScreen:''
    }
  }
  logout() {
    localStorage.clear();
    window.location.href = '/';
}

componentDidMount() {
  this.currentuser = JSON.parse(localStorage.getItem('userdata'));
  var user_id = this.currentuser.user_id;
  var display_name = this.currentuser.display_name;
  var email = this.currentuser.email;
  var userPic = this.currentuser.profile_pic;
  this.setState({ 
    displayProfile: userPic, displayEmail:email, displayname: display_name,
    first_name:this.currentuser.first_name,
    last_name:this.currentuser.last_name
  })
  this.props.NotificationLogList({ user_id });
}

componentWillReceiveProps(nextProps) {
  this.state.notifications = nextProps.NotificationLog.notificationLog.list
}

onViewnotification(item)
{ 
  this.props.history.push({
    pathname: '/dashboard/messages',
    state: { detail: item }
  })  
}

    render(){
      return (
      <header className="main-header">
       <a style={{backgroundColor:'#3c3b53', padding:'10px',display:'flex',justifyContent:'center'}} href="#" className="logo">
            <span className="logo-lg"><img src="/img/bigsconnect.png" /></span>
       </a>     
      <nav  style={{backgroundColor:'white',boxShadow:'1px 1px lightgray'}} className="main-header navbar navbar-expand navbar-white navbar-light">
        <div style={{position: "initial"}}>
             <a style={{color:'#3c3b53'}} href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
            <span className="sr-only">Toggle navigation</span>
            </a>
        </div>
      <ul className="navbar-nav ml-auto main-nav">     
      <div className="user-panel d-flex">
      <div style = {{color:'#bcbccb'}}>
      <li class="notification-container">    
    <div class="dropdown bellnotification">
    <i className="fa fa-bell dropdown-toggle" aria-hidden="true" data-toggle="dropdown"></i>
      <div className="dropdown-menu">
      <h4 className="p-3 mb-0" style={{color : '#4D4F5C'}}>Notifications</h4>
      {
        this.state.notifications?.length ? this.state.notifications.map(item =>
          <div className="dropdown-item">
              <div className="m-main p-3" onClick={() => this.onViewnotification(item)}>
                <img src={item.profile_pic} className="img-circle elevation-2 mr-3 " alt="User Image" />
                <div className="m-body">
                  <h4 style={{color:'#4d565c'}} className="mb-0">{item.display_name} <small style={{color:'#4d4f5c'}}>{item.message}</small></h4>
                  <small><Timeago style={{color:'#808495'}} date={item.created_at}></Timeago></small>
                </div>
              </div>          
        </div>
         ) : <h4 className="App">No New Notifications</h4>
     }
      </div>
  </div>
    <span class="notification-counter"></span>
</li>
</div>
      <div style = {{height:'30px' , width:'1px',backgroundColor:'#e2e2e2',marginLeft:"20px",marginRight:"20px"}}></div>
        <div className="dropdown">
        <a style={{color:'GrayText'}}
         className="nav-link dropdown-toggle" 
         href="#" id="dropdownMenuButton" 
         data-toggle="dropdown" 
         aria-haspopup="true" aria-expanded="true">
        {this.state.first_name} {this.state.last_name}</a>
          <div style={{textAlign:'center'}} className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <label className="dropdown-item">My Profile</label>
            <div className="dropdown-divider"></div>
            <label className="dropdown-item">Account Settings</label>
            <div className="dropdown-divider"></div>
            <label className="dropdown-item">Feedback</label>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" onClick={this.logout}>Logout</a>
          </div>
        </div>
         <div className="image">
            <img src={this.state.displayProfile} className="img-circle elevation-2" alt="User Image" />
        </div>
      </div>
      </ul>      
      </nav>
      </header>
      )
      }
}


export const mapStateToProps = (state) => {
  return {
    user: state.user,
    NotificationLog: state.NotificationLog    
  }
}
export default connect(mapStateToProps, { NotificationLogList }) (withRouter(Header))
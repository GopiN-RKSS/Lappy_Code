import React, { Component } from 'react';
import '../../Signin.css';
import SwitchComp from "../../SwitchComp";
import { connect } from 'react-redux';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';
import { getPermissions } from '../../Store/permissions/permissionsaction';
import { settingsInput, postsettingsForm, usertype } from '../../Store/accountsettings/accountsettingsaction';
import HttpService from '../../Services/HttpService'
import Switch from "react-switch";

class AccountSettings extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      input: {},
      Uid: '',
      checked: false,
      permissions: [],
      user_permissions: [],
      user_type: '',
      addto_agency: false,
      case_manager:false,
      updateResponce: '',
      userDetails: '',
      addToAgencyValue:0,
      caseManagerValue:0,
      caseMangersData:[],
      casemanagerid:0,
      selectedCaseManager:0,
     // OnAddToAgency:false,
    //  OnCaseManger:false
    };
    this.handleChange = this.handleChange.bind(this);

    this.state.user_type = this.props.userDetails.userdetails_res.user_details.usertype_id
    if (this.state.user_type == 3) {
      this.state.user_type = 2
      this.props.userDetails.userdetails_res.permissions = []
      HttpService.caseManager()
      .then(response => {
        this.setState({
          caseMangersData : response.data.case_managers
        }) 
      })
      .catch(error => {         
      })
    }
    if (this.props.userDetails.userdetails_res.user_details.usertype_id == 2) {
      this.props.userDetails.userdetails_res.permissions = []
      HttpService.caseManager()
      .then(response => {         
        this.setState({
          caseMangersData : response.data.case_managers
        })
      })
      .catch(error => {         
      })
    }
    this.state.user_permissions = this.props.userDetails.userdetails_res.permissions?.map(id => (
      id.permissionid
    ))

    if(this.state.user_type==1){
      this.state.addToAgencyValue = this.props.userDetails.userdetails_res.user_details.addto_agency
      this.state.caseManagerValue = this.props.userDetails.userdetails_res.user_details.case_manager
    }
    else{
      this.state.addToAgencyValue = 0
      this.state.caseManagerValue = 0
    }
    this.state.casemanagerid = this.props.userDetails.userdetails_res.user_details.casemanagerid
     if(this.state.addToAgencyValue==1){
        this.state.addto_agency = true
     }
    
     if(this.state.caseManagerValue==1){
        this.state.case_manager = true
     }     
  }

  componentDidMount() {
    var user_id = this.props.userId;
    this.setState({ Uid: user_id });
    if (this.state.user_type == 1) {
      this.props.getPermissions();
    }
  }
  
  componentWillReceiveProps(nextProps) {
    this.state.permissions = nextProps.permissionsList.permissions.permissions 
  }

  componentDidUpdate(prevprops) {
    // this.state.user_permissions = this.props.userDetails.userdetails_res.permissions?.map(id=>(
    //   id.permissionid
    // ))
  }
  handleChange = (e, key) => {
    const { Uid } = this.state;

    // current array of options
    const user_permissions = this.state.user_permissions;
    let settingsInput
    let index
    if (key === 'user_type') {
      // this.setState({
      //   user_type : e.currentTarget.value
      // })
      this.state.user_type = e.currentTarget.value
      // this.props.userDetails.userdetails_res.user_details.usertype_id
      if (this.state.user_type == 1) {
        this.props.getPermissions();
      }
      else {
        this.state.permissions = []
        HttpService.caseManager()
        .then(response => {
          this.setState({
            caseMangersData : response.data.case_managers
          })
        })
        .catch(error => {           
        })
      }
    }
    // check if the check box is checked or unchecked
    if (key == 'user_permissions') {
      if (e.target.checked) {
        // add the numerical value of the checkbox to options array
        user_permissions.push(+e.target.value)
      } else {
        // or remove the value from the unchecked checkbox from the array
        index = user_permissions.indexOf(-e.target.value)
        user_permissions.splice(index, 1)
      }
      this.state.user_permissions = user_permissions
      //   this.setState({ user_permissions: user_permissions })
      settingsInput = {
        key: key,
        value: this.state.user_permissions,
      }
      this.props.settingsInput(settingsInput);
    }
    if(key=="casemanager"){
     this.state.casemanagerid = e.currentTarget.value
    }
    if (key == 'addto_agency') {
        if(this.state.addto_agency==true){
          this.state.addto_agency=false
          this.state.addToAgencyValue = 0
        }
        else{
          this.state.OnAddToAgency=true
          this.state.addToAgencyValue = 1
        }
      }
      
      if(key==='case_manager'){
        if(this.state.case_manager==true){
          this.state.case_manager=false
          this.state.caseManagerValue = 0
        }
        else{
          this.state.case_manager=true
          this.state.caseManagerValue = 1
        }       
    }
    else {
      settingsInput = {
        key: key,
        value: e.target.value,
      }
      this.props.settingsInput(settingsInput);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      this.validator.hideMessages();
      const { accountSettings } = this.props
      const { Uid } = this.state
      const { UP } = this.state
      if (this.state.user_type == 2) {
        //this.props.userDetails.userdetails_res.permissions=[]
        this.state.user_permissions = []
        this.props.userDetails.userdetails_res.user_details.usertype_id = 2
      }
      else {
        this.props.userDetails.userdetails_res.user_details.usertype_id = 1
      }
      var data = {
        user_type: this.state.user_type,
        user_permissions: this.state.user_permissions,
      //  addto_agency: UP,
        user_id: this.props.userId,
        casemanagerid:this.state.casemanagerid,
        case_manager:this.state.caseManagerValue,
        addto_agency: this.state.addToAgencyValue,

      };
      //this.props.postsettingsForm(data);

      HttpService.accountsettings(data)
      .then(response => {
          if(response.data.status==200){
               swal({
                 title:response.data.message,
                 icon: "success"
               })
          }
          else{
            swal({
              title:response.data.message,              
            })
          }
      })
      .catch(error => {
        swal({
          text:error,
          icon: "error"
        })
      })
      this.props.usertype(this.state.user_type);
      this.props.accountSettings.settingsin = {};  
    }
    else {
      this.validator.showMessages();
    }
  };
  handleSwitchChange(checked) {
    this.setState({ checked })
  }
  //   componentWillReceiveProps(nextProps){
  //     const { history } = this.props;
  //     if (nextProps.accountSettings.settings_res.status === 200){
  //         alert('Settings Updated Successfully');
  //     }
  //     else if (nextProps.accountSettings.settings_res.status === 222){
  //       alert('Fill the required fields');
  //     }
  // }

  render() {

    return (
      <div>
        <form ref={form => { this.form = form }} onSubmit={this.handleSubmit} >
          <div className="p-5">
            {/* <h4 className="pagename">Account Settings</h4> */}
            <div style={{ marginTop: '-40px' }} className="accountsettings-box">
              <div className="mb-3">
                <div style={{ marginBottom: '-5px' }} name="User type">
                  <label className="lehead">User Type *</label>
                </div>
                <div style={{ marginLeft: '-15px' }} className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="radio" id="agency_user" name="user_type" value="1" checked={this.state.user_type == '1'}

                    onChange={(e) => this.handleChange(e, 'user_type')} />
                  <label className="custom-control-label" htmlFor="agency_user"> Agency User</label>
                </div>

                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="radio" id="big_user" name="user_type" value="2" checked={this.state.user_type == '2'}
                    onChange={(e) => this.handleChange(e, 'user_type')} />
                  <label className="custom-control-label" htmlFor="big_user">Bigs User</label>
                </div>
                <span className="text-danger">{this.validator.message("user_type", this.state.user_type, "required")} </span>
              </div>
              {this.state.user_type == '1' ? <div className="mb-3">
                <label style={{ marginTop: '20px' }} className="lehead">User Permissions*</label>
                <div className="row">
                  {this.state.permissions?.map((x, i) => {
                    return (
                      <div className="usermgmt-checkbox accountsettings-checkbox pr-0 pl-1">
                        <label key={i} className="checkbox-container">
                          <input
                            type="checkbox"
                            className='checkbox'
                            name="user_permissions[]"
                            value={x.permission_id}

                            checked={this.state.user_permissions?.map(id => (
                              id
                            )).includes(x.permission_id)}
                            onChange={(e) => this.handleChange(e, 'user_permissions')}
                          />{" "}
                          <span class="checkmark"></span>
                          {x.permission_name}
                        </label>
                      </div>
                    );
                  })}
                  <span className="text-danger">{this.validator.message("user_permissions", this.state.user_permissions, "required")} </span>
                </div>
                <div className="row my-3">
                <div style={{ marginTop: '20px' }} className="col-md-6 addadency-sec">
                  {/* <label className="lehead">Add to AgencyContacts: <i  title="Enabling this setting will display this agency user in the mobile app contacts list for BIGS to contact!" style={{ color: "#cecfd0", margin: "10px" }} class="fa fa-info-circle" aria-hidden="true"></i></label> */}
                  <label style={{width:'60%'}} data-tooltip="Enabling this setting will display this   agency user in the mobile app contacts list for BIGS to contact!"
                            data-tooltip-location="right" className="lehead">Add to AgencyContacts: <i  style={{ color: "#cecfd0", marginLeft: "10px" }} class="fa fa-info-circle" aria-hidden="true"></i></label>
                 
                  <div>
                    <label>
                      <span>No</span>
                      <label class="switch">
                        <input type="checkbox"
                         defaultChecked={ this.state.addto_agency} 
                         onChange={(e)=>this.handleChange(e,'addto_agency')}
                         />
                        <span class="slider round"></span>
                      </label>
                      <span>Yes</span>
                    </label>
                  </div>
                  {/* <SwitchComp name="addto_agency" value="yes" onChange={(e) => this.handleChange(e, 'addto_agency')} /> */}
                </div>
              </div>
              <div className="row my-3">
                <div style={{ marginTop: '20px' }} className="col-md-6 addadency-sec">
                  <label className="lehead">Case Manager: </label>
                  <div>
                    <label>
                      <span>No</span>
                      <label class="switch">
                        <input type="checkbox" 
                        onChange={(e)=> this.handleChange(e,'case_manager')}
                        defaultChecked={this.state.case_manager} />
                        <span class="slider round"></span>
                      </label>
                      <span>Yes</span>
                    </label>
                  </div>
                </div>
              </div>
              </div>  : <div className="row my-3">
              <div style={{ marginTop: '20px' }} className="col-md-6 addadency-sec">
                <label className="lehead">Case Manager: </label>
                <div>
                  <select  value={this.state.casemanagerid} onChange={(e)=>this.handleChange(e,'casemanager')}style={{ width: '200px', height: '40px',marginTop:'-5px',padding:'5px' }} >
                  <option  value="">Select Case Manager</option>
                    {this.state.caseMangersData.map(e => (                     
                     <option  value={e.user_id}>{e.display_name}</option>           
                    ))}
                  </select>
                </div>
              </div>
            </div>}              
            </div>
            <div className="form-group mt-4">
              <input
                type="button"
                className="btn btn-info btn-success mt-1"
                value="Update"
                onClick={this.handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  permissionsList: state.permissionsList,
  accountSettings: state.accountSettings,
  userDetails: state.userDetails,
  permissions: state.permissions
});

export default connect(mapStateToProps, { getPermissions, settingsInput, postsettingsForm, usertype })(AccountSettings)
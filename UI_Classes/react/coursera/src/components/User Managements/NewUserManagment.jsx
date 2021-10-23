import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';
import { withRouter } from 'react-router-dom';
import { userManagementFetchInput, getPermissions, addUserForm, getCasemanagers } from '../../Store/UserManagement/newUserManagementAction';

var FormData = require('form-data');

class NewUserManagement extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      permissions: [],
      user_permissions: [],
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      user_type: '',
      casemanagerid:'',
      profile_pic: '',
      image: null,
      hidePermissions: false,
      AllPermissions: [],
      addPermissions: [],
      dividepermisions: [],
      caseMangagers:[],
      user_case_manager: [],
      caseManagerCheckBox:'',
      OnAddToAgency:'on',
      addtoAgencyValue:'0',
      caseManagerValue:'0',
      OnCaseManger:'on',
      previewUploadImage:'',
      file_name:''
    }
    this.onChange = this.onChange.bind(this);
  }
  handleUserInput(e, key) {
    let userInput;
    const user_permissions = this.state.user_permissions;
    const selected_case_manager = this.state.user_case_manager;
    let index
    if (key == 'user_type') {
      if (e.currentTarget.value == "1") {
        this.props.getPermissions()
        this.state.hidePermissions = true
        //this.setState({ hidePermissions: true })
      }
      else {
        // this.setState({ hidePermissions: false })
        this.state.permissions = true
        this.validator.message("permissions", this.state.user_permissions, "notrequired")
        this.state.hidePermissions = false
        this.props.newUserManagementDetails.permissions = []
        this.props.getCasemanagers()
      }
      this.setState({
        user_type: e.currentTarget.value
      })
      userInput = {
        key: key,
        value: e.currentTarget.value
      }
      if (key === 'first_name') {
        this.setState({
          first_name: e.currentTarget.value
        })
      }
      if (key === 'last_name') {
        this.setState({
          last_name: e.currentTarget.value
        })
      }
      if (key === 'email') {
        this.setState({
          email: e.currentTarget.value
        })
      }
      if (key === 'phone_number') {
        this.setState({
          phone_number: e.currentTarget.value
        })
      }
      this.props.userManagementFetchInput(userInput)
    }
    else if (key == 'permissions') {
      if (e.target.checked) {
        // add the numerical value of the checkbox to options array
        user_permissions.push(+e.target.value)
      } else {
        // or remove the value from the unchecked checkbox from the array
        index = user_permissions.indexOf(+e.target.value)
        user_permissions.splice(index, 1)
      }
      this.setState({ user_permissions: user_permissions })
      this.state.user_permissions = user_permissions
      userInput = {
        key: key,
        value: this.state.permissions
      }
      if (key === 'first_name') {
        this.setState({
          first_name: e.currentTarget.value
        })
      }
      if (key === 'last_name') {
        this.setState({
          last_name: e.currentTarget.value
        })
      }
      if (key === 'email') {
        this.setState({
          email: e.currentTarget.value
        })
      }
      if (key === 'phone_number') {
        this.setState({
          phone_number: e.currentTarget.value
        })
      }
      this.props.userManagementFetchInput(userInput)
    }
    
    else {

      userInput = {
        key: key,
        value: e.currentTarget.value
      }
      if (key === 'first_name') {
        this.setState({
          first_name: e.currentTarget.value
        })
      }
      if (key === 'last_name') {
        this.setState({
          last_name: e.currentTarget.value
        })
      }
      if (key === 'email') {
        this.setState({
          email: e.currentTarget.value
        })
      }
      if (key === 'phone_number') {
        this.setState({
          phone_number: e.currentTarget.value
        })
      }
      if(key==="casemanager"){
        this.setState({
          casemanagerid :e.currentTarget.value
        })
      }
      if(key==='addToAgencyContacts'){
        if(this.state.OnAddToAgency=='on'){
          this.state.OnAddToAgency='off'
          this.state.addtoAgencyValue = 1
        }
        else{
          this.state.OnAddToAgency='on'
          this.state.addtoAgencyValue = 0
        }
       
      }
      if(key==='caseManagerCheckBox'){
        if(this.state.OnCaseManger=='on'){
          this.state.OnCaseManger='off'
          this.state.caseManagerValue = 1
        }
        else{
          this.state.OnCaseManger='on'
          this.state.caseManagerValue = 0
        }
      }
      
      this.props.userManagementFetchInput(userInput)
    }
  }
  onChange(e) {
    this.setState({
      profile_pic: e.target.files[0],
      previewUploadImage:URL.createObjectURL(e.target.files[0]),
      file_name:e.target.files[0].name
    })
    
  }
  onCancel() {
    // this.userform.reset();
    this.props.history.push('/dashboard/user_management');
  }

  onUserManagement()
  {
    this.props.history.push('/dashboard/user_management');
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validator.allValid()) {
      var data = new FormData();
      data.append('first_name', this.props.newUserManagementDetails.formDetails.first_name);
      data.append('last_name', this.props.newUserManagementDetails.formDetails.last_name);
      data.append('phone_number', this.props.newUserManagementDetails.formDetails.phone_number);
      data.append('profile_pic', this.state.profile_pic);
      data.append('user_type', this.props.newUserManagementDetails.formDetails.user_type);
      data.append('email', this.props.newUserManagementDetails.formDetails.email);
      data.append('casemanagerid', this.state.casemanagerid);
      data.append('addto_agency', this.state.addtoAgencyValue);
      data.append('case_manager', this.state.caseManagerValue);
      for (var i = 0; i < this.state.user_permissions.length; i++) {
        this.state.addPermissions = 'user_permissions' + '[' + [i] + ']'
        this.state.dividepermisions = this.state.user_permissions[i]
        data.append(this.state.addPermissions, this.state.dividepermisions);
      }
      
      for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }
      this.props.addUserForm(data);

      swal({
        text: "User Added Successfully",
        icon: "success",
        closeOnEsc: false,
        dangerMode: true,
        closeOnClickOutside: false
      })
        .then((willDelete) => {
          if (willDelete) {
            this.props.history.push({
              pathname: '/dashboard/user_management'
            })
          }
        });
      
      this.setState({
        permissions: [],
        caseMangagers:[],
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        user_type: '',
        profile_pic: '',
        image: null,
      })
      this.userform.reset();
      this.validator.hideMessages();
    }
    else {
      this.validator.showMessages();
    }
  }
  componentDidMount() {
    this.props.getPermissions();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ permissions: nextProps.newUserManagementDetails.permissions ,caseMangagers: nextProps?.newUserManagementDetails.caseManager.data?.case_managers});
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-3 mb-4">
          <div className="col-md-6">
            <div className="horizontal-container">
              <label className="label-discount" onClick={() =>this.onUserManagement()}>User Management</label>
              <i style={{ color: "#43425d", margin: "10px" }} class="fa fa-chevron-right" aria-hidden="true"></i>
              <label className="label-discount">New User</label>
            </div>           
          </div>
        </div>
        <section className="newuser-sec">
          <form className="form" ref={form => this.userform = form}>
            <div className="mb-3">
              
              <div>
                <label className="lehead">User Type<span>*</span></label>
              </div>
              <div style={{ marginLeft: '-15px' }} className="d-flex">
                <div className="custom-control custom-radio mr-3">
                  <input type="radio" className="radio" id="agencyUser" name='user_type' value='1'
                    onChange={(e) => { this.handleUserInput(e, 'user_type') }} />
                  <label className="custom-control-label" htmlFor="agencyUser">Agency User</label>
                </div>
                <div className="custom-control custom-radio">
                  <input type="radio" className="radio" id="bigsUser" name="user_type" value='2'
                    onChange={(e) => { this.handleUserInput(e, 'user_type') }} />
                  <label className="custom-control-label" htmlFor="bigsUser">Bigs User</label>
                </div>
              </div>
              <span className="text-danger">{this.validator.message("user_type", this.state.user_type, "required")}</span>
            </div>
            <div style={{ marginTop: '25px' }} className="row">
              <div className="col-md-3">
                <div className="form-group">
                  <label className="lehead">First Name<span>*</span></label>
                  <input type="text" className="form-control" name="First Name" onChange={(e) => { this.handleUserInput(e, 'first_name') }} />
                  <span className="text-danger">{this.validator.message("first_name", this.state.first_name, "required|alpha")}</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="lehead">Last Name<span>*</span></label>
                  <input type="text" className="form-control" name="Last Name" onChange={(e) => { this.handleUserInput(e, 'last_name') }} />
                  <span className="text-danger">{this.validator.message("last_name", this.state.last_name, "required|alpha")}</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="lehead">Email Address<span>*</span></label>
                  <input type="text" className="form-control" name="Email" onChange={(e) => { this.handleUserInput(e, 'email') }} />
                  <span className="text-danger">{this.validator.message("email", this.state.email, "required|email")}</span>
                </div>
              </div>
              <div className="col-md-3">
                <div className="form-group">
                  <label className="lehead">Phone Number<span>*</span></label>
                  <input type="number" maxLength={12} className="form-control" name="Phone Number" onChange={(e) => { this.handleUserInput(e, 'phone_number') }} />
                  <span className="text-danger">{this.validator.message("phone_number", this.state.phone_number, "required|min:10|max:12|numeric")}</span>
                </div>
              </div>
            </div>
            {this.state.user_type == 1 ? <div className="mb-3">
              <label className="lehead">User Permissions*</label>
              <div style={{ background: '', width: '70%', marginBottom: '20px' }} className="row">
                {this.state.permissions?.map((item, index) =>
                  <div className="col-md-3">
                    <div className="form-check form-check-inline usermgmt-checkbox">

                      <label style={{ marginLeft: '0px', fontSize: '15px', width: '50px' }} className="checkbox-container">{item.permission_name}
                        <input type="checkbox" className='checkbox' id="inlineCheckbox1" name="groupPermissions[]"
                          checked={this.state.user_permissions.includes(item.permission_id)}
                          onChange={(e) => { this.handleUserInput(e, 'permissions') }} value={item.permission_id} />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                )}
              </div>
              <span className="text-danger">{this.validator.message("permissions", this.state.user_permissions, "required")}</span>
              <div className="row my-3">
                <div className="col-md-6 addadency-sec">
                  <label style={{width:'40%'}} data-tooltip="Enabling this setting will display this   agency user in the mobile app contacts list for BIGS to contact!"
                            data-tooltip-location="right" className="lehead">Add to AgencyContacts: <i  style={{ color: "#cecfd0", marginLeft: "10px" }} class="fa fa-info-circle" aria-hidden="true"></i></label>
                  <div>
                    <label>
                      <span>No</span>
                      <label class="switch">
                        <input type="checkbox" value={this.state.OnAddToAgency} onChange={(e)=>this.handleUserInput(e,'addToAgencyContacts')} />
                        <span class="slider round"></span>
                      </label>

                      <span>Yes</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-md-6 addadency-sec">
                  <label className="lehead">Case Manager: </label>
                  <div>
                    <label>
                      <span>No</span>
                      <label class="switch">
                        <input type="checkbox" value={!this.state.OnCaseManger} onChange={(e)=>this.handleUserInput(e,'caseManagerCheckBox')}/>
                        <span class="slider round"></span>
                      </label>
                      <span>Yes</span>
                    </label>
                  </div>
                </div>
              </div>
            </div> : <div className="row my-3">
              <div className="col-md-6 addadency-sec">
                <label className="lehead">Case Manager: </label>
                <div>
                  <select  onChange={(e)=>this.handleUserInput(e,'casemanager')}style={{ width: '200px', height: '40px' ,padding:'5px'}} >
                  <option  value="">Select Case Manager</option>
                    {this.state.caseMangagers?.map((e) => {
                      return <option  value={e.user_id}>{e.display_name}</option>;           
                    })}
                  </select>
                </div>
              </div>
            </div>}
            <div className="my-5">
              <label className="lehead">Profile Image</label>
              <div id="wrapper">              
                <div id="upload-right">
                  <div className="profile-upload circle">
                    <label className="custom-file-upload circle">
                      <input type="file" name="myImage" href="{this.fileInput}" className="form-control" onChange={(e) => { this.onChange(e) }} />                      
                        {
                          this.state.previewUploadImage ? 
                          <div className="profile-upload circle">
                            <img className="img-circle elevation-2" 
                            style={{ width: '80px', height: '80px' }} 
                            src={this.state.previewUploadImage}
                            />
                          </div> : <i className="fas fa-plus"></i>                            
                          }
                    </label>
                   {this.state.previewUploadImage ? null:
                    <div> <label className="up-lbl">Upload an image</label><br />
                   <h8 style={{color:'#4d4f5c',fontSize:'11px'}} className="up-lbl">(2MB Limit)</h8>
                   </div>}
                    <span className="up-span">{this.state.file_name}</span>
                  </div>
                </div>
              </div>              
            </div>
            <div className='row'>
              <div className="col-md-6 my-4">
                <button type="submit" className="btn btn-info btn-success mt-1" onClick={(e) => { this.handleSubmit(e) }}>Save</button>
              </div>
              <div className="col-md-6  my-4">
                <div className="float-right cancel-sec">
                  <button type="cancel" className="cancelbtnnew" onClick={() => this.onCancel()}>Cancel</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    newUserManagementDetails: state.newUserManagementDetails
  }
}
export default connect(mapStateToProps, {userManagementFetchInput,getPermissions,addUserForm,getCasemanagers })(withRouter(NewUserManagement))
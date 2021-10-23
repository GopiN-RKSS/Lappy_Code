import React, { Component } from 'react';
import { userInfoInput, userInformationForm } from '../../Store/userprofile/userInformationaction';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';

class UserInformation extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
        this.state = {
          input: {},
          Uid:'',
          first_name:'',
          last_name:'',
          email:'',
          city:'',
          state:'',
          post_code:'',
          dateof_birth:'',
          phone_number:'',
          updateResponce: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }      
      componentDidMount() {
        console.log('data',this.props.userdata.city);
        var user_id = this.props.userdata.user_id;
        this.setState({Uid : user_id});
        this.state.first_name = this.props.userdata.first_name
        this.state.last_name = this.props.userdata.last_name
        this.state.email = this.props.userdata.email
        this.state.phone_number = this.props.userdata.phone_number
        this.state.city = this.props.userdata.city
        this.state.state = this.props.userdata.state
        this.state.post_code = this.props.userdata.post_code
        this.state.dateof_birth = this.props.userdata.dateof_birth
       }   

       handleChange = (e,key) => {
        const{ Uid } = this.state
        let infoInput = {
          key: key,
          value: e.currentTarget.value
        }        

        if (key==='first_name') {
          this.setState({
            first_name : e.currentTarget.value
          })
        }
        if (key==='last_name') {
          this.setState({
            last_name : e.currentTarget.value
          })
        }
         if (key==='email') {
          this.setState({
            email : e.currentTarget.value
          })
        }   
        if (key==='phone_number') {
          // const re = /^[0-9\b]+$/;
          // if (e.currentTarget.value === '' || re.test(e.currentTarget.value)) {
            this.setState({phone_number: e.currentTarget.value})
         // }           
      }
      if (key==='city') {
        this.setState({
          city : e.currentTarget.value
        })
      }   
      if (key==='state') {
        this.setState({
          state : e.currentTarget.value
        })
      }   
      if (key==='post_code') {
        this.setState({
          post_code : e.currentTarget.value
        })
      } 
      if (key==='dateof_birth') {
        this.setState({
          dateof_birth : e.currentTarget.value
        })
      }   
        this.props.userInfoInput(infoInput);    
      }   
      
      handleSubmit = (e) => {
        console.log('this.handleSubmit')
        e.preventDefault();
        if( this.validator.allValid())
        {
          this.validator.hideMessages();
          const { userInfo } = this.props
          const { Uid } = this.state
          var data ={
            first_name: this.state.first_name,
            last_name: this.state.last_name,          
            email: this.state.email,
            phone_number: this.state.phone_number,
            city: this.state.city,
            state: this.state.state,
            post_code: this.state.post_code,
            dateof_birth: this.state.dateof_birth,           
            user_id:Uid           
          };        
          this.props.userInformationForm(data);
          //this.form.reset();
        }
        else {
          this.validator.showMessages();          
        }
      };     
      
      componentWillReceiveProps(nextProps){
        const { history } = this.props;
        if (nextProps.userInfo.userInfo_res.status) {
          swal({
            title: nextProps.userInfo.userInfo_res.message,
            icon: "success"               
          })
          nextProps.userInfo.userInfo_res.status = ''
        }
        //if (nextProps.userInfo.userInfo_res.status === 200){
            //console.log('props',nextProps.userInfo.userInfo_res);
            //alert('User Information Updated Successfully');            
        // }
        // else if (nextProps.userInfo.userInfo_res.status === 222){
        //     //toast.error('Invalid Credentials');
        //     //alert('Please fill the required fields');
        // }
    }

    render() {
        return <form ref={c => { this.form = c }}>
          
          <div style={{marginTop:'-40px'}} className="userinfo-box p-5">            
            <div className="container-fluid">           
              {/* <h4 className="pagename">User Information</h4> */}
             <div className="row">
                <div className="col-sm-6">
                    <label className = "lehead">First Name <span>*</span></label>
                        <input 
                          type="text"
                          name="firstname"
                          className="form-control"
                          defaultValue={this.state.first_name}
                          onChange={(e) => this.handleChange(e, 'first_name')}/>     
                        <span className="text-danger">{this.validator.message("first_name", this.state.first_name, "required|alpha")} </span>                       
                </div>

                <div className="col-sm-6">
                    <label className = "lehead">Last Name <span>*</span></label>
                        <input
                          type="text"
                          name="lastname"
                          className="form-control"
                          defaultValue={this.state.last_name}
                          onChange={(e) => this.handleChange(e, 'last_name')}/>  
                        <span className="text-danger">{this.validator.message("last_name", this.state.last_name, "required|alpha")} </span>                  
                </div>

                  <div className="col-sm-6">
                    <label className = "lehead">Email Address <span>*</span></label>
                        <input
                          type="text"
                          name="email"                         
                          className="form-control"
                          defaultValue={this.state.email}
                          onChange={(e) => this.handleChange(e, 'email')}/>
                        <span className="text-danger">{this.validator.message("email", this.state.email, "required|email")} </span>                    
                  </div>

                <div className="col-sm-6">
                    <label className = "lehead">Phone Number <span>*</span></label>
                        <input
                          type="number"
                          name="phone no"
                          className="form-control" 
                          defaultValue={this.state.phone_number}                         
                          maxLength="12"
                          onChange={(e) => this.handleChange(e, 'phone_number')}/>
                        <span className="text-danger">{this.validator.message("phone_number", this.state.phone_number, "required|min:10|max:12|numeric")} </span>               
                </div>

                <div className="col-sm-6">
                    <label className = "lehead">City</label>
                        <input                          
                          type="text"
                          name="city"
                          className="form-control"
                          defaultValue={this.state.city}
                          onChange={(e) => this.handleChange(e, 'city')}/>                    
                </div>

                <div className="col-sm-6">
                    <label className = "lehead">State</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          defaultValue={this.state.state}
                          onChange={(e) => this.handleChange(e, 'state')}/>                    
                </div>               
                
                <div className="col-sm-6">
                    <label className = "lehead">Postcode</label>
                        <input
                          type="number"
                          name="Postcode No"
                          className="form-control"
                          defaultValue={this.state.post_code}
                          onChange={(e) => this.handleChange(e, 'post_code')}/>                   
                </div>  
                <div className="col-sm-6">
                    <label className = "lehead">Birthday</label>
                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          defaultValue={this.state.dateof_birth}
                          onChange={(e) => this.handleChange(e, 'dateof_birth')}/>                    
                </div>                                     
            </div>
              <button className="btn btn-info btn-success mt-1" onClick={(e)=>this.handleSubmit(e)}>Update</button>
            </div>
                </div>                    
        </form>
    }
}

export const mapStateToProps = (state) =>{
  return{
    userInfo: state.userInfo
  }
}

export default connect(mapStateToProps, { userInfoInput, userInformationForm }) (UserInformation);










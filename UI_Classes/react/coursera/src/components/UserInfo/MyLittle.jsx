import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import SimpleReactValidator from 'simple-react-validator';
import { littleFetchInput, addLittleForm } from '../../Store/mylittle/myLittleaction';

  class MyLittle extends Component {
    constructor(props) {
        super(props);
        this.validator = new SimpleReactValidator({autoForceUpdate: this});
        this.state = {
          input: {},
          Uid: '',
          littleId:'',
          first_name:'',
          last_name:'',
          match_start:'',          
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      componentDidMount() {
        var user_id = this.props.userId;
        var little_id = this.props.littleId;
        this.setState({Uid : user_id,
                      littleId: little_id});
       }

       handleChange = (e,key) => {
        const{ Uid } = this.state
        
        let littleInput = {
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
         if (key==='match_start') {
          this.setState({
            match_start : e.currentTarget.value
          })
        }        
        this.props.littleFetchInput(littleInput);    
      } 
      
      handleSubmit = (e) => {
        e.preventDefault();

        if( this.validator.allValid()){
          this.validator.hideMessages();

        const { Uid } = this.state
        var data ={
          first_name: this.props.myLittle.littleDetails.first_name,
          last_name: this.props.myLittle.littleDetails.last_name,
          phone_number: this.props.myLittle.littleDetails.phone_number,
          phone_type: this.props.myLittle.littleDetails.phone_type,
          match_start: this.props.myLittle.littleDetails.match_start,
          dateof_birth: this.props.myLittle.littleDetails.dateof_birth,
          guardian_name: this.props.myLittle.littleDetails.guardian_name,
          guardian_number: this.props.myLittle.littleDetails.guardian_number,
          emergency_name: this.props.myLittle.littleDetails.emergency_name,
          emergency_number: this.props.myLittle.littleDetails.emergency_number,           
          user_id:Uid           
        };                  
            this.props.addLittleForm(data);
            swal({
              title: "Little added Successfully",
              icon: "success"               
            })
            this.littleform.reset();
            this.setState({
              first_name:'',
              last_name:'',
              match_start:'', 
              phone_number:'',
              phone_type:'',
              dateof_birth:'',
              guardian_name:'',
              guardian_number:'',
              emergency_name:'',
              emergency_number:''
            })
          } else {
            this.validator.showMessages();
          }
      };

      componentWillReceiveProps(nextProps){
        const { history } = this.props;
        if (nextProps.myLittle.addlittle_res.status === 200){
            // //alert('MyLittle Added Successfully');
            // this.littleform.reset();
            //this.props.myLittle.littleDetails = {};
        }
        else if (nextProps.myLittle.addlittle_res.status === 222){
          //alert('please fill the required fields');
        }
    }
 
    render() {
      const { errors } = this.state;
      if (this.state.littleId != null) {       
        return (
          <div style={{marginTop:'-40px'}} className="tabs-photgallery-sec">
            <div className="App">
              <h1>User Already have Little!!</h1>
            </div>
          </div>
        )
      }
      else{
        return (
        <form ref={form => this.littleform = form} onSubmit={this.handleSubmit}>         
          <div style={{marginTop:'-40px'}} className="mylittle-box p-5">            
            <div className="container-fluid">
             <div className="row">
                <div className="col-sm-6">
                    <label className = "lehead">First Name<span>*</span></label>
                        <input                      
                          type="text"
                          name="First name"
                          className="form-control"
                          defaultValue= {this.state.first_name}
                          onChange={(e) => this.handleChange(e, 'first_name')} />
                          <span className="text-danger">{this.validator.message("first_name", this.state.first_name, "required|alpha")} </span>                         
                </div>

                <div className="col-sm-6">
                    <label  className = "lehead">Last Name<span>*</span></label>
                        <input
                          type="text"
                          name="Last Name"
                          className="form-control"
                          defaultValue= {this.state.last_name}
                          onChange={(e) => this.handleChange(e, 'last_name')}/> 
                          <span className="text-danger">{this.validator.message("last_name", this.state.last_name, "required|alpha")}</span>
                </div>
                <div className="col-sm-6">
                    <label className = "lehead">Primary Phone Number</label>
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'phone_number')}/>                    
                </div>
                <div className="col-sm-6">
                    <label className = "lehead">Primary Phone Type</label>  
                    <select ref={c => { this.userInput = c }}
                           name="phonetype"
                           className="form-control"
                          onChange={(e) => this.handleChange(e, 'phone_type')}>
                    <option value='cell'>Cell</option>
                    <option value='land'>Land</option>
                    </select>                 
                </div>                
                <div className="col-sm-6">
                    <label className = "lehead">Match Start Date<span>*</span></label>
                        <input
                          type="date"
                          name="Match Start Date"
                          className="form-control"
                          defaultValue= {this.state.match_start}
                          onChange={(e) => this.handleChange(e, 'match_start')}/>  
                          <span className="text-danger">{this.validator.message("match_start", this.state.match_start, "required")} </span>                  
                </div>
                <div className="col-sm-6">
                    <label className = "lehead">Birthday</label>
                        <input                  
                          type="date"
                          name="birthday"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'dateof_birth')}/>                    
                </div>                
                 <div className="col-sm-6">
                    <label className = "lehead">Parent/Guardian Name</label>
                        <input
                          type="text"
                          name="parentname"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'guardian_name')} />                    
                </div>
                <div className="col-sm-6">
                    <label className = "lehead">Parent/Guardian Phone Number</label>
                        <input
                          type="number"
                          name="parent phone no"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'guardian_number')} />                    
                </div>

                <div className="col-sm-6">
                    <label className = "lehead">Emergency Contact Name</label>
                        <input
                          type="text"
                          name="parentname"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'emergency_name')}/>                    
                </div>
                <div className="col-sm-6">
                    <label className = "lehead">Emergency Contact Phone Number</label>
                        <input
                          type="number"
                          name="parent phone no"
                          className="form-control"
                          onChange={(e) => this.handleChange(e, 'emergency_number')}/>                    
                </div>        
            </div>
            <button className="btn btn-info btn-success mt-1">Update</button>
            </div>   
            </div>
        </form>
        );
      }
    }
}

export const mapStateToProps = (state) =>{
  return{
    myLittle: state.myLittle
  }
}

export default connect(mapStateToProps, { littleFetchInput, addLittleForm }) (MyLittle);
 






import React, { Component } from "react";
import './Newdiscount.css';
import { connect } from 'react-redux';
import SimpleReactValidator from 'simple-react-validator';
import { addDiscountForm, discountFetchInput, editDiscountForm } from '../../Store/discounts/addDiscountaction';
import Icon from "react-crud-icons";
import swal from 'sweetalert';
import HttpService from '../../Services/HttpService';
import { Spinner } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

var FormData = require('form-data');

class Newdiscount extends Component {
  constructor() {
    super();
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });
    this.state = {
      input: {},
      Uid: '',
      pictures: [],
      images: [],
      image: [],
      active_status: '',
      program_name: '',
      partner_name: '',
      description: '',
      documents: [],
      start_date: '',
      end_date: '',
      documentsFromEdit: [],
      deleteResponce: {},
      discount_id: '',
      spinner: false,
      deleteImageId: [],
      previewImage:''
    };
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.currentuser = JSON.parse(localStorage.getItem('userdata'));
    var user_id = this.currentuser.user_id;
    this.setState({ Uid: user_id });
    if (this.props.location.state != null) {
      this.state.spinner = false
      this.state.documentsFromEdit = this.props.location.state.detail.documents
      this.state.discount_id = this.props.location.state.detail.discount_id
      this.state.program_name = this.props.location.state.detail.program_name
      this.state.partner_name = this.props.location.state.detail.partner_name
      this.state.description = this.props.location.state.detail.description
      this.state.start_date = this.props.location.state.detail.start_date
      this.state.end_date = this.props.location.state.detail.end_date
      this.state.active_status = this.props.location.state.detail.active_status
      this.state.documents = this.props.location.state.detail.documents                    
    }
  }
  componentWillReceiveProps(nextProps) {
    this.state.spinner = false
  }
  handleChange = (e, key) => {
    let discountInput
    if (key == 'documents') {
      this.setState({
        image: e.target.files,
        previewImage:URL.createObjectURL(e.target.files[0])
      })
      this.state.images.push(this.state.image);
    } else {
      discountInput = {
        key: key,
        value: e.currentTarget.value
      }
      if (key === 'active_status') {
        this.setState({
          active_status: e.currentTarget.value
        })
      }
      if (key === 'program_name') {
        this.setState({
          program_name: e.currentTarget.value
        })
      }
      if (key === 'description') {
        this.setState({
          description: e.currentTarget.value
        })
      }
      if (key === 'partner_name') {
        this.setState({
          partner_name: e.currentTarget.value
        })
      }
      if (key === 'start_date') {
        this.setState({
          start_date: e.currentTarget.value
        })
      }
      if (key === 'end_date') {
        this.setState({
          end_date: e.currentTarget.value
        })
      }
      this.props.discountFetchInput(discountInput);
    }
  }


  handleSubmit = (e) => {
    e.preventDefault();
    this.state.spinner = true
    const { adddiscount } = this.props

    const { Uid } = this.state

    if (this.props.location.state != null) {
      if (this.validator.allValid()) {
        var data = new FormData();
        data.append('discount_id', this.state.discount_id);
        data.append('program_name', this.state.program_name);
        data.append('partner_name', this.state.partner_name);
        data.append('description', this.state.description);
        data.append('start_date', this.state.start_date);
        data.append('end_date', this.state.end_date);
        data.append('active_status', this.state.active_status);

        for (var i = 0; i < this.state.deleteImageId.length; i++) {
          data.append('deletedocumentids[]', this.state.deleteImageId[i]);
        }

        for (var i = 0; i < this.state.image.length; i++) {
          console.log()
          data.append('documents[]', this.state.image[i]);
        }
        data.append('user_id', Uid);
        this.props.editDiscountForm(data);

        swal({
          text: "Discount Updated Successfully",
          icon: "success",
          closeOnEsc: false,
          dangerMode: true,

          closeOnClickOutside: false
        })
          .then((willDelete) => {

            if (willDelete) {
              this.props.history.push({
                pathname: '/dashboard/discount_programs'
              })
            }
          });
      }
      else {
        this.state.spinner = false
        this.validator.showMessages();
      }
    }
    else {
      if (!this.validator.allValid()) {
        this.state.spinner = false
        this.validator.showMessages();
      }
      else {
        var data = new FormData();
        data.append('program_name', adddiscount.discountDetails.program_name);
        data.append('partner_name', adddiscount.discountDetails.partner_name);
        data.append('description', adddiscount.discountDetails.description);
        data.append('start_date', adddiscount.discountDetails.start_date);
        data.append('end_date', adddiscount.discountDetails.end_date);
        data.append('active_status', adddiscount.discountDetails.active_status);

        for (var i = 0; i < this.state.image.length; i++) {
          data.append('documents[]', this.state.image[i]);
        }
        data.append('user_id', Uid);
        this.props.addDiscountForm(data);
        swal({
          text: "Discount Added Successfully",
          icon: "success",
          closeOnEsc: false,
          dangerMode: true,

          closeOnClickOutside: false
        })
          .then((willDelete) => {

            if (willDelete) {
              this.props.history.push({
                pathname: '/dashboard/discount_programs'
              })
            }
          });
        this.discountForm.reset();
        this.setState({
          active_status: '',
          program_name: '',
          partner_name: '',
          description: '',
          start_date: '',
          end_date: ''
        })
        this.validator.hideMessages();
      }
    }
  };
  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }
  onCancel() {
    this.props.history.push('/dashboard/discount_programs');    
  }

  onDelete = (photo_id) => {
    console.log("document id :- ", photo_id)
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Photo.",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          HttpService.deleteDiscountdocument(photo_id)
            .then(response => {
              console.log('delete document response', response.data);
              this.state.deleteResponce = response.data
              if (this.state.deleteResponce.status === 200) {
                this.setState({
                  spinner: false
                })
                swal({
                  text: this.state.deleteResponce.message,
                  icon: "success"
                })                
                this.componentDidMount();
              }
              else {
                this.setState({
                  spinner: false
                })
                swal({
                  text: this.state.deleteResponce.message,
                  icon: "error"
                })               
              }              
            })
            .catch(error => {
              this.state.spinner = false
              swal(error, {
                icon: 'error'
              });              
            })

          this.setState({
            photos: this.state.photos,
            spinner: !this.state.spinner
          })
          this.setState({
            spinner: true
          });

        }
      });
  }
  removeImage = (event, discountdocument_id) => {

    this.state.deleteImageId.push(discountdocument_id);
    let documentsFromEdit = [...this.state.documentsFromEdit];
    this.state.documentsFromEdit.forEach(function (arrayItem) {
      if (arrayItem.discountdocument_id == discountdocument_id) {
        arrayItem.document_name = '';
      }
    });
    this.setState({ documentsFromEdit: this.state.documentsFromEdit });
  }

  onDiscounts() {
    this.props.history.push('/dashboard/discount_programs');
  }

  render() {
    return (
      <div>
        <form className="form" ref={form => this.discountForm = form} onSubmit={this.handleSubmit}>
          <div className="container">
            <div className="row mt-3 mb-4">
              <div className="col-md-6">
                <div className="horizontal-container">
                  <label className="label-discount" onClick={() => this.onDiscounts()}>Discount Programs</label>
                  <i style={{ color: "#43425d", margin: "10px" }} class="fa fa-chevron-right" aria-hidden="true"></i>
                  {!this.props.location.state ?
                    <label className="label-discount">New Discount</label> : <div className="horizontal-container">
                      <label className="label-discount">Edit {this.state.program_name}</label>
                    </div>}
                </div>
              </div>
            </div>
            <section className="newuser-sec">
              <div className="mb-3">
                <div>
                  <label className="lehead" defaultValue={this.state.active_status}>Status<span>*</span></label>
                </div>

                <div className="custom-control custom-radio custom-control-inline" >
                  <input type="radio" className="custom-control-input" id="active_status" name="active_status" value="0" checked={this.state.active_status == '0'}
                    onChange={(e) => this.handleChange(e, 'active_status')} onBlur={this.handleChange} />
                  <label className="custom-control-label" htmlFor="active_status">Active</label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input type="radio" className="custom-control-input" id="active_status_two" name="active_status" value="1" checked={this.state.active_status == '1'}
                    onChange={(e) => this.handleChange(e, 'active_status')} onBlur={this.handleChange} />
                  <label className="custom-control-label" htmlFor="active_status_two">In Active</label>
                </div>
                <span className="text-danger">{this.validator.message("active_status", this.state.active_status, "required")}</span>
              </div>
              <div className="row">
                <div className="col-md-5">
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="lehead">Discount Program Name:<span>*</span></label>
                      <input
                        className="form-control"
                        type="text"
                        name="Discount program name"
                        defaultValue={this.state.program_name}
                        onChange={(e) => this.handleChange(e, 'program_name')}
                        onBlur={this.handleChange} />
                      <span className="text-danger">{this.validator.message("program_name", this.state.program_name, "required")}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="lehead">
                      Business/Partner Name:<span>*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="partnername"
                      defaultValue={this.state.partner_name}
                      onChange={(e) => this.handleChange(e, 'partner_name')}
                      onBlur={this.handleChange}
                    />
                    <span className="text-danger">{this.validator.message("partner_name", this.state.partner_name, "required")}</span>
                  </div>
                  <div className="mb-3">
                    <div className="form-group">
                      <label className="lehead">Discount Description:*</label>
                      <textarea
                        name="comment"
                        defaultValue={this.state.description}
                        className="form-control"
                        onChange={(e) => this.handleChange(e, 'description')} />
                      <span className="text-danger">{this.validator.message("description", this.state.description, "required")}</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="lehead">Start Date :<span>*</span></label>
                    <input
                      type="date"
                      name="startdate"
                      defaultValue={this.state.start_date}
                      className="form-control"
                      onChange={(e) => this.handleChange(e, 'start_date')} />
                    <span className="text-danger">{this.validator.message("start_date", this.state.start_date, "required")}</span>

                    <div className="form-group">
                      <label className="lehead">End Date:<span>*</span></label>
                      <input
                        type="date"
                        name="enddate"
                        className="form-control"
                        defaultValue={this.state.end_date}
                        onChange={(e) => this.handleChange(e, 'end_date')} />
                      <span className="text-danger">{this.validator.message("end_date", this.state.end_date, "required")}</span>

                    </div>
                  </div>
                  <div className="form-group">
                    <label className="lehead">Documentation:</label>
                    <div className="row">
                        <div className="col-md-8">
                            <div id="wrapper">
                              <div id="uploaded-image-left">
                                {
                                this.state.previewImage?
                                  <img style={{ width: '140px', height: '120px', marginRight: '30px', float: 'left' }} src={this.state.previewImage}></img> : null
                                }
                              </div>
                              <div id="upload-right">

                                  <div className="profile-upload rect">
                                    <label className="custom-file-upload rectangle">
                                      <input type="file"
                                        name="documents"
                                        defaultValue={this.state.documents}
                                        className="form-control"
                                        multiple
                                        onChange={(e) => this.handleChange(e, 'documents')} />
                                      <i className="fas fa-plus"></i>
                                    </label>
                                    <label className="up-lbl">Upload an image or PDF</label><br />
                                    <span className="up-span">(2MB Limit)</span>
                                  </div>
                                 </div>
                                 </div>
                        </div>
                        <div className="col-md-4">
                          <div className="discountsgallery-sec photogallery-sec">
                            <div className="row">
                              {
                                this.state.documentsFromEdit && this.state.documentsFromEdit?.map(item => (
                                  <div className="displayicons-sec discount-delete">
                                    <img style={{ border: "2px solid gray", width: '150px', }} className="" src={item.document_name} />
                                    <div className="img-ontop">
                                      <Icon
                                        name="delete"
                                        theme="light"
                                        size="small"
                                        onClick={(event) => { this.removeImage(event, item.discountdocument_id) }}
                                        className="svg-icons-del"
                                      />
                                    </div>
                                  </div>
                                ))}
                            </div>
                          </div>
                        </div>
                    </div>
                
           
                  </div>
                </div>
              </div>
              <div>
                {this.state.spinner && <Spinner
                  animation="border"
                  role="status" >
                  <span className="sr-only">Loading...</span>
                </Spinner>}

              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <div className="form-group">
                    <button type="submit" className="btn btn-info btn-success mt-1">Save</button>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="my-4">
                    <div className="float-right cancel-sec">
                      <button type="cancel" className="cancelbtnnew" onClick={() => this.onCancel()}>Cancel</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    adddiscount: state.adddiscount
  }
}

export default connect(mapStateToProps, { addDiscountForm, discountFetchInput, editDiscountForm })(withRouter(Newdiscount));

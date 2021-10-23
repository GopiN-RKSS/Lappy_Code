import React, { Component } from "react";
//import '../../assets/css/style.css';
import { connect } from "react-redux";
import {
  RecievedMessages,
  sentMessages,
  draftMessages,
  trashMessages,
  deleteMessageService,
  viewMessagedata,
} from "../../Store/messages/allMessageAction";
import swal from "sweetalert";
import ViewMessage from "./ViewMessage";
import NewMessage from "./NewMessage";
import DraftNewMessage from "./DraftNewMessage";
import { Spinner } from "react-bootstrap";

const DATE_OPTIONS = { month: "short", day: "numeric" };

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recievedMessages: [],
      Uid: "",
      message_id: "",
      activeScreen: "",
      spinner: false,
      typeToRefresh: "",
      dataview: { props },
      allViewMessage: "",
    };
  }

  componentDidMount() {
    this.state.spinner = true;
    this.currentuser = JSON.parse(localStorage.getItem("userdata"));
    var user_id = this.currentuser.user_id;
    this.setState({ Uid: user_id, typeToRefresh: "inbox" });

    this.props.RecievedMessages({ user_id });
    if (this.props.location.state != null) {
      this.state.allViewMessage = this.props.location.state.detail.source_id;
      this.onViewmessage(this.state.allViewMessage);
    }
  }
  listofMessagesTypes = (event, typeOfMessage) => {
    this.state.typeToRefresh = typeOfMessage;
    this.state.spinner = true;
    this.currentuser = JSON.parse(localStorage.getItem("userdata"));
    var user_id = this.currentuser.user_id;
    this.setState({ Uid: user_id });

    if (typeOfMessage == "inbox") {
      this.state.recievedMessages = [];
      this.props.RecievedMessages({ user_id });
    } else if (typeOfMessage == "sent") {
      this.state.recievedMessages = [];
      this.props.sentMessages({ user_id });
    } else if (typeOfMessage == "drafts") {
      this.state.recievedMessages = [];
      this.props.draftMessages({ user_id });
    } else if (typeOfMessage == "trash") {
      this.state.recievedMessages = [];
      this.props.trashMessages({ user_id });
    }
  };
  onCompose() {
    this.setState({
      activeScreen: "compose",
    });
  }
  onViewmessage(item, data) {
    if (data == "direct") {
      if (this.state.typeToRefresh == "drafts") {
        this.setState({
          activeScreen: "draftcompose",
          data: { item },
        });
      } else {
        this.setState({
          activeScreen: "messageview",
          messageId: item.message_id,
          typeOfMessage: this.state.typeToRefresh,
        });
      }
    } else {
      this.setState({
        activeScreen: "messageview",
        messageId: this.state.allViewMessage,
        typeOfMessage: this.state.typeToRefresh,
      });
    }
  }

  deleteMessage(message_id) {
    this.props.deleteMessageService(message_id);
    swal({
      title: "Message Deleted Successfully",
      icon: "success",
    });
  }

  componentWillReceiveProps(nextProps) {
    this.state.spinner = false;
    this.state.recievedMessages = nextProps.Messageslistdata.allMessageList;
  }

  searchHandler = (event, typeOfMessage) => {
    if (event.target.value.length === 0) {
      this.setState({
        spinner: true,
      });
      this.currentuser = JSON.parse(localStorage.getItem("userdata"));
      var user_id = this.currentuser.user_id;

      if (this.state.typeToRefresh == "inbox") {
        this.state.recievedMessages = [];
        this.props.RecievedMessages({ user_id });
        this.state.spinner = false;
      } else if (this.state.typeToRefresh == "sent") {
        this.state.spinner = false;
        this.state.recievedMessages = [];
        this.props.sentMessages({ user_id });
        this.state.spinner = false;
      } else if (this.state.typeToRefresh == "trash") {
        this.state.spinner = false;
        this.state.recievedMessages = [];
        this.props.trashMessages({ user_id });
        this.state.spinner = false;
      } else if (this.state.typeToRefresh == "drafts") {
        this.state.spinner = false;
        this.state.recievedMessages = [];
        this.props.draftMessages({ user_id });
        this.state.spinner = false;
      }
    } else {
      let searcjQery = event.target.value,
        searchedMessages = this.state.recievedMessages.filter((el) => {
          if (el.first_name === null) {
            return "";
          } else {
            let searchValue = el.first_name;
            let data =
              searchValue.toLowerCase().indexOf(searcjQery.toLowerCase()) !==
              -1;
            return data;
          }
        });
      this.setState({ recievedMessages: searchedMessages });
    }
  };

  quitComposeScreen = () => {
    this.setState({
      activeScreen: "",
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 mb-4">
            <h3 className="pagename">Messaging</h3>
          </div>
        </div>
        <section className="msg-mailbox-sec">
          <div className="row">
            <div className="col-lg-2 mb-3 mb-lg-0">
              <div className="mail-main-sec">
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => this.onCompose()}
                  >
                    Compose
                  </button>
                </div>
                <hr />
                <div className="userManagement-page">
                  <div className="tabs-sec">
                    <ul className="mail-items-list nav nav-tabs">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          onClick={(event) => {
                            this.listofMessagesTypes(event, "inbox");
                          }}
                          href="#"
                        >
                          Inbox{" "}
                          <span className="mail-list-num">
                            <strong></strong>
                          </span>{" "}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          onClick={(event) => {
                            this.listofMessagesTypes(event, "sent");
                          }}
                          href="#"
                        >
                          Sent
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          onClick={(event) => {
                            this.listofMessagesTypes(event, "drafts");
                          }}
                          href="#"
                        >
                          Drafts
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          onClick={(event) => {
                            this.listofMessagesTypes(event, "trash");
                          }}
                          href="#"
                        >
                          Trash
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-3 mb-lg-0">
              <div className="mail-users-sec">
                <div className="mail-search-field">
                  <button type="submit">
                    <i class="fa fa-search"></i>
                  </button>
                  <input
                    onChange={(e) => this.searchHandler(e)}
                    style={{ fontSize: "14px" }}
                    className="truncate"
                    type="text"
                    placeholder="Search Message or Name "
                    name="search2"
                  />
                </div>
                <center className="float-center">
                  {this.state.spinner && (
                    <Spinner animation="border" role="status">
                      <span className="sr-only">Loading...</span>
                    </Spinner>
                  )}
                </center>
                {this.state.recievedMessages.length ? (
                  this.state.recievedMessages.map((item) => (
                    <div className="users-styling">
                      <div className="media  p-3">
                        <div className="media-body" key={item.message_id}>
                          <div className="float-container">
                            <div className="float-child">
                              <img
                                className="image-circle"
                                src={item.profile_pic}
                                width="50"
                                height="50"
                              />
                            </div>
                            <div className="float-child-right">
                              <h8
                                onClick={() =>
                                  this.onViewmessage(item, "direct")
                                }
                              >
                                <b>{item.first_name + " " + item.last_name}</b>{" "}
                                <small style={{ float: "right" }}>
                                  {new Date(item.created_at).toLocaleDateString(
                                    "en-US",
                                    DATE_OPTIONS
                                  )}
                                </small>
                              </h8>
                              <h9 className="truncate">{item.subject}</h9>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h4 className="App">You don't have any messages</h4>
                )}
              </div>
            </div>
            <div className="col-lg-7 mb-3 mb-lg-0">
              <div className="mail-usercontent-sec">
                <div className="main-preventative-heading">
                  {this.state.activeScreen == "messageview" ? (
                    <ViewMessage
                      messageId={this.state.messageId}
                      typeOfMessage={this.state.typeOfMessage}
                    />
                  ) : this.state.activeScreen == "draftcompose" ? (
                    <DraftNewMessage
                      quitScreen={this.quitComposeScreen.bind(this)}
                      data={this.state.data}
                    />
                  ) : this.state.activeScreen == "compose" ? (
                    <NewMessage
                      quitScreen={this.quitComposeScreen.bind(this)}
                    />
                  ) : (
                    <h4 className="App">
                      <b>Select an item to read</b>{" "}
                    </h4>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = (state) => {
  return {
    Messageslistdata: state.Messageslistdata,
    // deleteMessage: state.deleteMessage,
    // trashmessages:state.trashmessages
  };
};
export default connect(mapStateToProps, {
  RecievedMessages,
  sentMessages,
  draftMessages,
  deleteMessageService,
  trashMessages,
  viewMessagedata,
})(MessagesList);

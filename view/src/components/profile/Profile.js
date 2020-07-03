import React, { Component } from "react";
import { Container, Grid, Button } from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Item from "../campaign/Item";
import Loading from "../Loading";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class Profile extends Component {
  state = {
    data: [],
    loading: true,
    open: false,
  };
  componentDidMount() {
    Axios.get(
      `https://donobox.herokuapp.com/api/users/${this.props.match.params.id}`
    )
      .then((response) => {
        this.setState({ data: response.data.data });
        console.log(this.state.data);
        console.log(this.state.data.campaigns.length);
        this.setState({ loading: false });
      })
      .catch((error) => console.log(error.response));
  }

  handleDelete = () => {
    Axios.delete(
      `https://donobox.herokuapp.com/api/users/${this.props.match.params.id}`
    )
      .then((response) => {
        alert("Xóa thành công. Chuẩn bị trở về trang chủ");
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("id");
        window.location.replace("/donobox");
      })
      .catch((error) => alert("Xóa không thành công"));
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleFileChange = (e) => {
    console.log(e.target.files[0]);
    const formData = new FormData();
    formData.append("avatar", e.target.files[0]);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    Axios.patch(
      `https://donobox.herokuapp.com/api/users/${this.props.match.params.id}`,
      formData,
      config
    )
      .then((response) => {
        alert("Tải ảnh đại diện mới thành công");
        window.location.reload();
      })
      .catch((error) => {
        alert("Đã có lỗi xảy ra");
        console.log(error);
      });
  };
  render() {
    const { data, loading, open } = this.state;
    return (
      <Container style={{ marginTop: 30, marginBottom: 30 }}>
        {this.state.data ? (
          <Grid container spacing={2}>
            <Grid item xs={12} xl={4}>
              <div style={{ textAlign: "center" }}>
                <div className="image">
                  <img src={this.state.data.avatar} />
                </div>
                <div class="upload-btn-wrapper">
                  {window.localStorage.getItem("id") ===
                  this.props.match.params.id ? (
                    <button class="btn">Tải ảnh cá nhân</button>
                  ) : (
                    ""
                  )}
                  <input
                    type="file"
                    name="name"
                    onChange={this.handleFileChange}
                  />
                </div>
                <div class="info">
                  <b>{data.name}</b>
                  <p>
                    Email: <b>{data.email ? data.email : "N/A"}</b>
                  </p>
                  <p>
                    Địa chỉ: <b>{data.location ? data.location : "N/A"}</b>
                  </p>
                  <p>
                    Website: <b>{data.website ? data.website : "N/A"}</b>
                  </p>
                  <p>
                    Số điện thoại:{" "}
                    <b>{data.phoneNumber ? data.phoneNumber : "N/A"}</b>
                  </p>
                </div>
              </div>
              <hr />
              {window.localStorage.getItem("id") ===
              this.props.match.params.id ? (
                <div className="profile-links">
                  <Link to={`/edit/profile/${data._id}`} className="route-link">
                    <EditIcon style={{ marginTop: 6 }} /> Chỉnh sửa thông tin
                    tài khoản
                  </Link>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={this.handleOpen}
                  >
                    <HighlightOffIcon />
                    Xóa tài khoản
                  </Button>
                  <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                  >
                    <DialogTitle id="alert-dialog-slide-title">
                      {"Xác nhận xóa tài khoản"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-slide-description">
                        Bạn có muốn <b>xóa tài khoản</b>?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="primary">
                        Hủy
                      </Button>
                      <Button
                        onClick={this.handleDelete}
                        color="secondary"
                        variant="contained"
                      >
                        Xóa
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              ) : (
                ""
              )}
            </Grid>
            <Grid item xs={12} xl={8}>
              <h3>Danh sách các chương trình</h3>
              <Grid container spacing={3}>
                {loading ? (
                  <Loading message={true} />
                ) : this.state.data && this.state.data.campaigns ? (
                  this.state.data.campaigns.campaign.map((item) => {
                    return (
                      <Item
                        data={item}
                        isControl={
                          this.props.match.params.id ===
                          window.localStorage.getItem("id")
                            ? true
                            : false
                        }
                      />
                    );
                  })
                ) : (
                  "Nhà tài trợ chưa đăng chiến dịch nào"
                )}
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <p>"Loading"</p>
        )}
      </Container>
    );
  }
}

export default Profile;

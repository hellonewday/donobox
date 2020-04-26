import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Axios from "axios";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Item from "./Item";
import Loading from "./Loading";
class Profile extends Component {
  state = {
    data: [],
    loading: true,
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
    const { data, loading } = this.state;
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
                  <button class="btn">Tải ảnh cá nhân</button>
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
              <div className="profile-links">
                <Link to={`/edit/profile/${data._id}`} className="route-link">
                  <EditIcon style={{ marginTop: 6 }} /> Chỉnh sửa thông tin tài
                  khoản
                </Link>
                <Link to="/" className="route-link">
                  <HighlightOffIcon />
                  Xóa tài khoản
                </Link>
              </div>
            </Grid>
            <Grid item xs={12} xl={8}>
              <h3>Danh sách các chương trình</h3>
              <Grid container spacing={3}>
                {loading ? (
                  <Loading message={true} />
                ) : this.state.data && this.state.data.campaigns ? (
                  this.state.data.campaigns.campaign.map((item) => {
                    return <Item data={item} isControl={true} />;
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

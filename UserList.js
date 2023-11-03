import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import styles from "./UserList.module.scss";
import Modal from "react-modal";
import { Loader } from "../../Components/Loader/Loader";

import testimg from "../../Assets/Images/404error.png";

import {
  deleteUserList,
  getUserList,
  updateVerifyStatus,
} from "../../Services/Services";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import ModalImage, { Lightbox } from "react-modal-image";

const UserList = () => {
  const [getdata, setGetdata] = useState();
  const [loader, setLoader] = useState(false);
  const [addressmodal, setAddressmodal] = useState(false);
  const [viewaddress, setViewAddress] = useState("");
  const [getaddress, setGetAddress] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  const confirm_del = () => {
    var is_confirm = window.confirm("Are you sure to delete?");
    return is_confirm;
  };

  const handleAddressView = (e, row) => {
    setViewAddress(row);
    console.log(row.adress_detail);
    setAddressmodal(true);
    setGetAddress(row.adress_detail);
  };

  function closeModal() {
    setAddressmodal(false);
  }

  const handleDelSubmit = async (e, id) => {
    if (confirm_del()) {
      let formData = new FormData();
      formData.append("user_id", id.user_id);
      const apiResponse = await deleteUserList(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        // setLoader(false);
        toast.success(apiResponse.ResponseMsg);
        getAllUserlist();
      } else {
      }
    } else {
    }
  };

  const handleaccept = (e, user_id) => {
    StatusUpdating(user_id, "Accept");
  };
  const handlerejected = (e, user_id) => {
    StatusUpdating(user_id, "Reject");
  };

  const StatusUpdating = async (id, statusupdate) => {
    setLoader(true);
    // let userid = Tokendata.UserData;
    let formData = new FormData();
    // console.log(id)
    formData.append("user_id", id);
    formData.append("status", statusupdate);
    const apiResponse = await updateVerifyStatus(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      setLoader(false);
      getAllUserlist();
    } else {
      setLoader(false);
    }
  };
  // function filterData(filterText) {
  //   if (filterText == "") {
  //     setLoader(true)
  //     setFilterUser(getdata);
  //     setLoader(false)
  //   }
  //   else {
    //     setLoader(true)
    //     let searchData = filterUser.filter(item => JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !== -1);
    //     setFilterUser(searchData);
    //     setLoader(false)
  //   }
  // }
  console.log("filterUser======>>>>>>>>", filterUser)

  const columns = [
    {
      name: <p>Sr. No.</p>,
      cell: (row, index) => index + 1,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Profile",
      cell: (row, index) => (
        <div className="table_prifileimg">
          {row.profile !== "" ? <ModalImage hideZoom={true} showRotate={true} small={row.profile} large={row.profile} alt="Id Card" /> : "No Image"}
        </div>
      ),
    },

    {
      name: "Id Card",
      cell: (row, index) => (
        <div className="table_cardimg">
          {row.upload_identity !== "" ? <ModalImage hideZoom={true} showRotate={true} small={row.upload_identity} large={row.upload_identity} alt="Id Card" /> : "No Image"}
        </div>
      ),
      width: "150px",
    },

    {
      name: "Action",
      cell: (row, index) =>
        row.is_verify === "1" || row.is_verify === "2" ? (
          row.is_verify === "1" ? (
            <div className="status bg-success">{"Accepted"}</div>
          ) : (
            <div className="status bg-warning ">{"Rejected"}</div>
          )
        ) : (
          <div className="status_btn_group">
            <button
              className="accept_btn"
              onClick={(e) => handleaccept(e, row.user_id)}
            >
              Accept
            </button>
            <button
              className="reject_btn"
              onClick={(e) => handlerejected(e, row.user_id)}
            >
              Reject
            </button>
          </div>
        ),
      width: "250px"
    },

    {
      name: "Address",
      cell: (row, index) => (
        <div className="status_btn_group">
          <button
            className="btn-info text-white btn"
            onClick={(e) => handleAddressView(e, row)}
          >
            View
          </button>
        </div>
      ),
    },
    {
      name: "Actions",
      cell: (row, index) => (
        <div className={styles.action_btn}>
          <button
            onClick={(e) => handleDelSubmit(e, row)}
            className={styles.delete_btn}
          >
            <MdDelete />
          </button>
        </div>
      ),
      width: "100px",
    },
  ];

  const Addresscolumns = [
    {
      name: "Address",
      selector: (row) => row.adres,
      sortable: true,
      width: "200px",
    },
    {
      name: "City",
      selector: (row) => row.city,
      sortable: true,
    },
    {
      name: "Country",
      selector: (row) => row.country,
      sortable: true,
    },
    {
      name: "State",
      selector: (row) => row.state,
      sortable: true,
    },
    {
      name: "Pincode",
      selector: (row) => row.postal_code,
      sortable: true,
    },
  ];

  const getAllUserlist = async () => {
    setLoader(true);
    // let userid = Tokendata.getdata;
    let formData = new FormData();
    // formData.append("user_id", userid.user_id);
    // console.log(userid.user_id)
    const apiResponse = await getUserList(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      setGetdata(apiResponse.data);
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    getAllUserlist();
  }, []);

  useEffect(() => {
        console.log("filterUser======>>>>>>>",filterUser)
    let searchData = filterUser.filter(item => JSON.stringify(item).toLowerCase().indexOf(searchUser.toLowerCase()) !== -1);
    setFilterUser(searchData);
  }, [searchUser]);

  return (
    <>
      {loader && <Loader />}
      <Layout>
        <div>
          <div className={styles.display_set}>
            <h2 className="table_heading">UserList</h2>
          </div>
          <DataTable
            pagination
            columns={columns}
            data={filterUser.length > 0 ? filterUser : getdata}
            actions={<input className="form-control form-control-sm ml-0 my-1 w-25" value={searchUser} type="search" placeholder="Search"
              onChange={(e) => setSearchUser(e.target.value)}
            />
            }
          />
        </div>
        <div>
        </div>
      </Layout>

      <Modal
        isOpen={addressmodal}
        onRequestClose={closeModal}
        className="comman_modal address_modal"
        ariaHideApp={false}
      >
        <button className="close_btn" onClick={() => closeModal()}>
          <AiOutlineCloseCircle />
        </button>
        <div className="model_bg">
          <div className="model_name">
            <h4>
              <b>Address Details</b>
            </h4>
            <DataTable
              pagination
              columns={Addresscolumns}
              data={getaddress && getaddress}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};
export default UserList;

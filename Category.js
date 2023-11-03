import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import DataTable from "react-data-table-component";
import Tokendata from "../../Common/Tokendata";
import { Loader } from "../../Components/Loader/Loader";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "../UserList/UserList.module.scss";
import Modal from "react-modal";
import { AiOutlineCloseCircle } from "react-icons/ai";

import {
  addCategory,
  deleteCategory,
  getCategoryList,
  updateCategory,
} from "../../Services/Services";
import { toast } from "react-toastify";

const Category = () => {
  const [getdata, setGetdata] = useState();
  const [adddata, setaddData] = useState({});
  const [search, setSearch] = useState();
  const [loader, setLoadershow] = useState(false);
  const [addmodal, setAddmodal] = useState(false);
  const [editmodal, setEditmodal] = useState(false);
  const [editItem, setEditItem] = useState({});
  const confirm_del = () => {
    var is_confirm = window.confirm("Are you sure to delete?");
    return is_confirm;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setaddData({
      ...adddata,
      [name]: value,
    });
  };

  function closeModal() {
    setAddmodal(false);
    setEditmodal(false);
  }

  const handleupdate = (e, row) => {
    setEditmodal(true);
    setEditItem(row);
  };

  const handleAdd = (row) => {
    setAddmodal(true);
  };

  //add
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("cat_name", adddata.cat_name);
    formData.append("cat_img", e.target.image.files[0]);
    const apiResponse = await addCategory(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      getAllcategorylist();
    } else {
      toast.error(apiResponse.ResponseMsg);
    }
    setAddmodal(false);
  };

  const getAllcategorylist = async () => {
    setLoadershow(true);
    let userid = Tokendata.UserData;
    let formData = new FormData();
    formData.append("cat_id", userid.cat_id);
    const apiResponse = await getCategoryList(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      setGetdata(apiResponse.data);
      setLoadershow(false);
    } else {
      setLoadershow(false);
    }
  };

  const handleEditsubmit = async (e) => {
    console.log(e.target.image.files[0])
    e.preventDefault();
    let formData = new FormData();
    formData.append("cat_id", editItem.cat_id);
    formData.append("cat_name", e.target.cat_name.value);
    formData.append("cat_name", e.target.cat_name.value);
    formData.append("cat_img", e.target.image.files[0]);
    const apiResponse = await updateCategory(formData);
    if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
      toast.success(apiResponse.ResponseMsg);
      getAllcategorylist();
      setEditmodal(false);
    }
  };

  const handleDelSubmit = async (e, id) => {
    if (confirm_del()) {
      let formData = new FormData();
      formData.append("cat_id", id.cat_id);
      const apiResponse = await deleteCategory(formData);
      if (apiResponse.ResponseCode === 1 || apiResponse.ResponseCode === "1") {
        toast.success(apiResponse.ResponseMsg);
        getAllcategorylist();
      }
    }
  };

  const columns = [
    {
      name: <p>Sr. No.</p>,
      cell: (row, index) => index + 1,
      width: "50px",
    },
    {
      name: "Name",
      selector: (row) => row.cat_name,
      sortable: true,
    },
    {
      name: "Product Image",
      cell: (row, index) =>
        row.cat_img !== "" ? (
          <div className="table_product_img">
            <img src={row.cat_img} alt="not found" />
          </div>
        ) : (
          "image not found"
        ),
    },
    {
      name: "Actions",
      cell: (row, index) => (
        <div className={styles.action_btn}>
          <button
            onClick={(e) => handleupdate(e, row)}
            className={styles.update_btn}
          >
            <FaUserEdit />
          </button>
          <button
            onClick={(e) => handleDelSubmit(e, row)}
            className={styles.delete_btn}
          >
            <MdDelete />
          </button>
        </div>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    getAllcategorylist();
  }, []);

  return (
    <>
      {loader && <Loader />}
      <Layout>
        <div>
          <div className={styles.display_set}>
            <h2 className="table_heading">Category</h2>
          </div>
          <button
            className={
              styles.close_btn + " btn btn-primary d-block ms-auto my-2"
            }
            onClick={handleAdd}
          >
            Add
          </button>
          <DataTable
            pagination
            columns={columns}
            data={getdata && getdata}
            actions={
              <input
                className="table_search_input"
                type="search"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </div>
      </Layout>

      {/* //Add Data model */}
      <Modal
        isOpen={addmodal}
        onRequestClose={closeModal}
        className="comman_modal update_modal"
        ariaHideApp={false}
      >
        <button className="close_btn" onClick={() => closeModal()}>
          <AiOutlineCloseCircle />
        </button>
        <div className="model_bg">
          <div className="model_name">
            <h4 className="text-center">
              <b>Add Details</b>
            </h4>
            <form
              className="form-horizontal mt-2"
              method="POST"
              onSubmit={handleAddSubmit}
            >
              <div className="form_control">
                <input
                  className="mb-2"
                  type="text"
                  placeholder="Enter Name"
                  name="cat_name"
                  onChange={(e) => handleChange(e)}
                  required
                />

                <input
                  className="mb-2"
                  type="file"
                  placeholder="Choose Image"
                  name="image"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </div>

            </form>
          </div>
        </div>
      </Modal>

      {/* edit data model */}
      <Modal
        isOpen={editmodal}
        onRequestClose={closeModal}
        className="comman_modal update_modal"
        ariaHideApp={false}
      >
        <button className="close_btn" onClick={() => closeModal()}>
          <AiOutlineCloseCircle />
        </button>
        <div className="model_bg">
          <div className="model_name">
            <h4 className="text-center">
              <b>Edit Details</b>
            </h4>
            <form onSubmit={(e) => handleEditsubmit(e, editItem)}>
              <div className="form_control">
                <input
                  name="cat_name"
                  className="mb-2"
                  type="text"
                  placeholder="Enter Name"
                  defaultValue={editItem.cat_name}
                />

                <input
                  name="image"
                  className="mb-2"
                  type="file"
                  placeholder="Choose Image"
                />
                <button
                  className="btn btn-primary w-100"
                // onClick={() => closeModal()}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Category;

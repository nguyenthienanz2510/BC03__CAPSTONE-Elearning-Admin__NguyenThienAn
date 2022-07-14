import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import FormCreateUser from "./FormCreateUser";
import "./ModalCreateUser.scss";

const ModalCreateUser = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  useEffect(() => {
    if (document.querySelector(".ant-modal")) {
      document.querySelector(".ant-modal").style.width = "720px";
    }
  }, [isModalVisible]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="py-5">
      <button
        onClick={showModal}
        className="transition-all font-bold px-5 py-2 hover:bg-color-primary rounded hover:text-color-white bg-color-white text-color-primary border border-color-primary"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Thêm người dùng
      </button>
      <Modal
        title="Thêm Người dùng"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <FormCreateUser setIsModalVisible={setIsModalVisible} />
      </Modal>
    </div>
  );
};

export default ModalCreateUser;

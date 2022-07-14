import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import FormCreateCourse from "./FormCreateCourse";
import "./ModalCreateCourse.scss";

const ModalCreateCourse = () => {
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
        Thêm khóa học
      </button>
      <Modal
        title="Thêm khóa học"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <FormCreateCourse setIsModalVisible={setIsModalVisible} />
      </Modal>
    </div>
  );
};

export default ModalCreateCourse;

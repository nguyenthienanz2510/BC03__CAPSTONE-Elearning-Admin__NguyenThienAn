import { Table } from "antd";
import { headerTableCourse } from "../../../utils/courseManagerment.utils";

const TableCourseManagementPage = ({ UserList }) => (
  <div>
    <Table
      className="border"
      columns={headerTableCourse}
      dataSource={UserList}
    />
  </div>
);

export default TableCourseManagementPage;

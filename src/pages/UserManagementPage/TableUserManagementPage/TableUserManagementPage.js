import { Table } from "antd";
import { headerTableUser } from "../../../utils/userManagerment.utils";

const TableUserManagementPage = ({ UserList }) => (
  <div>
    <Table className="border" columns={headerTableUser} dataSource={UserList} />
  </div>
);

export default TableUserManagementPage;

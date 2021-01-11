import React from "react";
import { Table } from "antd";
import { RepoDataType, RepoColumnType } from "./types";

type Props = {
  data: RepoDataType[];
  columns: RepoColumnType[];
};

const RepoTable: React.FC<Props> = ({ data, columns }): React.ReactElement => {
  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default RepoTable;

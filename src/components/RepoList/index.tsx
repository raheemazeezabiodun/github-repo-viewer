import React from "react";
import { Pagination } from "antd";

import RepoTable from "./list";
import "../../styles/repo-list.css";

const columns = [
  {
    title: "Repo Name",
    dataIndex: "name",
  },
  {
    title: "Star Count",
    dataIndex: "star",
  },
  {
    title: "Fork Count",
    dataIndex: "fork",
  },
];

const RepoList: React.FC = (): React.ReactElement => {
  return (
    <div className="repo-table-wrapper">
      <RepoTable
        data={[
          {
            name: (
              <a
                href="https://github.com/raheemazeezabiodun"
                target="_blank"
                rel="noreferrer"
              >
                Github repo
              </a>
            ),
            star: 10,
            fork: 10,
            key: 1,
          },
        ]}
        columns={columns}
      />
      <div className="pagination-wrapper">
        <Pagination
          current={0}
          total={20}
          showSizeChanger={false}
          onChange={(page) => {
            console.log("holla", page);
          }}
        />
      </div>
    </div>
  );
};

export default RepoList;

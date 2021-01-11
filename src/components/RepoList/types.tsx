import React from "react";

export interface RepoColumnType {
  title: string;
  dataIndex: string;
}

export interface RepoDataType {
  name: React.ReactNode;
  star: number;
  fork: number;
  key: number;
}

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

export interface RepoResponseData {
  id: number;
  name: string;
  stargazers_count: number;
  forks_count: number;
  html_url: string;
}

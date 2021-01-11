import React, { useEffect, useState } from "react";
import { Spin, Pagination } from "antd";
import linkHeaderParser from "parse-link-header";
import RepoTable from "./list";
import { RepoDataType, RepoResponseData } from "./types";
import "../../styles/repo-list.css";
import api from "../../services/api";

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
  const [isLoading, setIsLoading] = useState<true | false>(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(0);
  const [repos, setRepoLists] = useState<RepoResponseData[] | null>(null);

  const fetchRepo = async (page: number) => {
    setIsLoading(true);
    try {
      const response: Response | null = await api(page);
      setIsLoading(false);
      if (response) {
        const data: RepoResponseData[] = await response.json();
        setRepoLists(data);
        const { headers }: { headers: Headers } = response;
        const link: string | null = headers.get("link");
        if (link) {
          const paginationData: linkHeaderParser.Links | null = linkHeaderParser(
            link
          );
          console.log(paginationData);
          if (paginationData) {
            setTotalPageCount(
              Number(paginationData.last.page) *
                Number(paginationData.last.per_page)
            );
          }
        }
      }
    } catch (err) {
      setRepoLists(null);
    }
  };

  useEffect(() => {
    (async () => {
      fetchRepo(pageNumber);
    })();
  }, [pageNumber]);

  const formatData = () => {
    const data: RepoDataType[] = [];
    if (repos) {
      repos.forEach((repo) => {
        // eslint-disable array-callback-return
        data.push({
          name: (
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              {repo.name}
            </a>
          ),
          star: repo.stargazers_count,
          fork: repo.forks_count,
          key: repo.id,
        });
      });
    }

    return data;
  };
  return (
    <div className="repo-table-wrapper">
      {isLoading ? (
        <Spin />
      ) : (
        <>
          <RepoTable data={formatData()} columns={columns} />
          <div className="pagination-wrapper">
            <Pagination
              current={pageNumber}
              total={totalPageCount}
              showSizeChanger={false}
              onChange={(page) => {
                setPageNumber(page);
                fetchRepo(page);
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RepoList;

import React from "react";
import { Row, Col } from "antd";

import "./styles/app.css";
import RepoList from "./components/RepoList";

function App() {
  return (
    <Row className="container">
      <Col span={12} offset={6}>
        <div className="title-wrapper">
          <h4>Github Repository View</h4>
        </div>
        <div className="repo-table-wrapper">
          <RepoList />
        </div>
      </Col>
    </Row>
  );
}

export default App;

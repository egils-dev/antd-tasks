import React, { Component } from "react";
import { Layout, Row, Col, Typography } from "antd";

import Article from "../components/Article/Article";
import data from "../data/data";
import logo from "../../src/logo.png";
import "./Page.css";

const { Footer, Content } = Layout;
const { Text } = Typography;

class Page extends Component {
  render() {
    const articleData = data;
    const articles = articleData.map((data) => {
      return (
        <Article
          className={data.class}
          key={data.id}
          title={data.title}
          body={data.body}
          imgAlt={data.imgAlt}
          img={data.img}
        />
      );
    });
    return (
      <div>
        <Layout style={{ display: "flex", flexFlow: "row wrap" }}>
          <Content className="content">
            <Row className="row">{articles}</Row>
          </Content>
          <Footer className="footer">
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <img style={{ height: "40px" }} src={logo} alt="Logo" />
              </Col>
              <Col>
                <a
                  href="https://lff.lv/sacensibas/viriesi/telpu-futbols/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Text style={{ color: "white" }}>lff.lv/telpufutbols</Text>
                </a>
              </Col>
            </Row>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Page;

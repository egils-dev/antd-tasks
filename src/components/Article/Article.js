import React from "react";
import { Typography, Button, Row, Col } from "antd";

import "./Article.css";

const { Title, Paragraph, Text } = Typography;

const article = (props) => {
  return (
    <React.Fragment>
      <Col className="col" xs={24} sm={24} md={12} lg={12} xl={12}>
        <div className="article">
          <Row align="middle">
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
              <img className="img" alt={props.imgAlt} src={props.img} />
            </Col>
            <Col
              style={{
                padding: "20px",
              }}
              xs={24}
              sm={24}
              md={16}
              lg={16}
              xl={16}
            >
              <Title style={{ color: "#377E8D" }} level={4}>
                {props.title}
              </Title>
              <Paragraph style={{ color: "#377E8D" }} ellipsis={{ rows: 3 }}>
                {props.body}
              </Paragraph>
              <Button
                style={{
                  color: "#377E8D",
                  backgroundColor: "transparent",
                  border: "solid 1px #377E8D",
                }}
                size={"small"}
              >
                <Text strong style={{ color: "#377E8D" }}>
                  Read More
                </Text>
              </Button>
            </Col>
          </Row>
        </div>
      </Col>
    </React.Fragment>
  );
};

export default article;

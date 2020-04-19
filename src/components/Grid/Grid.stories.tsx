import React, { FC } from "react";
import { Row, Col } from "./Grid";

export default {
  title: "Grid",
  parameters: {
    info: { inline: true }
  }
};

export const base: FC = () => (
  <div className="main">
    <div className="grid-wrapper">
      <Row>
        <Col span={1}> span = 1 </Col>
        <Col span={11}> span = 11 </Col>
      </Row>
    </div>
    <div className="grid-wrapper">
      <Row>
        <Col span={3}> span = 3 </Col>
        <Col span={9}> span = 9 </Col>
      </Row>
    </div>
    <div className="grid-wrapper">
      <Row>
        <Col span={6}> span = 6 </Col>
        <Col span={6}> span = 6 </Col>
      </Row>
    </div>
    <div className="grid-wrapper">
      <Row>
        <Col span={11}> span = 11 </Col>
        <Col span={1}> span = 1 </Col>
      </Row>
    </div>
  </div>
);

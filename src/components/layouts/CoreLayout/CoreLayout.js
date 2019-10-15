import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

class CoreLayout extends React.Component {
  render() {
    return (
      <div className="core-layout">
        <Layout>
          <Content>{this.props.children}</Content>
        </Layout>
      </div>
    );
  }
}

export default CoreLayout;

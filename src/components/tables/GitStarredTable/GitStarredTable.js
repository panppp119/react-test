import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Table } from "antd";

import "./GitStarredTable.scss";

class GitStarredPage extends React.Component {
  static defaultProps = {
    dataSource: []
  };

  render() {
    const { source, loading, loadMore, hasMore } = this.props;

    const dataSource = [];

    source.length > 0 &&
      source.map((data, i) => {
        const language = data.language === null ? "-" : data.language;

        return dataSource.push({
          name: data.name,
          description: data.description,
          stars: data.stargazers_count,
          forks: data.forks,
          language,
          key: i
        });
      });

    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        className: "gs-name"
      },
      {
        title: "Description",
        dataIndex: "description",
        className: "gs-description"
      },
      {
        title: "Stars",
        dataIndex: "stars",
        className: "gs-stars"
      },
      {
        title: "Forks",
        dataIndex: "forks",
        className: "gs-forks"
      },
      {
        title: "Programming Language",
        dataIndex: "language",
        className: "gs-language"
      }
    ];

    const pagination = false;

    return (
      <InfiniteScroll
        className="git-starred-table"
        initialLoad={false}
        pageStart={0}
        loadMore={loadMore}
        hasMore={!loading && hasMore}
      >
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={pagination}
          loading={loading}
        />
      </InfiniteScroll>
    );
  }
}

export default GitStarredPage;

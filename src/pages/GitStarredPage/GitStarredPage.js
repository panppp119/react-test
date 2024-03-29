import React from "react";
import Moment from "moment";
import { Button } from "antd";

import CoreLayout from "components/layouts/CoreLayout";
import GitStarredTable from "components/tables/GitStarredTable";

import "./GitStarredPage.scss";

class GitStarredPage extends React.Component {
  state = {
    source: [],
    page: 1,
    total: 0,
    hasMore: true,
    loading: false,
    btnLoad: true
  };

  componentDidMount() {
    this.fetchGitMostStarred(this.state.page);
  }

  handleClickBtnLoad = () => {
    this.setState({ btnLoad: false });
    this.loadMore();
  };

  loadMore = () => {
    var { source, total, page, btnLoad } = this.state;

    if (source.length > total) {
      console.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    } else {
      this.fetchGitMostStarred(page + 1);
    }

    btnLoad && this.setState({ btnLoad: false });
  };

  fetchGitMostStarred = page => {
    var { source } = this.state;
    const perPage = 10;
    const date = Moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD");
    const apiUrl = "https://api.github.com/search/";
    const params = `repositories?q=created:>=${date}&sort=stars&order=desc&page=${page}&per_page=${perPage}`;

    this.setState({ loading: true });

    if (page !== this.state.page || page === 1) {
      fetch(apiUrl + params)
        .then(data => {
          return data.json();
        })
        .then(json => {
          this.setState(prevState => {
            if (prevState.source !== json.items) {
              source = source.concat(json.items);

              return {
                source,
                page,
                total: json.total_count,
                loading: false
              };
            } else {
              return;
            }
          });
        })
        .catch(error => {
          console.warn(error.message);
        });
    }
  };

  render() {
    const { source, total, loading, hasMore, btnLoad } = this.state;

    return (
      <CoreLayout>
        <div className="page-git-starred container">
          <h1>
            Github most starred repositories that were created in the last 30
            days
          </h1>

          <GitStarredTable
            source={source}
            total={total}
            hasMore={hasMore}
            loading={loading}
            loadMore={this.loadMore}
          />

          {btnLoad && !loading && (
            <Button onClick={this.handleClickBtnLoad} block>
              Load More
            </Button>
          )}
        </div>
      </CoreLayout>
    );
  }
}

export default GitStarredPage;

import React, { Component } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      loading: false,
    };
  }
  updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.catagory
    }&apiKey=74c19b5e3c044623b74320cc62e518f0&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    console.log(parseData);
  };

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">Top Daily Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsCard
                    title={element.title}
                    author={element.author}
                    date={element.publishedAt}
                    description={element.description}
                    urlImage={
                      !element.urlToImage
                        ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/screenshot_96-sixteen_nine-_3.png?VersionId=bNYe120ke7wuzVZGXRr40vrrf7Gb_CGt"
                        : element.urlToImage
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page < 1}
            onClick={this.handlePrevClick}
            type="button"
            className="btn btn-dark"
          >
            Previos
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            onClick={this.handleNextClick}
            type="button"
            className="btn btn-dark"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;

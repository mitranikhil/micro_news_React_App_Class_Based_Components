import React, { Component } from 'react';
import News_Box from "./News_Box.js";      
import Loading from "./Loading.js";
import InfiniteScroll from 'react-infinite-scroll-component';
// import PropTypes from 'prop-types';

export default class News extends Component {
// static defaultProps = {
//   country: "in",
//   pageSize: 10,
//   category: "general",
// }

// static PropTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }

constructor(props){
  super(props);
  this.state = { 
    totalResults: 0,
    loading: false,
    articles: [],
    page: 1
  };
  document.title = `Micro News | ${this.capitilization(this.props.category)}`
}

updateNews = async ()=>{
  this.props.setProgress(5);
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  this.props.setProgress(25);
  let data = await fetch(url);
  this.setState({loading: true});
  this.props.setProgress(35);
  setTimeout(async ()=>{
    this.props.setProgress(55);
    let parseData = await data.json();
    this.props.setProgress(75);
    await this.setState({
      totalResults: parseData.totalResults,
      articles: parseData.articles,
      loading: false
    })
  this.props.setProgress(100);
  }, 1000);
}

async componentDidMount(){
  this.updateNews();
}

// handlePreviousBtn = async () => {
//   this.setState({page: this.state.page - 1});
//   this.updateNews();
// };

// handleNextBtn = async () => {
//     this.setState({page: this.state.page + 1});
//     this.updateNews();
// };

// Function of capitilization
capitilization = e => {
  return e.charAt(0).toUpperCase() + e.slice(1);
}

// Function to Fetch hasMore
fetchMoreData = async () => {
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
  await this.setState({page: this.state.page + 1});
  this.setState({loading: true});
  let data = await fetch(url);
  setTimeout(async ()=>{
    let parseData = await data.json();
    await this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false
    })
  }, 500);
}

  render() {
    return (
      <>
        <div className="container my-3">
          <h1>Top {this.capitilization(this.props.category)} Headlings</h1>
          <hr/>
          {this.state.loading && <Loading/>}
          <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loading={this.state.loading && <Loading/>}>
            <div className="d-flex align-items-center justify-content-evenly flex-wrap">
              { this.state.articles.map( e => {
                return <div key={e.url}>
                  <News_Box title={e.title} content={e.content} image={e.urlToImage} readMore={e.url} publicedDate={e.publishedAt} author={e.author} source={e.source.name}/>
                </div>
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
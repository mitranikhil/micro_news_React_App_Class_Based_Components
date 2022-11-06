import News from "./component/News.js";
import React, { Component } from 'react';
import Navbar from "./component/Navbar.js";
import LoadingBar from 'react-top-loading-bar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageNo = 10;
  nation = "in";
  apiKey = process.env.REACT_API_NEWS_API || "902bc89a6aa347199d09e91a1b72eff8"
  
  state = {
    progress: 0
  };
  
  setProgress = (progress) => {
    this.setState({progress: progress})
  }
  render() {
    return (
    <>
      <Router>
        <LoadingBar color="#f11946" height={3} progress={this.state.progress}/>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageNo} country={this.nation} category="general" />}/>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageNo} country={this.nation} category="general" />}/>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageNo} country={this.nation} category="business" />}/>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageNo} country={this.nation} category="entertainment" />}/>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageNo} country={this.nation} category="health" />}/>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageNo} country={this.nation} category="science" />}/>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageNo} country={this.nation} category="sports" />}/>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageNo} country={this.nation} category="technology" />}/>
        </Routes>
        
      </Router>
    </>
    );
  }
}

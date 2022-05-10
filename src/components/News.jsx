import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export default class News extends Component {
  render() {
    return (
      <>
        <NewsComponent title="Hello" description="None" urlToImage="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bm90JTIwZm91bmR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"/>
      </>
    );
  }
}

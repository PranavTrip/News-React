import React, { Component } from "react";
import NewsComponent from "./NewsComponent";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "IANS",
      title:
        "London-based Nothing to sell its first smartphone on Flipkart in India - Business Standard",
      description:
        "London-based consumer tech company Nothing on Tuesday confirmed that its first smartphone Nothing phone (1) will be available on Flipkart in India.",
      url: "https://www.business-standard.com/article/technology/london-based-nothing-to-sell-its-first-smartphone-on-flipkart-in-india-122051000940_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2021-10/13/full/1634132542-1418.jpg",
      publishedAt: "2022-05-10T11:47:00Z",
      content:
        "London-based consumer tech company Nothing on Tuesday confirmed that its first smartphone Nothing phone (1) will be available on Flipkart in India.\r\nO2 will be the network partner for Nothing in the … [+2622 chars]",
    },
    {
      source: {
        id: null,
        name: "Hippocraticpost.com",
      },
      author: "Hippocratic Post",
      title:
        "Diabetes almost doubles risk of death from Covid - The Hippocratic Post",
      description:
        "Diabetes almost doubles risk of death from Covid: People with diabetes were almost twice as likely to die with Covid and almost",
      url: "https://www.hippocraticpost.com/coronavirus/diabetes-almost-doubles-risk-of-death-from-covid/",
      urlToImage:
        "https://www.hippocraticpost.com/wp-content/uploads/2022/05/shutterstock_24820132.jpg",
      publishedAt: "2022-05-10T11:30:38Z",
      content:
        "Diabetes almost doubles risk of death from Covid: People with diabetes were almost twice as likely to die with Covid and almost three times as likely to be critically or severely ill compared to thos… [+2980 chars]",
    },
    {
      source: {
        id: null,
        name: "Www.bgr.in",
      },
      author: "Dinesh Sharma",
      title:
        "OnePlus 10R Review: Making mid-range premium segment more competitive - BGR India",
      description:
        "With pretty positive reviews on the previous model the OnePlus 9 series the company delivers us a magnificent enhancement in the form of the OnePlus 10R",
      url: "https://www.bgr.in/reviews/oneplus-10r-review-making-mid-range-premium-segment-more-competitive-1268039/",
      urlToImage: "https://st1.bgr.in/wp-content/uploads/2022/05/1-7.jpg",
      publishedAt: "2022-05-10T11:22:42Z",
      content:
        "Since the launch of the OnePlus phones, they set a game-changing environment in the competitive world of smartphones and devices. From being exclusively sold online, and their powerful performance to… [+6869 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "PTI",
      title:
        "Ex-Sri Lankan PM Mahinda Rajapaksa, family flee to naval base, protests erupt: Report - The Indian Express",
      description:
        "Mahinda Rajapaksa, 76, resigned as prime minister on Monday amid unprecedented economic turmoil, hours after his supporters attacked anti-government protesters.",
      url: "https://indianexpress.com/article/world/ex-sri-lankan-pm-mahinda-rajapaksa-family-naval-base-protests-7909694/",
      urlToImage: "https://images.indianexpress.com/2022/05/Lanka-1-1.jpg",
      publishedAt: "2022-05-10T11:15:00Z",
      content:
        "A protest began in front of Sri Lanka’s Trincomalee Naval Base on Tuesday after reports emerged that former prime minister Mahinda Rajapaksa and some of his family members were there after leaving th… [+1862 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center">NewsMonkey - Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsComponent
                    title={element.title.slice(0,70)+"..."}
                    description={element.description.slice(0,128)+"..."}
                    urlToImage={element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

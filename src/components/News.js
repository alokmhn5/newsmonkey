import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  //   articles = [
  //     {
  //       source: { id: null, name: "Deccan Herald" },
  //       author: null,
  //       title:
  //         "India Political Updates: Shiv Sena’s party name, symbol dispute to land in SC, EC - Deccan Herald",
  //       description:
  //         "Track the latest political updates from India, only with DH!",
  //       url: "https://www.deccanherald.com/national/political-news-live-bjp-narendra-modi-congress-shiv-sena-shinde-uddhav-thackeray-rahul-gandhi-aap-karnataka-elections-tripura-meghalaya-nagaland-kharge-tharoor-1192758.html",
  //       urlToImage:
  //         "https://www.deccanherald.com/sites/dh/files/articleimages/2023/02/19/uddhav-pti-3-1180225-1673500564-1183253-1674320441%20%281%29-1676796714.jpg",
  //       publishedAt: "2023-02-19T07:16:44Z",
  //       content:
  //         'Jamiat Ulema-e-Hind terms abduction, murder of 2 men by cow vigilantes \'barbaric\'Prominent Muslim organisation Jamiat Ulema-e-Hind has termed as "inhuman" and "barbaric" the alleged abduction and mur… [+549 chars]',
  //     },
  //   ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=7d0d8972b5ad4eee852d55330738b86a";
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({ articles: parsedData.articles });

    //   .then((response) => response.json())
    //   .then((data) => JSON.parse(response));
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center"> Top news of the day</h2>
        <div className="row">
          {this.state.articles.map((article) => (
            <div className="col-md-4 my-3" key={article.url}>
              <NewsItem
                title={article.title}
                details={article.description}
                imageUrl={article.urlToImage}
                url={article.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

import React from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";


class News extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const country_code = this.props.match.params.country_code;
    this.getArticles(country_code)
  }

  getArticles = (country) => {
    Axios.get(
      `https://hd-news.herokuapp.com/news/${country}`
    ).then((result) => {
      this.setState({ articles: result.data.articles });
    });
  };


  render() {
    return (
      <div className="wrapper">
        <div className='header'>
          <h2> Headline News</h2>

          <Link to="/tags">
            <p className="backclick">Back</p>
          </Link>

        </div>
        {this.state.articles.length < 1 ? (<h2 className='loading'>Loading ...</h2>) :

          <div className="cards">
            {this.state.articles.map((article, i) => {
              return (
                <div className="card" key={i}>
                  <h3>{article.author ? article.author : 'No author'}</h3>
                  <img src={article.urlToImage} alt="No" />

                  <p>{article.source.name}</p>
                  <p>{article.published}</p>
                  <p>{article.title}</p>
                </div>
              );
            })}
          </div>
        }
      </div>
    );
  }
}


export default News;

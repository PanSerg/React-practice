import { getNews } from "components/Services/services";
import { Component } from "react";

class NewsList extends Component {
    state = {
        news: null,
        loading: false,
        error: '',
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.value !== this.prevProps.value) {
            this.setState({loading: true})
            getNews(this.props.value)
                .then((response) => response.json())
                .then((news) => {
                    if (news.status !== 'ok') {
                        return Promise.reject(news.message)
                    }
                this.setState({news})
                })
                .catch((error) => {
                    this.setState({error})
                })
                .finally(() => {
                    this.setState({loading: false})
            })
        }
    }

    render() {
        return (
            <>
                {this.state.error && <h1>{this.state.error}</h1>}
                {this.state.loading&&<p>Loading...</p>}
                {this.state.news &&
                this.state.news.articles.map((el) => {
                    return <p key={el.url}>{el.title}</p>
                })}</>
            
        )
    }
}

export default NewsList;
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { getUSANews } from '../utils/fetchNews.js'
import Article from './Article'

class News extends Component {
    state= {
        articles: [],
        refreshing: true
    };

    componentDidMount = () => {
        this.fetchNews()
    }

    fetchNews = () => {
        getUSANews().then(articles=> {
            this.setState({
                articles, refreshing: false
            })
        }).catch({
            refreshing: false
        })
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true
        }, () => {
            this.fetchNews()
        })
    }

    render() {
        return (
            <FlatList 
                data={this.state.articles}
                renderItem={({ item }) => <Article article={item} />}
                keyExtractor={item => item.url}
                refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh}
            />
        )
    }
}

export default News;

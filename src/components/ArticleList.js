import React, {Component} from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './ListItem'
import CardSection from './CardSection'


class ArticleList extends Component {
  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.datasource = ds.cloneWithRows(this.props.articles)
  }
  renderRow(article){
    return <ListItem article={article} />

  }
  render() {
    return <ListView
            dataSource={this.datasource}
            renderRow={this.renderRow}
          />
    ;
  }
}


const mapStateToProps = state => {
  return { articles: state.articles}
};
export default connect(mapStateToProps)(ArticleList)

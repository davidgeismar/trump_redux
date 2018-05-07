import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux'
import CardSection from './CardSection';
import * as actions from '../actions'

class ListItem extends Component {
  renderDescription() {


    if (this.props.article.id === this.state.selectedArticleId) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {this.props.article.content}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.article;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectArticle(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
};

const mapStateToProps = state => {
  return {selectedArticleId: state.selectedArticleId};
};

export default connect(mapStateToProps, actions)(ListItem);

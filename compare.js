class ListItem extends Component {
  renderDescription() {
    const { article, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            {article.content}
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedArticleId === ownProps.article.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);

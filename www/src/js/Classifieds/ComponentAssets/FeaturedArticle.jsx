export function featuredArticle({ React }) {
  return function FeaturedArticle(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        const {featuredHeading, featuredArticle} = this.props;
        return (
          <div className="featuredArticle-container">
            <p className="featuredArticle-head">{featuredHeading}</p>
            <a href={featuredArticle.url}>
              <p className="featuredArticle-title">{featuredArticle.title}</p>
            </a>
            <img className="featuredArticle-image" src={featuredArticle.image} />
            <p className="featuredArticle-content">{featuredArticle.content}</p>
            <a className="featuredArticle-cameraIcon"
              href={featuredArticle.slideshow} >
              <img src='images/cameraIcon.svg' /> Slide Show
            </a>
          </div>
        );

      },
    });
  };
}

export function linksColumn({ React }) {
  return function LinksColumn(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        function buildLinks(linksList) {
          return Object.keys(linksList).map((key, idx) => (
            <li key={idx}>
              <a href={linksList[key].url}>
                {linksList[key].title}
              </a>
            </li>
          ))
        }

        const {linksHeading, linksList} = this.props;
        return (
          <div className="linksColumn-container">
            <p className="linksColumn-head">{linksHeading}</p>
            <ul className="linksColumn-items">
              {buildLinks(linksList)}
            </ul>
          </div>
        );
      },
    });
  };
}

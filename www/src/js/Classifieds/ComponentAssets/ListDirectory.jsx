export function listDirectory({ React }) {
  return function ListDirectory(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        function buildSections(secList) {
          return secList.map((obj, idx) => (
            <li key={idx}>
              <a className="classDirectory-title" href={obj.url}>
                {obj.title}
              </a>
              <p className="classDirectory-desc">
                {obj.desc}
              </p>
            </li>
          ))
        }

        return (
          <div className="classDirectory-container">
            <p className="classDirectory-head">
              {this.props.catagory}
            </p>
            <ul className="classDirectory-items">
              {buildSections(this.props.sections)}
            </ul>
          </div>
        );
      },
    });
  };
}

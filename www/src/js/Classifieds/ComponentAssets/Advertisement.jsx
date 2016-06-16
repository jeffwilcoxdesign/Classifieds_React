export function advertisement({ React }) {
  return function Advertisement(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        return (
          <div className="advertisement-container">
            <a href={this.props.url}>
              <img className="advertisement-image" src={this.props.image} />
            </a>
          </div>
        );

      },
    });
  };
}

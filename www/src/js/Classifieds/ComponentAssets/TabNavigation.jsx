export function tabNavigation({ React }) {
  return function TabNavigation(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        function buildTabs(cntxt) {
          const {allTabData, activeTab} = cntxt.props;
          return Object.keys(allTabData).map((obj, idx) => (
            <div id={Object.keys(allTabData)[idx]}
              className={
                (allTabData[obj] === activeTab)
                ? "tabNav-active"
                : "tabNav-button"
              }
              key={idx}>
                {allTabData[obj].catagory}
            </div>
          ));
        }

        return (
          <div className="tabNav-container">
            {buildTabs(this)}
          </div>
        );
      },
    });
  };
}

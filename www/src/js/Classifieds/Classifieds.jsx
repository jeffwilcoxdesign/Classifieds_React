import { tabNavigation } from './ComponentAssets/TabNavigation.jsx';
import { contentLayout } from './ComponentAssets/ContentLayout.jsx';

export function classifieds({ React }, { ReactDOM }) {
  const TabNavigation = tabNavigation({ React });
  const ContentLayout = contentLayout({ React });

  return function Classifieds(props) {
    const {mainContent, defaultTab, placeAd} = props;
    return Object.assign({}, React.Component.prototype, {
      props,

      componentWillMount() {
        this.setState({
          content: mainContent[defaultTab],
        });
      },

      componentDidMount() {
        ReactDOM.findDOMNode(this.refs.tabNav).addEventListener('click',
          this.handleClick.bind(this)
        );
      },

      componentWillUnmount() {
        ReactDOM.findDOMNode(this.refs.tabNav).removeEventListener('click',
          this.handleClick.bind(this)
        );
      },

      handleClick(e) {
        this.setState({
          content: mainContent[e.target.id],
        });
      },

      render() {
        const {content} = this.state;
        const tabProps = Object.assign({}, {activeTab: content}, {allTabData: mainContent});
        return (
          <div className="classifieds-container">
            <TabNavigation ref='tabNav' {...tabProps} />
            <ContentLayout {...content} />
            <div className="placeAd-link">
              <a href={placeAd.url}>
                {placeAd.title}
              </a>
            </div>
          </div>
        );
      },
    });
  };
}

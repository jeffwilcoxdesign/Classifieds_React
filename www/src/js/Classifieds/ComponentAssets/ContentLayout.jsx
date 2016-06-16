import { featuredArticle } from './FeaturedArticle.jsx';
import { linksColumn } from './LinksColumn.jsx';
import { advertisement } from './Advertisement.jsx';
import { listDirectory } from './ListDirectory.jsx';

export function contentLayout({ React }) {
  const FeaturedArticle = featuredArticle({ React });
  const LinksColumn = linksColumn({ React });
  const Advertisement = advertisement({ React });
  const ListDirectory = listDirectory({ React });

  return function ContentLayout(props) {
    return Object.assign({}, React.Component.prototype, {
      props,

      render() {
        const {props} = this;
        const {sections, advertisement} = props;
        return (
          <div className="contentLayout-container">
            {(sections)
              ? <ListDirectory {...props} />
              : <div>
                  <FeaturedArticle {...props} />
                  <LinksColumn {...props} />
                  <Advertisement {...advertisement} />
                </div>
            }
          </div>
        );
      },
    });
  };
}

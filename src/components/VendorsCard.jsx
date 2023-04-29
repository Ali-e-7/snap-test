import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
export default function VendorsCards({ cardsData }) {
  const badges = cardsData?.badges.map((bags) => (
    <span className="send__type">{bags.title}</span>
  ));
  return (
    <>
      <div className="vendors">
        <div className="vendors__item">
          <div className="vendors__item__banner banner">
            <img
              src={cardsData.backgroundImage}
              alt={cardsData.vendorTypeTitle}
            />
            <div className="banner__image">
              <img src={cardsData.logo} alt={cardsData.vendorTypeTitle} />
            </div>
          </div>
          <div className="vendors__item__description">
            <div className="description">
              <div className="description__name__discount">
                <span className="name">{cardsData.title}</span>
                {cardsData.discountValueForView > 0 ? (
                  <span className="discount">
                    تا {cardsData.discountValueForView}%
                  </span>
                ) : null}
              </div>
              <div>
                <span className="comment-count">
                  ({cardsData.commentCount})
                </span>
                <span className="rate">
                  {cardsData.rate}
                  <Icon path={mdiStar} size={0.5} className="star-icon" />
                </span>
              </div>
            </div>
            <div className="food">
              <span>{cardsData.description}</span>
            </div>
            {badges ? (
              <div className="send">
                <div className="send__type">
                  {badges}
                  <span>15.500 تومان</span>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

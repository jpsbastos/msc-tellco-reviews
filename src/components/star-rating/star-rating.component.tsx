import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STARS_NUMBER = 5;

export class StarRating extends React.PureComponent<{ rating: number }> {
  public render(): JSX.Element {
    const { rating } = this.props;
    return <div className="star-rating">{this.renderRating(rating)}</div>;
  }

  public renderRating(rating: number) {
    const roundRating = Math.floor(rating);
    return (
      <React.Fragment>
        <div className="stars">
          {this.renderStar(1, roundRating)}
          {this.renderStar(2, roundRating)}
          {this.renderStar(3, roundRating)}
          {this.renderStar(4, roundRating)}
          {this.renderStar(5, roundRating)}
        </div>
        <em className="rating">{rating ? ` (${rating})` : ""}</em>
      </React.Fragment>
    );
  }

  public renderStar(starNumber: number, roundRating: number) {
    return (
      <FontAwesomeIcon
        icon={[roundRating >= starNumber ? "fas" : "far", "star"]}
      />
    );
  }
}

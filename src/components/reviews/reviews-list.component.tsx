import * as React from "react";
import { apiService } from "../../shared/api.service";
import { ReviewComponent } from "./review.component";

interface IReviewProps {
  productId: number;
}

export class ReviewListComponent extends React.Component<IReviewProps, {}> {
  public state: { reviews: IReview[] } = {
    reviews: [],
  };

  public constructor(props: IReviewProps) {
    super(props);
  }

  public componentDidMount(): void {
    const { productId } = this.props;
    if (productId) {
      this.requestProductReviews(productId);
    }
  }

  /**
   */
  public render(): JSX.Element {
    return (
      <div className="reviews-container">
        <h2>Reviews</h2>
        <div className="reviews-list">
          {this.state.reviews.map((r, i) => (
            <ReviewComponent review={r} key={r.title + i} />
          ))}
        </div>
      </div>
    );
  }

  private requestProductReviews(productId: number): void {
    apiService.getReviewsByProductId(productId).subscribe((reviews) => {
      this.setState({ reviews });
    });
  }
}

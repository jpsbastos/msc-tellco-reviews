import * as React from 'react';
import { apiService } from '../../shared/api.service';
import { DayJsHelper } from '../../shared/dayjs.helper';
import { StarRating } from '../star-rating/star-rating.component';

interface IReviewProps {
    review: IReview;
}

const CONFIG = {
    DefaultAuthor: 'Anonymous',
    DefaultReviewText: 'I really enjoyed this product. It matched precisely what I was looking for! Great price/quality balance!'
};

export class ReviewComponent extends React.Component<IReviewProps, {}> {

    public state = {
        clicked: false,
        review: this.props.review,
    };

    public constructor(props: IReviewProps) {
        super(props);
    }

    /**
     */
    public render(): JSX.Element {
        const { name, username, title, text, date, downVotes, upVotes, rating } = this.state.review;
        return (
           <div className="review">
               <div className="header">
                   <div className="rating-author-container">
                       <StarRating rating={rating}/>
                       <div className="author-container">
                           <h5>
                               <span>{username || CONFIG.DefaultAuthor}</span>
                               <span> | </span>
                               {date && <span>{DayJsHelper.formatDate(date)}</span>}
                           </h5>
                       </div>
                   </div>
                   <div className="title-container">
                       <h4>{title || name}</h4>
                   </div>
               </div>
               <div className="body">
                   <p>{text || Math.round(Math.random()) ? CONFIG.DefaultReviewText : ''}</p>
               </div>
               <div className="actions">
                   {this.renderButton('Yes', upVotes)}
                   {this.renderButton('No', downVotes)}
               </div>
           </div>
        );
    }

    private renderButton(label: string, nrVotes: number): JSX.Element {
        return <button disabled={this.state.clicked} onClick={() => this.incrementVotesAndLockButtons(label, nrVotes)}><span>{label}</span><span>·</span><span>{nrVotes}</span></button>;
    }

    private incrementVotesAndLockButtons(label: string, curVotes: number): void {
        label === 'Yes' ?
            this.setState({ clicked: true, review: { ...this.state.review, upVotes: curVotes + 1 } }) :
            this.setState({ clicked: true, review: { ...this.state.review, downVotes: curVotes + 1 } });
    }
}

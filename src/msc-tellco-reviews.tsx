import "./set-public-path";
import "./msc-tellco-reviews.scss";
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { ReviewListComponent } from "./components/reviews/reviews-list.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: ReviewListComponent,
  // errorBoundary(err, info, props) {
  //   // Customize the root error boundary for your microfrontend here.
  //   return null;
  // },
});

export const { bootstrap, mount, unmount } = lifecycles;

export { StarRating } from "./components/star-rating/star-rating.component";
export { ReviewListComponent } from "./components/reviews/reviews-list.component";

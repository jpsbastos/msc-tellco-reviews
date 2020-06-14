import { ajax } from "rxjs/ajax";
import { Observable } from "rxjs";

const BASE_PATH = "https://msc-tellco-reviews-service.herokuapp.com";
const ENDPOINT = "reviews";

class ApiService {
  /**
   * @param id id
   */
  public getReviewsByProductId(id: number): Observable<IReview[]> {
    return this.get<IReview[]>(`${ENDPOINT}?productId=${id}`);
  }

  /**
   * Retrieves data from a specified url by performing an AJAX Request with HTTP Get Method
   * @param path url
   */
  private get<T>(path: string): Observable<T> {
    return ajax.getJSON(`${BASE_PATH}/${path}`);
  }
}

export const apiService = new ApiService();

export interface ReviewModel {
  companyName: string;
  lastUpdate: string;
  recommendationToFriend: string;
  approveOfCeo: string;
  companyUpdate: string;
  reviews: Reviews[];
}

export interface Reviews {
  rating: number;
  employementStatus: number;
  employementType: number;
  employeeDesignation: string;
  location: string;
  reviewDate: string;
  reviewTitle: string;
  pros: string[];
  cons: string[];
  adviceToManagement: string;
}

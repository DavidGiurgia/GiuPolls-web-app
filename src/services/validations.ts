import { ImagePoll, Poll, QuestionPoll, QuizPoll, RankingPoll, RatingPoll, TextPoll } from "../types";

// validations.ts
export const validateQuestionPoll = (poll: QuestionPoll): boolean => {
    return !!poll.question; // Ensure the question is provided
  };
  
  export const validateTextPoll = (poll: TextPoll): boolean => {
    return (
      !!poll.question && poll.options.length >= 2 && poll.options.length <= 4
    );
  };
  
  export const validateImagePoll = (poll: ImagePoll): boolean => {
    return (
      !!poll.question &&
      poll.options.length >= 2 &&
      poll.options.length <= 4 &&
      poll.options.every((option) => !!option.image) // Ensure each option has an image
    );
  };
  
  export const validateQuizPoll = (poll: QuizPoll): boolean => {
    return (
      !!poll.question &&
      poll.options.length >= 2 &&
      poll.options.some((option) => option.isCorrect) // Ensure there's at least one correct answer
    );
  };
  
  export const validateRatingPoll = (poll: RatingPoll): boolean => {
    return (
      !!poll.question &&
      ['stars', 'emojis', 'slider'].includes(poll.ratingType) &&
      poll.scale >= 2 &&
      ((poll.ratingType === 'stars' && poll.scale <= 10) ||
        (poll.ratingType === 'emojis' && poll.scale <= 5) ||
        (poll.ratingType === 'slider' && !!poll.labels)) // Ensure labels are provided for sliders
    );
  };
  
  export const validateRankingPoll = (poll: RankingPoll): boolean => {
    return (
      !!poll.question &&
      poll.options.length >= 2 &&
      poll.options.length <= 4
    );
  };
  
  // Generic validation function
  export const validatePoll = (poll: Poll): boolean => {
    switch (poll.type) { // here
      case 'QuestionPoll':
        return validateQuestionPoll(poll as QuestionPoll);
      case 'TextPoll':
        return validateTextPoll(poll as TextPoll);
      case 'ImagePoll':
        return validateImagePoll(poll as ImagePoll);
      case 'QuizPoll':
        return validateQuizPoll(poll as QuizPoll);
      case 'RatingPoll':
        return validateRatingPoll(poll as RatingPoll);
      case 'RankingPoll':
        return validateRankingPoll(poll as RankingPoll);
      default:
        return false;
    }
  };

  //Property 'type' does not exist on type 'Poll'.
  //Property 'type' does not exist on type 'BasePoll'.ts(2339)
  //any
  
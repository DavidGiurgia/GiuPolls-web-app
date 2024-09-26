// Define base poll structure
export interface BasePoll {
    id: string;
    type: string;  
    question: string;
    image?: File[] | string; // Optional image, can be a File or URL
    createdAt: Date;
    updatedAt: Date;
    visibility: 'public' | 'private' | 'draft';
    isValid: boolean;
  }
  
  // Question Poll
export interface QuestionPoll extends BasePoll {
  type: 'QuestionPoll'; // Specify type
}

// Text Poll
export interface TextOption {
  text: string;
}
export interface TextPoll extends BasePoll {
  type: 'TextPoll'; // Specify type
  options: TextOption[];
}

// Image Poll
export interface ImageOption {
  image: File | string | undefined; // Optional image, can be a File or URL
  text?: string; // Optional text associated with the image 
}
export interface ImagePoll extends BasePoll {
  type: 'ImagePoll'; // Specify type
  options: ImageOption[];
}

// Quiz Poll
export interface QuizOption {
  text: string;
  isCorrect: boolean;
}
export interface QuizPoll extends BasePoll {
  type: 'QuizPoll'; // Specify type
  options: QuizOption[];
}

// Rating Poll
export type RatingType = 'stars' | 'emojis' | 'slider';
export interface RatingPoll extends BasePoll {
  type: 'RatingPoll'; // Specify type
  ratingType: RatingType;
  scale: number; // Number of stars/emojis or range of slider
  labels?: { min: string; max: string }; // For slider
}

// Ranking Poll
export interface RankingPoll extends BasePoll {
  type: 'RankingPoll'; // Specify type
  options: TextOption[] | ImageOption[]; // Currently text only, but will later support images
}
  // Union of All Poll Types
  export type Poll = QuestionPoll | TextPoll | ImagePoll | QuizPoll | RatingPoll | RankingPoll;
  

  export interface Survey {
    id: string;
    title: string;
    thumbnail?: File | string;
    description: string;
    tags: string[];
    visibility: 'public' | 'private' | 'draft';
    polls: Poll[];
    createdAt: Date;
    updatedAt: Date;
  }
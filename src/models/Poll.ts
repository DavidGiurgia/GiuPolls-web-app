import { Poll, QuestionPoll, TextPoll, ImagePoll, QuizPoll, RatingPoll, RankingPoll } from '../types'; // Import types

export class PollModel {
  private poll: Poll;

  constructor(poll: Poll) {
    this.poll = poll;
  }

  // Example method for validation
  validate(): boolean {
    if (!this.poll.question) {
      throw new Error("Question is required.");
    }

    if ('options' in this.poll && this.poll.options.length < 2) {
      throw new Error("At least two options are required.");
    }

    return true;
  }

  // Serialize poll to JSON
  toJSON(): string {
    return JSON.stringify(this.poll);
  }

  // Example static method to create a poll from raw data
  static fromJSON(json: string): PollModel {
    const data = JSON.parse(json) as Poll;
    return new PollModel(data);
  }
}

// pollService.ts

import { Poll } from "../types";
import { serializePoll, deserializePoll } from "./utils";

export const savePoll = async (poll: Poll) => {
  try {
    // Aici ar trebui să implementezi logica de creare a poll-ului în backend (API call etc.)
    console.log("Poll created:", poll);
    // Simulează un API call
    const serializedPoll = serializePoll(poll);
    // Replace this with API call or localStorage
    localStorage.setItem(`poll-${poll.id}`, serializedPoll);
    return { success: true, data: poll };
  } catch (error) {
    console.error("Failed to create poll:", error);
    return { success: false, error };
  }
};

export const getPoll = async (id: string): Promise<Poll | null> => {
  // Replace this with API call or localStorage
  const data = localStorage.getItem(`poll-${id}`);
  if (data) {
    return deserializePoll(data);
  }
  return null;
};

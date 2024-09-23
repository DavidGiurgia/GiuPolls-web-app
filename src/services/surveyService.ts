
// surveyService.ts

import { Survey } from "../types";

export const saveSurvey = async (survey: Survey) => {
    const serializedSurvey = JSON.stringify(survey);
    // Replace this with API call or localStorage
    localStorage.setItem(`survey-${survey.id}`, serializedSurvey);
  };
  
  export const getSurvey = async (id: string): Promise<Survey | null> => {
    const data = localStorage.getItem(`survey-${id}`);
    if (data) {
      const parsed = JSON.parse(data);
      parsed.createdAt = new Date(parsed.createdAt);
      parsed.updatedAt = new Date(parsed.updatedAt);
      return parsed as Survey;
    }
    return null;
  };
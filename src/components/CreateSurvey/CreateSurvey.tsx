/*
// createSurvey.tsx

import  { useState } from 'react';
import { saveSurvey } from '../../services/surveyService';
import { Survey } from '../../types';

const CreateSurvey = () => {
  const [survey, setSurvey] = useState<Survey | null>(null);

  const handleSave = async () => {
    if (survey) {
      try {
        await saveSurvey(survey);
        alert("Survey saved successfully!");
      } catch (error) {
        alert("Failed to save survey: " + error.message); //'error' is of type 'unknown'.ts(18046)
      }
    }
  };

  // Render form elements here and update survey state
  return (
    <div>
      <button onClick={handleSave}>Save Survey</button>
    </div>
  );
};

export default CreateSurvey; */
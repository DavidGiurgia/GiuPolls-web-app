/** createPoll.tsx

import { useState } from 'react';
import { savePoll } from '../../services/pollService';
import { Poll } from '../../types';

const CreatePoll = () => {
  const [poll, setPoll] = useState<Poll | null>(null); // here

  const handleSave = async () => {
    if (poll) {
      try {
        await savePoll(poll);
        alert("Poll saved successfully!");
      } catch (error) {
        alert("Failed to save poll: " + error.message); ///'error' is of type 'unknown'.ts(18046)
                                                       ////(local var) error: unknown
      }
    }
  };

  // Render form elements here and update poll state
  return (
    <div>
      <button onClick={handleSave}>Save Poll</button>
    </div>
  );
};

export default CreatePoll;


/**'setPoll' is assigned a value but never used.eslint@typescript-eslint/no-unused-vars
'setPoll' is declared but its value is never read.ts(6133)
const setPoll: React.Dispatch<React.SetStateAction<Poll | null>> */ 
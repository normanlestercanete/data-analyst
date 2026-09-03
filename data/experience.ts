export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  responsibilities: string[];
  skills: string[];
};

// Add verified roles here. The Experience section appears automatically once this array has entries.
// Each entry should include: company, position, startDate, endDate, location,
// description, key responsibilities, and relevant skills. Nothing is rendered while the array is empty.
export const experience: Experience[] = [];

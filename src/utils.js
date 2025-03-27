// This CreateSlug function was created with the help of Gemini
export const createSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };
export const validateIssue = (data: any) => {
  const { title, description, type } = data;

  if (!title || !description || !type) {
    return "Title, description and type are required";
  }

  if (title.length > 150) {
    return "Title cannot exceed 150 characters";
  }

  if (description.length < 20) {
    return "Description must be at least 20 characters";
  }

  if (type !== "bug" && type !== "feature_request") {
    return "Invalid issue type";
  }

  return null;
};

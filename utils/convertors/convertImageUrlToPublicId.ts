export const convertImageUrlToPublicId = (imageUrl: string) => {
  const parts = imageUrl.split('/');
  const filename = parts[parts.length - 1]; // Example: 'image123.jpg'
  const publicId = filename.split('.')[0]; // Remove file extension
  return publicId;
};

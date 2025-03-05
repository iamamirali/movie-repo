export const convertImageUrlToPublicId = (imageUrl: string) => {
  const parts = imageUrl.split('/');
  const filePath = `${parts[parts.length - 2]}/${parts[parts.length - 1]}`; // Example: 'MovieRepo/image123.jpg'
  const publicId = filePath.split('.')[0]; // Remove file extension
  return publicId;
};

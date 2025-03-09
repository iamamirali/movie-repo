**_ useFormState _**
It is used to have access to success, error or pending status of formAction

**_ convertImageUrlToPublicId _**
In every movie data, the full url is stored to access image directly. In cases like when we wanna delete an image, as images
of this project are saved in MovieRepo folder in cloudinary, the publicId which cloudinary understands to delete must be like this: MovieRepo/imageName . convertImageUrlToPublicId does the convert.

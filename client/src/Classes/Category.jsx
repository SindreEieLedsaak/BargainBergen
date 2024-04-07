class Category {
  constructor(title, imageSrc) {
    this.title = title;
    this.imageSrc = imageSrc || "path/to/default/category/image.jpg";
    this.link = `/products/${title.toLowerCase()}`;
  }
}
export default Category;

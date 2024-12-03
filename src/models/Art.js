

export class Art{
  constructor(data){
    this.id = data.id
    this.slug = data.slug
    this.originalLink = `https://unsplash.com/photos/${this.slug}`
    this.imgUrls = data.imgUrls.small
    this.description = data.description
    this.attribution = data.attribution
    this.admirers = data.admirers

  }
}
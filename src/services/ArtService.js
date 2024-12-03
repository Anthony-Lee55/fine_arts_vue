import { baseURL } from "@/env.js"
import { artApi } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"
import { Art } from "@/models/Art.js";
import { AppState } from "@/AppState.js";
import App from "@/App.vue";


class ArtService {
  async discoverArt(){
    const response = await artApi.get('api/artworks')
    logger.log('found', response.data);
    this.handleData(response.data)  
}

  async handleData(responseData){
    const arts = responseData.artworks.map(artPOJO => new Art(artPOJO))
    AppState.arts = arts
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.pages
  }

  async changePage(pageNumber){
    const response = await artApi.get(`api/artworks?page=${pageNumber}`)
    console.log('new page', response.data);
    const arts = response.data.artworks.map(artData => new Art(artData))
    AppState.arts = arts
    AppState.currentPage = response.data.page
    AppState.totalPages = response.data.pages
  }

}

export const artService = new ArtService()
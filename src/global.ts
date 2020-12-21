// export const BeURL = 'http://localhost:3000/';
export const BeURL = 'https://manga-reader-be.herokuapp.com/';

export const scaperURL = 'https://manga-reader-express.herokuapp.com/'
// export const scaperURL= 'http://localhost:4000/';


export const prodBool = true;
// export const prodBool = false;

export const defaultSRC = 'MGFX';


export const getSourceFromCode = function(code){
    if(code === 'MGPK'){
      return 'Manga Park'
    }else if(code === 'MGFX'){
        return 'Manga Fox'
    }else if(code === 'MGDX'){
      return 'MangaDex'
    }else{
      return 'Unknown Source'
    }
}

export const getsrcFromUrl = function(){
  //UPDATE THIS WITH SOURCES
  let currentUrl = window.location.href;
  if(currentUrl.indexOf('mangapark.net') !== -1 ){
    return "MGPK";
  }else if(currentUrl.indexOf('fanfox.net') !== -1 ){
    return "MGFX";
  }else if(currentUrl.indexOf('mangadex') !== -1 ){
    return "MGDX";
  }
}



// export const prodBool = true;

export const version = "v1.2";
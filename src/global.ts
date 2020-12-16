// export const BeURL = 'http://localhost:3000/';
export const BeURL = 'https://manga-reader-be.herokuapp.com/';

export const scaperURL = 'https://manga-reader-express.herokuapp.com/'
// export const scaperURL= 'http://localhost:4000/';


// export const prodBool = true;
export const prodBool = false;


export const getSourceFromCode = function(code){
    if(code === 'MGPK'){
      return 'Manga Park'
    }else{
      return 'Unknown Source'
    }
  }



// export const prodBool = true;

export const version = "v1";

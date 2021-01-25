// export const BeURL = 'http://localhost:3000/';
export const BeURL = 'https://manga-reader-be.herokuapp.com/';

export const scaperURL = 'https://manga-reader-express.herokuapp.com/';
// export const scaperURL = 'http://localhost:4000/';

let currentUrl = window.location.href;

export const prodBool = currentUrl.indexOf('github.io') !== -1 ? false : true;

export const version = '1.3.7';

export const defaultSRC = 'MGFX';

export const getSourceFromCode = function (code, srcObj) {
  try {
    // console.log(srcObj);
    return srcObj[code].name;
  } catch (e) {
    console.log(e);
  }
};

export const getsrcFromUrl = function (srcObj) {
  let currentUrl = window.location.href;
  // let index = 0;
  for (let i in srcObj) {
    // console.log(srcObj[i].domain);
    if (currentUrl.indexOf(srcObj[i].domain) !== -1) {
      return i;
    }
  }
};

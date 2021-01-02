import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { scaperURL, getsrcFromUrl } from '../../../../../global';
import { Location } from '@angular/common';
import Cookies from 'js-cookie';

@Component({
  selector: 'app-manga-viewer',
  templateUrl: './manga-viewer.component.html',
  styleUrls: ['./manga-viewer.component.css'],
})
export class MangaViewerComponent implements OnInit {
  isMobile: boolean = false;
  link: string;
  sub;
  data = [];
  dataBuffer;
  isSpinner: boolean = true;
  limitRate: boolean = true;
  isEnd: boolean = false;
  isEndOnePage: boolean = false;
  errorBool: boolean = false;
  reliableMode: boolean = false;
  calledReliable: boolean = false;
  showReliableMessage: boolean = false;
  viewerType: string;
  canLoad: boolean = true;
  pageNo = 0;
  @ViewChild('snackBar') snackBar: ElementRef;
  @ViewChild('scrollCont') scrollCont: ElementRef;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  getState() {
    let state;
    this.store
      .select((state) => state)
      .pipe(take(1))
      .subscribe((s) => {
        state = s;
      });
    return state.reducer;
  }

  handleBackBtn() {
    this.location.back();
  }

  handleImageError(e) {
    let src = getsrcFromUrl();
    if ((src === 'MGFX' || src === 'MGHR') && this.calledReliable === false) {
      this.reliableMode = true;
      this.calledReliable = true;
      this.isSpinner = true;
      this.showSnackBarReliable();
      this.getImages();
    } else if (!(src == 'MGFX' || src === 'MGHR')) {
      this.location.back();
    }
  }

  getImages() {
    console.log(this.link);
    if (this.reliableMode === false) {
      fetch(scaperURL + 'getImageList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ url: this.link }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.dataBuffer = data.imageList;
          this.displayImages();
          this.isSpinner = false;
        })
        .catch((e) => {
          console.log(e);
          this.location.back();
        });
    } else {
      console.log('RELIABLE ROUTE');
      this.data = [];
      fetch(scaperURL + 'getImageList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ url: this.link, reliable: true }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.dataBuffer = data.imageList;
          this.displayImages();
          this.isSpinner = false;
        })
        .catch((e) => {
          console.log(e);
          this.location.back();
        });
    }
  }

  showSnackBarReliable() {
    function slideUpEnd() {
      function slideDownEnd(that) {
        sb.classList.remove('animate__animated', 'animate__slideOutDown');
        sb.removeEventListener('animationend', slideDownEnd);
        that.showReliableMessage = false;
      }
      sb.removeEventListener('animationend', slideUpEnd);
      sb.classList.remove('animate__animated', 'animate__slideInUp');
      sb.classList.add('animate__animated', 'animate__slideOutDown');
      sb.addEventListener('animationend', slideDownEnd(this), {
        once: true,
      });
    }
    const sb = this.snackBar.nativeElement;
    this.showReliableMessage = true;
    sb.classList.add('animate__animated', 'animate__slideInUp');
    sb.addEventListener('animationend', slideUpEnd.bind(this), {
      once: true,
    });
  }

  handleScroll() {
    // if (this.showReliableMessage === false) {
    //   this.isEnd = false;
    // }
    const element = this.scrollCont.nativeElement;
    const sb = this.snackBar.nativeElement;

    function slideUpEnd() {
      sb.removeEventListener('animationend', slideUpEnd);
      this.isEnd = true;
    }
    if (
      Math.ceil(element.scrollHeight - element.scrollTop) ===
      element.clientHeight
    ) {
      this.isEnd = true;
      sb.classList.add('animate__animated', 'animate__slideInUp');
      sb.addEventListener('animationend', slideUpEnd.bind(this), {
        once: true,
      });
    } else {
      this.isEnd = false;
      sb.classList.remove('animate__animated', 'animate__slideInUp');
    }
  }

  displayImages() {
    let i = 0;
    // this.data = this.dataBuffer;
    let interval = setInterval(() => {
      this.data.push(this.dataBuffer[i]);
      i++;
      if (i === this.dataBuffer.length) {
        clearInterval(interval);
      }
    }, 20);
  }

  decrementPageNo(len) {
    if (this.canLoad) {
      this.isSpinner = true;
      this.canLoad = false;
      if (this.pageNo >= 1) {
        this.pageNo--;
        this.isEndOnePage = false;
      }
    }
  }

  checkLoad() {
    this.canLoad = true;
    this.isSpinner = false;
  }

  incrementPageNo(len) {
    if (this.canLoad) {
      this.isSpinner = true;
      this.canLoad = false;
      const sb = this.snackBar.nativeElement;
      if (this.pageNo <= len - 2) {
        this.pageNo++;
      } else if (this.pageNo === len - 1) {
        console.log('end');
        function slideUpEnd() {
          sb.removeEventListener('animationend', slideUpEnd);
          sb.classList.remove('animate__animated', 'animate__slideInUp');
        }
        sb.classList.add('animate__animated', 'animate__slideInUp');
        this.isEndOnePage = true;
        sb.addEventListener('animationend', slideUpEnd.bind(this), {
          once: true,
        });
      }
    }
  }
  ngOnInit(): void {
    this.isMobile = this.getState().mobileBool;
    if (Cookies.get('viewerType') === undefined) {
      Cookies.set('viewerType', 'vertical');
      this.viewerType = 'vertical';
    } else {
      this.viewerType = Cookies.get('viewerType');
    }
    this.sub = this.route.queryParams.subscribe((params) => {
      this.link = params.link;
      this.getImages();
    });
  }
}

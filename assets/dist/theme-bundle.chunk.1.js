(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{262:function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"default",(function(){return u}));var n=i(87),r=i(630),a=i(40),o=i(166),c=i(632),s=i(86),l=i(32);function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var u=function(e){var i,n;function u(i){var n;return(n=e.call(this,i)||this).url=window.location.href,n.$reviewLink=t('[data-reveal-id="modal-review-form"]'),n.$bulkPricingLink=t('[data-reveal-id="modal-bulk-pricing"]'),n.reviewModal=Object(l.c)("#modal-review-form")[0],n}n=e,(i=u).prototype=Object.create(n.prototype),i.prototype.constructor=i,d(i,n);var v=u.prototype;return v.onReady=function(){var e,i=this;t(document).on("close.fndtn.reveal",(function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),Object(a.b)(),this.productDetails=new o.a(t(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),Object(c.a)(),this.bulkPricingHandler();var n=Object(s.c)(".writeReview-form");if(0!==n.length){var l=new r.a(n);t("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=l.registerValidation(i.context),i.ariaDescribeReviewInputs(n)})),n.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler()}},v.ariaDescribeReviewInputs=function(e){e.find("[data-input]").each((function(e,i){var n=t(i),r=n.attr("name")+"-msg";n.siblings("span").attr("id",r),n.attr("aria-describedby",r)}))},v.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},v.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},u}(n.a)}.call(this,i(3))},630:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return s}));var n=i(39),r=i(40),a=i(55),o=i(631),c=i(86),s=function(){function e(e){this.validator=Object(n.a)({submit:e.find('input[type="submit"]'),tap:c.b}),this.$reviewsContent=t("#product-reviews"),this.$collapsible=t("[data-collapsible]",this.$reviewsContent),this.initLinkBind(),this.injectPaginationLink(),this.collapseReviews()}var i=e.prototype;return i.initLinkBind=function(){var e=this,i=t("#productReviews-content",this.$reviewsContent);t("#productReview_link").on("click",(function(){t(".productView-reviewTabLink").trigger("click"),i.hasClass("is-open")||e.$collapsible.trigger(r.a.click)}))},i.collapseReviews=function(){window.location.hash&&0===window.location.hash.indexOf("#product-reviews")||this.$collapsible.trigger(r.a.click)},i.injectPaginationLink=function(){var e=t(".pagination-item--next .pagination-link",this.$reviewsContent),i=t(".pagination-item--previous .pagination-link",this.$reviewsContent);e.length&&e.attr("href",e.attr("href")+" #product-reviews"),i.length&&i.attr("href",i.attr("href")+" #product-reviews")},i.registerValidation=function(t){return this.context=t,this.validator.add([{selector:'[name="revrating"]',validate:"presence",errorMessage:Object(o.a)(this.context.reviewRating)},{selector:'[name="revtitle"]',validate:"presence",errorMessage:Object(o.a)(this.context.reviewSubject)},{selector:'[name="revtext"]',validate:"presence",errorMessage:Object(o.a)(this.context.reviewComment)},{selector:'.writeReview-form [name="email"]',validate:function(t,e){t(a.a.email(e))},errorMessage:this.context.reviewEmail}]),this.validator},i.validate=function(){return this.validator.performCheck()},e}()}).call(this,i(3))},631:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var n=function(t){return(new DOMParser).parseFromString(t,"text/html").body.textContent}},632:function(t,e,i){"use strict";(function(t){i.d(e,"a",(function(){return r}));var n=function(){function e(t){this.$player=t.find("[data-video-player]"),this.$videos=t.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var i=e.prototype;return i.selectNewVideo=function(e){e.preventDefault();var i=t(e.currentTarget);this.currentVideo={id:i.data("videoId"),$selectedThumb:i},this.setMainVideo(),this.setActiveThumb()},i.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},i.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},i.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}();function r(){t("[data-video-gallery]").each((function(e,i){var r=t(i);r.data("video-gallery")instanceof n||r.data("video-gallery",new n(r))}))}}).call(this,i(3))}}]);
//# sourceMappingURL=theme-bundle.chunk.1.js.map
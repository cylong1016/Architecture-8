/**
 * Created by cpc on 12/27/15.
 */

var footerHeight = $('footer').height();
var waterFall = {
  scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
  cache: $('#cache'),

  appendDetect: function() {
    var shown = $('#water-fall');
    while (this.cache.children().length) {
      if (shown.offset().top+shown.height() >= this.scrollTop+(window.innerHeight||document.documentElement.clientHeight)) break;
      var course = this.cache.children(':eq(0)');
      handleStar(course);
      course.appendTo(shown).animate({'opacity': 1});
    }
    return this;
  },

  create: function() {
    this.appendDetect();
    return this;
  },

  scroll: function() {
    var self = this;
    window.onscroll = function() {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (!this.loadFinish && scrollTop+(window.innerHeight||document.documentElement.clientHeight)+200+footerHeight >= document.documentElement.scrollHeight) {
        self.scrollTop = scrollTop;
        self.appendDetect();
      }
    };
    return this;
  },

  resize: function() {
    var self = this;
    window.onresize = function() {
      self.appendDetect();
    };
    return this;
  },

  init: function() {
    this.create().scroll().resize();
  }
};
waterFall.init();

function handleStar(course) {
  var scoreNode = course.find('.score');
  var sixEm = '<img src="' + rootUrl + '/Public/img/starEm.png"/> \n';

  var score = scoreNode.children("span").text().match(/(\d\.\d)/)[1];
  var s = parseInt(Number(score)+0.5);
  var deleteS = 5 - s;
  for(var j=deleteS-1; j>=0; j--){
    scoreNode.children("img").eq(j).remove();
    scoreNode.children("span").before(sixEm);
  }
}

function news($http) {
    var URL = 'http://api-nghyf.rhcloud.com/news';
    var data;
    this.setNews=function(news){
      this.data=news;
    }
    this.getNews = function () {
        return $http.get(URL);
    };

}

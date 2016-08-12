function newsCard() {
    return {
        restrict: 'EA',
        scope: {
            news: '='
        },
        template: `<div class="row">
                <div class="col s12">
                  <div class="card grey lighten-3">
                    <div class="card-content">
                      <span class="card-title">{{ news.city }}</span>
                      <h4>{{ news.main }}</h4>
                      <p> {{ news.description }}</p>
                      <p> {{ news.temperature }}</p>
                    </div>
                  </div>
                </div>
              </div>`
    };
}

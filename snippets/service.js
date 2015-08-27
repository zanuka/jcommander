export default juno.Service.extend({

  is: 'path/to/service/Service',

  base: '//base/url/path',

  cache: 'client|server|all|none',

  getUser(config) {
    config = config || {};
    return this.fetch(this.builder('service/path', config), {
      timeout: 4000
    }).then(res => res.json());
  }

  

);
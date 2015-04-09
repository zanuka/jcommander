import chai from 'chai';
import JunoTest from 'global/JunoTest';
import ComponentName from 'path/to/component/ComponentName';
let expect = chai.expect;


describe('ComponentName Tests', () => {
  let data;
  beforeEach( () => {
    data = {};
  });

  it('Should <expected behavior> when <expected precondition>', (done) => {
    JunoTest.loadComponent(ComponentName,data).then( () => {
    
    }).finish(done);
  });
});



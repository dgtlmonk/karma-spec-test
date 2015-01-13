'use strict';

describe('testing controller testCtrl', function() {
  beforeEach(module("testApp"));

  var testCtrl, scope;

  beforeEach (inject(function($controller, $rootScope){
    scope = $rootScope;
    testCtrl = $controller('testCtrl',{ $scope :scope})
  }));

  it('should say hello', function() {
    expect(scope.hello).toBe("Hello Joel");  
//    expect(scope.hello).toBe("Hello Joelski"); // to fail  
  });
});

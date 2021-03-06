angular.module('starter.services', ['ionic'])


.controller('list1Ctrl', function($scope, $ionicModal, $ionicPopup) {
    
  $scope.saved = localStorage.getItem('list1');
  $scope.list1s = (localStorage.getItem('list1') !== null) ? JSON.parse($scope.saved) : [{
    text: 'DrumSticks',
    done: false
  }, {
    text: 'CornBread',
    done: false
  }, {
    text: 'Peach Schnapps',
    done: false
  }, {
    text: 'Carrots',
    done: false
  }];
  localStorage.setItem('list1', JSON.stringify($scope.list1s));
        
  $scope.addTodo = function() {
            
    $scope.list1s.push({
      text: $scope.todoText,
      done: false
    });
    
      
    localStorage.setItem('list1', JSON.stringify($scope.list1s));
      
    $scope.todoText = ''; //clear the input after adding
      
  
    
    //update list when addeddeddededd


  };

  /*Delete Funtion*/
  $scope.archive = function() {
    
    var latch = false;
    var oldTodos = $scope.list1s;

    angular.forEach(oldTodos, function(todo) {
      if (todo.done) {
        latch = true;
        //alert("latch open");
      }
    });

    //alert($scope.todos.length);
    if (latch) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          $scope.list1s = [];

          angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
              $scope.list1s.push(todo);
          });
          localStorage.setItem('list1', JSON.stringify($scope.list1s));
        } else {

        }
      });
    } else {

      var alertPopup = $ionicPopup.alert({
        title: 'Nothing Selected!',
        template: 'Please select an item.'
      });
      alertPopup.then(function(res) {});

    }

  }

})
  /*end Delete*/

/////////////// Tab Two ///////////////


.controller('list2Ctrl', function($scope, $ionicModal, $ionicPopup) {
    
  $scope.saved = localStorage.getItem('list2');
  $scope.list2s = (localStorage.getItem('list2') !== null) ? JSON.parse($scope.saved) : [{
    text: 'DrumS',
    done: false
  }, {
    text: 'CornB',
    done: false
  }, {
    text: 'PeachS',
    done: false
  }, {
    text: 'Car',
    done: false
  }];
  localStorage.setItem('list2', JSON.stringify($scope.list2s));
        
  $scope.addTodo = function() {
            
    $scope.list2s.push({
      text: $scope.todoText,
      done: false
    });
    
      
    localStorage.setItem('list2', JSON.stringify($scope.list2s));
      
    $scope.todoText = ''; //clear the input after adding
      
  
    
    //update list when addeddeddededd


  };

  /*Delete Funtion*/
  $scope.archive = function() {
    
    var latch = false;
    var oldTodos = $scope.list2s;

    angular.forEach(oldTodos, function(todo) {
      if (todo.done) {
        latch = true;
        //alert("latch open");
      }
    });

    //alert($scope.todos.length);
    if (latch) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          $scope.list2s = [];

          angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
              $scope.list2s.push(todo);
          });
          localStorage.setItem('list2', JSON.stringify($scope.list2s));
        } else {

        }
      });
    } else {

      var alertPopup = $ionicPopup.alert({
        title: 'Nothing Selected!',
        template: 'Please select an item.'
      });
      alertPopup.then(function(res) {});

    }

  }

})


/////////////// Tab Three ///////////////

.controller('list3Ctrl', function($scope, $ionicModal, $ionicPopup) {
    
  $scope.saved = localStorage.getItem('list3');
  $scope.list3s = (localStorage.getItem('list3') !== null) ? JSON.parse($scope.saved) : [{
    text: 'Jank',
    done: false
  }, {
    text: 'More Jank',
    done: false
  }, {
    text: 'Some Gank',
    done: false
  }, {
    text: 'Tools',
    done: false
  }];
  localStorage.setItem('list3', JSON.stringify($scope.list3s));
        
  $scope.addTodo = function() {
            
    $scope.list3s.push({
      text: $scope.todoText,
      done: false
    });
    
      
    localStorage.setItem('list3', JSON.stringify($scope.list3s));
      
    $scope.todoText = ''; //clear the input after adding
      
  
    
    //update list when addeddeddededd


  };

  /*Delete Funtion*/
  $scope.archive = function() {
    
    var latch = false;
    var oldTodos = $scope.list3s;

    angular.forEach(oldTodos, function(todo) {
      if (todo.done) {
        latch = true;
        //alert("latch open");
      }
    });

    //alert($scope.todos.length);
    if (latch) {
      var confirmPopup = $ionicPopup.confirm({
        title: 'Delete',
        template: 'Are you sure?'
      });
      confirmPopup.then(function(res) {
        if (res) {
          $scope.list3s = [];

          angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
              $scope.list3s.push(todo);
          });
          localStorage.setItem('list3', JSON.stringify($scope.list3s));
        } else {

        }
      });
    } else {

      var alertPopup = $ionicPopup.alert({
        title: 'Nothing Selected!',
        template: 'Please select an item.'
      });
      alertPopup.then(function(res) {});

    }

  }

})


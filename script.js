// Code goes here

function buildStringFrom(text){
  text = ' '+ text.split('').join(' ') + ' '
  var toReturn = ''
  var textArr = text.split('')
  for (var i = 0; i<=6; i++){
    textArr.forEach(function(letter){
      toReturn += map[letter][i]
    })
    toReturn += '\n'
  }
  return toReturn;
}

var convertToEmoji = function(str,light,dark){
  str = str.toLowerCase()
  str = buildStringFrom(str)
  return str.replace(/0/g,light).replace(/1/g,dark)
}

var app = angular.module('emojiConverter', [])
app.controller('MainCtrl', function($scope){
  $scope.lightSquare = ':white_square:'
  $scope.darkSquare = ':black_square:'
  $scope.convert = function(){
    test()
    $scope.output = convertToEmoji($scope.inputStr,$scope.lightSquare,$scope.darkSquare)
    if ($scope.output.length >  4000) $scope.error = 'You are over the Slack character limit! Try using a shorter emoji name or less characters'
  }

  var test = function(){
    if ($scope.inputStr.match(/[.,-\/#!$%\^&\*;:{}=\-_`~()]|[0-9]/)){
      $scope.error = "Sorry, punctuation and numbers are not yet supported"
    }
    else{
      $scope.error = ''
    }
  }
  
  $scope.copyToClipboard = function(){
    var copyFrom = document.createElement("textarea");
    copyFrom.textContent = $scope.output
    var body = document.getElementsByTagName('body')[0];
    body.appendChild(copyFrom);
    copyFrom.select();
    document.execCommand('copy');
    body.removeChild(copyFrom);
  };

  $scope.error = ''
})

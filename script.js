// Code goes here

var alphabet = "000000!011110!010010!011110!010010!010010!000000!!000000!011110!010010!011100!010010!011110!000000!!000000!001110!010000!010000!010000!001110!000000!!000000!011100!010010!010010!010010!011100!000000!!000000!011110!010000!011100!010000!011110!000000!!000000!011110!010000!011100!010000!010000!000000!!000000!011110!010000!010110!010010!011110!000000!!000000!010010!010010!011110!010010!010010!000000!!00000!01110!00100!00100!00100!01110!00000!!000000!001110!000100!000100!010100!001100!000000!!000000!010010!010100!011000!010100!010010!000000!!00000!01000!01000!01000!01000!01110!00000!!0000000!0100010!0110110!0101010!0100010!0100010!0000000!!0000000!0100010!0110010!0101010!0100110!0100010!0000000!!000000!001100!010010!010010!010010!001100!000000!!000000!011100!010010!011100!010000!010000!000000!!0000000!0011000!0100100!0100100!0100100!0011110!0000000!!000000!011100!010010!011100!010100!010010!000000!!000000!001110!010000!001100!000010!011100!000000!!0000000!0111110!0001000!0001000!0001000!0001000!0000000!!0000000!0100010!0100010!0100010!0100010!0011100!0000000!!0000000!0100010!0100010!0100010!0010100!0001000!0000000!!000000000!010000010!010000010!010010010!010101010!001000100!000000000!!0000000!0100010!0010100!0001000!0010100!0100010!0000000!!0000000!0100010!0010100!0001000!0001000!0001000!0000000!!0000000!0111110!0000100!0001000!0010000!0111110!0000000"
alphabet = alphabet.split('!!')

var actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split('')

var map = {}

for (var i = 0; i < 26; i++){
  map[actualAlphabet[i]] = alphabet[i].split('!');
}

function buildStringFrom(text){
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

var emojiTable = 
{
  'light': ':zeke-swirl:',
  'dark': ':gaby-dance:'
}
var convertToEmoji = function(str,light,dark){
  str = str.toLowerCase()
  str = buildStringFrom(str)
  return str.replace(/0/g,light).replace(/1/g,dark)
}

var app = angular.module('emojiConverter', [])
app.controller('MainCtrl', function($scope){
  $scope.lightSquare = ':zeke-swirl:'
  $scope.darkSquare = ':gaby-dance:'
  $scope.convert = function(){
    $scope.output = convertToEmoji($scope.inputStr,$scope.lightSquare,$scope.darkSquare)
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
})

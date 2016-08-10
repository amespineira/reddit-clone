var app = angular.module("reddit", ['ngMessages']);

app.controller('main', function($scope){
  $scope.sortExpand=false;
  $scope.view={}
  $scope.new={}
  $scope.newComment={}
  $scope.view.currSort="votes"
  $scope.showSubmit=false;
  $scope.sortType="votes"
  $scope.posts=[
    {
      title:'atest1',
     score:1,
     text:'alsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejf',
     author:'Joe Schmo',
     posted:new Date(),
     comments:[{author:"person", text:'test'}],
     img:'http://static6.comicvine.com/uploads/scale_medium/0/77/502508-thing_brian_haberlin01.jpg',
     show:true,
     showComments:false,
     addComment:false
    },
    {
      title:'btest2',
     score:50,
     text:'alsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejfalsdafjasldfkjasdlfkasjdf jsdlfasjfalweifjiawefj owef wofi wjfoaweifjwef oweifj weoifejfeofiejfoeif ef eo iejf',
     author:'Someone else',
     posted:new Date(),
     comments:[{author:"otherPerson", text:'tes2t'}],
     img: 'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=0ahUKEwid7bSFy7fOAhUDyGMKHaDnBzkQjRwIBw&url=https%3A%2F%2Fwww.enterprise.com%2Fen%2Fcar-rental%2Fvehicles%2Fus%2Fsuvs.html&bvm=bv.129389765,d.cGc&psig=AFQjCNGMoGxSszDv9nWc4qd8P9QF2XyNEA&ust=1470943863402990',
     show:true,
     showComments:false,
     addComment:false
    },
  ];
  $scope.submit=function(){
    $scope.posts.push({
      title:$scope.new.title,
      score: 0,
      text: $scope.new.text,
      author: $scope.new.author,
      posted: new Date(),
      comments: [],
      img: $scope.new.img,
      show:true
    })
    $scope.new={}
    $scope.showSubmit=false
    $scope.sort($scope.sortType);
  }
  $scope.addVote=function(post, type){
    switch(type){
      case 'up':
        post.score++;
        break;
      case 'down':
        post.score--;
        break;
    }
    $scope.sort($scope.sortType)
  }
  $scope.sort=function(type){
    console.log("doing sort");
    $scope.sortType=type;
    console.log(type);
    switch (type){
      case "votes":
        $scope.posts.sort(function(a, b){
          return (a.score<b.score)
        })
      break;
      case "title":
        $scope.posts.sort(function(a, b){
          return (a.title>b.title)
        })
      break;
    }
  }
  $scope.search=function(){
    $scope.posts.forEach(function(post){
      post.show=!(post.text.indexOf($scope.view.search)===-1 && post.title.indexOf($scope.view.search)===-1)
    })
  }
  $scope.addComment=function(post){
    post.comments.push({
        author:$scope.newComment.author,
        text:$scope.newComment.text
      })
      $scope.newComment={}

  }
  $scope.sort('votes');

})

var quizCtrl = function ($scope, $http, helper) {
    $scope.quizName = 'data/question.js';
    $scope.quizz = 0;
     
    $scope.defaultConfig = {
        'allowBack': true,
        'allowReview': true,
        'autoMove': true,  // if true, it will move to next question automatically when answered.
        'duration': 0,  // indicates the time in which quiz needs to be completed. post that, quiz will be automatically submitted. 0 means unlimited.
        'pageSize': 1,
        'requiredAll': false,  // indicates if you must answer all the questions before submitting.
        'richText': false,
        'shuffleQuestions': false,
        'shuffleOptions': false,
        'showClock': false,
        'showPager': true,
        'theme': 'none'
    }

    $scope.addQuizstorage = function(info){
        console.log(info);
        $http.post('php/insert.php', info).then(function(response){
            window.location.href = 'http://localhost:81/project2/user2/index.html#/';
        });
        
    }

    $scope.nextQuiz = function(){
        if($scope.quizz == 1){
                 $scope.quizName = 'data/question2.js';
                }else if($scope.quizz == 2){
                $scope.quizName = 'data/question3.js';
                }else if($scope.quizz == 3){
                $scope.quizName = 'data/question4.js';
                }else if($scope.quizz == 4){
                $scope.quizName = 'data/question5.js';
                }else if($scope.quizz == 5){
                $scope.quizName = 'data/question6.js';
                }else if($scope.quizz == 6){
                $scope.quizName = 'data/question7.js';
                }else if($scope.quizz == 7){
                $scope.quizName = 'data/question8.js';
                }else if($scope.quizz == 8){
                $scope.quizName = 'data/question9.js';
                }else if($scope.quizz == 9){
                $scope.quizName = 'data/question10.js';
                }else if($scope.quizz == 10){
                $scope.quizName = 'data/question11.js';
                }else if($scope.quizz == 11){
                $scope.quizName = 'data/question12.js';
                }
    }

    $scope.goTo = function (index) {
        if (index > 0 && index <= $scope.totalItems) {
            $scope.currentPage = index;
            $scope.mode = 'quiz';
        }
    }

    $scope.onSelect = function (question, option) {
        if (question.QuestionTypeId != null) {
            question.Options.forEach(function (element, index, array) {
                if (element.Id != option.Id) {
                    element.Selected = false;
                    //question.Answered = element.Id;
                }
            });
        }
        if(option.Selected == option.condition){
            if($scope.quizz < 11){
                $scope.quizz++;
                $scope.nextQuiz();
                $scope.loadQuiz($scope.quizName);
            }else{
                window.location.href = 'http://localhost:81/project2/user2/index.html#/test';
            }
        }else{
            if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems){
                var storageQ2 = JSON.parse(localStorage.getItem("storageQuiz"));
                storageQ2.qId = question.Id;
                storageQ2.opId = option.Id;
                storageQ2.score = option.score;
                storageQ2.qtype = question.QuestionTypeId;
                localStorage.setItem("storageQuiz",JSON.stringify(storageQ2));
                var addQ = localStorage.getItem("storageQuiz");
                $scope.addQuiz(addQ);
                $scope.currentPage++;
            }else if($scope.currentPage == $scope.totalItems && $scope.quizz < 11){
                $scope.quizz++;
                var storageQ3 = JSON.parse(localStorage.getItem("storageQuiz"));
                storageQ3.qId = question.Id;
                storageQ3.opId = option.Id;
                storageQ3.score = option.score;
                storageQ3.qtype = question.QuestionTypeId;
                localStorage.setItem("storageQuiz",JSON.stringify(storageQ3));
                var addQ = localStorage.getItem("storageQuiz");
                $scope.addQuiz(addQ);
                $scope.nextQuiz();
                $scope.loadQuiz($scope.quizName);
            }else if($scope.currentPage == $scope.totalItems && $scope.quizz == 11){
                var storageQ4 = JSON.parse(localStorage.getItem("storageQuiz"));
                storageQ4.qId = question.Id;
                storageQ4.opId = option.Id;
                storageQ4.score = option.score;
                storageQ4.qtype = question.QuestionTypeId;
                localStorage.setItem("storageQuiz",JSON.stringify(storageQ4));
                var addQ = localStorage.getItem("storageQuiz");
                $scope.addQuiz(addQ);
                window.location.href = 'http://localhost:81/project2/user2/index.html#/test';
            }
        }
    }

    $scope.addQuiz = function(info){
        console.log(info);
        $http.post('db/insertQuiz.php', info).then(function(response){
        });
    }

    $scope.pageCount = function () {
        return Math.ceil($scope.questions.length / $scope.itemsPerPage);
    };

    //If you wish, you may create a separate factory or service to call loadQuiz. To keep things simple, i have kept it within controller.
    $scope.loadQuiz = function (file) {
        $http.get(file)
         .then(function (res) {
             $scope.quiz = res.data.quiz;
             $scope.config = helper.extend({}, $scope.defaultConfig, res.data.config);
             $scope.questions = $scope.config.shuffleQuestions ? helper.shuffle(res.data.questions) : res.data.questions;
             $scope.totalItems = $scope.questions.length;
             $scope.itemsPerPage = $scope.config.pageSize;
             $scope.currentPage = 1;
             $scope.mode = 'quiz';
             if($scope.config.shuffleOptions)
                $scope.shuffleOptions();

             $scope.$watch('currentPage + itemsPerPage', function () {
                 var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
                   end = begin + $scope.itemsPerPage;

                 $scope.filteredQuestions = $scope.questions.slice(begin, end);
             });
         });
    }
    
    $scope.shuffleOptions = function(){
        $scope.questions.forEach(function (question) {
           question.Options = helper.shuffle(question.Options);
        });
    }
    
    $scope.loadQuiz($scope.quizName);
}

quizCtrl.$inject = ['$scope', '$http', 'helperService'];
app.controller('quizCtrl', quizCtrl);

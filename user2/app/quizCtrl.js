var quizCtrl = function ($scope, $http, helper) {
    $scope.quizName = 'data/question.js';
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

    $scope.goTo = function (index) {
        if (index > 0 && index <= $scope.totalItems) {
            $scope.currentPage = index;
            $scope.mode = 'quiz';
        }
    }

    $scope.onSelect = function (question, option) {
        if (question.QuestionTypeId == 1) {
            question.Options.forEach(function (element, index, array) {
                if (element.Id != option.Id) {
                    element.Selected = false;
                    //question.Answered = element.Id;
                }
            });
        }
        if (helper.toBool(option.Selected) == option.IsAnswer) {
               
        if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems)
            console.log(option.Test);
            console.log(option.Id);
            $scope.currentPage = option.Test;
        }else{
            if ($scope.config.autoMove == true && $scope.currentPage < $scope.totalItems)
             $scope.currentPage++;
        }
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

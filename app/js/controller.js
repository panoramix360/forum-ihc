var app = angular.module('app', []);

var text = "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.";

var replyText = "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.";

app.controller('MainController', function($scope) {
	$scope.posts = [
		{ titulo: 'GTA V', texto: text, categoria: 'Jogos' },
		{ titulo: 'True Detective', texto: text, categoria: 'Séries' },
		{ titulo: 'Godzilla 2', texto: text, categoria: 'Filmes' }
	];

	$scope.post = {};

	$scope.postView = {};

	$scope.replies = [];

	$scope.reply = {};

	$scope.criarPost = function() {
		$scope.posts.push($scope.post);
		$scope.post = {};
	};

	$scope.abrirPost = function(index) {
		var postAtual = $scope.posts[index];

		$scope.postView.titulo = postAtual.titulo;
		$scope.postView.texto = postAtual.texto;

		$('#detalhes-topico').modal('show');
	};

	$scope.adicionarReply = function() {
		$scope.reply.user = 'User 1234';
		$scope.replies.push($scope.reply);
		$scope.reply = {};
	};
});

app.filter('textLimit', function() {
	return function(input, length) {
		if(input.length > 400) {
			return input.substring(0, 400) + '...';
		} else {
			return input;
		}
	};
});
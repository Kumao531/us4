$(function () {

  // 送信ボタンクリック時の処理
  $('submit').on( 'click', function (event) {
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果、エラーがあるかないかの判定
    let result = inputCheck();
  });

  // フォーカスが外れたとき(blur)にフォームの入力チェックをする
  $('#name').blur(function () {
    inputCheck();
  });
  $('#mail').blur(function () {
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck() {
    console.log('inputCheck関数の呼び出し');
  }

});
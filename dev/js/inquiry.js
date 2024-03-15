$(function () {

  /* 送信ボタンクリック時の処理 */
  $('#submit').on('click', function (event) {

    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックをした結果、エラーがあるかないかの判定
    let result = inputCheck();

    // エラー判定とエラーメッセージの取得
    let error = result.error;
    let message = result.message;

    console.log('error<' + error + '>');
    console.log('message<' + message + '>');

    // エラーがなかったらフォームを送信する
    if (error == false) {
      // フォームの送信を実際は行わず、送信成功のメッセージを出す
      alert('お問い合わせを送信しました。');
    } else {
      // エラーメッセージを表示する
      alert(message);
    }

  });

  /* 必須入力項目からフォーカスが外れた時(blur)にフォームのチェックを行う */
  $('#username-obj').blur(function () {
    inputCheck();
  });
  $('#telephone-no').blur(function () {
    inputCheck();
  });
  $('#mail-object').blur(function () {
    inputCheck();
  });
  $('#other-inquiry-object').blur(function () {
    inputCheck();
  });

  /* 入力チェック */
  function inputCheck() {
    console.log('inputCheck関数の呼び出し');

    // エラーチェック結果を受け取る変数の準備
    let result = false;
    // エラーメッセージの格納変数の準備
    let message = "";
    // エラー状態(true)か否か(false)の状態を保持する変数の準備と初期化
    let error = false;

    /* 「お名前」のチェック */
    /* 入力されていることのチェック */
    if ($('#username-obj').val() == '') {
      // 空なのでエラー
      $('#username-obj').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#username-obj').css('background-color', '#fafafa');
    }

    /* 「性別」のチェック */
    /* どこにもチェックが入っていなかったらエラー */
    if ($('#sex').prop('checked') == false) {
      // 未チェックでエラー
      error = true;
      message += '性別にチェックを入れてください。\n';
    } else {
      // エラーなし
    }

    /* 「電話番号」のチェック */
    /* 未入力は「ok」。入力されたたらフォーマット形式を確認 */
    if ( $('#telephone-no').val() != '' &&  $('#telephone-no').val().indexOf('-') == -1 ) {
      // 入力された電話のフォーマット形式に誤りがあり、エラー
      $('#telephone-no').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#telephone-no').css('background-color', '#fafafa');
    }

    /* 「電子メール」のチェック */
    /* 入力されていることのチェック */
    if ($('#mail-object').val() == '' ||
        $('#mail-object').val().indexOf('@') == -1 ||
        $('#mail-object').val().indexOf('.') == -1 ) {
      // 空か、アドレス形式が正しくないのでエラー
      $('#mail-object').css('background-color', '#f79999');
      error = true;
      message += '電子メールアドレスが未記入か、あるいはアドレスに「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#mail-object').css('background-color', '#fafafa');
    }

    /* 「お問い合わせの種類の「その他」欄」のチェック(PC用) */
    /* 入力されていることのチェック */
    if ($('#other-inquiry-object').val() == '') {
      // 空なのでエラー
      $('#other-inquiry-object').css('background-color', '#f79999');
      error = true;
      message += '「お問い合わせの種類」が「その他」ですので「その他」の欄にお問い合わせの目的を入力してください。\n';
    } else {
      // エラーなし
      $('#other-inquiry-object').css('background-color', '#fafafa');
    }

    /* エラー状態の有無で送信ボタンを切り替え */
    // エラーがあれば送信ボタンを非表示
    if ( error == true ) {
      $('#submit').attr('src', './button-send-noactive.png');
    } else {
      // エラーがなければ送信ボタンを表示する
      $('#submit').attr('src', './button-send-active.png');
    }
  }

  /* チェック判定結果の作成 */
  result = {
    error: error,
    message: message
  }

  /* 戻り値としてエラー結果を返す */
  return result;

});
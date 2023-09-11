document.addEventListener('DOMContentLoaded', function () {
  const loadingScreen = document.getElementById('loading-screen');
  const reloadButton = document.getElementById('reload-button');

  // ページ読み込みが完了したらダウンロード中の画面を非表示にする
  window.addEventListener('load', function () {
      loadingScreen.style.display = 'none';
  });

  // ページ再読み込みボタンがクリックされたらダウンロード中の画面を表示する
  reloadButton.addEventListener('click', function () {
      loadingScreen.style.display = 'block';

      // ページを再読み込みする
      window.location.reload();

      // なんかわからんけどブランチ分けるの忘れてこの分だけ書いてます
  });
});

window.addEventListener("beforeunload", function (event) {
  event.preventDefault(); // ページを離れる前のデフォルトのアクションを無効化
  event.returnValue = ""; // メッセージを表示するためのダミーのテキストを設定
  // メッセージを表示
  alert("ページをリロードしてもよろしいですか？");

  const reloadButton = document.getElementById('reload-button');

        // ページ再読み込みボタンがクリックされたときの処理
        reloadButton.addEventListener('click', function() {
            // firstpage.html にリダイレクト
            window.location.href = 'file:///Users/terashimakenshin/share-site-vtn/firstpage.html';
        });

      });

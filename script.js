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

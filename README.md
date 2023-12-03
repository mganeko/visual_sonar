# Visual Sonar

# Desctiption

- 目が不自由な人用の、ビジュアルソナー
- カメラで周囲の様子を定期的に撮影
- GPT4-Vで、様子を解析
- 音声合成で、ユーザーに伝える
- アクセシビリティに配慮。音声で操作できるのが理想
- 画像について、音声入力で細かい様子を質問できるようにしたい
- 質問 or 次の撮影にすすむかを、音声で制御(Functin Calling?)

# page

- [backcam.html](backcam.html)
- [vision_trial](vision_trial.html)
- [vsonar](vsonar.html)
- [speech_trial](speech_trial.html)

# TODO

- [ ] スマホブラウザで動作
  - [ ] iPhone Safari
  - [ ] Andorid Chrome
- [x] 背面カメラの映像を取得
  - [x] mediadevices.getUserMedia()
- [x] 映像から画像を取得、Base64変換
  - [x] Canvasを使ってDataURLを取得
  - [-] OffscreenCanvasを使う --> toDataURL()が使えない
  - [x] pythonのBase64と合わせる
- [ ] chat gpt-4-vision-preview で画像を送信
  - [x] singleChatWithImage() 関数を用意
  - [x] image URL ... public URL
  - [x] image URL with Base64
  - [ ] 履歴を扱う、multipleChatWithImage() 関数を用意
- [ ] 解析パターンを追加
  - [x] 普通に説明
  - [ ] 詳細に説明
  - [ ] もっと詳しく説明（履歴あり）
  - [x] 商品ラベル等の文字の読み上げ
  - [ ] 歩く際の障害物を検知
- [ ] api key
  - [x] QueryStringから取得
  - [x] inputから取得
- [ ] UI改善
  - [x] ボタン制御
  - [x] [Explain in Voice]ボタンで、写真->解析->発声 まで
- [ ] ログ出力
  - [ ] 画面に出す  
- [x] 音声出力(tts)
  - [x] ttsのテスト
  - [x] 取得内容を音声でプレイバック
- [ ] 音声入力
  - [ ] speech API
  - [ ] or getUserMedia()
- [ ] 最初の起動を声で（Siri＋ショートカット）

# Refer 参考

- https://dev.classmethod.jp/articles/openai-new-features-nodejs/
- https://dev.classmethod.jp/articles/openai-update-at-devday/

- https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition


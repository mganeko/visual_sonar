# Visual Sonar

# Desctiption

- 目が不自由な人用の、ビジュアルソナー
- カメラで周囲の様子を定期的に撮影
- GPT4-Vで、様子を解析
- 音声合成で、ユーザーに伝える
- 今後やりたいこと
  - アクセシビリティに配慮。音声で操作できるのが理想
  - 画像について、音声入力で細かい様子を質問できるようにしたい
  - 質問 or 次の撮影にすすむかを、音声で制御(Functin Calling?)

# 使い方

- [vsonar.html](https://mganeko.github.io/visual_sonar/vsonar.html)をブラウザで表示
- [api key]に、OpenAIのAPIキーを指定
  - または、vsonar.html?key=xxxxxx とURLのクエリーパラメータに指定してもOK
- [Start]ボタンをクリック
  - カメラの許可を求められらた、許可する
  - カメラの映像が表示される
- [Explain in Voice]ボタンをクリック
  - 映像から画面を切り抜き
  - OpenAIの GPT-4 Vで画面を解析
  - TTSで音声に変換、それを再生して画像の説明をする
- [Stop]ボタンをクリックすると、カメラの映像が停止

# page

Visual Sonnar

- [vsonar](vsonar.html)

実験ページ

- [backcam.html](backcam.html)
- [vision_trial](vision_trial.html)
- [speech_trial](speech_trial.html)

# ライセンス/License

MIT

# TODO

- [ ] スマホブラウザで動作
  - [x] iPhone Safari
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
  - [x] or getUserMedia()　with VAD
- [ ] 最初の起動を声で（Siri＋ショートカット）
- [ ] 一連の動き
  - [ ] 起動時は、カメラ開始のボタンが大きく出ている
  - [ ] 最初の画面タップで、カメラを起動
    - [ ] カメラ開始のボタンは小さくなる。
    - [ ] 「カメラを起動しました」と音声で通知
    - [ ] キャプチャーボタンを大きく表示 or カメラ映像表示 Videoタグのクリックで、キャプチャ
    - [ ] ダブルタップイベント or 長押しイベントが取れるなら、それでカメラ終了
  - [ ] 次の画面タップで、写真を撮って、「見えているものを解析してます」
  - [ ] 解析結果を読み上げ
  - [ ] その後、「追加の質問をどうぞ」と音声で確認
  - [ ] 音声VADを開始
    - [ ] 音声コマンドがあったらそれをテキスト化(Speech-to-text)
    - [ ] さっきの画像について、さらにGPTに問い合わせ（さらに解析中、と音声通知）
    - [ ] 解析結果を読み上げ
  - [ ] 「追加の質問をどうぞ」と音声で確認、VADを再開
  - [ ] 画面がタップされたら、写真を撮って、チャットの履歴をクリア、また解析を行う
- [x] テキストを音声にして、ダウンロードするツール  

# Refer 参考

- https://dev.classmethod.jp/articles/openai-new-features-nodejs/
- https://dev.classmethod.jp/articles/openai-update-at-devday/

- https://developer.mozilla.org/ja/docs/Web/API/SpeechRecognition


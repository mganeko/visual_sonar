# Visual Sonar

# Desctiption

- 目が不自由な人用の、ビジュアルソナー
- カメラで周囲の様子を定期的に撮影
- GPT4-Vで、様子を解析
- 音声合成で、ユーザーに伝える
- アクセシビリティに配慮。音声で操作できるのが理想
- 画像について、音声入力で細かい様子を質問できるようにしたい
- 質問 or 次の撮影にすすむかを、音声で制御(Functin Calling?)


# TODO

- [ ] スマホブラウザで動作
  - [ ] iPhone Safari
  - [ ] Andorid Chrome
- [ ] 背面カメラの映像を取得
  - [ ] mediadevices.getUserMedia()
- [ ] 映像から画像を取得、Base64変換
- [ ] 音声入力
  - [ ] speech API
  - [ ] or getUserMedia()
- [ ] 最初の起動を声で（Siri＋ショートカット）

# Refer 参考

- https://dev.classmethod.jp/articles/openai-new-features-nodejs/
- https://dev.classmethod.jp/articles/openai-update-at-devday/



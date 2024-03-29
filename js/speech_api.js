//
// OpenAI Speech API wrapper
//


// ============== public function ==============

/*
 * テキストを音声に変換する
 */
/**
* テキストを音声ファイル(mp3)に変換する
* @description テキストを音声ファイル(mp3)に変換する
* @param {string} text - 変換するテキスト
* @param {string} apiKey - OpenAI APIのキー
* @returns {blob} 音声ファイル(mp3)
* @example textToSpeech('How are you?', 'sk-xxxxxxx'); // returns blob of mp3
*/
async function textToSpeech(text, apiKey) {
  const apiUrl = 'https://api.openai.com/v1/audio/speech';

  // -- build header --
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  // --- build body ---
  const bodyJson = {
    model: 'tts-1',
    input: text,
    voice: "alloy",
  };
  const body = JSON.stringify(bodyJson);

  // --- request ---
  _speechDebugLog('start tts');
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body,
  }).catch(e => {
    console.error(e);
    return null;
  });
  _speechDebugLog('end tts');
  _speechDebugLog(res);

  // エラー判定
  if (!res.ok) {
    return null;
  }

  const responseBlob = await res.blob();
  return responseBlob;
}

/*
 * 音声をテキストに変換する（文字起こし）
 */
/**
* 音声をテキストに変換する（文字起こし）
* @description 音声をテキストに変換する（文字起こし）
* @param {File} file - 変換する音声ファイル
* @param {string} apiKey - OpenAI APIのキー
* @returns {string} テキスト
* @example speechToText(fileobj, 'sk-xxxxxxx'); // returns text
*/
async function speechToText(file, apiKey) {
  const apiUrl = 'https://api.openai.com/v1/audio/transcriptions';

  // -- build header --
  const headers = {
    //"Content-Type": "multipart/form-data", // NOT NEED
    Authorization: `Bearer ${apiKey}`,
  };

  // --- build body ---
  const fd = new FormData();
  fd.append('file', file);
  fd.append('model', 'whisper-1');
  fd.append('language', 'ja');
  fd.append('temperature', '0');
  fd.append('response_format', 'json');
  const body = fd;


  // --- request ---
  _speechDebugLog('start stt');
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: headers,
    body,
  }).catch(e => {
    console.error(e);
    return null;
  });
  _speechDebugLog('end stt');
  _speechDebugLog(res);

  // エラー判定
  if (!res.ok) {
    console.error('NOT OK;', res.status);
    return null;
  }

  const responseJson = await res.json();
  return responseJson.text;
}

/*
 * 音声blobを再生する
 */
/**
* 音声blobをオーディオ要素で再生する
* @description 音声blobをオーディオ要素で再生する
* @param {element} audioElement - オーディオ要素
* @param {blob} blob - 音声blob
* @returns {none} なし
* @example playbacBlobAsync(audio, blob)
*/
async function playbacBlobAsync(audioElement, blob) {
  const blobUrl = URL.createObjectURL(blob);
  audioElement.src = blobUrl;
  audioElement.onload = (evt) => {
    _speechDebugLog('onload');
  };
  // audioElement.onerror = (err) => {
  //   console.error('audio playback ERROR:', err);
  // };
  // audioElement.onended = (evt) => {
  //   _speechDebugLog('playback end');
  //   URL.revokeObjectURL(blobUrl);
  // };
  //await audioElement.play();

  const p = new Promise((resolve, reject) => {
    audioElement.onended = (evt) => {
      _speechDebugLog('playback end');
      URL.revokeObjectURL(blobUrl);
      resolve();
    };
    audioElement.onerror = (err) => {
      console.error('audio playback ERROR:', err);
      reject(err);
    };
    audioElement.play();
  });

  await p;
}

/*
 * audio要素の再生を準備する（クリックイベントで呼び出し、再生の準備をする）
 */
/**
 * audio要素の再生を準備する（クリックイベントで呼び出し、再生の準備をする）
 * @description audio要素の再生を準備する（クリックイベントで呼び出し、再生の準備をする）
 * @param {element} audioElement - オーディオ要素
 * @returns {none} なし
 * @example preparePlay(audio)
 */
function preparePlay(audioElement) {
  audioElement.play().catch(err => { _speechDebugLog(err); });
  audioElement.pause();
}

// ======= inner variable =========
const _speechDebugMode = true; // true / false


// ============= helper function ============


// デバッグ用のログ出力
function _speechDebugLog(...args) {
  if (_speechDebugMode) {
    //console.log(...args);

    // 呼び出し元の情報を併せて出力する
    //const line = Error().stack.split('\n')[2]; //.split(':')[1];
    const stack = Error().stack.split('\n');
    const line = stack[2] ?? stack[1] ?? stack[0];

    console.log(line, ': ', ...args);
  }
}

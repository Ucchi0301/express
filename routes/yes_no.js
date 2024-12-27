const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
  request('https://yesno.wtf/api', (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body); // レスポンスのbodyをJSONに変換
      res.json(data); // 取得したデータをレスポンスとして送信
    } else {
      res.status(500).json({ error: 'Failed to fetch API' }); // エラーハンドリング
    }
  });
});

module.exports = router;

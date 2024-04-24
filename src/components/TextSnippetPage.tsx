import React from 'react'
import TextSnippet from './TextSnippet';

const TextSnippetPage = () => {
  const path = require('path')
  const fs = require('fs');
  // テキストファイル名一覧の取得
  const pagetxtPath: string = path.join(__dirname, '../../../public/pagetxt')
  const fileNames: string[] = fs.readdirSync(pagetxtPath);

  // ファイル名から１ファイルの内容読み込み→レンダリング
  const textSnippets = fileNames.map((fileName: string) => {
    const file: string = fs.readFileSync(`${pagetxtPath}/${fileName}`, 'utf8');
    let key = 0;
    key++;
    return <TextSnippet file={file} key={key}/>
  })
  return (
    <div>
      {textSnippets}
    </div>
  )
}

export default TextSnippetPage

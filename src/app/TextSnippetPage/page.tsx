import React from 'react'
import TextSnippet from './TextSnippet';
import Link from 'next/link';
import Header from '@/common/Header';

const snippetPageStyle: React.CSSProperties = {
  width: '80%',
  marginLeft: '10%',
  marginRight: '10%',
  display: 'flex',
  flexWrap: 'wrap'
}

const shuffleArray = (array: string[]) => {
  return array.slice().sort(() => Math.random() - Math.random())
}

/**
 * テキストスニペット一覧ページ
 */
const TextSnippetPage: React.FC = () => {
  const path = require('path')
  const fs = require('fs');
  // テキストファイル名一覧の取得
  const pagetxtPath: string = path.join(__dirname, '../../../../public/pagetxt')
  const fileNames: string[] = fs.readdirSync(pagetxtPath);

  // ファイル名をランダムに並び替え
  const randFilenames = shuffleArray(fileNames);

  // ファイル名から１ファイルの内容読み込み→レンダリング
  const textSnippets = randFilenames.map((fileName: string) => {
    const file: string = fs.readFileSync(`${pagetxtPath}/${fileName}`, 'utf8');
    let key = 0;
    key++;
    return <TextSnippet file={file} key={key} />
  })

  // ページ描画内容
  return (
    <>
      <Header />
      <div style={snippetPageStyle}>
        {textSnippets}
      </div>
    </>
  )
}

export default TextSnippetPage

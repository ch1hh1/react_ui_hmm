import React from 'react'

type TextSnippetProps = {
  file: string
}

const snippetStyle = {
  border: '1px solid #aaaaaa',
  borderRadius: '8px',
  padding: '8px 16px 16px 16px',
  margin: '32px 0 32px 0'
}

// 任意の1テキストファイルを受け取り、表示する。
const TextSnippet = (props: TextSnippetProps) => {
  const textArr = props.file.split(/\n/g);
  // 見出しの抽出
  const header = textArr.shift();

  // 本文ラインの生成
  const bodyLine = textArr.map((txt: string) => {
    let key = 0;
    key++
    return <p key={key}>{txt}</p>
  })

  // 最終return
  return (
    <div style={snippetStyle}>
      <h2>{header}</h2>
      {bodyLine}
    </div>
  )
}

export default TextSnippet

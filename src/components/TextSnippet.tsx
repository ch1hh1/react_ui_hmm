import React from 'react'
import styles from '../../style/scrollbar.module.scss';

type TextSnippetProps = {
  file: string
}

const snippetStyle = {
  // border: '1px solid #aaaaaa',
  borderRadius: '8px',
  width: '30%',
  marginBottom: '32px',
  padding: '4px 8px 8px 16px',
  aspectRatio: '1/1',
  overflow: 'scroll',
}
const pStyle = {
  color:'#303030',
}

// 任意の1テキストファイルを受け取り、表示する。
const TextSnippet = (props: TextSnippetProps) => {
  const textArr = props.file.split(/\n/g);
  // 見出しの抽出
  const header = textArr.shift();

  // 本文ラインをランダム並び替え

  const bodyLine = textArr.map((txt: string) => {
    let key = 0;
    key++
    return <p key={key} style={pStyle}>{txt}</p>
  })

  // 最終return
  return (
    <div className={styles.scrollbar} style={snippetStyle}>
      <h3>{header}</h3>
      {bodyLine}
    </div>
  )
}

export default TextSnippet

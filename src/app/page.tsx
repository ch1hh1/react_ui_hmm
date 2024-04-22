export default function Home() {
  const path = require('path')
  const fs = require('fs');
  const pagetxtPath: string = path.join(__dirname, '../../../public/pagetxt')
  const files: string[] = fs.readdirSync(pagetxtPath);
  return (
    <div>
      <h1>みだし</h1>
      <p>{files.join(' ')}</p>
      <p>publicフォルダ内のファイル名を取得したので</p>
      <p>ファイル名からファイルの中身を読んで</p>
      <p>いい感じに表示するコンポーネントを作る</p>
      <p>適当に枠つけて繰り返す</p>
    </div>
  );
}

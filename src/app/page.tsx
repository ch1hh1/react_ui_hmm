export default function Home() {
  const path = require('path')
  const fs = require('fs');
  // テキストファイル名一覧の取得
  const pagetxtPath: string = path.join(__dirname, '../../../public/pagetxt')
  const fileNames: string[] = fs.readdirSync(pagetxtPath);

  // 任意の1ファイルの取得
  const file: string = fs.readFileSync(`${pagetxtPath}/${fileNames[0]}`, 'utf8');

  const aaa = file.replace(/\n/g, '●');
  const bbb = aaa.split('●');
  return (
    <div>
      <h1>みだし</h1>
      <h2>{fileNames[0]}</h2>
      <p>{fileNames.join(' ')}</p>
      <p>*{bbb[0]}</p>
      <p>*{bbb[1]}</p>
      <p>*{bbb[2]}</p>
      <p>*{bbb[3]}</p>
    </div>
  );
}

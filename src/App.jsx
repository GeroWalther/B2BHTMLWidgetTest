import './App.css';

function App() {
  return (
    <div className='app-container'>
      <header className='hero-section'>
        <h1 className='hero-title'>B2B AIチャットウィジェット HTMLテスト</h1>
        <div className='hero-subtitle'>
          AI駆動型カスタマーエンゲージメントの力を体験
        </div>
      </header>

      <main className='content-section'>
        <h2 className='section-title'>AIウィジェットのテスト方法</h2>

        <div className='instruction-cards'>
          <div className='instruction-card'>
            <div className='step-number'>1</div>
            <div className='card-content'>
              <strong className='card-title'>
                チャットウィジェットのテスト
              </strong>
              <p className='card-description'>
                このページの右下にあるチャットバブルを探してください。クリックしてasOneのAIアシスタントとの対話を開始できます。
              </p>
            </div>
          </div>

          <div className='instruction-card'>
            <div className='step-number'>2</div>
            <div className='card-content'>
              <strong className='card-title'>管理ダッシュボード</strong>
              <p className='card-description'>
                設定については、{' '}
                <a
                  href='https://admin.gw-intech.com'
                  target='_blank'
                  className='admin-link'>
                  admin.gw-intech.com
                </a>
                にアクセスして、ドキュメントのアップロード、FAQ管理、カラー・テーマ・テキスト・トーン・ルールのカスタマイズなどを行えます。
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

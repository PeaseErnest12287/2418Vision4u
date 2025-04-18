import React, { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import './css/Donate.css';

const Donate = () => {
  // Organization details - these would ideally come from a config or CMS
  const orgDetails = {
    paypalEmail: 'donations@2418vision4u.org',
    organizationName: '2418 Vision 4 U',
    campaignId: 'faith-2023', // Unique ID for this campaign
  };

  const [donationAmount, setDonationAmount] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('paypal');
  const [donationType, setDonationType] = useState('one-time');
  const [showThankYou, setShowThankYou] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Show confetti when thank you appears
  useEffect(() => {
    if (showThankYou) {
      setShowConfetti(true);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  const handleDonationSubmit = (e) => {
    e.preventDefault();
    
    // Validate input
    if (!donationAmount || isNaN(donationAmount) || parseFloat(donationAmount) <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }

    if (selectedPaymentMethod === 'paypal') {
      // Generate PayPal donation link
      const paypalUrl = generatePaypalLink();
      // Open PayPal in new tab
      window.open(paypalUrl, '_blank');
      
      // Show thank you message (in reality you'd want to verify payment first)
      setShowThankYou(true);
    } else {
      // Handle credit card processing (would need actual payment processor integration)
      setShowThankYou(true);
    }
  };

  const generatePaypalLink = () => {
    const baseUrl = 'https://www.paypal.com/donate';
    const params = new URLSearchParams({
      business: orgDetails.paypalEmail,
      amount: donationAmount,
      currency_code: 'USD',
      item_name: `${donationType === 'monthly' ? 'Monthly' : 'One-time'} donation to ${orgDetails.organizationName}`,
      cmd: donationType === 'monthly' ? '_xclick-subscriptions' : '_donations',
      return: window.location.href + '?payment=success&campaign=' + orgDetails.campaignId,
      cancel_return: window.location.href + '?payment=cancelled',
      source: 'website_donation_form',
      custom: JSON.stringify({
        campaignId: orgDetails.campaignId,
        donationType: donationType,
        donorId: 'tracking-id-here' // You would generate this dynamically
      })
    });

    return `${baseUrl}?${params.toString()}`;
  };

  const handleAmountSelection = (amount) => {
    setDonationAmount(amount);
  };

  const calculateYearlyAmount = (monthlyAmount) => {
    return (parseFloat(monthlyAmount) * 12).toFixed(2);
  };

  // Check for PayPal return in URL
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('payment') === 'success') {
      setShowThankYou(true);
    }
  }, []);

  return (
    <div className="donate-container" id="donation-page">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="donate-header">
        <h2>Be the Light. Give Hope. Change a Life.</h2>
        <p className="mission-statement">Your gift fuels our mission to provide education, healthcare, and opportunities to those in need.</p>
      </div>

      <div className="testimonial" id="faith-testimonial">
        <blockquote>
          "Because of your donations, I was able to attend school and build a better future for my family."
          <footer>— Faith, Uganda</footer>
        </blockquote>
        <blockquote>
          "Because of your donations, I was able to attend school and build a better future for my family."
          <footer>— Faith, Uganda</footer>
        </blockquote>
        <blockquote>
          "Because of your donations, I was able to attend school and build a better future for my family."
          <footer>— Faith, Uganda</footer>
        </blockquote>
      </div>

      <div className="donation-tabs">
        <button 
          className={`tab-button ${donationType === 'one-time' ? 'active' : ''}`}
          onClick={() => setDonationType('one-time')}
          id="one-time-tab"
        >
          One-Time Gift
        </button>
        <button 
          className={`tab-button ${donationType === 'monthly' ? 'active' : ''}`}
          onClick={() => setDonationType('monthly')}
          id="monthly-tab"
        >
          Monthly Support
        </button>
      </div>

      <form onSubmit={handleDonationSubmit} className="donation-form" id="donation-form">
        {donationType === 'one-time' ? (
          <div className="donation-card">
            <h3>Make a One-Time Donation</h3>
            
            <div className="amount-presets">
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('25')} id="amount-25">$25</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('50')} id="amount-50">$50</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('100')} id="amount-100">$100</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('')} id="amount-custom">Custom</button>
            </div>
            
            <div className="input-group">
              <span className="currency-symbol">$</span>
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="donation-input"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)} 
                min="1"
                step="1"
                required
                id="donation-amount-input"
              />
            </div>
          </div>
        ) : (
          <div className="donation-card">
            <h3>Become a Monthly Supporter</h3>
            
            <div className="amount-presets">
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('10')} id="monthly-10">$10</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('25')} id="monthly-25">$25</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('50')} id="monthly-50">$50</button>
              <button type="button" className="amount-option" onClick={() => handleAmountSelection('')} id="monthly-custom">Custom</button>
            </div>
            
            <div className="input-group">
              <span className="currency-symbol">$</span>
              <input 
                type="number" 
                placeholder="Enter monthly amount" 
                className="donation-input"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                min="1"
                step="1"
                required
                id="monthly-amount-input"
              />
            </div>
            
            {donationAmount && !isNaN(donationAmount) && parseFloat(donationAmount) > 0 && (
              <p className="yearly-amount">
                That's ${calculateYearlyAmount(donationAmount)} annually. You're amazing!
              </p>
            )}
          </div>
        )}

        <div className="payment-section">
          <h4>Payment Method</h4>
          <div className="payment-methods">
            <label className={`payment-option ${selectedPaymentMethod === 'paypal' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="paymentMethod"
                value="paypal"
                checked={selectedPaymentMethod === 'paypal'}
                onChange={() => setSelectedPaymentMethod('paypal')}
                id="paypal-option"
              />
              <div className="payment-icon paypal-icon"></div>
              PayPal
            </label>
            
            <label className={`payment-option ${selectedPaymentMethod === 'credit-card' ? 'selected' : ''}`}>
              <input 
                type="radio" 
                name="paymentMethod"
                value="credit-card"
                checked={selectedPaymentMethod === 'credit-card'}
                onChange={() => setSelectedPaymentMethod('credit-card')}
                id="credit-card-option"
              />
              <div className="payment-icon credit-card-icon"></div>
              Credit Card
            </label>
          </div>

          {selectedPaymentMethod === 'credit-card' && (
            <div className="credit-card-form">
              <div className="form-row">
                <input type="text" placeholder="Card Number" required id="card-number" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="MM/YY" required id="card-expiry" />
                <input type="text" placeholder="CVC" required id="card-cvc" />
              </div>
            </div>
          )}
        </div>

        <button 
          type="submit"
          className="donate-btn"
          disabled={!donationAmount || isNaN(donationAmount) || parseFloat(donationAmount) <= 0}
          id="donate-submit-btn"
        >
          {donationType === 'one-time' ? 'Donate Now' : 'Start Monthly Support'}
        </button>
      </form>

      <div className="impact-meter" id="campaign-progress">
        <div className="progress-text">
          <span>Goal: $5,000</span>
          <span>Raised: $3,200</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: '64%' }}></div>
        </div>
      </div>

      {showThankYou && (
        <div className="thank-you-overlay">
          <div className="thank-you-modal" id="thank-you-message">
            <h3>Thank You for Your Generous Support! 💛</h3>
            <p>Your donation of ${donationAmount} {donationType === 'monthly' ? 'each month' : 'today'} will make a real difference in people's lives.</p>
            
            <div className="thank-you-actions">
              <button className="share-btn" id="share-button">Share with Friends</button>
              <button 
                className="return-btn"
                onClick={() => {
                  setShowThankYou(false);
                  setDonationAmount('');
                }}
                id="return-button"
              >
                See What You've Supported
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
// am done with this page
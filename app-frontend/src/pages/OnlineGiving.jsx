import React, { useState, useEffect } from 'react';

const OnlineGiving = () => {
  const [formData, setFormData] = useState({
    name: '',
    mpesaNumber: '',
    membership: 'vipingo', // Default selection
    tithes: 0,
    combinedOffering: 0,
    localChurchBudget: 0,
    churchDevelopment: 0,
    campMeetingOffering: 0,
    campMeetingExpenses: 0,
    thanksgiving: 0,
    welfare: 0
  });

  const membershipOptions = [
    { value: 'vipingo', label: 'Vipingo SDA Church' },
    { value: 'shariani', label: 'Shariani S/S' },
    { value: 'visitor', label: 'Visitor' }
  ];

  const [total, setTotal] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Calculate total whenever giving amounts change
  useEffect(() => {
    const sum = Object.entries(formData)
      .filter(([key]) => !['name', 'mpesaNumber', 'membership'].includes(key))
      .reduce((acc, [_, value]) => acc + Number(value), 0);
    setTotal(sum);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'membership' ? value : 
              name.includes('Number') ? value : 
              Math.max(0, Number(value))
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        mpesaNumber: '',
        membership: 'vipingo',
        tithes: 0,
        combinedOffering: 0,
        localChurchBudget: 0,
        churchDevelopment: 0,
        campMeetingOffering: 0,
        campMeetingExpenses: 0,
        thanksgiving: 0,
        welfare: 0
      });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="giving-page">
      <div className="giving-container">
        <h1>Online Giving</h1>
        <p className="giving-intro">
          "Each of you should give what you have decided in your heart to give..."
        </p>

        <form onSubmit={handleSubmit} className="giving-form">
          <div className="form-section">
            <h2>Personal Information</h2>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="mpesaNumber">M-Pesa Phone Number</label>
              <input
                type="tel"
                id="mpesaNumber"
                name="mpesaNumber"
                value={formData.mpesaNumber}
                onChange={handleChange}
                pattern="[0-9]{10}"
                placeholder="07XXXXXXXX"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="membership">Membership</label>
              <select
                id="membership"
                name="membership"
                value={formData.membership}
                onChange={handleChange}
                className="membership-select"
                required
              >
                {membershipOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-section">
            <h2>Your Giving</h2>
            <div className="giving-grid">
              <div className="form-group">
                <label htmlFor="tithes">Tithes (10%)</label>
                <input
                  type="number"
                  id="tithes"
                  name="tithes"
                  value={formData.tithes}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="combinedOffering">Combined Offering</label>
                <input
                  type="number"
                  id="combinedOffering"
                  name="combinedOffering"
                  value={formData.combinedOffering}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="localChurchBudget">Local Church Budget</label>
                <input
                  type="number"
                  id="localChurchBudget"
                  name="localChurchBudget"
                  value={formData.localChurchBudget}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="churchDevelopment">Church Development</label>
                <input
                  type="number"
                  id="churchDevelopment"
                  name="churchDevelopment"
                  value={formData.churchDevelopment}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="campMeetingOffering">Camp Meeting Offering</label>
                <input
                  type="number"
                  id="campMeetingOffering"
                  name="campMeetingOffering"
                  value={formData.campMeetingOffering}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="campMeetingExpenses">Camp Meeting Expenses</label>
                <input
                  type="number"
                  id="campMeetingExpenses"
                  name="campMeetingExpenses"
                  value={formData.campMeetingExpenses}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="thanksgiving">Thanksgiving Offering</label>
                <input
                  type="number"
                  id="thanksgiving"
                  name="thanksgiving"
                  value={formData.thanksgiving}
                  onChange={handleChange}
                  min="0"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="welfare">Welfare</label>
                <input
                  type="number"
                  id="welfare"
                  name="welfare"
                  value={formData.welfare}
                  onChange={handleChange}
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className="total-section">
            <h3>Total Amount:</h3>
            <div className="total-amount">KSh {total.toLocaleString()}</div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting || total === 0}
            >
              {isSubmitting ? 'Processing...' : 'Submit Giving via M-Pesa'}
            </button>
          </div>

          {submitSuccess && (
            <div className="success-message">
              Thank you for your giving! A payment request has been sent to your M-Pesa number.
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default OnlineGiving;
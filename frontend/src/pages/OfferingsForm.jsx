import React, { useState } from 'react';

const OfferingsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membership: '',
    tithe: 0,
    combinedOffering: 0,
    localChurchBudget: 0,
    churchBuilding: 0,
    churchEvangelism: 0,
    campMeetingOffering: 0,
    campMeetingExpenses: 0,
    thanksgiving: 0,
    welfare: 0,
    others: 0,
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const val = name === 'membership' || name === 'email' || name === 'name' || name === 'phone' ? value : parseFloat(value || 0);
    setFormData((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  const totalGiving = Object.entries(formData)
    .filter(([key]) =>
      ['tithe', 'combinedOffering', 'localChurchBudget', 'churchBuilding', 'churchEvangelism', 'campMeetingOffering', 'campMeetingExpenses', 'thanksgiving', 'welfare', 'others'].includes(key)
    )
    .reduce((acc, [, val]) => acc + (Number(val) || 0), 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submission = {
      ...formData,
      totalGiving,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch("https://your-api-id.execute-api.your-region.amazonaws.com/prod/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const result = await res.json();
      setStatus({ success: true, message: result.message || "Submission successful. SMS will follow." });
    } catch (err) {
      setStatus({ success: false, message: "Error submitting offering. Try again later." });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 shadow-lg rounded-lg bg-white border">
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Vipingo SDA Church Offerings Form</h1>
      {status && (
        <div className={`p-3 mb-4 rounded ${status.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {status.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Personal Info */}
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full p-2 border rounded" />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} className="w-full p-2 border rounded" />

        {/* Membership Dropdown */}
        <select name="membership" required onChange={handleChange} className="w-full p-2 border rounded">
          <option value="">-- Select Membership --</option>
          <option value="Vipingo SDA Church">Vipingo SDA Church</option>
          <option value="Shariani S/S">Shariani S/S</option>
          <option value="Sabbath School Member">Sabbath School Member</option>
          <option value="Visitor">Visitor</option>
        </select>

        {/* Offering Inputs */}
        {[
          ['tithe', 'Tithe'],
          ['combinedOffering', 'Combined Offering'],
          ['localChurchBudget', 'Local Church Budget'],
          ['churchBuilding', 'Church Building'],
          ['churchEvangelism', 'Church Evangelism'],
          ['campMeetingOffering', 'Camp Meeting Offering'],
          ['campMeetingExpenses', 'Camp Meeting Expenses'],
          ['thanksgiving', 'Thanksgiving'],
          ['welfare', 'Welfare'],
          ['others', 'Others'],
        ].map(([name, label]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type="number"
              name={name}
              min="0"
              step="0.01"
              value={formData[name]}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        ))}

        {/* Total Giving */}
        <div className="text-xl font-semibold mt-4">
          Total Giving: <span className="text-green-600">KES {totalGiving.toFixed(2)}</span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 mt-4 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Submit & Send to M-Pesa
        </button>
      </form>
    </div>
  );
};

export default OfferingsForm;

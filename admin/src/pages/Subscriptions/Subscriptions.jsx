
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './subscriptions.css'

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(false)
  const [statusMap, setStatusMap] = useState({})
  const [paymentStatusMap, setPaymentStatusMap] = useState({})
  const [updating, setUpdating] = useState(false)
  const token = localStorage.getItem('adminToken')
  const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const fetchSubscriptions = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${url}/api/subscriptions/list`, { headers: { token } })
      console.log('ADMIN SUBS FETCH', res.data)
      if (res.data.success) setSubscriptions(res.data.data)
    } catch (err) {
      console.error('Fetch subs error', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchSubscriptions()
  }, [])

  return (
    <div className="subscriptions-page">
      <h2 className="subscriptions-title">Subscriptions</h2>
      
      <div className="refresh-container">
        <button className="refresh-btn" onClick={fetchSubscriptions}>
          <span>🔄</span> Refresh
        </button>
      </div>

      {loading ? (
        <p className="subscriptions-loading">Loading subscriptions...</p>
      ) : subscriptions.length === 0 ? (
        <p className="subscriptions-empty">No subscriptions yet.</p>
      ) : (
        <div className="subscriptions-grid">
          {subscriptions.map((sub) => (
            <div key={sub._id} className="subscription-card">
              {/* Customer Info */}
              <div className="subscription-customer">
                <h3>{sub.user?.name || sub.userDetails?.name}</h3>
                <p className="customer-email">{sub.user?.email || sub.userDetails?.email}</p>
                <p className="customer-phone">📞 {sub.userDetails?.phone}</p>
              </div>

              {/* Address */}
              <div className="subscription-address">
                <strong>📍 Delivery Address</strong>
                <p>{sub.userDetails?.address}, {sub.userDetails?.city} - {sub.userDetails?.pincode}</p>
              </div>

              {/* Meta Info */}
              <div className="subscription-meta">
                <div className="subscription-total">₹{sub.totalPrice}</div>
                <div className="subscription-date">{new Date(sub.createdAt).toLocaleString()}</div>
              </div>

              {/* Order ID */}
              <div className="subscription-order-id">
                <span>Order ID:</span> {sub.orderId}
              </div>

              {/* Status Badges */}
              <div className="subscription-badges">
                <span className={`status-badge status-${sub.status}`}>{sub.status}</span>
                <span className={`payment-badge payment-${sub.paymentStatus}`}>{sub.paymentStatus}</span>
              </div>

              {/* Selected Dishes */}
              <div className="subscription-items">
                <h4>📦 Selected Dishes</h4>
                <ul>
                  {sub.selectedDishes.map((it, idx) => (
                    <li key={idx}>
                      <span className="item-name">{it.name}</span>
                      <span className="item-details">
                        <span className="item-qty">× {it.qty}</span>
                        <span className="item-price">₹{it.price}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Status Update Controls */}
              <div className="subscription-controls">
                <div className="control-group">
                  <label>Status</label>
                  <select
                    value={statusMap[sub._id] ?? sub.status}
                    onChange={(e) => setStatusMap((s) => ({ ...s, [sub._id]: e.target.value }))}
                    className="control-select"
                  >
                    <option value="active">Active</option>
                    <option value="cancelled">Cancelled</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>

                <div className="control-group">
                  <label>Payment</label>
                  <select
                    value={paymentStatusMap[sub._id] ?? sub.paymentStatus}
                    onChange={(e) => setPaymentStatusMap((s) => ({ ...s, [sub._id]: e.target.value }))}
                    className="control-select"
                  >
                    <option value="pending">Pending</option>
                    <option value="success">Success</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>

                <button
                  className="update-btn"
                  disabled={updating}
                  onClick={async () => {
                    const confirmed = window.confirm('Update subscription status?')
                    if (!confirmed) return
                    setUpdating(true)
                    try {
                      const updates = {}
                      if ((statusMap[sub._id] ?? sub.status) !== undefined) 
                        updates.status = statusMap[sub._id] ?? sub.status
                      if (paymentStatusMap[sub._id] ?? sub.paymentStatus) 
                        updates.paymentStatus = paymentStatusMap[sub._id] ?? sub.paymentStatus
                      
                      const res = await axios.patch(
                        `${url}/api/subscriptions/${sub._id}/status`, 
                        updates, 
                        { headers: { token } }
                      )
                      
                      if (res.data.success) {
                        setSubscriptions((prev) => 
                          prev.map((p) => (p._id === sub._id ? res.data.data : p))
                        )
                        alert('✅ Subscription updated successfully!')
                      }
                    } catch (err) {
                      console.error('Update sub error', err)
                      alert('❌ Update failed')
                    } finally {
                      setUpdating(false)
                    }
                  }}
                >
                  {updating ? 'Updating...' : 'Update'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Subscriptions
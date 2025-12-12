import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  const [loading, setLoading] = useState(false)
  const token = localStorage.getItem('token')
  const url = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

  const fetchUserSubscriptions = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${url}/api/subscriptions/user`, { headers: { token } })
      if (res.data.success) setSubscriptions(res.data.data)
    } catch (err) {
      console.error('Fetch user subs error', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserSubscriptions()
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Subscriptions</h2>
      {loading ? (
        <p>Loading...</p>
      ) : subscriptions.length === 0 ? (
        <p>You have no subscriptions yet.</p>
      ) : (
        <div className="space-y-4">
          {subscriptions.map((sub) => (
            <div key={sub._id} className="bg-white p-4 border rounded">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-semibold">{sub.userDetails?.name}</div>
                  <div className="text-sm text-gray-600">Phone: {sub.userDetails?.phone}</div>
                  <div className="text-sm mt-2 text-gray-700">{sub.userDetails?.address}, {sub.userDetails?.city} - {sub.userDetails?.pincode}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-700">₹{sub.totalPrice}</div>
                  <div className="text-xs text-gray-500">{(new Date(sub.createdAt)).toLocaleString()}</div>
                  <div className="text-xs text-gray-500">Status: {sub.status} • Payment: {sub.paymentStatus}</div>
                </div>
              </div>

              <div className="mt-3">
                <div className="font-semibold">Selected Dishes:</div>
                <ul className="pl-4">
                  {sub.selectedDishes.map((it, idx) => (
                    <li key={idx}>{it.name} × {it.qty} • ₹{it.price}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default UserSubscriptions

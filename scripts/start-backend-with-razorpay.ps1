param(
  [Parameter(Mandatory=$true)][string]$RAZORPAY_KEY_ID,
  [Parameter(Mandatory=$true)][string]$RAZORPAY_KEY_SECRET,
  [Parameter(Mandatory=$true)][string]$RAZORPAY_WEBHOOK_SECRET,
  [string]$MONGO_URI = "",
  [string]$JWT_SECRET = "dev-secret"
)

# This script sets env vars in the current session (temporary) and starts the backend server.
# Usage: ./start-backend-with-razorpay.ps1 -RAZORPAY_KEY_ID "rzp_test_xxxx" -RAZORPAY_KEY_SECRET "xxx" -RAZORPAY_WEBHOOK_SECRET "xxx" -MONGO_URI "your_mongo_uri" -JWT_SECRET "your_jwt"

if ($MONGO_URI -ne "") { $env:MONGO_URI = $MONGO_URI }
$env:RAZORPAY_KEY_ID = $RAZORPAY_KEY_ID
$env:RAZORPAY_KEY_SECRET = $RAZORPAY_KEY_SECRET
$env:RAZORPAY_WEBHOOK_SECRET = $RAZORPAY_WEBHOOK_SECRET
$env:JWT_SECRET = $JWT_SECRET

cd ..\Backend
Write-Host "Starting Backend with Razorpay keys (in current session; not committed)"
npm run server

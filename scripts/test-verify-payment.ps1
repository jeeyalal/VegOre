param(
  [string]$backendUrl = "http://localhost:4000",
  [string]$razorpay_order_id = "",
  [string]$razorpay_payment_id = "",
  [string]$razorpay_signature = "",
  [string]$token = "",
  [string]$userJson = "{}" # JSON string of subscriptionData (plan fields, etc.)
)

if ($razorpay_order_id -eq "" -or $razorpay_payment_id -eq "" -or $razorpay_signature -eq "") {
  Write-Host "Please provide razorpay_order_id, razorpay_payment_id and razorpay_signature for verification"
  exit 1
}

$payload = @{
  razorpay_order_id = $razorpay_order_id
  razorpay_payment_id = $razorpay_payment_id
  razorpay_signature = $razorpay_signature
  subscriptionData = (ConvertFrom-Json $userJson)
} | ConvertTo-Json -Depth 6

$headers = @{}
if ($token -ne "") { $headers['token'] = $token }

try {
  $res = Invoke-RestMethod -Method POST -Uri "$backendUrl/api/payments/verify" -Body $payload -ContentType "application/json" -Headers $headers -UseBasicParsing -Verbose
  Write-Host "Verify response:`n" (ConvertTo-Json $res -Depth 6)
} catch {
  Write-Host "Verify request failed: $_"
}

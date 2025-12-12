param(
  [string]$backendUrl = "http://localhost:4000",
  [string]$razorpay_order_id = "",
  [string]$razorpay_payment_id = "",
  [string]$razorpay_signature = "",
  [string]$token = "",
  [string]$subscriptionJson = "{}", # JSON string of subscriptionData (plan fields, etc.)
  [string]$orderJson = "{}" # JSON string of orderData (items, total, address)
)

if ($razorpay_order_id -eq "" -or $razorpay_payment_id -eq "" -or $razorpay_signature -eq "") {
  Write-Host "Please provide razorpay_order_id, razorpay_payment_id and razorpay_signature for verification"
  exit 1
}

$payloadObj = @{
  razorpay_order_id = $razorpay_order_id
  razorpay_payment_id = $razorpay_payment_id
  razorpay_signature = $razorpay_signature
}

if ($orderJson -and $orderJson -ne "{}") {
  $payloadObj.orderData = ConvertFrom-Json $orderJson
} else {
  $payloadObj.subscriptionData = ConvertFrom-Json $subscriptionJson
}

$payload = $payloadObj | ConvertTo-Json -Depth 6

$headers = @{}
if ($token -ne "") { $headers['token'] = $token }

try {
  $res = Invoke-RestMethod -Method POST -Uri "$backendUrl/api/payments/verify" -Body $payload -ContentType "application/json" -Headers $headers -UseBasicParsing -Verbose
  Write-Host "Verify response:`n" (ConvertTo-Json $res -Depth 6)
} catch {
  Write-Host "Verify request failed: $_"
}

param(
  [string]$backendUrl = "http://localhost:4000",
  [int]$amount = 100,
  [string]$token = ""  # optional: user JWT token for auth
)

$body = @{ amount = $amount } | ConvertTo-Json
$headers = @{}
if ($token -ne "") { $headers['token'] = $token }

Write-Host "Creating order for amount INR $amount (this uses paise internally) against $backendUrl/api/payments/create-order"

try {
    $res = Invoke-RestMethod -Method POST -Uri "$backendUrl/api/payments/create-order" -Body $body -ContentType "application/json" -Headers $headers -UseBasicParsing
    Write-Host "Response:`n" (ConvertTo-Json $res -Depth 5)
} catch {
    Write-Host "Create order failed: $_"
}

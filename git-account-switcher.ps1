# Git Account Switcher Script
# Place this in your PowerShell profile or run manually

function Set-GitWork {
    git config user.name "tellyoudoc"
    git config user.email "tellyoudoc@gmail.com"
    Write-Host "Switched to work Git account" -ForegroundColor Green
}

function Set-GitPersonal {
    git config user.name "Koushik Samui"
    git config user.email "samuikousik95@gmail.com"
    Write-Host "Switched to personal Git account" -ForegroundColor Green
}

# Usage:
# Set-GitWork    - Switch to work account
# Set-GitPersonal - Switch to personal account

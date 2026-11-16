$files = @("d:\P.F RH\app-v36.js", "d:\P.F RH\app.js")

foreach ($f in $files) {
    Write-Host "Validating $f..."
    $content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)
    
    # Check basic bracket counts
    $openParen = ($content.ToCharArray() | Where-Object { $_ -eq '(' }).Count
    $closeParen = ($content.ToCharArray() | Where-Object { $_ -eq ')' }).Count
    $openBrace = ($content.ToCharArray() | Where-Object { $_ -eq '{' }).Count
    $closeBrace = ($content.ToCharArray() | Where-Object { $_ -eq '}' }).Count
    $openBracket = ($content.ToCharArray() | Where-Object { $_ -eq '[' }).Count
    $closeBracket = ($content.ToCharArray() | Where-Object { $_ -eq ']' }).Count
    
    Write-Host "  Parens: $openParen / $closeParen"
    Write-Host "  Braces: $openBrace / $closeBrace"
    Write-Host "  Brackets: $openBracket / $closeBracket"
    
    if ($openParen -ne $closeParen -or $openBrace -ne $closeBrace -or $openBracket -ne $closeBracket) {
        Write-Error "Mismatch detected in $f!"
    } else {
        Write-Host "  -> Balanced perfectly!"
    }
}

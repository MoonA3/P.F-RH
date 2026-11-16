$code = [System.IO.File]::ReadAllText("d:\P.F RH\app-v36.js", [System.Text.Encoding]::UTF8)

# Strip multi-line comments
$code = [System.Text.RegularExpressions.Regex]::Replace($code, "/\*[\s\S]*?\*/", "")
# Strip single-line comments
$code = [System.Text.RegularExpressions.Regex]::Replace($code, "//[^\r\n]*", "")
# Strip template literals
$code = [System.Text.RegularExpressions.Regex]::Replace($code, '`[\s\S]*?`', '""')
# Strip single and double quoted strings
$code = [System.Text.RegularExpressions.Regex]::Replace($code, '"(?:\\.|[^"\\])*"', '""')
$code = [System.Text.RegularExpressions.Regex]::Replace($code, "'(?:\\.|[^'\\])*'", "''")

$chars = $code.ToCharArray()
$openP = 0; $closeP = 0
$openB = 0; $closeB = 0
$openK = 0; $closeK = 0

for ($i = 0; $i -lt $chars.Length; $i++) {
    $c = $chars[$i]
    if ($c -eq '(') { $openP++ }
    elseif ($c -eq ')') { $closeP++ }
    elseif ($c -eq '{') { $openB++ }
    elseif ($c -eq '}') { $closeB++ }
    elseif ($c -eq '[') { $openK++ }
    elseif ($c -eq ']') { $closeK++ }
}

Write-Host "Real code balance:"
Write-Host "  Parens: $openP / $closeP"
Write-Host "  Braces: $openB / $closeB"
Write-Host "  Brackets: $openK / $closeK"

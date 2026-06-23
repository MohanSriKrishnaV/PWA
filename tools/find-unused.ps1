Param()
$root = Get-Location
$ignored = @('node_modules','.git','dist','out','coverage')
$textExts = @('.ts','.js','.html','.scss','.css','.json','.md')
$allExts = $textExts + @('.png','.jpg','.jpeg','.svg','.woff','.woff2','.ico')

function Get-FilesRecursive($path) {
  Get-ChildItem -Path $path -Recurse -File -ErrorAction SilentlyContinue | Where-Object {
    $ext = $_.Extension.ToLower()
    $allExts -contains $ext -and (-not ($_.FullName -match '\\node_modules\\' -or $_.FullName -match '\\.git\\' -or $_.FullName -match '\\dist\\' -or $_.FullName -match '\\out\\' -or $_.FullName -match '\\coverage\\'))
  }
}

Write-Host "Scanning from $($root.Path)"
$files = Get-FilesRecursive $root.Path

$textFiles = $files | Where-Object { $textExts -contains $_.Extension.ToLower() }
$searchPaths = $textFiles | ForEach-Object { $_.FullName }

$candidates = @()

foreach ($f in $files) {
  $rel = $f.FullName.Substring($root.Path.Length+1) -replace '\\','/'
  if ($rel -match '^(angular.json|package.json|tsconfig.json|README.md)$') { continue }
  $basename = [System.IO.Path]::GetFileNameWithoutExtension($f.Name)
  $filename = $f.Name

  $patterns = @()
  $patterns += [regex]::Escape($filename)
  $patterns += [regex]::Escape($basename)
  $patterns += [regex]::Escape(($rel -replace '\.[^/.]+$',''))

  $used = $false
  if ($searchPaths.Count -gt 0) {
    $matches = Select-String -Path $searchPaths -Pattern $patterns -SimpleMatch -ErrorAction SilentlyContinue | Where-Object { $_.Path -ne $f.FullName }
    if ($matches) { $used = $true }
  }

  if (-not $used) { $candidates += ($rel) }
}

# Folders: consider folder unused if all its files are candidates
$allFiles = $files | ForEach-Object { $_.FullName.Substring($root.Path.Length+1) -replace '\\','/' }
$folders = $allFiles | ForEach-Object { [System.IO.Path]::GetDirectoryName($_) -replace '\\','/' } | Sort-Object -Unique
$unusedFolders = @()
foreach ($folder in $folders) {
  $folderFiles = $allFiles | Where-Object { $_ -like "$folder/*" -or $_ -eq $folder }
  if ($folderFiles.Count -eq 0) { continue }
  $allUnused = $true
  foreach ($ff in $folderFiles) { if (-not ($candidates -contains $ff)) { $allUnused = $false; break } }
  if ($allUnused) { $unusedFolders += $folder }
}

$out = @{ candidates = $candidates; unusedFolders = $unusedFolders }
$out | ConvertTo-Json -Depth 5

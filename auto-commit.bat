@echo off
setlocal enabledelayedexpansion

:: Pega a lista de arquivos modificados
for /f "delims=" %%f in ('git status --porcelain') do (
    set "line=%%f"
    set "file=!line:~3!"
    set "msg=!msg! !file!"
)

git add .
git commit -m "auto: atualizado ->%msg%"
git push origin dev
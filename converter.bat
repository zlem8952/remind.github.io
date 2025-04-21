@echo off
chcp 65001 >nul
title PY→EXE 변환기

:: pyinstaller 설치 확인
pip list | find "pyinstaller" >nul
if %ERRORLEVEL% NEQ 0 (
    echo pyinstaller가 설치되지 않았습니다.
    choice /c YN /m "pyinstaller를 설치하시겠습니까? [Y/N]"
    if %ERRORLEVEL% EQU 2 (
        exit /b
    )
    echo 설치 중입니다...
    python -m pip install pyinstaller
    pip list | find "pyinstaller" >nul
    if %ERRORLEVEL% NEQ 0 (
        echo 설치에 실패했습니다. 수동으로 설치해 주세요.
        pause
        exit /b
    )
)

:: 파일 선택 다이얼로그
echo 변환할 Python(.py, .pyw) 파일을 선택하세요...
powershell -Command ^
    "$file = (Add-Type -AssemblyName System.Windows.Forms ^| Out-Null; $ofd = New-Object Windows.Forms.OpenFileDialog; $ofd.Filter = 'Python 파일 (*.py;*.pyw)|*.py;*.pyw'; if ($ofd.ShowDialog() -eq 'OK') { Write-Output $ofd.FileName })" > "%temp%\selected_py.txt"

set /p pyfile=<"%temp%\selected_py.txt"
del "%temp%\selected_py.txt"

if "%pyfile%"=="" (
    echo 파일이 선택되지 않았습니다. 종료합니다.
    pause
    exit /b
)

:: 확장자 검사
set "ext=%pyfile:~-3%"
set "ext2=%pyfile:~-4%"
if /I not "%ext%"=="py" if /I not "%ext2%"=="pyw" (
    echo 선택한 파일이 .py 또는 .pyw 파일이 아닙니다.
    pause
    exit /b
)

echo.
echo [%pyfile%] 파일을 EXE로 변환합니다...
pyinstaller --onefile "%pyfile%"

echo.
echo 변환이 완료되었습니다!
echo dist 폴더에서 EXE 파일을 확인하세요.
pause

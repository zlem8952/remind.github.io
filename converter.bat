@echo off
echo PY 파일을 EXE로 변환합니다...
pyinstaller --onefile "%~1"
echo 변환 완료! dist 폴더를 확인하세요.
pause

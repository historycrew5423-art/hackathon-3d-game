@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 正在启动《奶蛙梦游·重制版》本地服务器，玩的时候不要关这个窗口……
start "" http://127.0.0.1:8765/
node serve.mjs
pause

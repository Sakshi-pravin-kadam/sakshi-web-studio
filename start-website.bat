@echo off
title Sakshi Web Studio - Local Server
echo ========================================================
echo   Starting Sakshi Web Studio (http://localhost:3000)
echo ========================================================
echo.
cd /d "%~dp0"
set "PATH=C:\Program Files\nodejs;%PATH%"

:: Open default browser after a brief delay
start "" "http://localhost:3000"

:: Start the Vite development server
call npm run dev
pause

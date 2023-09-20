@echo off
cls
:menu
cls
color 71
echo Usuario Logado: %username%                            Computador: %computername%
date /t  

echo  __________________________
echo     ESCOLHA UM APLICATIVO     
echo  1. CHROME           
echo  2. LIGHT SHOT
echo  3. DISCORD   
echo  4. SAIR            
echo __________________________ 
               
set /p opcao= Escolha uma opcao:
echo _______________________
if "%opcao%" equ "1" goto opcao1
if "%opcao%" equ "2" goto opcao2
if "%opcao%" equ "3" goto opcao3
if "%opcao%" equ "4" goto opcao4
if %opcao% GEQ 5 goto opcao5


:opcao1
cls
if exist "C:\Users\%username%\Downloads\ChromeSetup.exe" (
    start "" "C:\Users\%username%\Downloads\ChromeSetup.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://encurtador.com.br/fAR57 "C:\Users\%username%\Downloads\ChromeSetup.exe"
    pause
    start "" "C:\Users\%username%\Downloads\ChromeSetup.exe"
    pause
    goto menu
)

:opcao2
cls
if exist "C:\Users\%username%\Downloads\setup-lightshot.exe" (
    start "" "C:\Users\%username%\Downloads\setup-lightshot.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://app.prntscr.com/build/setup-lightshot.exe "C:\Users\%username%\Downloads\setup-lightshot.exe"
    pause
    start "" "C:\Users\%username%\Downloads\setup-lightshot.exe"
    pause
    goto menu
)

:opcao3
cls
if exist "C:\Users\%username%\Downloads\DiscordSetup.exe" (
    start "" "C:\Users\%username%\Downloads\DiscordSetup.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://dl.discordapp.net/distro/app/stable/win/x86/1.0.9018/DiscordSetup.exe "C:\Users\%username%\Downloads\DiscordSetup.exe"
    pause
    start "" "C:\Users\%username%\Downloads\DiscordSetup.exe"
    pause
    goto menu
)

:opcao4
exit

:opcao5
cls
echo -----------------------------------
echo Opcao invalida! Escolha outra opcao
echo -----------------------------------
pause
goto menu

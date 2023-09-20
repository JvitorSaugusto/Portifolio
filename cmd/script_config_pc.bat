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
echo  3. SAIR               
echo __________________________ 
               
set /p opcao= Escolha uma opcao:
echo _______________________
if "%opcao%" equ "1" goto opcao1
if "%opcao%" equ "2" goto opcao2
if "%opcao%" equ "3" goto opcao3
if %opcao% GEQ 4 goto opcao4


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
exit

:opcao4
cls
echo -----------------------------------
echo Opcao invalida! Escolha outra opcao
echo -----------------------------------
pause
goto menu

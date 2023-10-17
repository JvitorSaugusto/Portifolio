@echo off
cls
:menu
cls
color 0
echo Usuario Logado: %username%                            Computador: %computername%
date /t  

echo  __________________________
echo     ESCOLHA UM APLICATIVO     
echo  1. CHROME           
echo  2. LIGHT SHOT
echo  3. DISCORD   
echo  4. LOGITECH      
echo  5. BITDEFENDER FREE
echo  6. WINRAR
echo  7. TODOS OS APPS .EXE DA PASTA
echo  8. TODOS OS APPS DA LISTA
echo  9. SAIR      
echo __________________________ 
               
set /p opcao= Escolha uma opcao:
echo _______________________
if "%opcao%" equ "1" goto opcao1
if "%opcao%" equ "2" goto opcao2
if "%opcao%" equ "3" goto opcao3
if "%opcao%" equ "4" goto opcao4
if "%opcao%" equ "5" goto opcao5
if "%opcao%" equ "6" goto opcao6
if "%opcao%" equ "7" goto opcao7
if "%opcao%" equ "8" goto opcao8
if %opcao% GEQ 9 goto opcao9


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
cls
if exist "C:\Users\%username%\Downloads\options_installer.exe" (
    start "" "C:\Users\%username%\Downloads\options_installer.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://download01.logi.com/web/ftp/pub/techsupport/options/options_installer.exe "C:\Users\%username%\Downloads\options_installer.exe"
    pause
    start "" "C:\Users\%username%\Downloads\options_installer.exe"
    pause
    goto menu
)

:opcao5
cls
if exist "C:\Users\%username%\Downloads\bitdefender_avfree.exe" (
    start "" "C:\Users\%username%\Downloads\bitdefender_avfree.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://download.bitdefender.com/windows/installer/en-us/bitdefender_avfree.exe "C:\Users\%username%\Downloads\bitdefender_avfree.exe"
    pause
    start "" "C:\Users\%username%\Downloads\bitdefender_avfree.exe"
    pause
    goto menu
)

:opcao6
cls
if exist "C:\Users\%username%\Downloads\winrar-x64-624br.exe" (
    start "" "C:\Users\%username%\Downloads\winrar-x64-624br.exe"
    pause
    goto menu
) else (
    bitsadmin /transfer AcessoRemoto /priority normal https://www.win-rar.com/fileadmin/winrar-versions/winrar/winrar-x64-624br.exe "C:\Users\%username%\Downloads\winrar-x64-624br.exe"
    pause
    start "" "C:\Users\%username%\Downloads\winrar-x64-624br.exe"
    pause
    goto menu
)

:opcao7
cls
echo -----------------------------------
echo Iniciando todos os aplicativos no diretório...
echo -----------------------------------
for %%f in ("%~dp0\*.exe") do (
    start "" "%%f"
)
pause
goto menu

:opcao8
cls
echo -----------------------------------
echo Iniciando todos os aplicativos...
echo -----------------------------------
start "" "%~dp0\ChromeSetup.exe"
start "" "%~dp0\setup-lightshot.exe"
start "" "%~dp0\DiscordSetup.exe"
start "" "%~dp0\options_installer.exe"
start "" "%~dp0\bitdefender_avfree.exe"
start "" "%~dp0\winrar-x64-624br.exe"
pause
goto menu

:opcao9
exit

:opcao10
cls
echo -----------------------------------
echo Opcao invalida! Escolha outra opcao
echo -----------------------------------
pause
goto menu

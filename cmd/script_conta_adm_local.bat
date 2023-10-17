@echo off
cls
:menu
cls
color 0
echo Usuario Logado: %username%                            Computador: %computername%
date /t  

echo  __________________________
echo     ESCOLHA UM APLICATIVO     
echo  1. CONTA LOCAL           
echo  2. CONTA TI
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
net user PerfectPay /add /passwordreq:no
net user PerfectPay ""

:opcao2
cls
net user TI PERFECT PAY 3m29Xf5q /add
net localgroup Administradores TI PERFECT PAY /add

:opcao3
exit

:opcao4
cls
echo -----------------------------------
echo Opcao invalida! Escolha outra opcao
echo -----------------------------------
pause
goto menu

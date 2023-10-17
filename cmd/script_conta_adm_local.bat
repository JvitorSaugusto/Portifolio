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


:: COMENTARIO: O primeiro comando, net user NovoUsuario Senha123 /add, cria um novo usuário com o nome "NovoUsuario" e a senha "Senha123". Você pode substituir "NovoUsuario" e "Senha123" pelos valores que desejar.O segundo comando, net localgroup Administradores NovoUsuario /add, adiciona o novo usuário ao grupo de administradores para conceder privilégios de administrador. Se você não quiser que o usuário seja um administrador, você pode omitir este comando.

:: COMENTARIO: o comando net user é usado para criar um usuário chamado "PerfectPay" e, em seguida, passwordreq:no é usado para indicar que a senha não é necessária. A segunda linha define a senha como vazia, permitindo que a conta seja criada sem uma senha.

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

@echo off
color 0
echo Iniciando a limpeza, pressione qualquer tecla para continuar!
pause

:: Limpa a pasta temp do Windows
if exist C:\Windows\Temp\*.* (
    del /q C:\Windows\Temp\*.*
)

:: Limpa a pasta temp do usuário atual
if exist %temp%\*.* (
    del /q %temp%\*.*
)


:: Limpa a pasta prefetch do Windows
if exist C:\Windows\Prefetch\*.* (
    del /q C:\Windows\Prefetch\*.*
)

:: Limpa pastas temporárias de todos os perfis de usuário (usuários e documentos recentes)
for /d %%x in (C:\Users\*) do (
    if exist "%%x\AppData\Local\Temp\*.*" (
        del /q "%%x\AppData\Local\Temp\*.*"
    )
    if exist "%%x\AppData\Local\Microsoft\Windows\Temporary Internet Files\*.*" (
        del /q "%%x\AppData\Local\Microsoft\Windows\Temporary Internet Files\*.*"
    )
)


:: Esvazia a Lixeira
echo Esvaziando a Lixeira...
rd /s /q C:\$Recycle.Bin


echo Limpeza concluída. Pressione qualquer tecla para sair.
pause

@echo off
echo Creando configuración Docker temporal...

:: Crear directorio de configuración temporal
set TEMP_DOCKER_CONFIG=%CD%\.docker-temp
if not exist "%TEMP_DOCKER_CONFIG%" mkdir "%TEMP_DOCKER_CONFIG%"

:: Crear config.json sin credenciales problemáticas
echo { > "%TEMP_DOCKER_CONFIG%\config.json"
echo   "auths": {}, >> "%TEMP_DOCKER_CONFIG%\config.json"
echo   "credsStore": "" >> "%TEMP_DOCKER_CONFIG%\config.json"
echo } >> "%TEMP_DOCKER_CONFIG%\config.json"

:: Usar esta configuración
set DOCKER_CONFIG=%TEMP_DOCKER_CONFIG%

echo Configuración temporal creada en: %TEMP_DOCKER_CONFIG%
echo Ejecutando Docker Compose...

docker-compose down
docker-compose up --build

:: Limpiar al final
rmdir /s /q "%TEMP_DOCKER_CONFIG%" >nul 2>&1
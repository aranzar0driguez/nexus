@echo off
REM Change to the script's directory
cd /d "%~dp0"

REM Create a virtual environment
echo Creating virtual environment...
python -m venv env

REM Activate the virtual environment (Windows-specific)
echo Activating virtual environment...
call env\Scripts\activate

REM Install required Python packages
echo Installing required packages...
pip install -r requirements.txt
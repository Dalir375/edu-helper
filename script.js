// Copyright (c) 2024-2025 Daniel Gałacewicz
//
// This software is released under the MIT License.
// SPDX-License-Identifier: MIT
//
// For more details, see the LICENSE file.
// Or visit: https://opensource.org/licenses/MIT        
        

        
        const display = document.getElementById('display');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');
        
        let startTime;
        let elapsedTime = 0;
        let timerInterval;
        
        function formatTime(time) {
            const date = new Date(time);
            const hours = date.getUTCHours().toString().padStart(2, '0');
            const minutes = date.getUTCMinutes().toString().padStart(2, '0');
            const seconds = date.getUTCSeconds().toString().padStart(2, '0');
            const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
            
            return `${hours}:${minutes}:${seconds}.${milliseconds}`;
        }
        
        function updateDisplay() {
            display.textContent = formatTime(elapsedTime);
        }
        
        function startTimer() {
            startTime = Date.now() - elapsedTime;
            timerInterval = setInterval(() => {
                elapsedTime = Date.now() - startTime;
                updateDisplay();
            }, 10);
            
            startBtn.disabled = true;
            stopBtn.disabled = false;
        }
        
        function stopTimer() {
            clearInterval(timerInterval);
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
        
        function resetTimer() {
            clearInterval(timerInterval);
            elapsedTime = 0;
            updateDisplay();
            startBtn.disabled = false;
            stopBtn.disabled = true;
        }
        
        startBtn.addEventListener('click', startTimer);
        stopBtn.addEventListener('click', stopTimer);
        resetBtn.addEventListener('click', resetTimer);
        
        updateDisplay();
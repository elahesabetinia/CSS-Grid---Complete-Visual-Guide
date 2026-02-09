
        // Get demo containers
        const demo1 = document.getElementById('demo1');
        const demo2 = document.getElementById('demo2');
        const demo3 = document.getElementById('demo3');
        const demo4 = document.getElementById('demo4');
        const demo5 = document.getElementById('demo5');
        const demo6 = document.getElementById('demo6');
        const demo7 = document.getElementById('demo7');
        const photoGallery = document.getElementById('photoGallery');
        
        const containerCode = document.getElementById('containerCode');
        const itemCode = document.getElementById('itemCode');
        const areaCode = document.getElementById('areaCode');
        
        // Track current values
        let currentTemplate = 'equal';
        let currentRows = 'auto';
        let currentGap = 'none';
        let currentAlignment = 'stretch';
        let currentPlacement = 'default';
        let currentAreas = 'basic';
        
        // Grid template controls
        function setGridTemplate(type) {
            currentTemplate = type;
            
            if (type === 'equal') {
                demo1.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else if (type === 'fixed') {
                demo1.style.gridTemplateColumns = '100px 150px 200px';
            } else if (type === 'mixed') {
                demo1.style.gridTemplateColumns = '1fr 2fr 1fr';
            } else if (type === 'fraction') {
                demo1.style.gridTemplateColumns = 'repeat(3, 1fr)';
            } else if (type === 'repeat') {
                demo1.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
            }
            
            // Update active button
            updateActiveButtons('demo1', type);
            updateContainerCode();
        }
        
        // Grid rows controls
        function setGridRows(type) {
            currentRows = type;
            
            if (type === 'auto') {
                demo1.style.gridTemplateRows = 'auto';
                demo1.style.height = 'auto';
            } else if (type === 'fixed') {
                demo1.style.gridTemplateRows = '80px 120px 80px';
                demo1.style.height = '300px';
            } else if (type === 'mixed') {
                demo1.style.gridTemplateRows = '60px 100px 60px';
                demo1.style.height = '250px';
            }
            
            // Update active button
            const buttons = document.querySelectorAll('#demo1 + .property-name + .controls .btn');
            updateButtonStates(buttons, type);
            updateContainerCode();
        }
        
        // Gap controls
        function setGap(type) {
            currentGap = type;
            
            if (type === 'none') {
                demo2.style.gap = '0';
            } else if (type === 'small') {
                demo2.style.gap = '10px';
            } else if (type === 'medium') {
                demo2.style.gap = '20px';
            } else if (type === 'large') {
                demo2.style.gap = '30px';
            } else if (type === 'different') {
                demo2.style.gap = '15px 30px'; /* row-gap column-gap */
            }
            
            // Update active button
            updateActiveButtons('demo2', type);
        }
        
        // Item alignment controls
        function setItemAlignment(type) {
            currentAlignment = type;
            
            if (type === 'stretch') {
                demo3.style.justifyItems = 'stretch';
                demo3.style.alignItems = 'stretch';
            } else if (type === 'start') {
                demo3.style.justifyItems = 'start';
                demo3.style.alignItems = 'start';
            } else if (type === 'center') {
                demo3.style.justifyItems = 'center';
                demo3.style.alignItems = 'center';
            } else if (type === 'end') {
                demo3.style.justifyItems = 'end';
                demo3.style.alignItems = 'end';
            }
            
            // Update active button
            updateActiveButtons('demo3', type);
        }
        
        // Item placement controls
        function setItemPlacement(type) {
            currentPlacement = type;
            const items = demo4.querySelectorAll('.grid-item');
            
            // Reset all items
            items.forEach((item, index) => {
                item.style.gridColumn = '';
                item.style.gridRow = '';
                item.textContent = index + 1;
            });
            
            if (type === 'span') {
                items[0].style.gridColumn = 'span 2';
                items[0].textContent = '1 (span 2)';
                items[4].style.gridColumn = 'span 2';
                items[4].textContent = '5 (span 2)';
            } else if (type === 'position') {
                items[0].style.gridColumn = '1 / 3';
                items[0].style.gridRow = '1 / 3';
                items[0].textContent = '1 (1/3, 1/3)';
                items[1].style.gridColumn = '3 / 5';
                items[1].textContent = '2 (3/5)';
                items[2].style.gridColumn = '1 / 2';
                items[2].style.gridRow = '3 / 4';
                items[2].textContent = '3 (1/2, 3/4)';
            } else if (type === 'full') {
                items[0].style.gridColumn = '1 / -1';
                items[0].textContent = '1 (full width)';
                items[5].style.gridColumn = '1 / -1';
                items[5].textContent = '6 (full width)';
            }
            
            // Update active button
            updateActiveButtons('demo4', type);
        }
        
        // Grid area controls
        function setGridArea(type) {
            const items = demo4.querySelectorAll('.grid-item');
            
            // Reset
            items.forEach((item, index) => {
                item.style.gridArea = '';
                item.textContent = index + 1;
            });
            
            if (type === 'simple') {
                items[0].style.gridArea = '1 / 1 / 3 / 3';
                items[0].textContent = '1 (area)';
                items[4].style.gridArea = '2 / 3 / 4 / 5';
                items[4].textContent = '5 (area)';
            } else if (type === 'complex') {
                items[0].style.gridArea = '1 / 1 / 2 / 5';
                items[0].textContent = '1 (full row)';
                items[2].style.gridArea = '2 / 1 / 4 / 2';
                items[2].textContent = '3 (tall)';
                items[5].style.gridArea = '3 / 2 / 4 / 5';
                items[5].textContent = '6 (wide)';
            }
        }
        
        // Template areas controls
        function setTemplateAreas(type) {
            currentAreas = type;
            const items = demo5.querySelectorAll('.grid-item');
            
            if (type === 'basic') {
                demo5.style.gridTemplateAreas = `
                    "header header header header"
                    "sidebar main main main"
                    "footer footer footer footer"
                `;
                demo5.style.gridTemplateColumns = 'repeat(4, 1fr)';
                demo5.style.gridTemplateRows = '80px 1fr 60px';
                
                items[0].style.gridArea = 'header';
                items[1].style.gridArea = 'sidebar';
                items[2].style.gridArea = 'main';
                items[3].style.gridArea = 'footer';
                
                // Update visualizer
                updateAreaVisualizer('basic');
            } else if (type === 'complex') {
                demo5.style.gridTemplateAreas = `
                    "header header header header"
                    "sidebar main main sidebar2"
                    "footer footer footer footer"
                `;
                demo5.style.gridTemplateColumns = '1fr 2fr 2fr 1fr';
                demo5.style.gridTemplateRows = '70px 1fr 70px';
                
                items[0].style.gridArea = 'header';
                items[1].style.gridArea = 'sidebar';
                items[2].style.gridArea = 'main';
                // Add another item for sidebar2
                if (items.length === 4) {
                    const newItem = document.createElement('div');
                    newItem.className = 'grid-item';
                    newItem.style.background = '#9775fa';
                    newItem.textContent = 'Sidebar 2';
                    newItem.style.gridArea = 'sidebar2';
                    demo5.appendChild(newItem);
                }
                items[3].style.gridArea = 'footer';
                
                updateAreaVisualizer('complex');
            } else if (type === 'responsive') {
                demo5.style.gridTemplateAreas = `
                    "header"
                    "sidebar"
                    "main"
                    "footer"
                `;
                demo5.style.gridTemplateColumns = '1fr';
                demo5.style.gridTemplateRows = '60px 60px 1fr 60px';
                
                items[0].style.gridArea = 'header';
                items[1].style.gridArea = 'sidebar';
                items[2].style.gridArea = 'main';
                items[3].style.gridArea = 'footer';
                
                updateAreaVisualizer('responsive');
            }
            
            // Update active button
            updateActiveButtons('demo5', type);
            updateAreaCode();
        }
        
        // Auto placement controls
        function setAutoPlacement(type) {
            if (type === 'row') {
                demo6.style.gridAutoFlow = 'row';
            } else if (type === 'column') {
                demo6.style.gridAutoFlow = 'column';
            } else if (type === 'dense') {
                demo6.style.gridAutoFlow = 'dense';
            }
            
            // Update active button
            updateActiveButtons('demo6', type);
        }
        
        // Content alignment controls
        function setContentAlignment(type) {
            if (type === 'stretch') {
                demo7.style.justifyContent = 'stretch';
                demo7.style.alignContent = 'stretch';
            } else if (type === 'center') {
                demo7.style.justifyContent = 'center';
                demo7.style.alignContent = 'center';
            } else if (type === 'space') {
                demo7.style.justifyContent = 'space-between';
                demo7.style.alignContent = 'space-between';
            }
            
            // Update active button
            updateActiveButtons('demo7', type);
        }
        
        // Helper function to update active buttons
        function updateActiveButtons(demoId, value) {
            const demoElement = document.getElementById(demoId);
            const controls = demoElement.previousElementSibling.querySelectorAll('.btn');
            updateButtonStates(controls, value);
        }
        
        function updateButtonStates(buttons, value) {
            buttons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.textContent.toLowerCase().includes(value.toLowerCase())) {
                    btn.classList.add('active');
                }
            });
        }
        
        // Update area visualizer
        function updateAreaVisualizer(type) {
            const visualizer = document.getElementById('areaVisualizer');
            visualizer.innerHTML = '';
            
            if (type === 'basic') {
                // Header row
                for (let i = 0; i < 4; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell header';
                    cell.textContent = 'header';
                    visualizer.appendChild(cell);
                }
                
                // Second row
                const sidebar = document.createElement('div');
                sidebar.className = 'area-cell sidebar';
                sidebar.textContent = 'sidebar';
                visualizer.appendChild(sidebar);
                
                for (let i = 0; i < 3; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell main';
                    cell.textContent = 'main';
                    visualizer.appendChild(cell);
                }
                
                // Footer row
                for (let i = 0; i < 4; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell footer';
                    cell.textContent = 'footer';
                    visualizer.appendChild(cell);
                }
            } else if (type === 'complex') {
                // Header row
                for (let i = 0; i < 4; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell header';
                    cell.textContent = 'header';
                    visualizer.appendChild(cell);
                }
                
                // Second row
                const sidebar = document.createElement('div');
                sidebar.className = 'area-cell sidebar';
                sidebar.textContent = 'sidebar';
                visualizer.appendChild(sidebar);
                
                for (let i = 0; i < 2; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell main';
                    cell.textContent = 'main';
                    visualizer.appendChild(cell);
                }
                
                const sidebar2 = document.createElement('div');
                sidebar2.className = 'area-cell sidebar';
                sidebar2.textContent = 'sidebar';
                visualizer.appendChild(sidebar2);
                
                // Footer row
                for (let i = 0; i < 4; i++) {
                    const cell = document.createElement('div');
                    cell.className = 'area-cell footer';
                    cell.textContent = 'footer';
                    visualizer.appendChild(cell);
                }
            } else if (type === 'responsive') {
                // Single column layout
                const areas = ['header', 'sidebar', 'main', 'footer'];
                areas.forEach(area => {
                    const cell = document.createElement('div');
                    cell.className = `area-cell ${area}`;
                    cell.textContent = area;
                    cell.style.gridColumn = '1 / -1';
                    visualizer.appendChild(cell);
                });
                
                visualizer.style.gridTemplateColumns = '1fr';
                visualizer.style.gridTemplateRows = 'repeat(4, 60px)';
            }
        }
        
        // Update code display functions
        function updateContainerCode() {
            let columnsCode = 'repeat(3, 1fr)';
            if (currentTemplate === 'fixed') columnsCode = '100px 150px 200px';
            if (currentTemplate === 'mixed') columnsCode = '1fr 2fr 1fr';
            if (currentTemplate === 'repeat') columnsCode = 'repeat(auto-fill, minmax(120px, 1fr))';
            
            let rowsCode = 'auto';
            if (currentRows === 'fixed') rowsCode = '80px 120px 80px';
            if (currentRows === 'mixed') rowsCode = '60px 100px 60px';
            
            containerCode.innerHTML = `.container {<br>
  display: grid;<br>
  grid-template-columns: ${columnsCode};<br>
  grid-template-rows: ${rowsCode};<br>
}`;
        }
        
        function updateAreaCode() {
            if (currentAreas === 'basic') {
                areaCode.innerHTML = `.container {<br>
  grid-template-areas:<br>
    "header header header header"<br>
    "sidebar main main main"<br>
    "footer footer footer footer";<br>
}<br><br>

.header { grid-area: header; }<br>
.sidebar { grid-area: sidebar; }<br>
.main { grid-area: main; }<br>
.footer { grid-area: footer; }`;
            } else if (currentAreas === 'complex') {
                areaCode.innerHTML = `.container {<br>
  grid-template-areas:<br>
    "header header header header"<br>
    "sidebar main main sidebar2"<br>
    "footer footer footer footer";<br>
}<br><br>

.header { grid-area: header; }<br>
.sidebar { grid-area: sidebar; }<br>
.main { grid-area: main; }<br>
.sidebar2 { grid-area: sidebar2; }<br>
.footer { grid-area: footer; }`;
            } else if (currentAreas === 'responsive') {
                areaCode.innerHTML = `.container {<br>
  grid-template-areas:<br>
    "header"<br>
    "sidebar"<br>
    "main"<br>
    "footer";<br>
}<br><br>

/* For larger screens */<br>
@media (min-width: 768px) {<br>
  .container {<br>
    grid-template-areas:<br>
      "header header header header"<br>
      "sidebar main main main"<br>
      "footer footer footer footer";<br>
  }<br>
}`;
            }
        }
        
        // Initialize
        updateContainerCode();
        updateAreaVisualizer('basic');
        updateAreaCode();
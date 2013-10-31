(function () {
	'use strict';

	var level,
		buttons,
		build,
		tear,
		currentLevel = 0,
		currentLevelRelativePosition = 0,
		sky = document.getElementsByClassName('sky')[0],
		widthSelection = document.getElementsByClassName('widthSelection')[0],
		colourSelection = document.getElementsByClassName('colourSelection')[0];

	buttons = document.getElementsByTagName('input');
	build = buttons[0];
	tear = buttons[1];

	var createLevel = function(numWindows) {
		var level = document.createElement('div'),
			halfWidth = ((numWindows * 35) + ((numWindows * 2 )* 2)) / 2;

		level.className = 'level';

		for(var i = 0; i < numWindows; i += 1) {
			var window = document.createElement('div');
			window.className = 'window';
			level.appendChild(window);
		}

		level.style.marginLeft = '-' + halfWidth + 'px';
		level.style.backgroundColor = colourSelection.options[colourSelection.selectedIndex].value;

		return level;
	};

	build.onclick = function () {
		if (currentLevel < 8) {
			level = createLevel(widthSelection.options[widthSelection.selectedIndex].value);
			level.style.bottom = currentLevelRelativePosition + 'px';
			sky.appendChild(level);	
			currentLevel += 1;
			currentLevelRelativePosition += 70;
		}
	};

	tear.onclick = function() {
		var levels;

		if(currentLevel > 0) {
			levels = document.getElementsByClassName('level');
			sky.removeChild(levels[levels.length - 1]);
			currentLevelRelativePosition -= 70;
			currentLevel -= 1;
		}
	};
})();
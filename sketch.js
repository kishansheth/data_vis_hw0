var center_x, center_y;

function setup() {
  createCanvas(720, 720);
	center_x = width / 2;
	center_y = height / 2;
}

function draw() {
	var sec = map(second(), 0, 60, 0, 360);
	var min = map(minute(), 0, 60, 0, 360);
	var hr = map(hour(), 0, 24, 0, 360);
	
	var sec_color = map(second(), 0, 60, 0, 255);
	var min_color = map(minute(), 0, 60, 0, 255);
	var hr_color = map(hour(), 0, 24, 0, 255);
	
	background(250);
	// background(sec_color, min_color, hr_color);
	noStroke();
	
	// Background circles
	fill(240);
	ellipse(center_x, center_y, 550, 550);
	fill(220);
	ellipse(center_x, center_y, 500, 500);
	fill(200);
	ellipse(center_x, center_y, 400, 400);
	fill(240);
	ellipse(center_x, center_y, 200, 200);

// 	noFill();
// 	stroke(100);
// 	ellipse(center_x, center_y, 250, 250);
// 	ellipse(center_x, center_y, 350, 350);
// 	ellipse(center_x, center_y, 450, 450);
	
	// Second, Minute, Hour hands
	noStroke();
	fill(50, hr_color, 255 - hr_color);
	ellipse(center_x + (150 * sin(radians(hr))), center_y - (150 * cos(radians(hr))), 100, 100);
	fill(50, min_color, 255- min_color);
	ellipse(center_x + (225 * sin(radians(min))), center_y - (225 * cos(radians(min))), 50, 50);
	fill(50, sec_color, 255 - sec_color);
	ellipse(center_x + (262.5 * sin(radians(sec))), center_y - (262.5 * cos(radians(sec))), 25, 25);
}
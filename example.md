# NUSATECH

## HTML

### Favicon

```html
<link rel="shortcut icon" href="images/favicon.png" type="png" />
```

### Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
	href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
	rel="stylesheet"
/>
```

### Boxicons

```html
<link
	href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
	rel="stylesheet"
/>
```

### Custom Link

```html
<link rel="stylesheet" href="style.css" />
```

## CSS

### ROOT

```css
:root {
	/* colors */
	--bg-navbar: #2d2d2d;
	--indigo-dark: #2b2038;
	--indigo-light: #2f1c48;
	--white: #f8f9ff;
	--lilac: #ac6cff;
	--lilac-light: #eadaff;
	--alto: #808080;
	--crema: #fbebd7;
	--orange: #ff9900;
}
```

### RESET

```css
*,
*::after,
*::before,
html {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	user-select: none;
	scroll-behavior: smooth;
}

li {
	list-style: none;
}

a {
	color: inherit;
	text-decoration: none;
}

body {
	overflow-x: hidden;
	font-family: 'Poppins';
	background: var(--indigo-dark);
	color: var(--white);
	font-size: 16px;
}

section {
	scroll-margin-top: 40px;
}
```

### REUSED STYLE

```css
.container {
	margin: 0 auto;
	padding: 0% 5% 0% 5%;
}
```

### POLYGON

```css
.polygon {
	position: absolute;
	bottom: -1px;
	width: 100%;
	background: var(--crema);
	height: 300px;
	clip-path: polygon(
		100% 100%,
		0% 100%,
		0% 79.67%,
		1% 79.63%,
		2% 79.51%,
		3% 79.32%,
		4% 79.05%,
		5% 78.71%,
		6% 78.31%,
		7% 77.85%,
		8% 77.35%,
		9% 76.8%,
		10% 76.21%,
		11% 75.6%,
		12% 74.98%,
		13% 74.35%,
		14% 73.73%,
		15% 73.12%,
		16% 72.54%,
		17% 71.99%,
		18% 71.48%,
		19% 71.02%,
		20% 70.62%,
		21% 70.29%,
		22% 70.02%,
		23% 69.82%,
		24% 69.71%,
		25% 69.67%,
		26% 69.71%,
		27% 69.82%,
		28% 70.02%,
		29% 70.29%,
		30% 70.62%,
		31% 71.02%,
		32% 71.48%,
		33% 71.99%,
		34% 72.54%,
		35% 73.12%,
		36% 73.73%,
		37% 74.35%,
		38% 74.98%,
		39% 75.6%,
		40% 76.21%,
		41% 76.8%,
		42% 77.35%,
		43% 77.85%,
		44% 78.31%,
		45% 78.71%,
		46% 79.05%,
		47% 79.32%,
		48% 79.51%,
		49% 79.63%,
		50% 79.67%,
		51% 79.63%,
		52% 79.51%,
		53% 79.32%,
		54% 79.05%,
		55% 78.71%,
		56% 78.31%,
		57% 77.85%,
		58% 77.35%,
		59% 76.8%,
		60% 76.21%,
		61% 75.6%,
		62% 74.98%,
		63% 74.35%,
		64% 73.73%,
		65% 73.12%,
		66% 72.54%,
		67% 71.99%,
		68% 71.48%,
		69% 71.02%,
		70% 70.62%,
		71% 70.29%,
		72% 70.02%,
		73% 69.82%,
		74% 69.71%,
		75% 69.67%,
		76% 69.71%,
		77% 69.82%,
		78% 70.02%,
		79% 70.29%,
		80% 70.62%,
		81% 71.02%,
		82% 71.48%,
		83% 71.99%,
		84% 72.54%,
		85% 73.12%,
		86% 73.73%,
		87% 74.35%,
		88% 74.98%,
		89% 75.6%,
		90% 76.21%,
		91% 76.8%,
		92% 77.35%,
		93% 77.85%,
		94% 78.31%,
		95% 78.71%,
		96% 79.05%,
		97% 79.32%,
		98% 79.51%,
		99% 79.63%,
		100% 79.67%
	);
}
```

## CONTENT

### NAVBAR

a => 'Home'

a => 'Services'

a => 'About Us'

a => 'Testimonials'

a => 'Pricing'

button => 'Sign In'

button => 'Sign UP'

```html
<i class="bx bx-menu mobile-btn"></i>

<i class="bx bx-x navbar-close"></i>
```

### HERO

h1 =>

```html
<span class="lila">Boost</span> Your Bussiness with
<span class="lila">Digital Marketing</span> Excellence
```

p => 'Unlock New Opportunities and Expand Your Reach Across Digital
Platforms with Our Comprehensive Solutions.'

button => 'Contact us'

button => 'Learn More'

Images --absolute--

```html
<!-- images --absolute-- -->
<img src="images/star.svg" alt="star" class="star-up" />
<img src="images/star.svg" alt="star" class="star-middle" />
<img src="images/earth.svg" alt="earth" class="earth" />
<img src="images/smoke-1.png" alt="smoke" class="smoke-one" />
<img src="images/smoke-2.png" alt="smoke" class="smoke-two" />
<img src="images/shuttle.png" alt="shuttle" class="shuttle" />
<img src="images/moon.svg" alt="moon" class="moon" />
<img src="images/hero-elipse.svg" alt="elipse" class="hero-elipse" />
<img src="images/orange-ellipse.svg" alt="ellipse" class="orange-ellipse-one" />
<img src="images/orange-ellipse.svg" alt="ellipse" class="orange-ellipse-two" />
<img
	src="images/orange-ellipse.svg"
	alt="ellipse"
	class="orange-ellipse-three"
/>
<img
	src="images/orange-ellipse.svg"
	alt="ellipse"
	class="orange-ellipse-four"
/>
<img
	src="images/orange-ellipse.svg"
	alt="ellipse"
	class="orange-ellipse-five"
/>
<img src="images/orange-ellipse.svg" alt="ellipse" class="orange-ellipse-six" />
<img
	src="images/orange-ellipse.svg"
	alt="ellipse"
	class="orange-ellipse-seven"
/>
<img src="images/lila-light-ellipse.svg" alt="" class="lila-light-ellipse" />
<img src="images/lila-ellipse.svg" alt="" class="lila-ellipse" />
<img src="images/green-light-ellipse.svg" alt="" class="green-light-ellipse" />
```
### OUR CLIENTS

h2 => 'Our Clients'

### SERVICES

h2 => 'Services'

p => Innovative tactics drive optimal engagement for digital success and audience connection.

ITEM 1:
h3 => 'SEO Marketing'
button => 'Learn more'

ITEM 2:
h3 => 'Research Topic Trends'
button => 'Learn more'

ITEM 3:
h3 => 'Email Marketing'
button => 'Learn more'

ITEM 4:
h3 => 'Google PPC'
button => 'Learn more

### ABOUT US

h2 => 'Why Choose Us?'

ITEM 1:
p => 'Solutions Tailored Specifically to Your Business Needs'

ITEM 2:
p => 'Creative Excellence Elevates Every Project'

ITEM 3:
p => 'Client Satisfaction is Our Main Focuss'

### WORK WITH NUSA

h2 => 'Work with Nusa Tech'

ITEM 1:

h3 => '10,000+'

p => 'Happy Customers'

ITEM 2:

h3 => '20,000+'

p => 'Success Processes'

ITEM 3:

h3 => '10+ Years'

p => 'of Experience'

### TESTIMONIALS

h2 => 'What Our Customers say about Nusa Tech'

ITEM 1:

h3 => 'Michael Lee'

p => 'Small Business Owner of a Local Cafe'

p => 'Impressed with Nusa Tech's professionalism and competence. They understand our needs and provide innovative solutions, with outstanding customer service.'

ITEM 2:

h3 => 'Jessica Taylor'

p => 'Director of Marketing Startup'

p => 'Nusa Tech significantly improved our online presence. From website design to PPC campaigns, they deliver outstanding results. Highly recommended!'

ITEM 3:

h3 => 'David Smith'

p => 'CEO of Digital Startup'

p => 'Very satisfied with Nusa Tech's work. They've improved our brand visibility online and provided valuable insights. Thank you!'

### PRICING

h2 => 'Pricing Plans'

p => 'The Best Solution for Our Clients'

ITEM 1:

p => 'Starter Plan'

h3 => '$500'

li => 'Responsive website design and development (5 pages)'

li => 'Basic SEO'

li => 'Social media management'


ITEM 2:

p => 'Business  Plan'

h3 => '$1000'

li => 'Responsive website design and development (10 pages)'

li => 'Advanced SEO'

li => 'Social media management'

li => 'PPC advertising campaign'

ITEM 3:

p => 'Premium Plan'

h3 => '$2000'

li => 'Advanced business plan'

li => 'Regular content creation'

li => 'Performance analysis and monthly reporting'

### DEVID SMITH - CEO

h2 => '“Stand out online and make an impact”'

button => 'Start Now'

p => 'David Smith - CEO of a Tech Startup'

### FOOTER

ITEM 1:

p => 'Nusa Tech is a leading digital marketing agency dedicated to driving success for businesses online. With expertise in SEO, PPC, social media, content creation, and more, we offer tailored solutions to maximize ROI.'

ITEM 2:

h3 => 'Our Services'

li => 'SEO Marketing'

li => 'Research Topic Trends'

li => 'Email Marketing'

li => 'Google PPC'


ITEM 3:

h3 => 'Explore More'

li => 'About us'

li => 'Feature'

li => 'Our works'

li => 'Recourse'

li => 'Privacy Policy'


ITEM 4:

h3 => 'Contact Us'

li => p => 'Jl.Medan Merdeka No. 35 Jakarta <br> Selatan'

li => p => '(021) 234567'

li => p => '+62 812 9188 72'


p => 'Nusa tech 2024 © All right reserved <br>Coding: ProCode-Vereikin'

p => 'Terms & Condition'
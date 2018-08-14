import * as React from 'react';
import Head from 'next/head';
import Carousel from 'nuka-carousel';
import Ionicon from 'react-ionicons';
import Normalize from '../components/Normalize';
import Feature from '../components/Feature';

export default () => (
	<React.Fragment>
		<Head>
			<title>Now Mobile</title>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="Mobile client for Now deployment platform" />
			<meta property="og:title" content="Now Mobile" />
			<meta property="og:description" content="Mobile client for ZEIT's Now deployment platform" />
			<meta property="og:image" content="https://mobile.now.sh/static/preview.jpg" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Now Mobile" />
			<meta name="twitter:description" content="Mobile client for ZEIT's Now deployment platform" />
			<meta name="twitter:image" content="https://mobile.now.sh/static/preview.jpg" />
			<meta name="twitter:creator" content="@MaxRovensky" />
			<meta name="twitter:site_name" content="Max Rovensky" />
			<meta name="msapplication-TileColor" content="#ffffff" />
			<meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
			<link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
			<link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
			<link
				rel="apple-touch-icon"
				sizes="114x114"
				href="/static/favicons/apple-icon-114x114.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="120x120"
				href="/static/favicons/apple-icon-120x120.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="144x144"
				href="/static/favicons/apple-icon-144x144.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="152x152"
				href="/static/favicons/apple-icon-152x152.png"
			/>
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/static/favicons/apple-icon-180x180.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="192x192"
				href="/static/favicons/android-icon-192x192.png"
			/>
			<link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="96x96" href="/static/favicons/favicon-96x96.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png" />
			<link rel="shortcut icon" href="/static/favicons/favicon.ico" type="image/x-icon" />
			<link rel="icon" type="image/png" href="/static/favicons/apple-icon.png" />
			<link rel="manifest" href="/static/manifest.json" />
		</Head>
		<main>
			<section>
				<div>
					<h1>Now Mobile</h1>
					<h2 className="subheader">A mobile client for Now platform</h2>
					<img src="/static/head-img.jpg" alt="now-mobile" height="512" />
					<br />
					<div className="store-buttons">
						<a href="https://itunes.apple.com/us/app/now-mobile/id1418434895?ls=1&mt=8" target="_blank" rel="noreferrer noopener">
							<img src="/static/appstore.svg" alt="AppStore" height="48px" />
						</a>
						<a href="https://play.google.com/store/apps/details?id=im.rdev.nowmobile" target="_blank" rel="noreferrer noopener">
							<img src="/static/playstore.svg" alt="Google Play Store" height="48px" />
						</a>
					</div>
				</div>
			</section>
			<section className="features" id="features">
				<h2>Features</h2>
				<Feature
					title="Event History"
					icon="md-list"
				>
					View all your Now events
				</Feature>
				<Feature
					title="Deployments"
					icon="md-cloud"
				>
					Full list of your deployments
				</Feature>
				<Feature
					title="Active aliases"
					icon="md-globe"
				>
					See your active domain aliases
				</Feature>
				<Feature
					title="Domains"
					text="www"
				>
					Your domains and Now CDN status
				</Feature>
				<Feature
					title="Usage"
					icon="ios-stats"
				>
					Usage stats to date
				</Feature>
				<Feature
					title="Teams"
					icon="md-people"
				>
					Full support for teams
				</Feature>
				<Feature
					title="Spotlight"
					icon="ios-search"
				>
					Search your deployments easily
				</Feature>
				<Feature
					title="Touch ID / Face ID"
					icon="md-finger-print"
				>
					Keep your account secure
				</Feature>
				<Feature
					title="Today Widgets"
					icon="ios-phone-portrait"
				>
					Instances and Usage widgets
				</Feature>
			</section>
			<section className="watch" id="apple-watch">
				<h2>Apple Watch App</h2>
				<img src="/static/watch.jpg" alt="apple watch" width="256px" />
				<ul>
					<li>Check your deployments list</li>
					<li>View your active aliases</li>
					<li>View your usage stats to date</li>
					<li>Watch face complications (usage, instance count)</li>
				</ul>
			</section>
			<section className="screenshots" id="screenshots">
				<div>
					<h2>Screenshots</h2>
					<div className="screenshots-container">
						<Carousel slideWidth="243px">
							<img src="/static/screenshots/1.jpg" alt="screenshot-1" height="432px" width="243px" />
							<img src="/static/screenshots/2.jpg" alt="screenshot-2" height="432px" width="243px" />
							<img src="/static/screenshots/3.jpg" alt="screenshot-3" height="432px" width="243px" />
							<img src="/static/screenshots/4.jpg" alt="screenshot-4" height="432px" width="243px" />
							<img src="/static/screenshots/5.jpg" alt="screenshot-5" height="432px" width="243px" />
							<img src="/static/screenshots/6.jpg" alt="screenshot-6" height="432px" width="243px" />
							<img src="/static/screenshots/7.jpg" alt="screenshot-7" height="432px" width="243px" />
							<img src="/static/screenshots/8.jpg" alt="screenshot-8" height="432px" width="243px" />
						</Carousel>
					</div>
				</div>
			</section>
			<section>
				<div className="contributing-container" id="contributing">
					<h2>Contributing</h2>
					<span>The app is fully Open Source and is available on GitHub</span>
					<div className="link-group">
						<a href="https://github.com/rdev/now-mobile" target="_blank" rel="noreferrer noopener">
							<Ionicon icon="logo-github" fontSize="64px" />
							<span>Now Mobile Repository</span>
						</a>
						<a href="https://zeit.co/api" target="_blank" rel="noreferrer noopener">
							<img src="/static/zeit-logo.svg" alt="zeit-logo" height="52px" />
							<span style={{ marginTop: 20 }}>ZEIT API Docs</span>
						</a>
					</div>
					<br />
					<span style={{ marginTop: 20 }}>
						You can also <a href="/static/now-mobile.sketch">download the design</a> in Sketch format
					</span>
				</div>
			</section>
			<footer>
				<span>Built with ♥︎ by <a href="https://fivepointseven.com" target="_blank" rel="noreferrer noopener">this guy</a>.</span>
				<span>Disclamer: This is a third party application, not an official ZEIT software.</span>
			</footer>
			<Normalize />
			<style jsx>{`
				main {
					grid-area: content;
					display: flex;
					flex-direction: column;
				}

				section {
					display: grid;
					grid-template-rows: 1fr;
					grid-template-columns: 2fr 6fr 2fr;
					grid-template-areas: '. content .';
					text-align: center;
					margin-bottom: 50px;
					max-width: 100vw;
				}

				section > div {
					grid-area: content;
				}

				h1 {
					margin-top: 70px;
					font-weight: 200;
					font-size: 38px;
					letter-spacing: 0.5px;
					margin-bottom: 15px;
				}

				h2 {
					font-weight: 300;
					font-size: 32px;
					letter-spacing: 0.25px;
				}

				h2.subheader {
					font-weight: 300;
					font-size: 20px;
					color: #7a7a7a;
					letter-spacing: 0.2px;
				}

				.features {
					display: grid;
					padding: 0 15%;
					grid-template-rows: auto 1fr 1fr 1fr;
					grid-template-columns: 1fr 1fr 1fr;
					grid-template-areas: 
						'header header header'
						'. . .'
						'. . .'
				}

				.features h2 {
					grid-area: header;
					margin-bottom: 50px;
				}

				.watch {
					background-color: black;
					padding-top: 30px;
					padding-bottom: 80px;
					display: grid;
					grid-template-rows: auto 1fr;
					grid-template-columns: 2fr 3fr 4fr 2fr;
					grid-template-areas: 
						'watch-header watch-header watch-header watch-header'
						'. watch-image watch-features .'
				}

				.watch h2 {
					grid-area: watch-header;
					margin-bottom: 50px;
				}

				.watch * {
					color: white;
				}

				.watch > img {
					grid-area: watch-image;
					margin: auto;
					max-height: 100%;
				}

				.watch > ul {
					grid-area: watch-features;
					list-style-type: none;
					text-align: left;
					font-size: 18px;
					line-height: 2.5em;
					height: 90%;
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				.watch > ul > li {
					text-indent: -5px;
				}

				.watch > ul > li:before {
					content: "-";
					text-indent: -5px;
				}

				.screenshots-container {
					width: 729px;
					margin: auto;
				}
				
				.contributing-container {
					display: flex;
					flex-direction: column;
				}
				
				.contributing-container span {
					font-size: 16px;
				}

				.link-group {
					margin-top: 50px;
					display: flex;
					justify-content: space-around;
				}
				
				.contributing-container > div a {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: black;
					padding: 20px;
					border-radius: 5px;
					text-decoration: none;
					font-weight: 500;
					width: 220px;
					height: 140px;
					box-shadow: 4px 10px 40px rgba(0, 0, 0, 0.1);
					transition: box-shadow 0.2s ease, transform 0.2s ease;
				}

				.contributing-container > span a {
					color: black;
				}

				.contributing-container > div a:hover {
					box-shadow: 10px 18px 60px rgba(0, 0, 0, 0.2);
					transform: translateY(-5px);
				}

				.contributing-container a span {
					margin-top: 15px;
					font-size: 14px;
				}

				footer {
					width: 100%;
					background-color: #fafafa;
					padding: 20px;
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				footer * {
					color: #aaa;
					font-size: 12px;
				}

				.store-buttons {
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.store-buttons a:last-child {
					margin-left: 50px;
				}
			`}
			</style>
			<style jsx>{`
			@media only screen and (min-width: 834px) and (orientation: portrait) {
				.watch > img {
					margin: 0;
				}

				.watch > ul {
					height: initial
				}
			}
			`}
			</style>
			<style jsx>{`
			@media only screen and (max-width: 767px) {
				h1 {
					margin-top: 30px;
				}

				.features {
					grid-template-rows: auto 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr !important;
					grid-template-columns: 1fr !important;
					grid-template-areas: 
						'header'
						'.' '.' '.' '.' '.' '.' '.' '.' '.' !important;
				}

				.watch {
					grid-template-rows: auto 2fr 1fr;
					grid-template-columns: 1fr;
					grid-template-areas: 
						'watch-header'
						'watch-image'
						'watch-features';
				}

				.watch > ul {
					height: 70%;
					align-self: center;
				}

				.screenshots {
					grid-template-columns: 1fr 12fr 1fr;
				}

				.screenshots-container {
					width: 243px;
				}

				.link-group {
					flex-direction: column;
					height: 380px;
				}

				footer {
					flex-direction: column;
					text-align: center;
				}

				footer span:first-child {
					margin-bottom: 15px;
				}

				.store-buttons {
					flex-direction: column;
				}

				.store-buttons a:last-child {
					margin-left: 0;
					margin-top: 15px;
				}
			}
			`}
			</style>
		</main>
	</React.Fragment>
);


/*
- Event history
- Deployments view
- Active aliases
- Domains with Now CDN status
- Usage statistics to date
- Teams support
- Spotlight search
- Today widgets (Instances, Usage)
*/

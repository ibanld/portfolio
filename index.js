import { developer } from './modules/developer.js';
import { projects as portfolio } from './modules/projects.js';

// Dynamic DOM
// Get DOM elements
const projects = document.getElementById('projects');
const projectOvr = document.querySelector('.project-content');
const profile = document.getElementById('profile');
const openBtn = document.getElementById('openprj');
const closeBtn = document.getElementById('close');
const overlay = document.getElementById('dark-div');
const prjList = document.querySelector('.projects-list');
const prjTable = document.querySelector('.project-table');

openBtn.onclick = () => {
	overlay.style.display = 'block';
	projects.style.display = 'flex';
	projects.style.position = 'absolute';
	profile.style.position = 'relative';
	projects.style.animation = 'open-box 3s';
};

closeBtn.onclick = () => {
	projectOvr.style.animation = 'close-box 2s ease-in';
	setTimeout(() => {
		projects.style.display = 'none';
		overlay.style.display = 'none';
		projectOvr.style.animation = null;
	}, 2000);
};

// Dynamic HTML
// Get DOM elements
const profileText = document.querySelector('.content-text');
const stackList = document.querySelector('.technologies');
const social = document.querySelector('.content-links');
// Destructuring Object
const { name, surname, role, stacks, media } = developer;
const { twitter, facebook, instagram, youtube, linkedin, website, email } = media;
// Profile name
profileText.innerHTML = '<h1 id="name">' + name + ' ' + surname + '</h1><h3 id="subtitle">' + role + '</h3>';
// Stack icons
stackList.innerHTML = stacks
	.map((tech) => {
		return `<i class="fab fa-${tech}"></i>&nbsp;`;
	})
	.join(' ');
// Social Media
const tw =
	twitter && `<a href="https://www.twitter.com/${twitter}" target="_blank"><i class="fab fa-twitter"></i></a>&nbsp;`;
const fb =
	facebook &&
	`<a href="https://www.facebook.com/${facebook}" target="_blank"><i class="fab fa-facebook"></i></a>&nbsp;`;
const ig =
	instagram &&
	`<a href="https://www.instagram.com/${instagram}" target="_blank"><i class="fab fa-instagram"></i></a>&nbsp;`;
const yt =
	youtube && `<a href="https://www.youtube.com/c/${youtube}" target="_blank"><i class="fab fa-youtube"></i></a>&nbsp;`;
const ln =
	linkedin &&
	`<a href="https://www.linkedin.com/in/${linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>&nbsp;`;
const ws = website && `<a href="${website}" target="_blank"><i class="fas fa-globe"></i></a>&nbsp;`;
const mail = email && `<a href="mailto: ${email}" target="_blank"><i class="fas fa-envelope"></i></a>`;

social.innerHTML = tw + fb + ig + yt + ln + ws + mail;

// Projects
// Project Grid
const revPortfolio = portfolio.reverse().slice(0,9);

prjList.innerHTML =
	revPortfolio
		.map((project) => {
			const projectStack = project.stack
				.map((tech) => {
					return `<i class="fab fa-${tech}"></i>&nbsp;`;
				})
				.join(' ');
			return (
				'<div class="project-card"><div class="card-header"><div class="preview">' +
				`<img src="./img/projects/${project.img}" alt="screenshot">` +
				'</div></div><div class="project-display"><div class="project-text">' +
				`<p>${project.des}</p>` +
				'</div><div class="project-stack">' +
				projectStack +
				'</div></div><div class="project-footer"><div class="project-links">' +
				`<a href="${project.deploy}" target="_blank"><i class="fas fa-external-link-alt"></i></a>&nbsp;
					<a href="${project.repo}" target="_blank"><i class="fab fa-github"></i></a>` +
				'</div></div></div>'
			);
		})
		.join(' ');

// Projects Table
prjTable.innerHTML =
	'<table><tr><th>Project</th><th>Description</th><th>Stack</th><th>Links</th></tr>' +
	portfolio
		.map((project) => {
			const projectStack = project.stack
				.map((tech) => {
					return `<i class="fab fa-${tech}"></i>&nbsp;`;
				})
				.join(' ');
			return `<tr><td>${project.title}</td><td>${project.des}</td>
					<td>${projectStack}</td>
					<td>
						<a href="${project.deploy}" target="_blank"><i class="fas fa-external-link-alt"></i></a>&nbsp;
						<a href="${project.repo}" target="_blank"><i class="fab fa-github"></i></a>
					</td>
                </tr>`;
		})
		.join(' ') +
	'</table>';

// Defining Button Actions after DOM loads

const viewBtn = document.getElementById('viewAll');
const backBtn = document.getElementById('back');

viewBtn.onclick = () => {
	prjList.style.display = 'none';
	prjTable.style.display = 'flex';
	backBtn.style.display = 'inline';
	viewBtn.style.display = 'none';
};

backBtn.onclick = () => {
	prjList.style.display = 'flex';
	prjTable.style.display = 'none';
	backBtn.style.display = 'none';
	viewBtn.style.display = 'inline';
};

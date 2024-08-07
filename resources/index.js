
const jobs = [
    {
        title: 'Software engineer',
        image: 'images/tools-folder-svgrepo-com.svg',
        details: 'Responsible for designing, developing, and maintaining software systems and applications.',
        openPositions: '2',
        link: '#',
    },
    {
        title: 'Data scientist',
        image: 'images/data-scientist.svg',
        details: "Responsible for collecting, analyzing, and interpreting large data sets to help organizations make better decisions.",
        openPositions: "3",
        link: '#'
    },
    {
        title: 'Project manager',
        image: 'images/project-manager.svg',
        details: "The Project Manager is responsible for planning, executing, and finalizing projects according to strict deadlines and within budget.",
        openPositions: '1',
        link: '#'
    },
    {
        title: 'Product manager',
        image: 'images/product-manager.svg',
        details: 'Responsible for the strategy, roadmap, and feature definition of a product or product line. Their role is multifaceted and involves coordinating among various stakeholders such as engineering, marketing, sales, and customer support to ensure the successful development and launch of a product.',
        openPositions: '2',
        link: '#'
    },
    {
        title: 'DevOps engineer',
        image: 'images/devops-engineer.svg',
        details: "Fostering a culture of collaboration and continuous improvement, leveraging automation and modern tools to streamline the development and operations lifecycle, and ensuring that applications are reliable, scalable, and secure.",
        openPositions: '4',
        link: '#'
    },
    {
        title: 'Sales representative',
        image: 'images/sales-rep.svg',
        details: "Responsible for selling a company's products or services to customers. This role involves identifying potential customers, understanding their needs, and persuading them to purchase the company's offerings.",
        openPositions: '3',
        link: '#'
    },
];

const jobHeading = document.querySelector(".job-list-container h2");
const jobsContainer = document.querySelector(".jobs");
const jobSearch = document.querySelector(".job-list-container .job-search");

let searchTerm = '';

jobHeading.innerHTML = `${jobs.length} Job${jobs.length !== 1 ? 's' : ''}`;

const createJobListingCards = () => {

    jobsContainer.innerHTML = "";


    jobs.forEach(job => {
        if(job.title.toLowerCase().includes(searchTerm.toLowerCase())){
        let jobCard = document.createElement('div');
        jobCard.classList.add('job');

        let image = document.createElement("img");
        image.src = job.image;

        let title = document.createElement('h3');
        title.innerHTML = job.title;
        title.classList.add('job-title');

        let details = document.createElement('div');
        details.innerHTML = `<p>${job.details}</p>`;
        details.classList.add('details');

        let detailsBtn = document.createElement('a');
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More details";
        detailsBtn.classList.add("detailsBtn");

        let openPositions = document.createElement('span');
        openPositions.classList.add("open-positions");
        openPositions.innerHTML = `${job.openPositions} open position${job.openPositions !== '1' ? 's' : ''}`;

        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);

        jobsContainer.appendChild(jobCard);
}});
}

document.addEventListener('DOMContentLoaded', createJobListingCards);

jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;

    createJobListingCards();
});
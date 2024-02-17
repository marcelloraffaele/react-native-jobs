import { useState, useEffect } from 'react';

//import axios from 'axios';
//import { RAPID_API_KEY } from '@env';
//const rapidApiKey = RAPID_API_KEY;
//const rapidApiKey = 'xxxx';


const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const [error, setError] = useState([]);

    //console.log("endpoint: " + endpoint + ", " + JSON.stringify(query) );
    //const options = {
    //    method: 'GET',
    //    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    //    params: { ...query },
    //    headers: {
    //      'X-RapidAPI-Key': rapidApiKey,
    //      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    //    }
    //};

    const fetchData = async () => {
        setIsLoading(true);
        setError(false);

        try {
//            const response = await axios.request(options);
//            setData(response.data.data);
            if(endpoint === "job-details") {
              setData(jobDetail.data);
            } else if(endpoint=== "search") {
              setData(search.data);
            } else {
              setData(allJobs.data);
            }
            setIsLoading(false);
        } catch( error ) {
            setError(true);
            alert('There is an error');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=> {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch};
}



export default useFetch;

const allJobs = {
  "status": "OK",
  "request_id": "8739be65-eeab-43b6-859b-ccc6ec8b77e1",
  "parameters": {
    "query": "web developer in texas usa",
    "page": 1,
    "num_pages": 1
  },
  "data": [
    {
      "employer_name": "Dice",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
      "employer_website": null,
      "employer_company_type": "Information",
      "job_publisher": "LinkedIn",
      "job_id": "8yv3oA_2-UYAAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "Web Developer - 6-month Contract - Houston Hybrid",
      "job_apply_link": "https://www.linkedin.com/jobs/view/web-developer-6-month-contract-houston-hybrid-at-dice-3624857671",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5805,
      "job_description": "An established energy client of mine is looking for an experienced Web Developer to join their team on an initial 6-month contract. Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors. This role is hybrid and you will be required to go in to the office 3 days p/w.\n\nFull-Stack Web Developer\n\n6-month contract (likely extension)\n\nHouston - Hybrid working\n\nW2 - $70 - $75 p/h\n\nC2C - $80 - $90 p/h\n\nStarting 06/05\n\nTechnical requirements;\n\nJavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API\n\n(NO EMPLOYERS OR RECRUTIERS)\n\nOscar Associates Limited (US) is acting as an Employment Business in relation to this vacancy.\n\nWeb Developer - 6-month Contract - Houston Hybrid",
      "job_is_remote": true,
      "job_posted_at_timestamp": 1685653019,
      "job_posted_at_datetime_utc": "2023-06-01T20:56:59.000Z",
      "job_city": "Houston",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.760427,
      "job_longitude": -95.369804,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=8yv3oA_2-UYAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-07-01T20:56:59.000Z",
      "job_offer_expiration_timestamp": 1688245019,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "JavaScript, (React OR Angular OR Vue), Node, HTML, CSSS, API"
        ],
        "Responsibilities": [
          "Starting 6/5, you will be working in an agile team to help develop a new set of web applications for their own system and sub vendors",
          "This role is hybrid and you will be required to go in to the office 3 days p/w"
        ],
        "Benefits": [
          "6-month contract (likely extension)",
          "W2 - $70 - $75 p/h",
          "C2C - $80 - $90 p/h"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "519130",
      "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
    },
    {
      "employer_name": "Charles Schwab",
      "employer_logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Charles_Schwab_Corporation_logo.svg/1200px-Charles_Schwab_Corporation_logo.svg.png",
      "employer_website": "http://www.schwab.com",
      "employer_company_type": "Finance",
      "job_publisher": "Schwab Jobs",
      "job_id": "G6qYxpAYyVsAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Software Web Developer",
      "job_apply_link": "https://www.schwabjobs.com/job/austin/software-web-developer/33727/48110146896",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.8104,
      "job_description": "Your Opportunity\n\nWe help our clients plan for their future and they are passionate about the tools and experiences we provide. We collaborate with user experience and design, business and technology partners across the enterprise to build software experiences our users’ are passionate about.\nWhat you are good at\n\nWebsite and Electronic Communications (Email, Push, SMS, etc) Templates designing, building, or maintaining. Using scripting or authoring languages, management tools, content creation tools, applications and digital media. Conferring with teams in resolving conflicts, prioritizing needs, developing content criteria, or choosing solutions. Directing or performing Website/Electronic Communications updates. Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types. Editing, writing, or designing Website content, and directing team members who produce content. Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups. Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction. Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements.\nWhat you have\n\nJob Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role. Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams.\n\nCharles Schwab & Company, Inc. seeks Software Web Developer in Austin, TX.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1682726400,
      "job_posted_at_datetime_utc": "2023-04-29T00:00:00.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=G6qYxpAYyVsAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": null,
      "job_offer_expiration_timestamp": null,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 60,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Job Requirements: Bachelor’s degree or foreign degree equivalent in Computer Science, Engineering or related field and five (5) years of experience in the job offered or related role",
          "Skills: Experience and/or education must include: Experience in programming applications using HTML, JavaScript, CSS, Angular/React Js, XML and Json.; SQL/No-SQL databases; Experience working with the continuous integration and continuous deployment (CI/CD) pipelines; Experience in programming applications using Java/J2EE; Understanding of software quality assurance principles; Experience working in Agile teams"
        ],
        "Responsibilities": [
          "Directing or performing Website/Electronic Communications updates",
          "Developing or validating test routines and schedules in ensuring that test cases mimic external interfaces and address all browser and device types",
          "Editing, writing, or designing Website content, and directing team members who produce content",
          "Maintaining an understanding of the latest Web applications and programming practices through education, studying, and participating in conferences, workshops, and groups",
          "Identifying problems uncovered by customer feedback and testing and correcting or referring problems to appropriate personnel for correction",
          "Evaluating code in ensuring that it meets industry standards, is valid, is properly structured, and is compatible with browsers, devices, or operating systems; and Determining user needs by analyzing technical requirements"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "523920",
      "job_naics_name": "Portfolio Management"
    },
    {
      "employer_name": "Crescens",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8i49TxmypL921gwSrXCigLk762K1u2Qu9yW0x&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Recruit.net",
      "job_id": "tZ_zrHS5wN8AAAAAAAAAAA==",
      "job_employment_type": "CONTRACTOR",
      "job_title": "Web Developer",
      "job_apply_link": "https://www.recruit.net/job/web-developer-jobs/A8362DD6B42FD034",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.427,
      "job_description": "Job Description Job title : Web Developer Location : Remote Duration : 5 months Type: contract Job Description : Minimum of 7 years overall IT experience: including 5 years of web UI development and integration experience Responsible for detailed UI design, development/unit testing and integration of web and applications Responsible for Angular application development using web app development tools and frameworks Produce scalable and flexible, high-quality code that satisfies both the functional and non-functional requirements Identify technical issues & coordinate the resolution of these issues with extended team members from other applications Uses secure development best practices and design patterns Create or update design and systems documentation for developed or modified software component or application Create process and data flow diagrams for data movement capture Cross train team members for full knowledge coverage on team Analyze and translate business requirements to technical design Collaborate/communicate with project team and business users as required Support functional testing and performance testing Works with technical delivery lead on project activities Ensure assigned work is implemented within project schedules Strong Automotive OEM experience Solid understanding of various enterprise services and micro-service concepts Solid understanding of MicroService concepts and 12 Factor App design principles Experience with DevOps in a cloud environment a plus Experienced with waterfall, iterative, and agile methodologies. Required Skills: Demonstrated experience using UX design tools for facilitating the UI requrirement gathering and wire frame design Experience in desiging and developing modern web applications, particualry Single Page Applicaiton design. Professional working experience in Angular development with Typescript (minimum 3 years experience) Strong HTML5, CSS3 and Javascripts skills (minimum 5 years experience) Working experience in bootstrap and jquery Professional working experience with integrating REST services with Angular front-end. Working experience with version control tools like Git, SVN Deep knowledge of Angular practices and commonly used modules based on past work experience Extensive knowledge of javascript based frameworks to provide better yet faster UI experience for end users Experience in design and creating responsive web applications Experience in developing hybrid mobile applications using IONIC (Angular/Cordova) framework Proficient with UML models, and use them for communicating and documenting application designs Knowledge of core J2EE patterns Experience with continuous integration tools (e.g. SVN/git, Jira, Jenkins, Maven, etc.) Experience implementing authentication, authorization, Single Sign On, SAML, OAuth Experience in working with various web application servers (Websphere, Tomcat etc.) Strong analytical and debugging skills. Unique skills: Creating e2e test suites for angular components and running them with Web Testing Framework like Protractor, Cucumber or Other alternatives Open to learning new Technologies as required to meet business requirements Experience with application redesign and Angular framework upgrading from version 4.x to the later one Preferred: Experience in developing iOS and Android native mobile app Knowledge and experience with IBM Mobile First product Knowledge and experience with IBM Redhat Openshift product.",
      "job_is_remote": true,
      "job_posted_at_timestamp": 1685577600,
      "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
      "job_city": "Texas City",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.383844,
      "job_longitude": -94.9027,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=tZ_zrHS5wN8AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-07-01T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1688169600,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 84,
        "experience_mentioned": true,
        "experience_preferred": true
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {},
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3"
    },
    {
      "employer_name": "Spurs Sports & Entertainment",
      "employer_logo": "https://firstteeaustin.org/wp-content/uploads/sites/64/2016/11/spurs-sports-and-entertainment-LOGO.jpg",
      "employer_website": "http://www.spurs.com",
      "employer_company_type": "Consulting",
      "job_publisher": "LinkedIn",
      "job_id": "UzcMt4Nb4qkAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Senior Web Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/senior-web-developer-at-spurs-sports-entertainment-3617222882",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5699,
      "job_description": "Overview\n\nWe are looking for Senior Web Developer to join our family!\n\nAt Spurs Sports & Entertainment (SS&E), we work in service of something bigger than ourselves, it’s so much more than the game or concert itself. It takes all members of our Spurs Family to harness the power of sports and entertainment to build moments that endure, memories that excite, and connections that strengthen our community.\n\nThis position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio. You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement.\n\nIn addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio. Candidates should be flexible to modern development practices, embrace emerging standards and technology while advocating for the best methodologies.\n\nOverview -NOTE: This position is not responsible for social media administration. This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments.\n\nDoes this sound like a fit? If so, we want to hear from you!\n\nIn every position, each employee is expected to: Demonstrate Alignment with SS&E’s Core Values and Mission, Collaborate with Internal/External Family Members and Demonstrate Ongoing Development.\n\nResponsibilities\n• Write clean, reusable, and accessible client-side component code for web applications.\n• Understand product requirement documentation/functional specifications and develop application based upon specifications\n• Collaborate with project partners to ensure all requirements are met\n• Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions.\n• Apply knowledge of modern web development to build and maintain responsive web pages\n• Be responsible for quality assurance testing for all digital platforms\n• Provide technical and developmental mentorship to junior developers\n• Other duties as assigned\n\nQualifications\n• 2-4 years’ experience developing responsive, web-based applications\n• 2+ years’ experience using version control - Git, GitHub, etc.\n• Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)\n• Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)\n• Familiarity and knowledge of API, JSON, XML, and other common data frameworks.\n• Experience working in content management systems\n• Ability to creatively problem solve, work independently and coordinate multiple tasks\n• Strong teamwork and interpersonal skills to handle acute and confidential situations and information\n\nPreferred Qualifications\n• Javascript framework experience a plus (Node.js, React.js, Next.js)\n• Previous experience in sports or event industries\n• Understanding of UX / UI / SEO principles\n\nEEO Statement\n• SS&E is an Equal Opportunity Employer*\n\nNothing contained in this job description is intended to be a contract of employment, nor does any information contained herein represent a guarantee of employment for a specific duration. Your employment with SS&E is “at will”, which means that either you or SS&E may terminate the relationship at any time.\n\nWe will ensure that individuals with disabilities are provided reasonable accommodation to participate in the job application or interview process, to perform essential job functions, and to receive other benefits and privileges of employment. Please contact us to request accommodation.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685525977,
      "job_posted_at_datetime_utc": "2023-05-31T09:39:37.000Z",
      "job_city": "San Antonio",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.42519,
      "job_longitude": -98.49459,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=UzcMt4Nb4qkAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-06-30T09:39:37.000Z",
      "job_offer_expiration_timestamp": 1688117977,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 24,
        "experience_mentioned": true,
        "experience_preferred": true
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": false,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "This position focuses on front end web and mobile app development and requires coding/programming skills necessary to build and solve assets both from scratch and from within multiple CMS environments",
          "2-4 years’ experience developing responsive, web-based applications",
          "2+ years’ experience using version control - Git, GitHub, etc",
          "Experience with front-end development languages and markups (JavaScript, CSS, HTML, etc.)",
          "Experience with UI CSS and/or JavaScript frameworks (Bootstrap, Materialize, Vue.JS, React, jQuery, etc.)",
          "Familiarity and knowledge of API, JSON, XML, and other common data frameworks",
          "Experience working in content management systems",
          "Ability to creatively problem solve, work independently and coordinate multiple tasks",
          "Strong teamwork and interpersonal skills to handle acute and confidential situations and information"
        ],
        "Responsibilities": [
          "This position will support and manage both app and website development across the Spurs Sports & Entertainment portfolio",
          "You will develop user-focused products, develop meaningful metrics and tracking them over time to establish a program of continuous innovation and improvement",
          "In addition to the above, this position will also be responsible for the development and maintenance of all websites in SS&E’s portfolio",
          "Write clean, reusable, and accessible client-side component code for web applications",
          "Understand product requirement documentation/functional specifications and develop application based upon specifications",
          "Collaborate with project partners to ensure all requirements are met",
          "Interact regularly with users to capture feedback, listen to their issues and concerns, recommend solutions",
          "Apply knowledge of modern web development to build and maintain responsive web pages",
          "Be responsible for quality assurance testing for all digital platforms",
          "Provide technical and developmental mentorship to junior developers",
          "Other duties as assigned"
        ]
      },
      "job_job_title": "Senior",
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "541613",
      "job_naics_name": "Marketing Consulting Services"
    },
    {
      "employer_name": "Archetype Permanent Solutions",
      "employer_logo": null,
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Talent.com",
      "job_id": "JviQ_0mnlXoAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Web developer",
      "job_apply_link": "https://www.talent.com/view?id=d9389c3c7cd3",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.4979,
      "job_description": "Responsibilities :\n• Develop and maintain web applications using modern web technologies and programming languages\n• Work with cross-functional teams to understand business requirements and develop appropriate solutions\n• Write well-designed, testable, and efficient code using appropriate software development methodologies\n• Develop and maintain database schemas, queries, and stored procedures in SQL databases\n• Work with PLC logic and interface with web applications\n• Collaborate with front-end developers to integrate user-facing elements with server-side logic\n• Ensure the technical feasibility of UI / UX designs\n• Optimize web applications for maximum speed and scalability\n• Troubleshoot and debug web applications as necessary\n• Stay up-to-date with emerging trends and technologies in web development\n\nRequirements :\n• Bachelor's degree in Computer Science, Information Technology or related field\n• Proven experience in full stack web development with a focus on server-side technologies\n• Strong experience with Windows Server, SQL databases, and PLC logic\n• Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g. AngularJS, ReactJS)\n• Experience with web development frameworks such as ASP.NET , Node.js, Ruby on Rails, or Django\n• Knowledge of at least one server-side programming language such as C#, Java, or Python\n• Experience with version control systems such as Git\n• Strong analytical and problem-solving skills\n• Excellent communication and collaboration skills\n• Ability to work independently as well as in a team-oriented environment\n• Bilingual English and Korean\n\nIf you are an experienced Full Stack Web Developer with a passion for developing cutting-edge web applications and a desire to work with a dynamic team, please apply for this position.\n\nWe offer a competitive salary, benefits package, and opportunities for professional growth and advancement.\n\nPowered by JazzHR\n\nLast updated : 2023-06-01",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685577600,
      "job_posted_at_datetime_utc": "2023-06-01T00:00:00.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=JviQ_0mnlXoAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-09-02T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1693612800,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "Bachelor's degree in Computer Science, Information Technology or related field",
          "Proven experience in full stack web development with a focus on server-side technologies",
          "Strong experience with Windows Server, SQL databases, and PLC logic",
          "Proficient understanding of web markup, including HTML5, CSS3, and JavaScript frameworks (e.g",
          "AngularJS, ReactJS)",
          "Experience with web development frameworks such as ASP",
          "NET , Node.js, Ruby on Rails, or Django",
          "Knowledge of at least one server-side programming language such as C#, Java, or Python",
          "Experience with version control systems such as Git",
          "Strong analytical and problem-solving skills",
          "Excellent communication and collaboration skills",
          "Ability to work independently as well as in a team-oriented environment",
          "Bilingual English and Korean"
        ],
        "Responsibilities": [
          "Develop and maintain web applications using modern web technologies and programming languages",
          "Work with cross-functional teams to understand business requirements and develop appropriate solutions",
          "Write well-designed, testable, and efficient code using appropriate software development methodologies",
          "Develop and maintain database schemas, queries, and stored procedures in SQL databases",
          "Work with PLC logic and interface with web applications",
          "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
          "Ensure the technical feasibility of UI / UX designs",
          "Optimize web applications for maximum speed and scalability",
          "Troubleshoot and debug web applications as necessary",
          "Stay up-to-date with emerging trends and technologies in web development"
        ],
        "Benefits": [
          "We offer a competitive salary, benefits package, and opportunities for professional growth and advancement"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_occupational_categories": [
        "15-1254.00"
      ]
    },
    {
      "employer_name": "NextAfter",
      "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3LtpFk_Qn5msyHfLis8HxKBBhhxla_ZNtS7bV&s=0",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "LinkedIn",
      "job_id": "DCi-37AXFUgAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Front End Web Developer",
      "job_apply_link": "https://www.linkedin.com/jobs/view/front-end-web-developer-at-nextafter-3621796979",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.5721,
      "job_description": "At NextAfter, web developers are critical in allowing our nonprofit clients to escape the shackles of poorly designed software. Out-of-the-box software solutions rarely allow nonprofits the flexibility necessary to track every donor action or to make design tweaks to improve donor conversion. That is where you come in.\n\nIn this role, you will be charged with helping organizations make websites do things they were never designed to do. You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms.\n\nBecause NextAfter works solely with nonprofits to help them raise money and awareness for their causes, it’s also essential that every member on our team desires to positively impact the world around them and cares about the people they’re serving alongside and those at the organizations we help.\n\nThe Front End Web Developer supports NextAfter’s efforts to discover what drives donors to give through setting up A/B experiments and optimizing the tracking of various advertising efforts.\n\nEssential Duties and Responsibilities include the following. Other duties may be assigned.\n• Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms. This will involve writing Javascript, HTML, and CSS to override existing page layout and design.\n• Implementing enhanced tracking to monitor the fundraising and marketing efforts. This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms.\n• Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with. This involves setting up templates, implementing tracking, and making configuration changes based upon requirements.\n• Working with client service specialists to devise strategies and tactics that improve our clients’ performance.\n\nQualifications and Skills:\n• Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)\n• Experience with HTML and CSS to craft web pages\n• Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot\n• Experience implementing digital analytics platforms such as Google Analytics and Facebook\n• Knowledge of A/B testing and the associated platforms such as VWO\n\nEducation and Experience\n• Bachelor’s degree (or comparable experience in a similar role)\n• Training in web development either from a Bachelor’s degree or coding bootcamp",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685569007,
      "job_posted_at_datetime_utc": "2023-05-31T21:36:47.000Z",
      "job_city": "Plano",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 33.019844,
      "job_longitude": -96.69888,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=DCi-37AXFUgAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-06-30T21:36:47.000Z",
      "job_offer_expiration_timestamp": 1688161007,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": true,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": 60000,
      "job_max_salary": 70000,
      "job_salary_currency": "USD",
      "job_salary_period": "YEAR",
      "job_highlights": {
        "Qualifications": [
          "Advanced knowledge of Javascript (ability to code without relying on outside libraries such as Vue.js, jQuery, React.js, etc.)",
          "Experience with HTML and CSS to craft web pages",
          "Knowledge of marketing platforms such as Hubspot, MailChimp, and Pardot",
          "Experience implementing digital analytics platforms such as Google Analytics and Facebook",
          "Knowledge of A/B testing and the associated platforms such as VWO",
          "Bachelor’s degree (or comparable experience in a similar role)",
          "Training in web development either from a Bachelor’s degree or coding bootcamp"
        ],
        "Responsibilities": [
          "In this role, you will be charged with helping organizations make websites do things they were never designed to do",
          "You’ll apply your HTML, Javascript, and CSS skills toward crafting unique solutions to solve complex problems across a variety of different web platforms",
          "Setting up A/B experiments utilizing VWO, Optimizely, and similiar platforms",
          "This will involve writing Javascript, HTML, and CSS to override existing page layout and design",
          "Implementing enhanced tracking to monitor the fundraising and marketing efforts",
          "This is normally done with platforms such as Google Tag Manager, Google Analytics, Facebook, Google Ads, and other advertising platforms",
          "Configuring marketing software such as Mailchimp, Hubspot, and similar tools to serve the needs of the nonprofit clients that we work with",
          "This involves setting up templates, implementing tracking, and making configuration changes based upon requirements",
          "Working with client service specialists to devise strategies and tactics that improve our clients’ performance"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3"
    },
    {
      "employer_name": "PCS Software",
      "employer_logo": null,
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Learn4Good",
      "job_id": "RmMWVIxJKacAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Senior React Front-End Web Developer",
      "job_apply_link": "https://www.learn4good.com/jobs/sugar-land/texas/software_development/2355985733/e/",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.3939,
      "job_description": "Senior React Front-End Web Developer\n\nTargeted Start Date: ASAP\n\nLocation:\n\non site in the PCS Houston Regional Office (this is not a remote role, but has a flexible work schedule)\n\nImmediate Supervisor:\nDirector of Development\n\nCompany Background\n\nPCS Software, Inc. is an AI platform for the transportation logistics market space providing the trucking industry's most effective transportation management platform (TMP) to improve fleet management and delivery systems and increase profits for our customers. Through innovation and invention, our software individualizes work routines, consolidates workflows, and streamlines management controls to improve accountability, transparency, and eliminate costly and redundant manual processes.\n\nTrucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations. TL, LTL, Intermodal, and freight brokerage services use our TMP to automate operations, easily access information, and reduce inefficiencies to maximize sales and revenue. Founded in 1997 and headquartered in Houston, Texas, with regional offices now located across North America, PCS Software is the leading developer of hosted software solutions designed specifically for the ground transportation industry.\n\nJob\n\nDescription:\n\nSenior React Front-End Web Developer\n\nRole and\n\nResponsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux.\n\nBuilding reusable components and front-end libraries for future use\n\nResponsible for translating designs and wireframes into high quality code\n\nOptimizing components for maximum performance across a vast array of web-capable devices and browse\n\nEnsure technical feasibility of UI/UX designs\n\nChampion requirement evaluation and impact analysis\n\nParticipate in code reviews and share best practices periodically\n\nContinuous integration with Jenkins CI\n\nParticipate in full SDLC, including meetings, interactive development, estimations, and design sessions\n\nWork in a collaborative environment with other developers and QA team members, product designers, product managers, and off-site 3rd party vendor team members\n\nDeliver code solutions built for performance, availability, and scalability optimizing applications for maximum speed and scalability\n\nCode and unit test functionality and/or integrations between systems\n\nSupport and troubleshoot issues (process and system), identify the root cause, and proactively implement sustainable corrective actions\n\nBuilding reusable code and libraries for future use\n\nStay current with the fast-changing landscape of browser-based application development\n\nMonitor the development of, evaluate, and recommend new technologies/approaches to the development pipeline\n\nMentor other developers (and interns occasionally) to increase the overall skill level of the team and quality of team output\n\nReview code produced by other developers for acceptance into the repository\n\nDevelop a thorough understanding of policies, procedures, and safety rules\n\nDuties may change;\nTeam Members may be required to perform other duties as assigned\n\nWork Experience Required\n\n3+ years of experience developing and deploying large-scale websites and website content or demonstrated skill level in previous positions\n\n3+ years of experience Design and developing application in React.\n\nJs/Redux.\n\n3+ years of experience Design and developing application in JavaScript technologies.\n\nExperience with a 500+ million revenue e-commerce retailer preferred\n\nProven understanding of design patterns, reference architectures, industry standards, broad technical knowledge, and architectural principles is necessary\n\nDemonstrated ability to provide and recommend innovative ideas with the skill to align projects with enterprise strategy is needed\n\nAbility to work efficiently and accurately under pressure, meet deadlines, present a professional demeanor, and work well independently is essential\n\nAbility to estimate financial impact of technical architecture alternatives and apply multiple technical solutions to business problems is vital\n\nTechnical Knowledge and Skills Required Experience building responsive websites using React.\n\nJS and Node.\n\nJS\n\nExperience in client-side scripting, libraries, and structures which include HTML5, CSS3, JavaScript, XML, and JSON\n\nUnderstanding of Content Stack and Content Stack integration with React.\n\nJs\n\nThorough understanding of React.\n\nJs and its core principles\n\nExperience with popular React.js workflows (such as Flux or Redux)\n\nStrong proficiency in JavaScript, including DOM manipulation and the JavaScript object model\n\nExperience with common front-end development tools such as Babel, Webpack, NPM, etc.\n\nExperience writing unit tests for Java Script\n\nExperience with Responsive Web Design\n\nKnowledge of modern authorization mechanisms, such as JSON Web Token\n\nFamiliarity with modern front-end build pipelines and tools\n\nAbility to understand business requirements and translate them into technical requirements\n\nA knack for…",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685404800,
      "job_posted_at_datetime_utc": "2023-05-30T00:00:00.000Z",
      "job_city": "Sugar Land",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.598444,
      "job_longitude": -95.62255,
      "job_benefits": null,
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=RmMWVIxJKacAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-11-29T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1701216000,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 36,
        "experience_mentioned": true,
        "experience_preferred": true
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": false,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "3+ years of experience developing and deploying large-scale websites and website content or demonstrated skill level in previous positions",
          "3+ years of experience Design and developing application in JavaScript technologies",
          "Proven understanding of design patterns, reference architectures, industry standards, broad technical knowledge, and architectural principles is necessary",
          "Demonstrated ability to provide and recommend innovative ideas with the skill to align projects with enterprise strategy is needed",
          "Ability to work efficiently and accurately under pressure, meet deadlines, present a professional demeanor, and work well independently is essential",
          "Ability to estimate financial impact of technical architecture alternatives and apply multiple technical solutions to business problems is vital",
          "Technical Knowledge and Skills Required Experience building responsive websites using React",
          "Experience in client-side scripting, libraries, and structures which include HTML5, CSS3, JavaScript, XML, and JSON",
          "Understanding of Content Stack and Content Stack integration with React",
          "Thorough understanding of React",
          "Js and its core principles",
          "Experience with popular React.js workflows (such as Flux or Redux)",
          "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
          "Experience with common front-end development tools such as Babel, Webpack, NPM, etc",
          "Experience writing unit tests for Java Script",
          "Experience with Responsive Web Design",
          "Knowledge of modern authorization mechanisms, such as JSON Web Token",
          "Familiarity with modern front-end build pipelines and tools",
          "Ability to understand business requirements and translate them into technical requirements"
        ],
        "Responsibilities": [
          "Trucking companies and freight brokers trust PCS to optimize their dispatch, accounting, and fleet operations",
          "Responsibilities Technical resource responsible for front-end development using web technologies which include, but are not limited to: HTML, CSS, JavaScript, and React/Redux",
          "Building reusable components and front-end libraries for future use",
          "Responsible for translating designs and wireframes into high quality code",
          "Optimizing components for maximum performance across a vast array of web-capable devices and browse",
          "Ensure technical feasibility of UI/UX designs",
          "Champion requirement evaluation and impact analysis",
          "Participate in code reviews and share best practices periodically",
          "Continuous integration with Jenkins CI",
          "Participate in full SDLC, including meetings, interactive development, estimations, and design sessions",
          "Work in a collaborative environment with other developers and QA team members, product designers, product managers, and off-site 3rd party vendor team members",
          "Deliver code solutions built for performance, availability, and scalability optimizing applications for maximum speed and scalability",
          "Code and unit test functionality and/or integrations between systems",
          "Support and troubleshoot issues (process and system), identify the root cause, and proactively implement sustainable corrective actions",
          "Stay current with the fast-changing landscape of browser-based application development",
          "Monitor the development of, evaluate, and recommend new technologies/approaches to the development pipeline",
          "Mentor other developers (and interns occasionally) to increase the overall skill level of the team and quality of team output",
          "Review code produced by other developers for acceptance into the repository",
          "Develop a thorough understanding of policies, procedures, and safety rules",
          "Team Members may be required to perform other duties as assigned"
        ]
      },
      "job_job_title": "Senior",
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_occupational_categories": [
        "React.js",
        "Front End Developer",
        "Javascript",
        "Software Engineer"
      ]
    },
    {
      "employer_name": "Connecttel, Inc",
      "employer_logo": "https://logoimagesv2.id-visitors.com/0/b/5/4/4/f/0b544fc53a4c40dfa112c91442f219d6.png",
      "employer_website": null,
      "employer_company_type": null,
      "job_publisher": "Dice",
      "job_id": "uSveAal9k1IAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Front-End Developer (JavaScript, HTML, CSS)",
      "job_apply_link": "https://www.dice.com/job-detail/35181ab6-1420-4e02-896c-2c506f1cb5e2",
      "job_apply_is_direct": true,
      "job_apply_quality_score": 0.6792,
      "job_description": "Front-End Developer\nAustin, TX (Relocation and immigration visa sponsorship is not currently available.)\nFull time\n\nAre you an amazing developer ready to work in a collaborative team? Do you want to have your voice heard in a small but stable and profitable company? Do you enjoy thinking creatively and constantly learning? Most importantly, are you a dog lover? Then you might be just who we're looking for! Hiring developers to help us create new and exciting web-based user interfaces.\n\nWhat you'll be doing:\nEngineering lightweight UI components that scale well over time and meet modern web standards\nTransforming wireframes from conception to reality while collaborating with a team\nBuilding software used by some of the largest financial institutions in the world\nContinually improving our UI code base by contributing to code reviews and routine maintenance\nYou: Have a bachelor's degree in computer science or a related field\nLove working in visual mediums and UI/UX\nHave experience with object-oriented programming\nAre a self-starter who takes initiative and helps drive the product design\nFeel comfortable working in a non-structured, agile development environment with short release cycles\nAre interested in financial technology\nMust love dogs\nOptional but helpful skills:\n\n3 years of experience\nFamiliarity with JavaScript, HTML, CSS\nFamiliarity with any JavaScript Framework\nFamiliarity with a version control system\nExperience interacting with a web service API\nExperience with website design\n\nWhat we offer:\nA highly competitive salary\nCompany-paid family health, vision, and dental insurance\n401K with employer matching\nA fun and relaxed environment in a small but profitable and stable company\nOpportunity to learn about the financial services industry in the US, UK, Ireland, Canada, Europe and Asia Opportunity for international travel if desired",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1675675121,
      "job_posted_at_datetime_utc": "2023-02-06T09:18:41.000Z",
      "job_city": "Austin",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 30.267153,
      "job_longitude": -97.74306,
      "job_benefits": [
        "health_insurance",
        "retirement_savings",
        "dental_coverage"
      ],
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=uSveAal9k1IAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-07-01T09:20:01.000Z",
      "job_offer_expiration_timestamp": 1688203201,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 36,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": [
        "JavaScript",
        "HTML",
        "CSS",
        "Frontend"
      ],
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "You: Have a bachelor's degree in computer science or a related field",
          "Love working in visual mediums and UI/UX",
          "Have experience with object-oriented programming",
          "Are a self-starter who takes initiative and helps drive the product design",
          "Feel comfortable working in a non-structured, agile development environment with short release cycles",
          "Are interested in financial technology",
          "3 years of experience",
          "Familiarity with JavaScript, HTML, CSS",
          "Familiarity with any JavaScript Framework",
          "Familiarity with a version control system",
          "Experience interacting with a web service API",
          "Experience with website design"
        ],
        "Responsibilities": [
          "Engineering lightweight UI components that scale well over time and meet modern web standards",
          "Transforming wireframes from conception to reality while collaborating with a team",
          "Building software used by some of the largest financial institutions in the world",
          "Continually improving our UI code base by contributing to code reviews and routine maintenance"
        ],
        "Benefits": [
          "A highly competitive salary",
          "Company-paid family health, vision, and dental insurance",
          "401K with employer matching"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3"
    },
    {
      "employer_name": "Xerox",
      "employer_logo": "https://www.xerox.com/assets/images/logos/xerox.svg",
      "employer_website": "http://www.xerox.com",
      "employer_company_type": "Manufacturing",
      "job_publisher": "Learn4Good",
      "job_id": "9gZFCv-muG4AAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Junior Full Stack Web Developer",
      "job_apply_link": "https://www.learn4good.com/jobs/san-antonio/texas/info_technology/2356869602/e/",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.4071,
      "job_description": "Junior Full Stack Web Developer\n\nGeneral Information\n\nPress space or enter keys to toggle section visibility\n\nCity\n\nSan Antonio\n\nState/Province\n\nTexas\n\nCountry\n\nUnited States\n\nDepartment\n\nSales Support\n\nDate\n\nTuesday, March 7, 2023\n\nWorking time\n\nFull-time\n\n#\n\n20022261\n\nJob Level\n\nIndividual Contributor\n\nJob Type\n\nExperienced\n\nJob Field\n\nSales Support\n\nSeniority Level\n\nAssociate\n\nDescription & Requirement\n\nPress space or enter keys to toggle section visibility\n\nAbout Xerox Holdings Corporation\n\nFor more than 100 years, Xerox has continually redefined the workplace experience. Harnessing our leadership position in office and production print technology, we’ve expanded into software and services to sustainably power today’s workforce. From the office to industrial environments, our differentiated business solutions and financial services are designed to make every day work better for clients — no matter where that work is being done.\n\nToday, Xerox scientists and engineers are continuing our legacy of innovation with disruptive technologies in digital transformation, augmented reality, robotic process automation, additive manufacturing, Industrial Internet of Things and cleantech. Learn more at and explore our commitment to diversity and inclusion. ()\n\nDahill Office Technology Corp., A Xerox Company, and part of Xerox Business Solutions Southwest (XBSSW) Team is a leading provider of business process automation solutions. We are seeking a successful Junior Full Stack Web Developer looking to take the next step in their career.\n\nWhat you will do:\n\n• Develop and support in-house sales tools using C#, .NET Core, Vue.js, Kendo.js, CSS, and No\n\nSQL technologies / libraries to support the entire workflow automation for sales processing and product delivery.\n\n• Develop and support integration to existing systems (Salesforce and e-Automate) through API interface.\n\n• Develop and support web application interfaces, mobile apps, MS SQL database table manipulation scripts, data retrieval for reporting and database trigger implementations as needed.\n\n• Provide back-end support for the suite of in-house systems developed by the XBSSW team.\n\n• Support sales teams to help manage their sales pipeline of 30+ opportunities and enter all details into CRM.\n\nHow you will do this:\n\n• By having entry level experience implementing and maintaining web applications.\n\n• By having entry level experience with full stack development that includes Applications, Databases and website infrastructure.\n\n• Work in a Agile development methodology environment within a team setting.\n\n• To be relative proficient in the technologies mentioned and show a strong software development.\n\nPreferred Qualifications:\n\n• Bachelor’s degree in related business or technology field.\n\n• Minimum of 3 years of proven success in full stack development is preferred.\n\n• Ability to work independently.\n\nWhat We Offer:\n\n• Competitive compensation.\n\n• Comprehensive benefits offerings (including medical, dental, vision and life insurance).\n\n• Retirement Plan.\n\n• Paid holidays, personal choice days and paid time off.\n\n• A culture that offers flexibility and a healthy work-life balance.\n\n#LI-AA1\n\nXerox is an Equal Opportunity Employer and considers applicants for all positions without regard to race, color, creed, religion, ancestry, national origin, age, gender identity, sex, marital status, sexual orientation, physical or mental disability, use of a guide dog or service animal, military/veteran status, citizenship status, basis of genetic information, or any other group protected by law. Learn more atwww.xerox.comand explore our commitment to diversity and inclusion:\n\nwith disabilities who need a reasonable accommodation to apply or compete for employment with Xerox may request such accommodation(s) by sending an e-mail to Xerox Be sure to include your name, the job you are interested in, and the accommodation you are seeking.",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685404800,
      "job_posted_at_datetime_utc": "2023-05-30T00:00:00.000Z",
      "job_city": "San Antonio",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 29.42519,
      "job_longitude": -98.49459,
      "job_benefits": [
        "retirement_savings",
        "health_insurance",
        "dental_coverage",
        "paid_time_off"
      ],
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=9gZFCv-muG4AAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": "2023-11-29T00:00:00.000Z",
      "job_offer_expiration_timestamp": 1701216000,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": null,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "By having entry level experience implementing and maintaining web applications",
          "By having entry level experience with full stack development that includes Applications, Databases and website infrastructure",
          "Work in a Agile development methodology environment within a team setting",
          "To be relative proficient in the technologies mentioned and show a strong software development"
        ],
        "Responsibilities": [
          "Press space or enter keys to toggle section visibility",
          "Develop and support in-house sales tools using C#, .NET Core, Vue.js, Kendo.js, CSS, and No",
          "SQL technologies / libraries to support the entire workflow automation for sales processing and product delivery",
          "Develop and support integration to existing systems (Salesforce and e-Automate) through API interface",
          "Develop and support web application interfaces, mobile apps, MS SQL database table manipulation scripts, data retrieval for reporting and database trigger implementations as needed",
          "Provide back-end support for the suite of in-house systems developed by the XBSSW team",
          "Support sales teams to help manage their sales pipeline of 30+ opportunities and enter all details into CRM"
        ],
        "Benefits": [
          "Competitive compensation",
          "Comprehensive benefits offerings (including medical, dental, vision and life insurance)",
          "Retirement Plan",
          "Paid holidays, personal choice days and paid time off",
          "A culture that offers flexibility and a healthy work-life balance"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113300",
      "job_onet_job_zone": "4",
      "job_occupational_categories": [
        "Computer Science"
      ],
      "job_naics_code": "334111",
      "job_naics_name": "Electronic Computer Manufacturing"
    },
    {
      "employer_name": "AT&T",
      "employer_logo": "https://www.att.com/shopcms/media/att/2014/global/social-logo/logo-att-color-trans-200x200.png",
      "employer_website": "https://www.att.com",
      "employer_company_type": "Information",
      "job_publisher": "ATT Jobs",
      "job_id": "1lr1uWOWY3MAAAAAAAAAAA==",
      "job_employment_type": "FULLTIME",
      "job_title": "Front End Developer",
      "job_apply_link": "https://www.att.jobs/job/dallas/front-end-developer/117/49435018000",
      "job_apply_is_direct": false,
      "job_apply_quality_score": 0.8233,
      "job_description": "About the Company\n\nJoin AT&T and reimagine the communications and technologies that connect the world. Our Consumer Technology eXperience team is delivering innovative and reliable technology solutions to power differentiated, simplified customer experiences. Bring your bold ideas and fearless risk-taking to redefine connectivity and transform how the world shares stories and experiences that matter. When you step into a career with AT&T, you won’t just imagine the future-you’ll create it.\n\nAbout the Team\n\nAT&T Digital Platform Product team is looking for a Professional-Software Engineer (FE heavy) who is passionate about the eCommerce industry and has analytical and multi-task abilities to thrive in a fast-paced environment. As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels. You will lead the software product development life cycle from inception to production launch and post-production support. You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies.\n\nAbout the Job\n\nPosition Overview\n\nAT&T Digital Platform Product team is looking for a Professional-Software Engineer (FE heavy) who is passionate about the eCommerce industry and has analytical and multi-task abilities to thrive in a fast-paced environment. As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels. You will lead the software product development life cycle from inception to production launch and post-production support. You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies.\n\nResponsibilities and Day-to-Day View\n\nResponsibilities\n\n• Hands-on Design and development of cross-functional, multi-platform application systems\n\n• Track record of projects completed on time – you are a flawless executor, not a procrastinator.\n\n• You find satisfaction in a job well done and want to solve head-scratching challenges.\n\n• Experience with all phases of the software development life cycle, best practices and Agile Software Development.\n\n• Work with Leads, Engineers, Architects, Product Managers, and Business stakeholders to identify technical and functional needs of systems based on priority.\n\n• Writing great quality code with a relentless passion for automated testing and validation.\n\n• Enforce company policies in the areas of development methodology, architecture, security, change and configuration management and compliance.\n\n• Perform complex engineering activities for web performance tuning, monitoring, deployment and production support.\n\nQualifications\n\nRequired Qualifications\n\n• 2+ years related experience\n\n• 2+ years in web markup, including REACT, HTML5, CSS3 and javascript\n\n• 2+ years of experience with client-side scripting and javascript frameworks such as jquery and React\n\n• 2+ years of experience in server-side rendering using NextJs\n\n• Proficient understanding of javascript pre-processing and packaging frameworks such as babel and webpack\n\n• Good understanding of Java, Nodejs, microservice and some full stack experience. While you’ll be spending most of your time in the V of MVC, we’ll occasionally need help further back in the stack\n\n• Good understanding of SEO principles including web analytics and ensuring that application will adhere to them\n\n• Excellent communication skills and experience in collaborative environments\n\n• The desire to be continually learning about emerging technologies/industry trends\n\nPreferred Qualifications\n\n• Preferred Bachelors of Science degree in Computer Engineering, Computer Science, Applied Science, Electrical Engineering, or Math; Developer nanodegree\n\n• 2+ years of understanding of CSS pre-processing platforms, such as LESS and SASS\n\n• 2+ years of experience in build and CICD technologies: GitHub, Maven, Jenkins, Sonar\n\n• 2+ years of experience in Unit and Function testing using Junit, Spock, Mockito/JMock, Selenium, Cucumber, SoapUI or Postman\n\n• Experience working within Agile/Scrum/Kanban development team\n\n• Familiarity with HTML5, JavaScript frameworks, and CSS3\n\n• Excellent written and verbal communication skills with demonstrated ability to present complex technical information in a clear manner to peers, developers, and leaders\n\nTechnical Skills\n\nReactJs, NodeJs, Html, Java, Nodejs, microservices, cloud, REST services, NoSql technologies (Cassandra/MongoDb), knowledge of Redis/Hazelcast, Git, Jira, Jenkins\n\nOur Professional-Software Engineers earn between $116,700 - $175,100. Not to mention all the other amazing rewards that working at AT&T offers. Individual starting salary within this range may depend on geography, experience, expertise, and education/training.\n\nJoining our team comes with amazing perks and benefits:\n\n· Medical/Dental/Vision coverage\n\n· 401(k) plan\n\n· Tuition reimbursement program\n\n· Paid Time Off and Holidays (based on date of hire, at least 23 days of vacation each year and 9 company-designated holidays)\n\n· Paid Parental Leave\n\n· Paid Caregiver Leave\n\n· Additional sick leave beyond what state and local law require may be available but is unprotected\n\n· Adoption Reimbursement\n\n· Disability Benefits (short term and long term)\n\n· Life and Accidental Death Insurance\n\n· Supplemental benefit programs: critical illness/accident hospital indemnity/group legal\n\n· Employee Assistance Programs (EAP)\n\n· Extensive employee wellness programs\n\n· Employee discounts up to 50% off on eligible AT&T mobility plans and accessories, AT&T internet (and fiber where available) and AT&T phone\n\nAT&T is leading the way to the future – for customers, businesses and the industry. We're developing new technologies to make it easier for our customers to stay connected to their world. Together, we’ve built a premier integrated communications and entertainment company and an amazing place to work and grow. Team up with industry innovators every time you walk into work, creating the world you always imagined. Ready to #transformdigital with us? Apply now!",
      "job_is_remote": false,
      "job_posted_at_timestamp": 1685145600,
      "job_posted_at_datetime_utc": "2023-05-27T00:00:00.000Z",
      "job_city": "Dallas",
      "job_state": "TX",
      "job_country": "US",
      "job_latitude": 32.776665,
      "job_longitude": -96.79699,
      "job_benefits": [
        "retirement_savings",
        "health_insurance",
        "dental_coverage",
        "paid_time_off"
      ],
      "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=web+developer+in+texas+usa&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=web+developer+in+texas+usa&htidocid=1lr1uWOWY3MAAAAAAAAAAA%3D%3D",
      "job_offer_expiration_datetime_utc": null,
      "job_offer_expiration_timestamp": null,
      "job_required_experience": {
        "no_experience_required": false,
        "required_experience_in_months": 24,
        "experience_mentioned": true,
        "experience_preferred": false
      },
      "job_required_skills": null,
      "job_required_education": {
        "postgraduate_degree": false,
        "professional_certification": false,
        "high_school": false,
        "associates_degree": false,
        "bachelors_degree": false,
        "degree_mentioned": true,
        "degree_preferred": true,
        "professional_certification_mentioned": false
      },
      "job_experience_in_place_of_education": false,
      "job_min_salary": null,
      "job_max_salary": null,
      "job_salary_currency": null,
      "job_salary_period": null,
      "job_highlights": {
        "Qualifications": [
          "You must possess strong technical background to ensure you are designing modular & scalable web components, you must have experience leading large cross-organizational software development projects and have a well-rounded technical background in current web and micro-service technologies",
          "2+ years related experience",
          "2+ years in web markup, including REACT, HTML5, CSS3 and javascript",
          "2+ years of experience with client-side scripting and javascript frameworks such as jquery and React",
          "2+ years of experience in server-side rendering using NextJs",
          "Proficient understanding of javascript pre-processing and packaging frameworks such as babel and webpack",
          "Good understanding of Java, Nodejs, microservice and some full stack experience",
          "Good understanding of SEO principles including web analytics and ensuring that application will adhere to them",
          "Excellent communication skills and experience in collaborative environments",
          "The desire to be continually learning about emerging technologies/industry trends",
          "ReactJs, NodeJs, Html, Java, Nodejs, microservices, cloud, REST services, NoSql technologies (Cassandra/MongoDb), knowledge of Redis/Hazelcast, Git, Jira, Jenkins"
        ],
        "Responsibilities": [
          "As a Lead Engineer, you will be responsible for the design and development of various initiatives for AT&T’s customer and employee digital experience across our consumer distribution channels",
          "You will lead the software product development life cycle from inception to production launch and post-production support",
          "Hands-on Design and development of cross-functional, multi-platform application systems",
          "Track record of projects completed on time – you are a flawless executor, not a procrastinator",
          "You find satisfaction in a job well done and want to solve head-scratching challenges",
          "Experience with all phases of the software development life cycle, best practices and Agile Software Development",
          "Work with Leads, Engineers, Architects, Product Managers, and Business stakeholders to identify technical and functional needs of systems based on priority",
          "Writing great quality code with a relentless passion for automated testing and validation",
          "Enforce company policies in the areas of development methodology, architecture, security, change and configuration management and compliance",
          "Perform complex engineering activities for web performance tuning, monitoring, deployment and production support"
        ],
        "Benefits": [
          "Our Professional-Software Engineers earn between $116,700 - $175,100",
          "Individual starting salary within this range may depend on geography, experience, expertise, and education/training",
          "Medical/Dental/Vision coverage",
          "401(k) plan",
          "Tuition reimbursement program",
          "Paid Time Off and Holidays (based on date of hire, at least 23 days of vacation each year and 9 company-designated holidays)",
          "Paid Parental Leave",
          "Paid Caregiver Leave",
          "Additional sick leave beyond what state and local law require may be available but is unprotected",
          "Adoption Reimbursement",
          "Disability Benefits (short term and long term)",
          "Life and Accidental Death Insurance",
          "Supplemental benefit programs: critical illness/accident hospital indemnity/group legal",
          "Employee Assistance Programs (EAP)",
          "Extensive employee wellness programs",
          "Employee discounts up to 50% off on eligible AT&T mobility plans and accessories, AT&T internet (and fiber where available) and AT&T phone"
        ]
      },
      "job_job_title": null,
      "job_posting_language": "en",
      "job_onet_soc": "15113400",
      "job_onet_job_zone": "3",
      "job_naics_code": "517110",
      "job_naics_name": "Wired Telecommunications Carriers"
    }
  ]
};

const jobDetail = {
"status": "OK",
"request_id": "03e9e9f3-3f88-4a6b-96ea-e722a9317852",
"parameters": {
  "job_id": "7oKm_SkxjLxpFtVuAAAAAA==",
  "extended_publisher_details": false
},
"data": [
  {
    "employer_name": "SynergisticIT",
    "employer_logo": null,
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "ZipRecruiter",
    "job_id": "7oKm_SkxjLxpFtVuAAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "PYTHON DEVELOPER(ENTRY LEVEL)",
    "job_apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.5804,
    "job_description": "SynergisticIT is committed to fast track your career by increasing your career prospects. We provide a broad spectrum of career advancement solutions. Whether you are struggling to find a job or hustling to get noticed by the hiring managers, we can help you stand out in your professional endeavors.\nTrusted by thousands of tech enthusiasts, SynergisticIT can bridge your skill and knowledge gap to make you competent for high-tech jobs. Our invaluable business acumen helps us assist thriving job seekers in achieving their career goals.\nCurrently, we are looking for adept entry-level Python Developers to work with our elite group of clients, namely Client, PayPal, Expedia Group, Google, Apple, Cognizant, Ford, Cisco, Walmart Labs, etc.\n\nRequired Qualifications and Background\n• Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,\n• Mathematics or Statistics background\nSkills Required\n• 0 to 2 years of experience in Python development\n• Deep understanding of the software development life cycle\n• Knowledge of Linear Algebra, Statistics, and Mathematics concepts\n• Excellent written and verbal communication skills\n• Technically inquisitive, self-learner, team player, and highly motivated\n• Strong work ethics and creative problem-solving abilities\n\nPreferred Skills\n• Deep Learning\n• Data visualization\n• Scala\n• NLP\n• Django\n• Roles and Responsibilities\nAs an entry-level Python Developer, you need to perform the following duties:\n• Write server-side web application logic\n• Write scalable and effective codes in Python\n• Develop backend components to boost overall application's performance\n• Executing tests and fixing bugs in applications and software\n• Implement data protection and security solutions\n• Connect applications with third-party web services\n• Support frontend developers by integrating UI elements into Python applications\n\nBenefits\n• Competitive salary\n• Flexible work schedule & part-time off\n• E-verified\n• H1B Filing\n• No relocation\n• On job technical support\n• Skill Enhancement\n• Opportunity to work with Fortune 500 Companies\n\nWho can apply?\nThis job opportunity is best suited for recent IT graduates who want to make a mark in the tech industry and upskill their IT talent. Anyone with a basic knowledge of Python programming or having some experience in building Python software solutions can apply for this position.\nNo third-party candidates or c2c candidates\n\nIf you are interested, please apply to the posting.\n\nNo phone calls please, Shortlisted candidates would be reached out.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1627023600,
    "job_posted_at_datetime_utc": "2021-07-23T07:00:00.000Z",
    "job_city": "Austin",
    "job_state": "TX",
    "job_country": "US",
    "job_latitude": 30.267153,
    "job_longitude": -97.74306,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&q=7oKm_SkxjLxpFtVuAAAAAA%3D%3D&cs=1&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=7oKm_SkxjLxpFtVuAAAAAA%3D%3D&htidocid=7oKm_SkxjLxpFtVuAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-14T00:00:00.000Z",
    "job_offer_expiration_timestamp": 1710374400,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": false,
      "degree_mentioned": true,
      "degree_preferred": true,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Bachelor's degree or Master's degree in Computer Science, Electrical Engineering, Computer Engineering, Information Systems, IT, Mathematics,",
        "Mathematics or Statistics background",
        "0 to 2 years of experience in Python development",
        "Deep understanding of the software development life cycle",
        "Knowledge of Linear Algebra, Statistics, and Mathematics concepts",
        "Excellent written and verbal communication skills",
        "Technically inquisitive, self-learner, team player, and highly motivated",
        "Strong work ethics and creative problem-solving abilities",
        "Support frontend developers by integrating UI elements into Python applications"
      ],
      "Responsibilities": [
        "As an entry-level Python Developer, you need to perform the following duties:",
        "Write server-side web application logic",
        "Write scalable and effective codes in Python",
        "Develop backend components to boost overall application's performance",
        "Executing tests and fixing bugs in applications and software",
        "Implement data protection and security solutions",
        "Connect applications with third-party web services"
      ],
      "Benefits": [
        "Competitive salary",
        "Flexible work schedule & part-time off",
        "No relocation",
        "On job technical support",
        "Opportunity to work with Fortune 500 Companies"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_occupational_categories": [
      "15-1132.00: Software Developers, Applications"
    ],
    "estimated_salaries": [
      {
        "location": "Austin, TX",
        "job_title": "Entry Level Python Programmer",
        "publisher_name": "ZipRecruiter",
        "publisher_link": "https://www.ziprecruiter.com/Salaries/Entry-Level-Python-Programmer-Salary-in-Austin,TX",
        "min_salary": 56.470192,
        "max_salary": 80.77404,
        "median_salary": 66.747246,
        "salary_period": "HOUR",
        "salary_currency": "USD"
      }
    ],
    "apply_options": [
      {
        "publisher": "ZipRecruiter",
        "apply_link": "https://www.ziprecruiter.com/c/SynergisticIT/Job/PYTHON-DEVELOPER(ENTRY-LEVEL)/-in-Austin,TX?jid=95b95b82c4f3b4bd",
        "is_direct": false
      }
    ],
    "employer_reviews": []
  }
]
};
const search = {
"status": "OK",
"request_id": "a7be56cb-f5ed-4732-a455-e9be53171542",
"parameters": {
  "query": "java",
  "page": 1,
  "num_pages": 1
},
"data": [
  {
    "employer_name": "State Street",
    "employer_logo": "https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/State_Street_Corporation.png/800px-State_Street_Corporation.png",
    "employer_website": "http://www.statestreet.com",
    "employer_company_type": "Finance",
    "job_publisher": "State Street Careers",
    "job_id": "CWLLJgVqELg_aMHzAAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Backend Principal Java Software Engineer",
    "job_apply_link": "https://careers.statestreet.com/global/en/job/STSTGLOBALR744881EXTERNALENGLOBAL/Backend-Principal-Java-Software-Engineer",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.7989,
    "apply_options": [
      {
        "publisher": "State Street Careers",
        "apply_link": "https://careers.statestreet.com/global/en/job/STSTGLOBALR744881EXTERNALENGLOBAL/Backend-Principal-Java-Software-Engineer",
        "is_direct": false
      },
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/backend-principal-java-software-engineer-at-state-street-3818466511",
        "is_direct": false
      },
      {
        "publisher": "The Muse",
        "apply_link": "https://www.themuse.com/jobs/statestreet/backend-principal-java-software-engineer",
        "is_direct": true
      },
      {
        "publisher": "Jora",
        "apply_link": "https://us.jora.com/job/Backend-Principal-Java-Software-Engineer-8f780adbfc4ff0b5103e77373f4de890",
        "is_direct": false
      }
    ],
    "job_description": "Who we are looking for\n\nLeading technical contributor to the enhancement and maintenance of one or more Charles River IMS modules or components of an agile scrum team. Provide engineering troubleshooting assistance to customer support teams and other development teams within Charles River.\n\nWhy this role is important to us\n\nThe team you will be joining is a part of Charles River Development (or CRD), that became a part of State Street in 2018. CRD helps create enterprise investment management software solutions for large institutions in the areas of institutional investment, wealth management and hedge funds. Together we have created the first open front-to-back platform - State Street Alpha that was launched in 2019.\n\nWhat you will be responsible for\n• Development and Testing\n• Work under minimal supervision to analyze, design, develop, test, and debug medium to large software enhancements and solutions within Charles River’s business and technical problem domains\n• Develop, test, debug, and implement software programs, applications and projects using Java, C#, SQL, JavaScript or other related software programming languages\n• Collaborate with Business Analysts and Product Managers to create simple and sustainable software solutions for complex problems\n• Write unit and automation tests to ensure a high quality end product\n• Conduct manual tests to ensure a high quality end product\n• Contribute to written design and API documentation, and participate in customer documentation process\n• Provide informed guidance and critical analysis of proposed changes during code reviews\n• Direct problem solving for projects or major phases of projects to resolve advanced software technical issues\n• Technical Support\n• Provide expert level troubleshooting on large, mission critical client implementations\n• Actively assist team leaders in the agile software development process by adhering to and advancing the CRD scrum methodology, including attending all daily standups, sprint planning, backlog grooming, and retrospectives\n• Collaboration\n• Plan and coordinate cross-team activities groups to complete assignments\n• Advise senior management on technical strategy\n• Provide mentoring to junior staff\n\nWhat we value\n• Extensive multi-tiered enterprise application experience\n• Deep knowledge and experience with compiler design, optimizers, solvers, code generation, and semantic analysis\n• Strong SQL skills with considerable experience in Oracle or SQL Server\n• Strong with OO design and development using Java, C++, or C#\n• Experience with logic programming is preferred\n• Experience with Machine Learning, Artificial Intelligence, or Cognitive Computing is a plus\n• Experience with open-source software platforms is a plus\n• Experience with developing applications for the financial markets is a plus (Fixed Income, Trading, FX, Risk, Portfolio/Wealth Management, Market Data, FIX, etc.)\n\nEducation & Preferred Qualifications\n• 7 to 10+ years of commercial software development, proficient in developing multi-tier solutions\n• Bachelor’s degree in computer science, Information Technology, or a related field\n• A PhD or Master’s degree in math is a preferred\n• Deep knowledge of math, probability, statistics, and algorithms\n• Strong track record of building high performance, production quality software on schedule\n• Professional Java development experience, core Java and Multithreading\n• Ability to work independently, handle multiple tasks simultaneously and adapt quickly to changes\n• Excellent communication skills (verbal and written), good interpersonal skills, ability to gather and understand requirements in the financial sector (Math background highly desirable)\n• Able to work well with peers in a collaborative team environment.\n• A minimum of 5 years working with an Agile development methodology\n\nAdditional requirements\n• Has played a key role in developing and supporting commercial software products which were sold to non-technical customers in vertical markets\n\nAbout State Street\n\nWhat we do. State Street is one of the largest custodian banks, asset managers and asset intelligence companies in the world. From technology to product innovation we're making our mark on the financial services industry. For more than two centuries, we've been helping our clients safeguard and steward the investments of millions of people. We provide investment servicing, data & analytics, investments research & trading and investment management to institutional clients.\n\nWork, Live and Grow. We make all efforts to create a great work environment. Our benefits packages are competitive and comprehensive. Details vary in locations, but you may expect generous medical care, insurance and savings plans among other perks. You'll have access to flexible Work Program to help match your needs. And our wealth of development programs and educational support will help you reach your full potential.\n\nInclusion, Diversity and Social Responsibility. We truly believe our employees' diverse backgrounds, experience and perspective are a powerful contributor to creating an inclusive environment where everyone can thrive and reach their maximum potential while adding value to both our organization and our clients. We warmly welcome the candidates of diverse origin, background, ability, age, sexual orientation, gender identity and personality. Another fundamental value at State Street is active engagement with our communities around the world, both as a partner and a leader. You will have tools to help balance your professional and personal life, paid volunteer days, matching gift program and access to employee networks that help you stay connected to what matters to you.\n\nState Street is an equal opportunity and affirmative action employer.\n\nDiscover more at www.StateStreet.com/careers\n\nSalary Range:\n$110,000 - $185,000 Annual\n\nThe range quoted above applies to the role in the primary location specified. If the candidate would ultimately work outside of the primary location above, the applicable range could differ.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707955200,
    "job_posted_at_datetime_utc": "2024-02-15T00:00:00.000Z",
    "job_city": "Burlington",
    "job_state": "MA",
    "job_country": "US",
    "job_latitude": 42.504715,
    "job_longitude": -71.19562,
    "job_benefits": [
      "health_insurance"
    ],
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=CWLLJgVqELg_aMHzAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": null,
    "job_offer_expiration_timestamp": null,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": true,
      "experience_preferred": true
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": false,
      "degree_mentioned": true,
      "degree_preferred": true,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Extensive multi-tiered enterprise application experience",
        "Deep knowledge and experience with compiler design, optimizers, solvers, code generation, and semantic analysis",
        "Strong SQL skills with considerable experience in Oracle or SQL Server",
        "Strong with OO design and development using Java, C++, or C#",
        "Has played a key role in developing and supporting commercial software products which were sold to non-technical customers in vertical markets"
      ],
      "Responsibilities": [
        "Leading technical contributor to the enhancement and maintenance of one or more Charles River IMS modules or components of an agile scrum team",
        "Provide engineering troubleshooting assistance to customer support teams and other development teams within Charles River",
        "Work under minimal supervision to analyze, design, develop, test, and debug medium to large software enhancements and solutions within Charles River’s business and technical problem domains",
        "Develop, test, debug, and implement software programs, applications and projects using Java, C#, SQL, JavaScript or other related software programming languages",
        "Collaborate with Business Analysts and Product Managers to create simple and sustainable software solutions for complex problems",
        "Write unit and automation tests to ensure a high quality end product",
        "Conduct manual tests to ensure a high quality end product",
        "Contribute to written design and API documentation, and participate in customer documentation process",
        "Provide informed guidance and critical analysis of proposed changes during code reviews",
        "Direct problem solving for projects or major phases of projects to resolve advanced software technical issues",
        "Technical Support",
        "Provide expert level troubleshooting on large, mission critical client implementations",
        "Actively assist team leaders in the agile software development process by adhering to and advancing the CRD scrum methodology, including attending all daily standups, sprint planning, backlog grooming, and retrospectives",
        "Plan and coordinate cross-team activities groups to complete assignments",
        "Advise senior management on technical strategy",
        "Provide mentoring to junior staff"
      ],
      "Benefits": [
        "Our benefits packages are competitive and comprehensive",
        "Details vary in locations, but you may expect generous medical care, insurance and savings plans among other perks",
        "You'll have access to flexible Work Program to help match your needs",
        "And our wealth of development programs and educational support will help you reach your full potential",
        "You will have tools to help balance your professional and personal life, paid volunteer days, matching gift program and access to employee networks that help you stay connected to what matters to you",
        "$110,000 - $185,000 Annual"
      ]
    },
    "job_job_title": "Software engineer",
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_occupational_categories": [
      "Other"
    ],
    "job_naics_code": "523920",
    "job_naics_name": "Portfolio Management"
  },
  {
    "employer_name": "Innova Solutions",
    "employer_logo": null,
    "employer_website": "http://acsicorp.com",
    "employer_company_type": null,
    "job_publisher": "SaluteMyJob",
    "job_id": "lNcUxEpk2HL5D8PVAAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Java DevOps Engineer - Remote",
    "job_apply_link": "https://salutemyjob.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.5657,
    "apply_options": [
      {
        "publisher": "SaluteMyJob",
        "apply_link": "https://salutemyjob.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "WJTV Jobs",
        "apply_link": "https://jobs.wjtv.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "WJHL Jobs",
        "apply_link": "https://jobs.wjhl.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "WOWKtv Jobs",
        "apply_link": "https://jobs.wowktv.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "WLNS Jobs",
        "apply_link": "https://jobs.wlns.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "KTSM Jobs",
        "apply_link": "https://jobs.ktsm.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "Concho Valley Jobs",
        "apply_link": "https://jobs.conchovalleyhomepage.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      },
      {
        "publisher": "Your Central Valley Jobs",
        "apply_link": "https://jobs.yourcentralvalley.com/jobs/java-devops-engineer-remote-houston-texas/1239381892-2/",
        "is_direct": false
      }
    ],
    "job_description": "Innova Solutions has an immediate need for a Java DevOps Engineer. This is a remote long term contract.\n\nResponsibilities:\n• Strong experience in setting up CI/CD pipeline in open-source tooling .Build end-to-end CI/CD, deployment pipeline for microservices based application for cloud platforms incorporating best practices\n• Expertise in setting up end to end Automated DevOps pipeline in Dev, QA and Production Environments for On premise, Hybrid & cloud native product/platform, addressing NFR - scale, resilience, availability along with high quality high frequency product release\n• Expertise in the required Tooling to be integrated into the pipeline with DevSecOps and Security in mind\n• Experience in Branching Strategies, Build Job development, Deployment Packaging, and Environment Automation\n• Strong expertise in scripting language and Infrastructure as a Code\n• Ability to quickly learn and understand microservice based platform requirements on Cloud and participate in development/support on new/existing implementations.\n\nSkills:\n• Strong experience in building in Java frameworks, SpringBoot, Azure Cloud, and DEV OPS.\n• Hands on experience with DevOps model and has experience in developing devops related tools.\n• Experience in building highly Scalable and resilient systems in Cloud infrastructure.\n• Experience in K8S, Event Driven Architect (API, Queues, Kafka)\n• Experience in building data pipelines.\n• Experience in working with cross-functional teams and executing product/platform initiatives.\n• Experience in leading/mentoring teams to incorporate devops models.\n• Experience with SQL and No-SQL.\n• Has experience with Azure DevOps.\n\nNice to Have:\n• Experience with Cloud Architecture, Cloud networking, Cloud Security, DevSecOps, Building CI/CD pipelines, IaC Automation\n• Should have a view of the non functional aspects (performance, Latency, high availability) of complex enterprise systems\n• Experience with Hybrid systems which span across Edge and Cloud.\nQualified candidates should APPLY NOW for immediate consideration! Please hit APPLY to provide the required information, and we will be back in touch as soon as possible.\nWe are currently interviewing to fill this and other similar positions. If this role is not a fit for you, we do offer a referral bonus program for referrals that we successfully place with our clients, subject to program guidelines. ASK ME HOW.\nThank you!\nKurt Patterson\nTechnical Recruiter\n817-501-4804\n\nPAY RANGE AND BENEFITS:\nPay Range*: $70-$75/hr w2\n• Pay range offered to a successful candidate will be based on several factors, including the candidate's education, work experience, work location, specific job duties, certifications, etc.\n\nBenefits: Innova Solutions offers benefits( based on eligibility) that include the following: Medical & pharmacy coverage, Dental/vision insurance, 401(k), Health saving account (HSA) and Flexible spending account (FSA), Life Insurance, Pet Insurance, Short term and Long term Disability, Accident & Critical illness coverage, Pre-paid legal & ID theft protection, Sick time, and other types of paid leaves (as required by law), Employee Assistance Program (EAP).\n\nABOUT INNOVA SOLUTIONS: Founded in 1998 and headquartered in Atlanta, Georgia, Innova Solutions employs approximately 50,000 professionals worldwide and reports an annual revenue approaching $3 Billion. Through our global delivery centers across North America, Asia, and Europe, we deliver strategic technology and business transformation solutions to our clients, enabling them to operate as leaders within their fields.\n\nRecent Recognitions:\n• One of Largest IT Consulting Staffing firms in the USA - Recognized as #4 by Staffing Industry Analysts (SIA 2022)\n• ClearlyRated® Client Diamond Award Winner (2020)\n• One of the Largest Certified MBE Companies in the NMSDC Network (2022)\n• Advanced Tier Services partner with AWS and Gold with MSWebsite:\n\nInnova Solutions is an Equal Opportunity Employer and prohibits any kind of unlawful discrimination and harassment. Innova Solutions is committed to the principle of equal employment opportunity for all employees and to providing employees with a work environment free of discrimination and harassment on the basis of race, color, religion or belief, national origin, citizenship, social or ethnic origin, sex, age, physical or mental disability, veteran status, marital status, domestic partner status, sexual orientation, or any other status protected by the statutes, rules, and regulations in the locations where it operates. If you are an individual with a disability and need a reasonable accommodation to assist with your job search or application for employment, please contact us at or (770) 493-5588. Please indicate the specifics of the assistance needed. Innova Solutions encourages all interested and qualified candidates to apply for employment opportunities. Innova Solutions (HireGenics/Volt) does not discriminate against applicants based on citizenship status, immigration status, or national origin, in accordance with 8 U.S.C. § 1324b.\n\nAmerican Cybersystems, Inc is acting as an Employment Agency in relation to this vacancy.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707976293,
    "job_posted_at_datetime_utc": "2024-02-15T05:51:33.000Z",
    "job_city": "Houston",
    "job_state": "TX",
    "job_country": "US",
    "job_latitude": 29.760427,
    "job_longitude": -95.369804,
    "job_benefits": [
      "retirement_savings",
      "health_insurance",
      "dental_coverage",
      "paid_time_off"
    ],
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=lNcUxEpk2HL5D8PVAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-16T05:51:33.000Z",
    "job_offer_expiration_timestamp": 1710568293,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": false,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": true
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Strong expertise in scripting language and Infrastructure as a Code",
        "Strong experience in building in Java frameworks, SpringBoot, Azure Cloud, and DEV OPS",
        "Hands on experience with DevOps model and has experience in developing devops related tools",
        "Experience in building highly Scalable and resilient systems in Cloud infrastructure",
        "Experience in K8S, Event Driven Architect (API, Queues, Kafka)",
        "Experience in building data pipelines",
        "Experience in working with cross-functional teams and executing product/platform initiatives",
        "Experience in leading/mentoring teams to incorporate devops models",
        "Experience with SQL and No-SQL",
        "Has experience with Azure DevOps",
        "Experience with Cloud Architecture, Cloud networking, Cloud Security, DevSecOps, Building CI/CD pipelines, IaC Automation",
        "Should have a view of the non functional aspects (performance, Latency, high availability) of complex enterprise systems",
        "Experience with Hybrid systems which span across Edge and Cloud"
      ],
      "Responsibilities": [
        "Strong experience in setting up CI/CD pipeline in open-source tooling .Build end-to-end CI/CD, deployment pipeline for microservices based application for cloud platforms incorporating best practices",
        "Expertise in setting up end to end Automated DevOps pipeline in Dev, QA and Production Environments for On premise, Hybrid & cloud native product/platform, addressing NFR - scale, resilience, availability along with high quality high frequency product release",
        "Expertise in the required Tooling to be integrated into the pipeline with DevSecOps and Security in mind"
      ],
      "Benefits": [
        "Pay Range*: $70-$75/hr w2",
        "Pay range offered to a successful candidate will be based on several factors, including the candidate's education, work experience, work location, specific job duties, certifications, etc",
        "Benefits: Innova Solutions offers benefits( based on eligibility) that include the following: Medical & pharmacy coverage, Dental/vision insurance, 401(k), Health saving account (HSA) and Flexible spending account (FSA), Life Insurance, Pet Insurance, Short term and Long term Disability, Accident & Critical illness coverage, Pre-paid legal & ID theft protection, Sick time, and other types of paid leaves (as required by law), Employee Assistance Program (EAP)",
        "ABOUT INNOVA SOLUTIONS: Founded in 1998 and headquartered in Atlanta, Georgia, Innova Solutions employs approximately 50,000 professionals worldwide and reports an annual revenue approaching $3 Billion"
      ]
    },
    "job_job_title": "Devops engineer",
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4"
  },
  {
    "employer_name": "Quantix, Inc.",
    "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmxDp2BX3Png7B-0Y1ddrQ0a_ti2W7ydtGQOz&s=0",
    "employer_website": "http://www.quantixinc.com",
    "employer_company_type": null,
    "job_publisher": "LinkedIn",
    "job_id": "_GuETMbuEbyXiy--AAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Sr. Java Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/sr-java-developer-at-quantix-inc-3827298285",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6862,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/sr-java-developer-at-quantix-inc-3827298285",
        "is_direct": false
      }
    ],
    "job_description": "Title: Sr. Java Developer\n\nLocation: Louisville, CO - Have to be onsite one day a week\n\nType: Direct hire\n\nWork Hours: 7:00 or 7:30 am MST start - 4:00 - 4:30\n\nStart date: ASAP\n\nJob Description: We seek a Sr Java Developer to integrate data from on-prem solutions, customer data centers, cloud-based Oracle and Workday systems, REST API, and inbound data.\n\nRequired Skills\n• Java (at least 6-8 years)\n• AWS\n\nDesired\n• Springboot\n• Docker Kubernetes",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707991425,
    "job_posted_at_datetime_utc": "2024-02-15T10:03:45.000Z",
    "job_city": "Louisville",
    "job_state": "KY",
    "job_country": "US",
    "job_latitude": 38.252666,
    "job_longitude": -85.75845,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=_GuETMbuEbyXiy--AAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-16T10:03:45.000Z",
    "job_offer_expiration_timestamp": 1710583425,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": false,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Java (at least 6-8 years)",
        "AWS"
      ],
      "Responsibilities": [
        "Job Description: We seek a Sr Java Developer to integrate data from on-prem solutions, customer data centers, cloud-based Oracle and Workday systems, REST API, and inbound data"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4"
  },
  {
    "employer_name": "Vallizo",
    "employer_logo": null,
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "LinkedIn",
    "job_id": "sS66GJrTpHANPA3gAAAAAA==",
    "job_employment_type": "CONTRACTOR",
    "job_title": "Lead Java Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/lead-java-developer-at-vallizo-3826788375",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6874,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/lead-java-developer-at-vallizo-3826788375",
        "is_direct": false
      },
      {
        "publisher": "SaluteMyJob",
        "apply_link": "https://salutemyjob.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "WANE Jobs",
        "apply_link": "https://jobs.wane.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "KNWA & FOX24 Jobs",
        "apply_link": "https://jobs.nwahomepage.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "KHON2 Jobs",
        "apply_link": "https://jobs.khon2.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "WAVY Jobs",
        "apply_link": "https://jobs.wavy.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "WDTN Jobs",
        "apply_link": "https://jobs.wdtn.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      },
      {
        "publisher": "My Stateline Jobs",
        "apply_link": "https://jobs.mystateline.com/jobs/java-tech-lead-las-vegas-nevada/1234455915-2/",
        "is_direct": false
      }
    ],
    "job_description": "Company Description\n\nRole Description\n\nVallizo is looking for experienced Lead Java Developer for one of our banking client in Las Vegas. Role is 100% ONSITE . We are open to both C2 or W2.As a Lead Java Developer, you will work closely with cross-functional teams to design, develop, test, and deploy high-quality software solutions for our clients. You must have experience leading a team of developers, be able to work on multiple projects simultaneously, and have excellent communication and collaboration skills. Eventually you will be leading a team of developers in offshore.\n\nQualifications\n• Must have 7+ year IT experience and not too high experience\n• Programming experience in Java Spring Boot, Spring WebFlux\n• API-Driven Development - Solid experience in RESTful and Microservices development\n• Experience in working with one of the concurrency frameworks like Mono, Flux, Akka\n• Experience working in ORM frameworks like Entity, Hibernate, Dapper\n• Strong relational database experience in either Oracle, MS SQL, or Postgres\n• Good experience in queuing or streaming engines like Kafka\n• Unit Testing / TDD - Experience with Continuous Integration Delivery Automated Testing and tools such as NUnit, JUnit\n• Experience with Docker, GIT, SonarQube, Checkmarx, OpenShift, and other deployment tools for CI/CD\n• Experience in using tools like Jira, GitLab, Swagger, Postman, SOAP UI, Service Now\n• Basic Understanding of JavaScript, HTML, CSS\n\nIf you are a highly motivated individual with a passion for software development, we would love to hear from you.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707936326,
    "job_posted_at_datetime_utc": "2024-02-14T18:45:26.000Z",
    "job_city": "Las Vegas",
    "job_state": "NV",
    "job_country": "US",
    "job_latitude": 36.171562,
    "job_longitude": -115.1391,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=sS66GJrTpHANPA3gAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-15T18:45:26.000Z",
    "job_offer_expiration_timestamp": 1710528326,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": 84,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": [
      "Skill Development",
      "Java",
      "Spring Boot",
      "Microservices",
      "SOAP",
      "Spring Webflux",
      "Akka",
      "Spring Framework",
      "Apache Kafka"
    ],
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "You must have experience leading a team of developers, be able to work on multiple projects simultaneously, and have excellent communication and collaboration skills",
        "Must have 7+ year IT experience and not too high experience",
        "Programming experience in Java Spring Boot, Spring WebFlux",
        "API-Driven Development - Solid experience in RESTful and Microservices development",
        "Experience in working with one of the concurrency frameworks like Mono, Flux, Akka",
        "Experience working in ORM frameworks like Entity, Hibernate, Dapper",
        "Strong relational database experience in either Oracle, MS SQL, or Postgres",
        "Good experience in queuing or streaming engines like Kafka",
        "Unit Testing / TDD - Experience with Continuous Integration Delivery Automated Testing and tools such as NUnit, JUnit",
        "Experience with Docker, GIT, SonarQube, Checkmarx, OpenShift, and other deployment tools for CI/CD",
        "Experience in using tools like Jira, GitLab, Swagger, Postman, SOAP UI, Service Now",
        "Basic Understanding of JavaScript, HTML, CSS"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4"
  },
  {
    "employer_name": "Dice",
    "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlgydP7sElaJC9qPrtNHwBhyTMHYgii1RPWsy&s=0",
    "employer_website": null,
    "employer_company_type": "Information",
    "job_publisher": "LinkedIn",
    "job_id": "u0poj1hgJ7XsarkaAAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Java Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/java-developer-at-dice-3830048655",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.639,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/java-developer-at-dice-3830048655",
        "is_direct": false
      },
      {
        "publisher": "CareerBuilder",
        "apply_link": "https://www.careerbuilder.com/job/J3M7HX5WK35ZGPQB1ZN",
        "is_direct": false
      },
      {
        "publisher": "Jobs Trabajo.org",
        "apply_link": "https://us.trabajo.org/job-2002-20240214-2fd73acdc3ac446f33d286bec900e01f",
        "is_direct": false
      }
    ],
    "job_description": "Dice is the leading career destination for tech experts at every stage of their careers. Our client, E-Business International, Inc., is seeking the following. Apply via Dice today!\n\nJob Role: Java Developer\n\nJob Location: MI (HYBRID)\n\nJob Type: Full-Time\n\nRequired Skill Sets/Qualifications:\n\nNote:\n• We don t accept third parties or employers\n• Need Mobile Number and Email for consideration\n• Overall 8+ years of experience must\n\nKey Responsibilities:\n• Proficiency in Java, with a good understanding of its ecosystems\n• Sound knowledge of Object-Oriented Programming (OOP) Patterns and Concepts\n• Familiarity with different design and architectural patterns\n• Skill for writing reusable Java libraries\n• Knowhow of Java concurrency patterns\n• Basic Understanding of the concepts of MVC (Model-View-Controller) Pattern, JDBC (Java Database Connectivity), and RESTful web services\n• Experience in working with popular web application frameworks like Play and Spark\n• Relevant Knowledge of Java GUI frameworks like Swing, SWT, AWT according to project requirements\n• Ability to write clean, readable Java code\n• Basic knowhow of class loading mechanism in Java\n• Experience in handling external and embedded databases\n• Understanding basic design principles behind a scalable application\n• Skilled at creating database schemas that characterize and support business processes\n• Basic knowledge of JVM (Java Virtual Machine), its drawbacks, weaknesses, and workarounds\n• Implementing automated testing platforms and unit tests\n• In-depth knowledge of code versioning tools, for instance, Git\n• Understanding of building tools like Ant, Maven, Gradle, etc",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707924748,
    "job_posted_at_datetime_utc": "2024-02-14T15:32:28.000Z",
    "job_city": "Ann Arbor",
    "job_state": "MI",
    "job_country": "US",
    "job_latitude": 42.280827,
    "job_longitude": -83.743034,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=u0poj1hgJ7XsarkaAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-15T15:32:28.000Z",
    "job_offer_expiration_timestamp": 1710516748,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": 96,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Overall 8+ years of experience must",
        "Relevant Knowledge of Java GUI frameworks like Swing, SWT, AWT according to project requirements",
        "Basic knowledge of JVM (Java Virtual Machine), its drawbacks, weaknesses, and workarounds"
      ],
      "Responsibilities": [
        "Proficiency in Java, with a good understanding of its ecosystems",
        "Familiarity with different design and architectural patterns",
        "Skill for writing reusable Java libraries",
        "Knowhow of Java concurrency patterns",
        "Basic Understanding of the concepts of MVC (Model-View-Controller) Pattern, JDBC (Java Database Connectivity), and RESTful web services",
        "Experience in working with popular web application frameworks like Play and Spark",
        "Ability to write clean, readable Java code",
        "Basic knowhow of class loading mechanism in Java",
        "Experience in handling external and embedded databases",
        "Understanding basic design principles behind a scalable application",
        "Skilled at creating database schemas that characterize and support business processes",
        "Implementing automated testing platforms and unit tests",
        "Understanding of building tools like Ant, Maven, Gradle, etc"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_naics_code": "519130",
    "job_naics_name": "Internet Publishing and Broadcasting and Web Search Portals"
  },
  {
    "employer_name": "Unisys",
    "employer_logo": "https://www.unisys.com/siteassets/homepage/unisys-logo.png",
    "employer_website": "http://www.unisys.com",
    "employer_company_type": "Computer Services",
    "job_publisher": "LinkedIn",
    "job_id": "c0IK9b77ydywiu5ZAAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Java Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/java-developer-at-unisys-3831484216",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6805,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/java-developer-at-unisys-3831484216",
        "is_direct": false
      },
      {
        "publisher": "Dice",
        "apply_link": "https://www.dice.com/job-detail/fffeb3fc-270f-4e83-a30b-11cedb0be4ba",
        "is_direct": true
      },
      {
        "publisher": "Offered.AI",
        "apply_link": "https://www.offered.ai/jobs/cls2sf28t09k5hyocv30q9beq",
        "is_direct": false
      },
      {
        "publisher": "Jobrapido.com",
        "apply_link": "https://us.jobrapido.com/jobpreview/3181174310",
        "is_direct": false
      }
    ],
    "job_description": "Job Responsibilities:\n\n• Analyze highly complex business requirements; generate technical specifications to design or redesign complex software components and applications.\n\n• Act as an expert technical resource for modeling, simulation and analysis efforts.\n\n• Leverage industry best practices to design, test, implement and support a solution.\n\n• Assure quality, security and compliance requirements are met for supported area.\n\n• Adapt to change quickly and adjust work accordingly in a positive manner.\n\n• Implement new software technology and coordinate simultaneous implementation tasks across teams\n\n• Lead application migration to AWS.\n\nQualifications:\n\n• Bachelor's degree in a technical field such as computer science, computer engineering or related field required\n\n• 8-10 years’ experience required.\n\n• Extensive development experience in J2EE, Java, Spring Boot, Spring MVC, Hibernate, Angular, HTML, CSS, Oracle, Netezza, Unix, ETL, Shell scripting\n\n• Hands on experience in AWS Services (Docker, ECS Faregate, CICD Pipeline, RDS, Redshift and etcs).\n\n• Hands on experience in designing, developing and successful deployment of large scale projects from end-to-end.\n\n• Hands on experience in following the iterative and agile SDLC process.\n\n• Hands on experience on working with RDS (oracle) in AWS environment.\n\n• Skilled in documentation, code review, presenting information and/or ideas to an audience in a way that is engaging and easy to understand.\n\n#LI-CGTS\n\n#TS-0942",
    "job_is_remote": true,
    "job_posted_at_timestamp": 1708017358,
    "job_posted_at_datetime_utc": "2024-02-15T17:15:58.000Z",
    "job_city": null,
    "job_state": null,
    "job_country": "US",
    "job_latitude": 37.09024,
    "job_longitude": -95.71289,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=c0IK9b77ydywiu5ZAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-16T17:15:58.000Z",
    "job_offer_expiration_timestamp": 1710609358,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": 96,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": true,
      "degree_preferred": true,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Bachelor's degree in a technical field such as computer science, computer engineering or related field required",
        "8-10 years’ experience required",
        "Extensive development experience in J2EE, Java, Spring Boot, Spring MVC, Hibernate, Angular, HTML, CSS, Oracle, Netezza, Unix, ETL, Shell scripting",
        "Hands on experience in AWS Services (Docker, ECS Faregate, CICD Pipeline, RDS, Redshift and etcs)",
        "Hands on experience in designing, developing and successful deployment of large scale projects from end-to-end",
        "Hands on experience in following the iterative and agile SDLC process",
        "Hands on experience on working with RDS (oracle) in AWS environment",
        "Skilled in documentation, code review, presenting information and/or ideas to an audience in a way that is engaging and easy to understand"
      ],
      "Responsibilities": [
        "Analyze highly complex business requirements; generate technical specifications to design or redesign complex software components and applications",
        "Act as an expert technical resource for modeling, simulation and analysis efforts",
        "Leverage industry best practices to design, test, implement and support a solution",
        "Assure quality, security and compliance requirements are met for supported area",
        "Adapt to change quickly and adjust work accordingly in a positive manner",
        "Implement new software technology and coordinate simultaneous implementation tasks across teams",
        "Lead application migration to AWS"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_naics_code": "541512",
    "job_naics_name": "Computer Systems Design Services"
  },
  {
    "employer_name": "Maximus",
    "employer_logo": null,
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "MAXIMUS - ICIMS",
    "job_id": "wROJgxByBjBGLCh-AAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "Sr. Java Developer - REMOTE",
    "job_apply_link": "https://external-maximus.icims.com/jobs/97725/sr.-java-developer---remote/job",
    "job_apply_is_direct": true,
    "job_apply_quality_score": 0.7047,
    "apply_options": [
      {
        "publisher": "MAXIMUS - ICIMS",
        "apply_link": "https://external-maximus.icims.com/jobs/97725/sr.-java-developer---remote/job",
        "is_direct": true
      },
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/sr-java-developer-remote-at-maximus-3827252108",
        "is_direct": false
      },
      {
        "publisher": "ZipRecruiter",
        "apply_link": "https://www.ziprecruiter.com/c/Maximus-Services,-LLC/Job/Sr.-Java-Developer-REMOTE/-in-Mclean,VA?jid=8bf27fa7adead481",
        "is_direct": false
      }
    ],
    "job_description": "Job Description Summary\n\nWe are seeking Sr. Java Developers to support our Internal Revenue Service (IRS) Master File project. The Sr. Java Developers will provide development and testing of software applications on an enterprise server platform, which may include conducting systems analysis, design, development, testing, installation and documentation in support of new or existing software products within Internal Revenue Service (IRS) organizational components. Location of work is remote in US.*Position is contingent on contract award. • Maintain and modify existing software programs and perform software design and development, unit testing, and debugging of software code using Java 8 and above, SQL, Spring Boot and Microservices for IRS• Create program designs and specifications that address requirement changes• Develop and deploy Java components or complete application functionality in JEE environments• Design, develop and test software components, and document and diagram application functionality from business requirements• Develop unit tests cases, plans and automated tests using Test Driven Development.• Perform unit testing, integration, and regression testing• Participate in design and code reviews• Maintain source code/components, and modify and/or upgrade code as necessary• Write required documentation as directed by IRS development methodology for JEE components• Develop custom adapters allowing the integration of legacy (i.e., capabilities not developed as services) capabilities with service-based Framework infrastructure and services• Work within a large team environment in short sprints• Interact effectively with the team of engineers/developers as well as customersQUALIFICATIONS• Bachelor's Degree from an accredited college or university required. An additional four (4) years of related experience may substitute for degree• At least five (5) years of related experience required• Strong Core Java 8 (or newer) Development • Experience designing and implementing JEE solutions with a focus on Spring Boot, Microservices and business rules• Experience using modern development methodology including Agile and continuous integration• Experience with Lambda expressions and Generics• Understanding of design patterns, SOA principles, and core Java API• Working knowledge of web services, service discovery protocol, messaging protocols (REST, RPC, WS-*, SOAP, Restful etc.), schema design and JMS or Apache Kafka for event handling.• Strong interpersonal, communication, and writing skills• Experience in planning and accomplishing goals and complicated tasks and providing consultation on complex projects as a top-level contributor or specialist• Experience developing solutions integrating and extending GOTS and COTS products• Experience with performance tuning and optimization of service-based Framework infrastructure and servicesPREFERRED QUALIFICATIONS:• Knowledge of Life Cycle Support of a software application on Z/OS and Red Hat Linux system environment• Experience working with big data or Mongo DB• Familiar with IBM Database (DB2)/Structured Query Language (SQL) development• Able to build and deploy applications using Maven, Docker, Jenkins is a plus.• Experience working in and a general understanding of Red Hat Linux OS• Experience in performance tuning and Clustering JEE application based platform for Enterprise system (I.E. Tomcat, Weblogic, EAP, Websphere, etc.)• Experience with Drools Business Rules Management System• Experience in designing, implementing, and tuning JBoss products (EAP/EWS, BRMS, Fuse, Fuse SW, JDG, JDV, JON)• Experience in Mainframes, JCL and executing Java Programs on Mainframes• Experience in designing, implementing, and tuning products that are similar in concept to the JBoss Middleware stack, such as iLog, Tibco, Weblogic, Websphere, etc.• Experience in implementing SOA• Background in managed file transfer, XML Gateway and various transport protocols (FTP, SFTP, HTTPS, TLS etc.)• Experience using Rational Team Concert client and Rational Suite.• Experience with IRS Enterprise Life Cycle (ELC), Enterprise Architecture and IRS policies, procedures, and strategies• Experience developing Framework infrastructure and services within one of the SOA and Restful design patterns• Experience working with Java Sprint technology including Spring JPA and Spring BatchAdditional Requirements as per contract/client:• Candidates must meet requirements to obtain and maintain an IRS Minimum Background Investigation (MBI) clearance (active IRS Moderate Risk MBI is a plus)• Candidates must be a US Citizen or a Legal Permanent Resident (Green Card status) for 3 years, and be Federal Tax compliant\n\nJob Summary\n\nEssential Duties and Responsibilities:\n\n- Provide design and implementation expertise to a cross-functional software development team.\n\n- Design and develop Java applications from business requirements in collaboration with other team members.\n\n- Support testing and remediate defects.\n\n- May mentor entry and mid-level developers.\n\nMinimum Requirements:- Bachelor's degree in related field.- 5-7 years of relevant professional experience required.- Equivalent combination of education and experience considered in lieu of degree.\n\nMAXIMUS Introduction\nSince 1975, Maximus has operated under its founding mission of Helping Government Serve the People, enabling citizens around the globe to successfully engage with their governments at all levels and across a variety of health and human services programs. Maximus delivers innovative business process management and technology solutions that contribute to improved outcomes for citizens and higher levels of productivity, accuracy, accountability and efficiency of government-sponsored programs. With more than 30,000 employees worldwide, Maximus is a proud partner to government agencies in the United States, Australia, Canada, Saudi Arabia, Singapore and the United Kingdom. For more information, visit https://www.maximus.com.\nEEO Statement\nEEO Statement: Active military service members, their spouses, and veteran candidates often embody the core competencies Maximus deems essential, and bring a resiliency and dependability that greatly enhances our workforce. We recognize your unique skills and experiences, and want to provide you with a career path that allows you to continue making a difference for our country. We’re proud of our connections to organizations dedicated to serving veterans and their families. If you are transitioning from military to civilian life, have prior service, are a retired veteran or a member of the National Guard or Reserves, or a spouse of an active military service member, we have challenging and rewarding career opportunities available for you. A committed and diverse workforce is our most important resource. Maximus is an Affirmative Action/Equal Opportunity Employer. Maximus provides equal employment opportunities to all qualified applicants without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, protected veteran status or disabled status.\nPay Transparency\nMaximus compensation is based on various factors including but not limited to job location, a candidate's education, training, experience, expected quality and quantity of work, required travel (if any), external market and internal value analysis including seniority and merit systems, as well as internal pay alignment. Annual salary is just one component of Maximus's total compensation package. Other rewards may include short- and long-term incentives as well as program-specific awards. Additionally, Maximus provides a variety of benefits to employees, including health insurance coverage, life and disability insurance, a retirement savings plan, paid holidays and paid time off. Compensation ranges may differ based on contract value but will be commensurate with job duties and relevant work experience. An applicant's salary history will not be used in determining compensation. Maximus will comply with regulatory minimum wage rates and exempt salary thresholds in all instances.\nPosted Max\nUSD $157,000.00/Yr.\nPosted Min\nUSD $120,000.00/Yr.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707811200,
    "job_posted_at_datetime_utc": "2024-02-13T08:00:00.000Z",
    "job_city": null,
    "job_state": null,
    "job_country": "US",
    "job_latitude": 37.09024,
    "job_longitude": -95.71289,
    "job_benefits": [
      "health_insurance",
      "paid_time_off",
      "dental_coverage",
      "retirement_savings"
    ],
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=wROJgxByBjBGLCh-AAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2025-02-13T08:00:00.000Z",
    "job_offer_expiration_timestamp": 1739433600,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": 60,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": false,
      "degree_mentioned": true,
      "degree_preferred": true,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {},
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4",
    "job_occupational_categories": [
      "Information Technology"
    ]
  },
  {
    "employer_name": "Aegistech",
    "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0LectWedw2wuvXsu5YmTePc8pxiGbp0xb49Ln&s=0",
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "LinkedIn",
    "job_id": "zoI9cbgEVlALhTt-AAAAAA==",
    "job_employment_type": "FULLTIME",
    "job_title": "CORE JAVA - Backend Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/core-java-backend-developer-at-aegistech-3830045347",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6874,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/core-java-backend-developer-at-aegistech-3830045347",
        "is_direct": false
      }
    ],
    "job_description": "A Full-Time, direct hire Java Developer job is available with our client, an award-winning technology provider of Front Office Foreign Exchange (F/X) technology. This is a remote role - candidates MUST reside in New York City (EST United States) or London, UK Time Zones.\n\nPLEASE NOTE: This is a permanent employee role - We are not considering candidates that are looking for a Contract/Consulting assignment or solicitations from Third Party companies.\n\nThe Core Java Developer will play an integral role in the growth, maintenance and support of Real-Time Foreign Exchange Trading applications.\n\nDAY-TO-DAY RESPONSIBILITIES:\n• Implementation of new features to match specifications using Core Java.\n• Implementation of Unit Tests.\n• Issue troubleshooting and resolution.\n• Identifying Performance Bottlenecks.\n\nTHE SKILLS YOU NEED TO GET THE ROLE:\n• 3+ years of experience in a CORE JAVA Development role.\n• Exceptional CORE JAVA skills as a Backend Developer WITHOUT reliance on frameworks.\n• DEEP understanding of Java specifics of collections, multithreading concurrency, memory utilization, and performance.\n• Experience writing JUnit tests, using modern IDEs such as Eclipse or IntelliJ, and using modern SCMs such as Git or SVN.\n• Excellent oral, written and presentation skills.\n• Bachelor’s degree in computer science or equivalent, or significant relevant work as a computer programmer.\n\nNICE TO HAVE:\n• Experience developing Front-Office Trading technology for processing market data, submitting orders, and handling executions.\n• Real-Time development\n• ANY OF THE FOLLOWING: FIX, Protobufs (or similar), React, Typescript, Swing, PostgreSQL, Maven, Jenkins, JIRA",
    "job_is_remote": true,
    "job_posted_at_timestamp": 1707924107,
    "job_posted_at_datetime_utc": "2024-02-14T15:21:47.000Z",
    "job_city": null,
    "job_state": null,
    "job_country": "US",
    "job_latitude": 37.09024,
    "job_longitude": -95.71289,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=zoI9cbgEVlALhTt-AAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-15T15:21:47.000Z",
    "job_offer_expiration_timestamp": 1710516107,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": 36,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": true,
      "degree_preferred": true,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "3+ years of experience in a CORE JAVA Development role",
        "Exceptional CORE JAVA skills as a Backend Developer WITHOUT reliance on frameworks",
        "DEEP understanding of Java specifics of collections, multithreading concurrency, memory utilization, and performance",
        "Experience writing JUnit tests, using modern IDEs such as Eclipse or IntelliJ, and using modern SCMs such as Git or SVN",
        "Excellent oral, written and presentation skills",
        "Bachelor’s degree in computer science or equivalent, or significant relevant work as a computer programmer",
        "Experience developing Front-Office Trading technology for processing market data, submitting orders, and handling executions",
        "Real-Time development",
        "ANY OF THE FOLLOWING: FIX, Protobufs (or similar), React, Typescript, Swing, PostgreSQL, Maven, Jenkins, JIRA"
      ],
      "Responsibilities": [
        "The Core Java Developer will play an integral role in the growth, maintenance and support of Real-Time Foreign Exchange Trading applications",
        "Implementation of new features to match specifications using Core Java",
        "Implementation of Unit Tests",
        "Issue troubleshooting and resolution",
        "Identifying Performance Bottlenecks"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4"
  },
  {
    "employer_name": "Mitchell Martin Inc.",
    "employer_logo": "https://thebestandbrightest.com/wp-content/uploads/2020/12/MMI-logo.png",
    "employer_website": "http://www.mitchellmartin.com",
    "employer_company_type": null,
    "job_publisher": "LinkedIn",
    "job_id": "smP3gCsee6gRaQnvAAAAAA==",
    "job_employment_type": "CONTRACTOR",
    "job_title": "Core Scala/Java Developer",
    "job_apply_link": "https://www.linkedin.com/jobs/view/core-scala-java-developer-at-mitchell-martin-inc-3827228916",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6838,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/core-scala-java-developer-at-mitchell-martin-inc-3827228916",
        "is_direct": false
      },
      {
        "publisher": "Jobright",
        "apply_link": "https://jobright.ai/jobs/info/65cd5d33405f0a778c79ce08",
        "is_direct": false
      }
    ],
    "job_description": "Core Scala/Java Developer\n\nContract( w2 or IC)\n\nNew Castle, DE ( 2 – 3 days onsite)\n\nSkills\n\nHands-on Dev experience with the Hadoop eco-system (HDFS, MapReduce, Hive, Pig, Impala, Spark, Kafka, Kudu, Solr), API development and use of JSON/XML/Hypermedia data formats.\n\nCore scala/java is required\n\nCandidate is expected to work on a platform which has 2 key components, one developed using core Java while the other using Hadoop/Big data technologies (HDFS, SPARK, HIVE etc.).\n\nIf you are interested please send your resume to sgoje@itmmi.com",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1707952629,
    "job_posted_at_datetime_utc": "2024-02-14T23:17:09.000Z",
    "job_city": "New Castle",
    "job_state": "DE",
    "job_country": "US",
    "job_latitude": 39.66204,
    "job_longitude": -75.56682,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=smP3gCsee6gRaQnvAAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-15T23:17:09.000Z",
    "job_offer_expiration_timestamp": 1710544629,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": true,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Hands-on Dev experience with the Hadoop eco-system (HDFS, MapReduce, Hive, Pig, Impala, Spark, Kafka, Kudu, Solr), API development and use of JSON/XML/Hypermedia data formats",
        "Core scala/java is required",
        "Candidate is expected to work on a platform which has 2 key components, one developed using core Java while the other using Hadoop/Big data technologies (HDFS, SPARK, HIVE etc.)"
      ]
    },
    "job_job_title": null,
    "job_posting_language": "en",
    "job_onet_soc": "15113200",
    "job_onet_job_zone": "4"
  },
  {
    "employer_name": "Prudent Technologies and Consulting, Inc.",
    "employer_logo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrBVKcuLxu5kaVYa0HKWVCuLlk8sYCgwnBacv1&s=0",
    "employer_website": null,
    "employer_company_type": null,
    "job_publisher": "LinkedIn",
    "job_id": "dovYiYn2ezLG5pv3AAAAAA==",
    "job_employment_type": "CONTRACTOR",
    "job_title": "Java Architect",
    "job_apply_link": "https://www.linkedin.com/jobs/view/java-architect-at-prudent-technologies-and-consulting-inc-3827954160",
    "job_apply_is_direct": false,
    "job_apply_quality_score": 0.6855,
    "apply_options": [
      {
        "publisher": "LinkedIn",
        "apply_link": "https://www.linkedin.com/jobs/view/java-architect-at-prudent-technologies-and-consulting-inc-3827954160",
        "is_direct": false
      },
      {
        "publisher": "Dice",
        "apply_link": "https://www.dice.com/job-detail/b27bae3f-7c30-47b2-95d7-f6ca36362873",
        "is_direct": true
      }
    ],
    "job_description": "Java Architect\n\nFort Worth Texas 76131\n\n12+ months Hybrid contract\n\nMUST be local to Dallas / Fort Worth area.\n\nNeed to be a local candidate and work onsite 1-2 days a week.",
    "job_is_remote": false,
    "job_posted_at_timestamp": 1708016703,
    "job_posted_at_datetime_utc": "2024-02-15T17:05:03.000Z",
    "job_city": "Fort Worth",
    "job_state": "TX",
    "job_country": "US",
    "job_latitude": 32.75549,
    "job_longitude": -97.330765,
    "job_benefits": null,
    "job_google_link": "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=java&start=0&ibp=htl;jobs#fpstate=tldetail&htivrt=jobs&htiq=java&htidocid=dovYiYn2ezLG5pv3AAAAAA%3D%3D",
    "job_offer_expiration_datetime_utc": "2024-03-16T17:05:03.000Z",
    "job_offer_expiration_timestamp": 1710608703,
    "job_required_experience": {
      "no_experience_required": false,
      "required_experience_in_months": null,
      "experience_mentioned": false,
      "experience_preferred": false
    },
    "job_required_skills": null,
    "job_required_education": {
      "postgraduate_degree": false,
      "professional_certification": false,
      "high_school": false,
      "associates_degree": false,
      "bachelors_degree": true,
      "degree_mentioned": false,
      "degree_preferred": false,
      "professional_certification_mentioned": false
    },
    "job_experience_in_place_of_education": false,
    "job_min_salary": null,
    "job_max_salary": null,
    "job_salary_currency": null,
    "job_salary_period": null,
    "job_highlights": {
      "Qualifications": [
        "Need to be a local candidate and work onsite 1-2 days a week"
      ]
    },
    "job_job_title": "Java architect",
    "job_posting_language": "en",
    "job_onet_soc": "15119900",
    "job_onet_job_zone": "4"
  }
]
};

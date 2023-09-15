const articles = [
  {
    img: 'https://interactive.theguidon.com/2023/08/one-big-adventure/one-big-adventure.png',
    date: 'AUGUST 2023',
    title: 'One Big Adventure',
    authors: 'Written by Reisha Jamola and Therese Alexandria Garcia',
    desc: 'Experience a day as a student in the Ateneo in this interactive by The GUIDON.',
  },
  {
    img: './img/thumbnail.png',
    date: 'MAY 2023',
    title: 'Year-End Gallery',
    authors: 'Written by The Photos Staff',
    desc: 'As academic year 2022-2023 has come to an end, The GUIDON invites you to look back on the various events experienced by the Ateneo in the last year.',
  },
  {
    img: 'https://interactive.theguidon.com/2023/05/dead-end/thumbnail.png',
    date: 'MAY 2023',
    title: 'Dead End: The Commuter Experience',
    authors: 'Written by Ariana Enriquez and Reign Iris Centeno',
    desc: 'Dead End is a project by the Features, Photos, Video Production, and Digital Development Staffs of AY 2022–2023.',
  },
  {
    img: 'https://interactive.theguidon.com/2023/02/from-the-hill-to-edsa/preview.png',
    date: 'FEBRUARY 2023',
    title: 'From the Hill to EDSA: 37 Years since the 1986 Revolution',
    authors:
      'Written by Zoey C. Atillo, Lancelot Batara, Joaquin Baang, Enzo Bello, Eloiza Mariano, Aren Teodoro, and Khaela C. Vijar',
    desc: 'From the Hill to EDSA is a project by the News, Inquiry, Photos, and Digital Development Staffs of AY 2022–2023.',
  },
  {
    img: 'https://interactive.theguidon.com/2022/10/a-house-divided/thumbnail.png',
    date: 'OCTOBER 2022',
    title: 'A House Divided',
    authors:
      'Written by Jana O. Ang, Biel L.B. Arevalo, Felicity C. Santos, Pioee B. Bassig, Clayton Dejillas, Maxine S. Kang, Aidan Bernales, and Jacob Tambunting',
    desc: 'A House Divided is a project by the Beyond Loyola, Features, Photos, and Digital Development Staffs of AY 2022-2023.',
  },
  {
    img: 'https://interactive.theguidon.com/2022/09/buried-with-lies/thumbnail.png',
    date: 'SEPTEMBER 2022',
    title: 'Buried with Lies',
    authors: 'Written by Simone Martinez and Derick M. Gabrillo',
    desc: 'Buried With Lies showcases the most common contentions surrounding the late dictator Ferdinand Marcos: his years in power and his achievements.',
  },
  {
    img: 'https://interactive.theguidon.com/2022/08/frozen-in-time/assets/thumbnail.png',
    date: 'AUGUST 2022',
    title: 'Frozen in Time: Stories of the Ateneo Campus',
    authors:
      'Written by Enzo Lagamon, Ena Algopera, Jia Parma, Andrea Mikaela Llanes, Tatiana L. Maligro, George D. Kho, and Kiara Florencia Rodriguez',
    desc: 'As another batch of seniors goes down the Hill, we immortalize some of their memories of campus here to remind us what life as an Atenean used to be like. Hopefully, these letters may also serve as guides for us when the time comes for the entire student body to return home.',
  },
  {
    img: './img/articles/Foreword2022.jpg',
    date: 'APRIL 2022',
    title: 'Foreword 2022',
    authors:
      'Written by Ivan Lewis C. Bueno, Kiana Lane R. Altoveros, and Monica Julianne C. Gallardo',
    desc: "The Presidential Candidates' Assembly aims to empower the Filipino electorate as they carefully discern and criticize the visions of the Presidential aspirants. Through the Foreword website, explore different features that showcase how the Presidential hopefuls visualize the Philippines under their respective administrations.",
  },
  {
    img: 'https://interactive.theguidon.com/2021/10/year-in-visual-stories/thumbnail.png',
    date: 'OCTOBER 2021',
    title: 'YEP: Year in Visual Stories',
    authors: 'Written by Design Cluster',
    desc: 'Creativity in crisis showcases the experiences and creative processes behind each designer’s craft despite the unfavorable circumstances in which journalism finds itself today. As the first interactive and digital folio of The GUIDON’s Design Cluster of AY 2020-2021, Creativity in crisis displays the best works of the cluster as visual storytellers.',
  },
  {
    img: 'https://interactive.theguidon.com/2021/07/off-tangent/portal-image.png',
    date: 'JULY 2021',
    title: 'Off Tangent',
    authors:
      'Written by Russell Louis Ku, Eala Julienne Nolasco, Adrian Jesper C. Cea, Christianna P. Lugod, and Paolo Buenaseda',
    desc: 'As the Loyola Schools completes its first, online academic year, The GUIDON dives into three unique sectors of the Ateneo community.',
  },
  {
    img: 'https://interactive.theguidon.com/2021/05/katipunan-casualties/Portal.png',
    date: 'MAY 2021',
    title: 'A Geography of Goodbyes',
    authors:
      'Written by Teo A. Ricaforte, Justin Ginete, Dani Capinding, Caitlin Anne Young, Ann Domingo, Therese Hipol, Arnold Paguio, Mikaela Llanes, Zoe Andin, and Patricia Villoria',
    desc: 'For one last time, Vantage Magazine says goodbye to the Katipunan establishments that have defined us.',
  },
  {
    img: 'https://interactive.theguidon.com/2021/04/underpowered/Portal.png',
    date: 'APRIL 2021',
    title: 'Underpowered',
    authors:
      'Written by Kris M. Fetiza, Derick M. Gabrillo, Zachary C. Gonzales',
    desc: 'Many Filipinos face consistent power interruptions and find themselves at a disadvantage to their energy-secure counterparts. In this interactive, we go through both narratives and compare their experiences.',
  },
  {
    img: 'https://interactive.theguidon.com/2021/03/year-in-quarantine/Portal.png',
    date: 'MARCH 2021',
    title: 'Year in Quarantine',
    authors:
      'Written by The GUIDON Photos Staff AY 2020-2021, Anna Pineda, Gerard Ma, Yanna Estrellado',
    desc: 'On the night of March 9, 2020, President Duterte called for a five-day suspension of classes in all levels in Metro Manila and later on placed the region and other provinces under enhanced community quarantine. However, a year later, the Philippines still finds itself under various levels of community quarantine.',
  },
  {
    img: 'https://interactive.theguidon.com/2021/01/on-the-frontlines/Portal.png',
    date: 'JANUARY 2021',
    title: 'On the frontlines',
    authors: 'Written by Jean Mangaluz, Malaika Paculan',
    desc: 'For decades, the gates between the University and Katipunan Avenue have served as the cradles of Atenean protest. They have borne witness to the members of the Ateneo community that took part in the tradition of resistance against the changing faces of injustice and oppression.',
  },
  {
    img: 'http://interactive.theguidon.com/2020/07/under-fire/under-fire-thumbnail.png',
    date: 'JULY 2020',
    title: 'Under Fire',
    authors: 'Written by Pioee B. Bassig, Derick M. Gabrillo and George Kho',
    desc: 'The Philippines is among the most dangerous countries for journalists—only a handful of other countries compare to it in this regard. Despite the return to democracy after the 1986 EDSA Revolution that toppled Ferdinand Marcos’ dictatorship, press freedom is still under threat. At least 159 journalists have been killed in the country since 1986. Before the Maguindanao Massacre trial, the Philippines had the most number of unsolved journalist killings in the world with 41 cases.',
  },
  {
    img: 'http://interactive.theguidon.com/2020/06/tgdn-90th/metadata.png',
    date: 'JUNE 2020',
    title: 'The GUIDON Online',
    authors: 'Written by Jasy C. Cruz, Enrique B. Halili',
    desc: 'FOR 90 years, The GUIDON has endeavored to provide its readers accurate and engaging content, made accessible through newsstands found within campus confines. After the publication launched its online platforms in 2008, it began to delve into the world of digital journalism. Looking towards the future, The GUIDON hopes to fully transition into an online publication by its 100th year.',
  },
  {
    img: 'https://interactive.theguidon.com/img/screenshots/marawi-thumbnail.jpg',
    date: 'JANUARY 2020',
    title: 'Catching light: Faces of hope in Marawi City',
    authors: 'Written by Danielle R. Garcia, Alithea C. Soriano',
    desc: 'The five-month battle between the extremist Maute Group and armed forces in Marawi City prompted President Rodrigo Duterte to declare Martial Law in Mindanao in 2017. Despite the uncertain future brought by persistent delays in the government’s rehabilitation efforts, the conclusion of Martial Law last December 31, 2019 has paved the way for Maranaos to embark on a new chapter starting this new year. “Catching light: Faces of hope in Marawi City” looks into the situation of Marawi’s residents as they, themselves, rebuild the Islamic city. As they battle insufficient relief efforts, makeshift classrooms, and religious discrimination from other Filipinos, residents remain hopeful that they will return home.',
  },
  {
    img: 'http://interactive.theguidon.com/2019/12/christmas-interactive/resources/images/thumbnail.png',
    date: 'DECEMBER 2019',
    title: "Santa's Real Elves",
    authors:
      'Written by Keziah Maru Z. Pasion, Andrea Tibayan, Andrea Mikaela Llanes',
    desc: 'Every Christmas season, there are some Filipinos who may see the holidays as just another ordinary working day. The GUIDON explores some of their stories through this interactive.',
  },
  {
    img: 'http://interactive.theguidon.com/2018/05/marawi/img/preview.jpg',
    date: 'MAY 2018',
    title: 'Strength and Resolve: Tales of recovery in the Islamic City',
    authors: 'Written by Liam C. Lu',
    desc: 'In a joint project with The Crusader Publication, the student publication of Xavier University - Ateneo de Cagayan, The GUIDON looks into the situation in Marawi a year since the fated attack.',
  },
  {
    img: 'http://interactive.theguidon.com/2018/01/aewu-contention/img/preview.jpg',
    date: 'JANUARY 2018',
    title: 'The AEWU Contention',
    authors: 'Written by Michelle D. Abad, Thea Unson',
    desc: 'Months of negotiations have led to questions of just wages, the feasibility of expenses, and eventually, a positive strike vote.',
  },
  {
    img: 'http://interactive.theguidon.com/2017/07/duterte-promises/img/preview.jpg',
    date: 'JULY 2017',
    title: 'A Year of ‘Dutertismo’',
    authors: 'Written by Liam C. Lu',
    desc: 'AS PRESIDENT Rodrigo Duterte prepares for his second State of the Nation Address (SONA), Beyond Loyola revisits the bold plans he had laid out during his inaugural SONA last July 25, 2016. We looked at each of his promises and checked whether they were achieved.',
  },
  {
    img: 'https://interactive.theguidon.com/img/previews/execution-day.jpg',
    date: 'APRIL 2017',
    title: 'Execution Day',
    authors: 'Written by JC A. Beltran, Ina M. Morales, Janelle Paris',
    desc: 'BEYOND LOYOLA: As the debate on the reimposition of the death penalty continues, we follow a prisoner sentenced to death as he goes through his last day.',
  },
  {
    img: 'https://interactive.theguidon.com/img/screenshots/sanggu-elections.jpg',
    date: 'OCTOBER 2016',
    title: 'The Road to Sanggunian',
    authors: 'Written by Andrea L. Taguines',
    desc: 'The new Sanggunian is the culmination of efforts from a wide variety of sectors and institutions.',
  },
  {
    img: 'https://interactive.theguidon.com/img/screenshots/re-visioning-history.jpg',
    date: 'SEPTEMBER 2016',
    title: 'Re-visioning History',
    authors: 'Written by Manuel M. Aldeguer',
    desc: '',
  },
  {
    img: 'https://interactive.theguidon.com/img/screenshots/silenced-voices.jpg',
    date: 'SEPTEMBER 2016',
    title: 'Silenced Voices',
    authors: 'Written by Nio Atrigenio',
    desc: 'Extreme censorship under the Marcos administration controlled and repressed the media, putting both journalists and ordinary Filipinos alike at risk.',
  },
  {
    img: 'https://interactive.theguidon.com/img/screenshots/organization-accreditation.jpg',
    date: 'AUGUST 2016',
    title: 'Finding your footing: A guide to accreditation',
    authors: 'Written by Joaquin B. Jacinto, Jairus I. Paul',
    desc: 'Unaccredited vs. Accredited: What makes accreditation so important? This interactive website illustrates the process and guidelines for organizational accreditation as a supplementary to Joining the club, an article on unaccredited organizations.',
  },
];

const generateCards = () => {
  const cardList = document.querySelector('.main-gallery .center-wrapper');
  articles.forEach((article) => {
    let cardDiv = document.createElement('div');
    let cardLink = document.createElement('a');
    let cardTitle = document.createElement('p');
    let cardPic = document.createElement('div');
    cardPic.classList.add('image-wrapper');
    cardPic.style.backgroundImage = `url(${article.img})`;

    cardDiv.classList.add('card');
    cardTitle.textContent = article.title;

    cardDiv.appendChild(cardLink);
    cardLink.appendChild(cardPic);
    cardLink.appendChild(cardTitle);

    cardList.appendChild(cardDiv);
  });
};

generateCards();

const allCards = document.querySelectorAll('.card');

const removeAllSelected = () => {
  allCards.forEach((card) => card.classList.remove('selected'));
};

const displayDetails = (card) => {
  const detailCard = document.querySelector('.detail-view');
  let desc = document.querySelector('#detail-desc p');
  let title = document.querySelector('#detail-title');
  let authors = document.querySelector('#detail-authors');
  let date = document.querySelector('#detail-date');
  let image = document.querySelector('.left img');
  detailCard.style.display = 'block';

  date.textContent = articles[card].date;
  title.textContent = articles[card].title;
  authors.textContent = articles[card].authors;
  desc.textContent = articles[card].desc;
  image.src = articles[card].img;
};

allCards.forEach((card, key) => {
  let bgImage = document.querySelector('.background-color');
  card.addEventListener('click', () => {
    bgImage.style.opacity = 0;
    removeAllSelected();
    card.classList.add('selected');
    displayDetails(key);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTimeout(() => {
      bgImage.style.opacity = 1;
    }, 600);
    bgImage.style.backgroundImage = `url(${articles[key].img})`;
  });
});

console.log(articles);

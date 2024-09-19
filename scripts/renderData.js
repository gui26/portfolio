const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'Grão de Ouro Máquinas',
      date: '2024',
      languages: ['Wordpress','Elementor','html', 'css', 'javascript', 'MySQL', 'PHP'],
      description: `Grão de Ouro Máquinas é uma empresa de Palmas-TO no ramo do Agro e vende tratores e equipamentos :D <br><br>

      O Grupo Grão de Ouro está há 33 anos no mercado trazendo soluções aos nossos clientes e parceiros no Agronegócio.
      Nossa matriz está localizada em Alfenas-MG, embora atuemos em quase todo território brasileiro, através de nossos negócios, que vão desde o plantio, beneficiamento, armazenagem até comercialização de grãos, produção de ração animal, comercialização de insumos para ração animal e concessionária de máquinas agrícolas.
      Para exportação, nosso foco está na comercialização de soja em grãos, milho em grãos, sorgo em grãos, farelo de soja, DDG (Dry Destilary Grain), farelo de polpa cítrica e caroço de algodão. Acesse o site e saiba mais: https://www.grupograodeouro.com.br/: <br><br>`,
      imgSrc: 'assets/projects/graodeouro.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://www.graodeouromaquinas.com.br/'
    },
    {
      id: 2,
      type: 2,
      title: 'Edge Production',
      date: '2024',
      languages: ['React','html', 'css','javascript','Bootstrap','Framer', 'Photoshop',],
      description: `A Edge Production é uma produtora de áudio visual :D <br><br>

      Conheça a História por Trás da EDGE Production Na EDGE Production, nossa história é tão vibrante quanto nossos vídeos. Fundada pela colaboração visionária de Roberto Kim e José Oh, combinamos a experiência e a juventude para criar uma abordagem única no mundo da produção audiovisual. Desde o início, buscamos desafiar as convenções e trazer uma nova energia para o mercado. Saiba mais sobre nossa jornada, nossa equipe e nossa missão de inspirar através do poder da imagem em movimento. <br><br>`,
      imgSrc: 'assets/projects/edge.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://edgeproduction.com.br/'

    },
    {
      id: 3,
      type: 2,
      title: 'ACCYBER',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `A ACCyber vende serviços e soluções de segurança web :D <br><br>

      ACCyber faz parte do Grupo Figo Inc., responsável pelas empresas AC Software e Figo Technologies. Com mais de dez anos de mercado de experiência, a ACCyber concentra seus esforços em proteger pessoas, dispositivos e dados com um portfólio de produtos e serviços de segurança. Com base na confiança e credibilidade em mais de mil clientes, 
      oferecemos a experiência certa para acelerar sua jornada digital com segurança.<br><br>`,

      imgSrc: 'assets/projects/accyber.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://accyber.com.br'
    },
   
   
    {
      id: 4,
      type: 2,
      title: 'CRM ACSoftware',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Zoho CRM automatiza fluxos de trabalho, processos, campanhas, jornadas de clientes:D <br><br>

       Tome decisões conscientes com agilidade usando as ferramentas avançadas de análise doZoho CRM. Tenha insights derivados, 
       crie relatórios e painéis personalizados e meça as operações em tempo real para impulsionar o crescimento de maneira sustentável.<br><br>`,
      imgSrc: 'assets/projects/CRM.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://crm.acsoftware.com.br/'

    },

    {
      id: 5,
      type: 1,
      title: 'BPM ACSOftware',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `O BPM Qntr software de orquestração de fluxo de trabalho :D <br><br>

      Nós nos propusemos a fornecer uma maneira fácil para gestores obterem visibilidade, controle e a 
      capacidade de automatizar facilmente os processos que estão sob seus cuidados, liberando-os para se 
      concentrarem nas coisas mais importantes e, como resultado, realizar mais. Nós chamamos essas pessoas de Orquestradores.<br><br>`,
      imgSrc: 'assets/projects/bpm.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://bpm.acsoftware.com.br/'

    },

    {
      id: 6,
      type: 1,
      title: 'Zoho Desk ACSoftware',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `O Zoho Desk é um software Omnichannel e atendimento ao cliente :D <br><br>

      O objetivo mais amplo da Zoho é tornar a tecnologia de qualidade disponível e acessível para todos. Ao fazer isso, o 
      Zoho Desk atende às necessidades de organizações de todos os tamanhos.<br><br>`,
      imgSrc: 'assets/projects/desk.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://desk.acsoftware.com.br'

    },

    {
      id: 7,
      type: 1,
      title: 'ACSMSP',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Gerenciamento de serviços da sua TI com foco nas ferramentas da ManageEngine :D <br><br>

      A ACS MSP, somos mais do que apenas uma empresa especializada em gerenciamento de TI – somos parceiros dedicados ao seu crescimento 
      e sucesso. Com AC mais de uma década de experiência parceiro exclusivo das inovadoras soluções da ManageEngine no Brasil, nossa missão é clara: 
       fornecer soluções excepcionais por meio de serviços gerenciados e tecnologia de ponta.<br><br>`,
      imgSrc: 'assets/projects/acsmsp.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://acsmsp.com.br/'

    },
    {
      id: 8,
      type: 1,
      title: 'Site24x7 AC',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `O site24x7 monitora site e sistemas :D <br><br>

      Monitoramento de sites, servidor, nuvem, rede, aplicativos.<br>
      Detecte e resolva problemas de fluxo de trabalho de sites críticos para os negócios antes que eles 
      afetem os usuários finais. Melhore a confiabilidade do site e a entrega de serviços de alta qualidade 
      por meio de testes sintéticos usando transações com script que simulam o
      comportamento do usuário e analisam o funcionamento de todos os componentes críticos. <br><br>`,
      imgSrc: 'assets/projects/24x7.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://site24x7.acsoftware.com.br/'

    },

    {
      id: 9,
      type: 1,
      title: 'LP Unimed',
      date: '2024',
      languages: ['html', 'css',"Javascript",'Photoshop', 'figma'],
      description: `Landing Page criada para uso interno para clientes Unimed <br><br>


        `,
      imgSrc: 'assets/projects/unimed.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://www.acsoftware.com.br/unimed/home.html'

    },

    {
      id: 10,
      type: 1,
      title: 'LP Sicoob',
      date: '2024',
      languages: ['html', 'css',"Javascript",'Photoshop', 'figma'],
      description: `Landing Page Sicoob <br><br>

    
        `,
      imgSrc: 'assets/projects/sicoob.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://www.acsoftware.com.br/sicoob/lp/home'

    },

    {
      id: 11,
      type: 2,
      title: 'SoluxLed',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Soluxled é uma revendedora de leds e iluminações. <br><br>
        
        `,
      imgSrc: 'assets/projects/soluxled.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://soluxled.com.br/'

    },  
    
    {
      id: 12,
      type: 1,
      title: 'MGS Planos de Saúde',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Agendamentos e planos de saúde <br><br>

       
        `,
      imgSrc: 'assets/projects/mgs.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://mgsplanosdesaude.com.br/'

    },

    {
      id: 13,
      type: 1,
      title: 'PodCafé da TI',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Podcast da ACSoftware. <br><br>

        `,
      imgSrc: 'assets/projects/podcafe.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://podcafe.com.br/'

    },
    {
      id: 14,
      type: 1,
      title: 'WorkPlace AC',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Workplace é uma solução da ACSoftware <br><br>

        O Zoho Workplace é uma plataforma online que unifica e centraliza todas as ferramentas de 
        trabalho que a sua empresa precisa no dia a dia. Os nossos aplicativos simplificam e 
        automatizam os fluxos de atividades e assim, aumentam a colaboração e produtividade de toda a equipe.
        `,
      imgSrc: 'assets/projects/workplace.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://workplace.acsoftware.com.br/'

    },
    {
      id: 15,
      type: 2,
      title: 'LowCode Zoho',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: ` Desenvolvimento LowCode<br><br>
        
       O Zoho Creator é uma plataforma de desenvolvimento de 
       aplicativos low-code que ajuda você a projetar, desenvolver e executar qualquer software de negócios que você precise.
        `,
      imgSrc: 'assets/projects/lowcode.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://lowcode.acsoftware.com.br/'

    },
    {
      id: 16,
      type: 1,
      title: 'Domínio Serviços',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `
     O Grupo Domínio Serviços atua com profissionalismo e alto nível de qualidade em todas as torres de serviços.<br>
        • Domínio Telecom; <br>
        • Domínio Marketing; <br>
        • Domínio Saúde; <br>

        `,
      imgSrc: 'assets/projects/dominio.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://dominioservicos.com.br/'

    },

    {
      id: 17,
      type: 1,
      title: 'Dinho Distribuidora',
      date: '2024',
      languages: ['wordpress', 'PHP',"MySQL",'Photoshop', 'figma'],
      description: `Dinho distribuidora e venda de bebidas B2B <br><br>

        Empresa que vende bebidas em atacado para grandes empresas em todo território brasileiro.
        `,
      imgSrc: 'assets/projects/dinho.png',
      videoSrc: '',
      linkedin: '',
      repository: '',
      site: 'https://www.lojadinhodistribuidora.com.br/'

    }
   
   
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, date, languages }) => {
    return `
        <div class="box" id="${id}">
          <div class="cover">
            <img src=${imgSrc} alt="Accyber" width="100%" height="240px">
            <div class="details">
              <p>${title}</p>
             
            </div>
          </div>
          <div class="description">
            <p>${date}</p>
            <a>Ver mais</a>
          </div>
        </div>
      `
  }).join('');
}
{/* <div class="mini-languages">
${languages.map((language) => `<img width="100%" height="40px" src="assets/languages/${language}.svg" alt="${language}">`)}
</div> */}
const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'SASS',
      src: 'sass'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'PHP',
      src: 'PHP'
    },
    

    {
      name: 'React.js',
      src: 'react'
    },
    {
      name: 'TypeScript',
      src: 'typescript'
    },
    {
      name: 'Redux',
      src: 'redux'
    },
    {
      name: 'Framer Motion',
      src: 'framer'
    },
    {
      name: 'Bootstrap',
      src: 'Bootstrap'
    },
  
   
   
  
   
    {
      name: 'NodeJs',
      src: 'Nodejs'
    },
    {
      name: 'ExpressJS',
      src: 'expressjs'
    },
    {
      name: 'MongoDB',
      src: 'mongodb'
    },
    {
      name: 'MongooseJS',
      src: 'mongoose'
    },
    {
      name: 'MySQL',
      src: 'mysql'
    },
    {
      name: 'Insomnia',
      src: 'insomnia'
    },
    {
      name: 'Wordpress CMS',
      src: 'wordpress'
    },
    {
      name: 'Elementor',
      src: 'Elementor'
    },
   
    {
      name: 'ElectronJS',
      src: 'electronjs'
    },
    {
      name: 'Figma',
      src: 'figma'
    },
   
    {
      name: 'Photoshop',
      src: 'Photoshop'
    },
    {
      name: 'Illustrator',
      src:'Illustrator'
    },
    {
      name: 'After Effects',
      src: 'after'
    },
  
    {
      name: 'Visual Studio Code',
      src: 'visualstudio'
    },
    {
      name: 'Git e Github',
      src: 'github'
    },
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const addData = ({ title, description, date, site, repository, linkedin, videoSrc }) => {
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('transparent')
  modalTitle.innerHTML = title
  modalDescription.innerHTML = description
  modalDate.innerHTML = date
  modalLinkProject.setAttribute('href', site)
  modalLinkRepository.setAttribute('href', repository)
  modalLinkLinkedin.setAttribute('href', linkedin)
  iframe.setAttribute('src', videoSrc + '?autoplay=1&amp;loop=0')

}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent')
  iframe.setAttribute('src', '')

}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();

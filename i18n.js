// i18n.js
// Troca de idioma do site (EN / PT-BR) sem dependências externas.

(function () {
  'use strict';

  var STORAGE_KEY = 'lexicohub-lang';

  var translations = {
    en: {
      'nav.sobre': 'About',
      'nav.servicos': 'Services',
      'nav.depoimentos': 'Testimonials',
      'nav.contato': 'Contact',
      'nav.toggleAriaLabel': 'Open navigation menu',
      'lang.selectorAriaLabel': 'Select language',

      'hero.title': 'Your Hub for understanding the world around you.',
      'hero.subtitle': 'High-precision translation and localization services connecting your business to the Brazilian and Irish markets.',
      'hero.cta': 'Request a Quote',

      'sobre.title': 'About Us',
      'sobre.p1': 'We at <strong>LexicoHub</strong> are a couple of passionate Brazilian linguists eager to offer the best language solutions possible to people and businesses. With more than a decade of experience in the localization industry, we combine technical rigor, terminological precision, cultural sensitivity, and smart decisions to deliver technical software and linguistic solutions.',
      'sobre.p2': 'Our mission is to eliminate language barriers between Brazil and the English-speaking world, ensuring that your brand identity communicates with total clarity and authority, and that your rights are protected through accurately translated documents.',

      'servicos.title': 'Our Services',
      'servicos.card1.title': 'Certified Translation',
      'servicos.card1.text': 'Official translations with legal validity in Ireland for documents, contracts, certificates, and immigration processes.',
      'servicos.card2.title': 'Technical Translation',
      'servicos.card2.text': 'Specialized in engineering, medicine, IT, finance, and market research, maintaining strict rigor with domain-specific terminology.',
      'servicos.card3.title': 'Localization',
      'servicos.card3.text': 'Full cultural adaptation of software, websites, apps, and games for your target market.',
      'servicos.card4.title': 'Linguistics',
      'servicos.card4.text': 'Multimodal solutions for software, websites, UX/UI, and linguistic consultancy.',

      'depoimentos.title': 'What our clients say',
      'depoimentos.d1.text': '"I had the chance to work with Rafael for about five years starting in 2016. It was always a pleasure for me to see someone so competent, resourceful, and ambitious.<br><br>His unique way to adapt to any challenge and find quick and efficient solutions was inspirational to all members of the team. Besides, it\'s important to state how trustworthy and professional he is. During all our time together, he did not miss a single deadline."',
      'depoimentos.d1.role': 'Head of Growth at a Fintech',
      'depoimentos.d2.text': '"Rafael and I worked together last year on the English-to-Portuguese translation of a scientific paper on global warming. He was very detail-oriented, often asked for and gave feedback, was careful with deadlines, and communicated his ideas in a very clear and efficient way. I wouldn\'t hesitate to collaborate with him again when I have the chance."',
      'depoimentos.d2.role': 'Forensic Investigator at the EU',
      'depoimentos.d3.text': '"Rafael is hard-working, eager to learn, respectful of instructions and deadlines, and trustworthy. We recommend this linguist 😊"',
      'depoimentos.d3.role': 'Localization Lead at one of the major LSPs in the EU',
      'depoimentos.d4.text': '"Rafael did a great job. Accurate immigration document translations, efficiently delivered in a timely manner."',
      'depoimentos.d4.role': 'Lead Lawyer at an Immigration Office in North America',

      'contato.title': 'Get in Touch',
      'contato.info.title': 'Contact us',
      'contato.info.text': 'Need a quick quote or have questions about our services? Send us a message or reach out directly.',
      'contato.info.emailLabel': 'Email:',
      'contato.info.hoursLabel': 'Hours:',
      'contato.info.hoursValue': 'Mon–Fri, 8am–6pm (UTC)',
      'contato.cta.button': 'Send Us an Email',

      'footer.copyright': '© 2026 LexicoHub. All rights reserved.',

      'meta.title': 'LexicoHub | Translation & Localization',
      'meta.description': 'LexicoHub - Professional game localization, certified document translation, market research translation, and software/website localization services for the Brazilian and Irish markets.'
    },
    pt: {
      'nav.sobre': 'Sobre',
      'nav.servicos': 'Serviços',
      'nav.depoimentos': 'Depoimentos',
      'nav.contato': 'Contato',
      'nav.toggleAriaLabel': 'Abrir menu de navegação',
      'lang.selectorAriaLabel': 'Selecionar idioma',

      'hero.title': 'Seu lar para compreender o mundo ao seu redor.',
      'hero.subtitle': 'Serviços de tradução e localização de alta precisão para conectar seu negócio aos mercados brasileiro e irlandês.',
      'hero.cta': 'Solicite um orçamento',

      'sobre.title': 'Nossa história',
      'sobre.p1': 'Nós da <strong>LexicoHub</strong> somos um casal brasileiro apaixonado pela indústria de tradução e estamos comprometidos em ofertar as melhores soluções linguísticas possíveis para pessoas e negócios. Com mais de uma década de experiência na indústria de localização, unimos rigor técnico, precisão terminológica, sensibilidade cultural e decisões inteligentes para entregar soluções técnicas de software e linguísticas.',
      'sobre.p2': 'Nossa missão é eliminar barreiras idiomáticas entre o Brasil e o mundo anglófono, garantindo que a identidade do seu negócio se comunique com total clareza e autoridade, e que seus direitos sejam assegurados por meio de seus documentos traduzidos.',

      'servicos.title': 'Nossos serviços',
      'servicos.card1.title': 'Tradução certificada',
      'servicos.card1.text': 'Traduções oficiais com validade jurídica na Irlanda para documentos legais, contratos, certidões e processos de imigração.',
      'servicos.card2.title': 'Tradução técnica',
      'servicos.card2.text': 'Especializada nos setores de engenharia, medicina, TI, finanças e pesquisa de mercado, mantendo rigor rigoroso em termos específicos.',
      'servicos.card3.title': 'Localização',
      'servicos.card3.text': 'Adaptação cultural completa de softwares, websites, aplicativos e games para o mercado-alvo.',
      'servicos.card4.title': 'Linguística',
      'servicos.card4.text': 'Soluções multimodais para software, websites, UX/UI e consultoria linguística.',

      'depoimentos.title': 'O que dizem nossos clientes',
      'depoimentos.d1.text': '"Tive a oportunidade de trabalhar com o Rafael por cerca de cinco anos, a partir de 2016. Sempre foi um prazer ver alguém tão competente, versátil e ambicioso.<br><br>Sua forma única de se adaptar a qualquer desafio e encontrar soluções rápidas e eficientes foi uma inspiração para todos os membros da equipe. Além disso, é importante destacar o quanto ele é confiável e profissional. Durante todo o tempo que trabalhamos juntos, ele não perdeu um único prazo."',
      'depoimentos.d1.role': 'Head of Growth em uma fintech',
      'depoimentos.d2.text': '"Eu e o Rafael trabalhamos juntos, no ano passado, na tradução do inglês para o português de um artigo científico sobre aquecimento global. Ele foi muito atento aos detalhes, pediu e deu feedback com frequência, foi cuidadoso com os prazos e comunicou suas ideias de forma clara e eficiente. Não hesitaria em colaborar com ele novamente se tiver a chance."',
      'depoimentos.d2.role': 'Investigadora forense na UE',
      'depoimentos.d3.text': '"O Rafael é dedicado, tem vontade de aprender, respeita instruções e prazos, e é confiável. Recomendamos este linguista 😊"',
      'depoimentos.d3.role': 'Líder de localização em uma das maiores prestadoras de serviços linguísticos da UE',
      'depoimentos.d4.text': '"O Rafael fez um ótimo trabalho. Traduções precisas de documentos de imigração, entregues com eficiência e dentro do prazo."',
      'depoimentos.d4.role': 'Advogado-chefe em um escritório de imigração na América do Norte',

      'contato.title': 'Fale conosco',
      'contato.info.title': 'Entre em contato',
      'contato.info.text': 'Precisa de um orçamento rápido ou tem dúvidas sobre nossos serviços? Envie uma mensagem ou entre em contato diretamente.',
      'contato.info.emailLabel': 'E-mail:',
      'contato.info.hoursLabel': 'Atendimento:',
      'contato.info.hoursValue': 'Seg. a sex., das 08h às 18h (UTC)',
      'contato.cta.button': 'Enviar um e-mail',

      'footer.copyright': '© 2026 LexicoHub. Todos os direitos reservados.',

      'meta.title': 'LexicoHub | Tradução e Localização',
      'meta.description': 'LexicoHub - Serviços linguísticos em localização de jogos, tradução de documentos certificados, pesquisa de mercado e localização de software e websites para os mercados brasileiro e irlandês.'
    }
  };

  function translate(key) {
    var lang = document.documentElement.getAttribute('data-lang') || 'en';
    var dict = translations[lang] || translations.en;
    return dict[key] !== undefined ? dict[key] : (translations.en[key] !== undefined ? translations.en[key] : key);
  }

  window.lexicoI18n = { t: translate };

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria-label');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    if (dict['meta.title']) {
      document.title = dict['meta.title'];
    }
    var metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && dict['meta.description']) {
      metaDescription.setAttribute('content', dict['meta.description']);
    }

    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.documentElement.setAttribute('data-lang', lang);

    document.querySelectorAll('.lang-option').forEach(function (btn) {
      var isActive = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage indisponível (modo privado, etc.) - segue sem persistir
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      saved = null;
    }

    var initialLang = (saved === 'en' || saved === 'pt') ? saved : 'en';
    applyLanguage(initialLang);

    document.querySelectorAll('.lang-option').forEach(function (button) {
      button.addEventListener('click', function () {
        applyLanguage(button.getAttribute('data-lang'));
      });
    });
  });
})();

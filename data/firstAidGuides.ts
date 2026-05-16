
//database
export interface FirstAidGuide {
  id: string;
  title: string;
  category: string;
  description: string;
  symptoms: string[];

  safetyPreparation: {
  title: string;
  explanation: string;
  image: string | number;
  }[];

  steps: {
    title: string;
    explanation: string;
    image: string | number;
  }[];
  warnings: string[];
  icon: string;
}
//swahili version
export const firstAidGuides: FirstAidGuide[] = [
  {
    id: '1',
    title: 'Kuungua MOTO',
    category: 'Majeraha',
    description: 'Jibu la haraka kwa majeraha ya kuungua linaweza kuzuia uharibifu mkubwa',
    symptoms: [
      'Ngozi nyekundu au yenye malengelenge',
      'Maumivu na uvimbe',
      'Ngozi iliyochomwa au nyeupe (kali)',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa huduma ya kwanza. ',
        image: require('../assets/images/nawamikono.jpg'),
      },
      {
        title: ' Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na aliepata ajali ya moto .',
        image: require('../assets/images/vaagloves.jpeg'),
      },
      {
        title: ' Hakikisha Usalama',
        explanation: 'Hakikisha mazingira ni salama. Mwondoe mtu kutoka chanzo cha Moto kama kuna moto au joto.',
        image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Poza jeraha',
        explanation: 'Mimina maji baridi (si barafu) kwenye eneo lililochomwa kwa dakika 10-20. Hii inapunguza joto na kutuliza maumivu. Usitumie barafu au maji ya moto.',
        image: require('../assets/images/pooza.jpeg'),
      },
      {
        title: 'Ondoa vito',
        explanation: 'Ondoa vito vya mapambo na nguo zilizo karibu na eneo lililochomeka ikiwa hazijashikana na ngozi.',
        image: require('../assets/images/vito.jpeg'),
      },
      {
        title: 'Matibabu',
        explanation: 'paka asali ya majimaji, aloe vera au vaseline kwenye sehemu alipochomeka',
        image: require('../assets/images/pakaKidonda.jpg'),
      }
      ,
      {
        title: 'Funika jeraha',
        explanation: 'Funika eneo lililochomwa kwa kitambaa safi kikavu au bandeji ya kuzaa. Hii inalinda kutoka uchafu na husaidia kupunguza maumivu. Usitumie pamba au vifaa vya kunata.',
        image: require('../assets/images/funikaKidonda.jpg'),
      },
      {
        title: 'Tafuta msaada',
        explanation: 'Kwa majeraha makali au makubwa ya kuungua, piga simu huduma za dharura mara moja. Majeraha ya uso, mikono, au maeneo nyeti yanahitaji umakini wa haraka.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie barafu moja kwa moja kwenye majeraha ya kuungua',
      'Usitumie siagi, mafuta, au marashi',
      'Usipasue malengelenge',
      'Tafuta msaada wa daktari mara moja kwa majeraha makubwa kuliko inchi 3 au kwenye uso',
    ],
    icon: '🔥',
  },
  {
    id: '2',
    title: 'Kujikata',
    category: 'Majeraha',
    description: 'Utunzaji sahihi wa jeraha unazuia maambukizi na kukuza uponyaji',
    symptoms: [],
    safetyPreparation: [
      {
        title: 'Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza. Hii inazuia maambukizi.',
        image: require('../assets/images/nawamikono.jpg'),
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa kutoka damu na vijidudu.',
        image: require('../assets/images/vaagloves.jpeg'),
      },
      {
        title: 'Simamisha damu Kutoka',
        explanation: 'Tumia kitambaa safi, pamba, au bandeji kubonyeza sehemu iliyokatika kwa dakika kadhaa mpaka damu ipungue au ikome.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Zuiakutoka kwa damu',
        explanation: 'Weka shinikizo moja kwa moja kwenye jeraha kwa kitambaa safi. Inua eneo lililojeruhiwa juu ya kiwango cha moyo ikiwezekana.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Safisha jeraha kwa maji ya baridi',
        explanation: 'Osha jeraha kwa maji safi na sabuni. Ondoa uchafu wowote lakini usitumie kemikali kali zinazoweza kudhuru.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka antiseptiki',
        explanation: 'Weka marashi ya antibiotic au antiseptiki kwenye jeraha. Hii inazuia maambukizi.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika jeraha',
        explanation: 'Weka bandeji safi au gauze kwenye jeraha. Badilisha mara kwa mara ili kuepuka maambukizi.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka safi',
        explanation: 'Badilisha bandeji kila siku na angalia dalili za maambukizi kama uvimbe au uwekundu.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuatilia',
        explanation: 'Fuatilia jeraha kwa siku kadhaa. Tafuta msaada wa daktari kama jeraha ni kubwa au linaonyesha dalili za maambukizi.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [],
    icon: '🩹',
  },
  {
    id: '3',
    title: 'Kukaba Koo',
    category: 'Dharura',
    description: 'Hatua ya haraka ni muhimu kwa watu wanaokabwa',
    symptoms: [
      'Kushindwa kusema au kukohoa',
      'Ugumu wa kupumua',
      'Midomo kugeuka buluu',
      'Kupoteza fahamu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji. Dharura za kukabwa hutokea haraka.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda nafsi yako kutoka mate na kuwasiliana na majimaji ya mwili.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Jua Nambari ya Dharura',
        explanation: 'Kuwa tayari kupiga simu 911 mara moja ikihitajika. Jua nambari ya dharura katika nchi yako.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Himiza kukohoa',
        explanation: 'Kama wanaweza kukohoa, waache wajaribu kukohoa wenyewe. Usipige mgongoni.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Fanya mbinu ya Heimlich',
        explanation: 'Simama nyuma ya mtu, weka mkono mmoja juu ya kitovu. Fanya ngumi kwa mkono mwingine, kisha fanya msukumo wa juu na ndani mara 5-6.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Rudia',
        explanation: 'Kama kitu hakijatoka, rudia kupiga mgongoni na msukumo wa tumbo kwa hadi dakika 1.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Piga simu 911',
        explanation: 'Kama kitu hakijatoka baada ya dakika 1, piga simu huduma za dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usipige mgongo kwa watu wazima wenye fahamu',
      'Tumia msukumo wa kifua badala ya tumbo kwa wanawake wajawazito',
      'Kuwa tayari kufanya CPR',
      'Piga simu huduma za dharura kama huna uhakika',
    ],
    icon: '🚨',
  },
  {
    id: '4',
    title: 'Mifupa Iliyovunjika na Michubuko',
    category: 'Majeraha',
    description: 'Kukinga harakati kunazuia majeraha zaidi',
    symptoms: [
      'Maumivu makali',
      'Uvimbe',
      'Kushindwa kutumia kiungo',
      'Michubuko',
      'Umbo lisilo la kawaida',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📋 Andaa Eneo',
        explanation: 'Tafuta mahali salama na pazuri pa kumtibu mtu aliyejeruhiwa. Kuwa na bandeji na kitambaa tayari.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Simamisha harakati',
        explanation: 'Zuia kiungo kilichojeruhiwa kisiendelee kusogea. Usijaribu kunyoosha mfupa uliovunjika.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
      {
        title: 'Weka barafu',
        explanation: 'Weka barafu iliyofunikwa na kitambaa kwenye jeraha kwa dakika 15-20. Hii inapunguza uvimbe na maumivu.',
        image: 'https://images.unsplash.com/photo-1615461066159-fea0039167b9?w=300&h=200&fit=crop',
      },
      {
        title: 'Funga jeraha',
        explanation: 'Tumia bandeji ya elastic kufunga jeraha ili kupunguza uvimbe. Usifunge kwa nguvu sana.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=200&fit=crop',
      },
      {
        title: 'Inua kiungo',
        explanation: 'Inua kiungo kilichoathiriwa juu ya kiwango cha moyo ikiwezekana. Hii inapunguza uvimbe.',
        image: 'https://images.unsplash.com/photo-1579759889180-0a2f6e1d1d51?w=300&h=200&fit=crop',
      },
      {
        title: 'Pumzisha jeraha',
        explanation: 'Epuka kutumia kiungo kilichoathiriwa. Acha kipone kwa asili kwa kukikinga kisogee.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=200&fit=crop',
      },
      {
        title: 'Tafuta tathmini ya daktari',
        explanation: 'Tafuta msaada wa daktari kwa majeraha makali au kupoteza utendaji wa kiungo. X-rays zinaweza kuhitajika.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    warnings: [
      'Usisogeze kiungo kilichojeruhiwa kupita kiasi',
      'Usitumie barafu moja kwa moja kwenye ngozi',
    ],
    icon: '🦴',
  },
  {
    id: '5',
    title: 'Sumu',
    category: 'Dharura',
    description: 'Hatua ya haraka inapunguza madhara ya sumu',
    symptoms: [
      'Kichefuchefu au kutapika',
      'Maumivu ya tumbo',
      'Kizunguzungu',
      'Ugumu wa kupumua',
      'Mkanganyiko',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza kwa waathirika wa sumu.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: ' Vaa Glavu kama huna tumia mfuko wa plastiki mlaini ',
        explanation: 'Vaa glavu za kutupa ili kuepuka kuwasiliana na vitu vya sumu au vifaa vilivyochafuliwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📱 Kuwa na Simu Tayari',
        explanation: 'Kuwa na simu au nambari ya dharura tayari. Dharura za sumu zinahitaji msaada wa kitaalamu wa haraka.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga Simu Kituo cha Sumu',
        explanation: 'Piga simu mara moja kwa ushauri wa wataalamu. Nchini Marekani, piga 1-800-222-1222.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Mwondoe kutoka chanzo',
        explanation: 'Kama ni pumzi, mwondoe mtu kwenye hewa safi. Kama ni mguso wa ngozi, vua nguo zilizochafuliwa.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Usisababishe kutapika',
        explanation: 'Kutapika mara nyingi hufanya mambo kuwa mabaya zaidi. Subiri ushauri wa kitaalamu.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuata maelekezo',
        explanation: 'Fuata maelekezo ya Kituo cha Sumu kwa makini. Watakuongoza hatua sahihi.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Tafuta huduma ya dharura',
        explanation: 'Kama dalili zinazidi, nenda hospitalini mara moja.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usidhani si hatari',
      'Hifadhi chombo cha sumu kwa marejeo',
      'Piga Simu Kituo cha Sumu (1-800-222-1222 Marekani)',
      'Usitoe chakula au kinywaji bila maelekezo',
    ],
    icon: '☠️',
  },
  {
    id: '6',
    title: 'Kutoka Damu Nyingi',
    category: 'Dharura',
    description: 'Kudhibiti kutoka damu nyingi kunaokoa maisha',
    symptoms: [
      'Kupoteza damu haraka',
      'Damu inayotoka kwa nguvu kutoka jeraha',
      'Kuzimia',
      'Ngozi ya rangi',
      'Mapigo ya moyo ya haraka',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa mara moja ili kulinda nafsi yako kutoka magonjwa yanayoenezwa na damu.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja kwa kutoka damu nyingi.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911',
        explanation: 'Piga simu huduma za dharura mara moja. Watakuongoza hatua za kuchukua.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka shinikizo',
        explanation: 'Tumia kitambaa safi kuweka shinikizo moja kwa moja kwenye jeraha. Dumisha shinikizo imara.',
        image: 'https://images.unsplash.com/photo-1576091160570-2173dba999ef?w=300&h=280&fit=crop',
      },
      {
        title: 'Inua',
        explanation: 'Inua eneo linalouma juu ya kiwango cha moyo ikiwezekana.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Weka bandeji',
        explanation: 'Damu ikisimama, weka bandeji kuzunguka jeraha.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Endelea na shinikizo',
        explanation: 'Usiondoe bandeji kuangalia. Endelea na shinikizo hadi msaada ufike.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia mshtuko',
        explanation: 'Angalia dalili za mshtuko kama kuzimia, ngozi ya rangi, kupumua haraka.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usiondoe vitu vilivyoingia ndani ya jeraha',
      'Shinikizo la kudumu ni muhimu',
      'Piga simu huduma za dharura kwa kutoka damu kisichosimama',
      'Angalia dalili za mshtuko: kuzimia, ngozi ya rangi, kupumua haraka',
    ],
    icon: '🩸',
  },
  {
    id: '7',
    title: 'Jeraha la Kichwa',
    category: 'Dharura',
    description: 'Majeraha ya kichwa yanahitaji ufuatiliaji wa makini',
    symptoms: [
      'Kupoteza fahamu au mkanganyiko',
      'Maumivu makali ya kichwa',
      'Kichefuchefu au kutapika',
      'Majimaji wazi kutoka puani au masikioni',
      'Kupoteza kumbukumbu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📋 Andaa Eneo',
        explanation: 'Tafuta mahali salama pa kumtibu mtu aliyejeruhiwa. Kuwa na bandeji na kitambaa tayari.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911',
        explanation: 'Hasa kwa dalili kali. Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911',
      },
      {
        title: 'Usisogeze',
        explanation: 'Zuia harakati za kichwa na shingo ili kuepuka majeraha zaidi.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Do+Not+Move',
      },
      {
        title: 'Fuatilia kupumua',
        explanation: 'Kuwa tayari kufanya CPR kama mtu hawezi kupumua.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Monitor+Breathing',
      },
      {
        title: 'Weka joto',
        explanation: 'Funika mtu kwa blanketi ili kuepuka baridi.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Weka+Joto',
      },
      {
        title: 'Tuliza',
        explanation: 'Tuliza mtu na umfanye atulie. Mpeleke hospitali haraka.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Tuliza+Mtu',
      },
      {
        title: 'Kumbuka dalili',
        explanation: 'Mwambie mhusika wa dharura kilichotokea na dalili zote.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Note+Symptoms',
      },
    ],
    warnings: [
      'Usisogeze mtu mwenye jeraha la shingo',
      'Kupoteza fahamu kunahitaji huduma ya dharura',
      'Mtikisiko wa ubongo unahitaji tathmini ya daktari',
      'Angalia dalili mpya zinazoonekana masaa kadhaa baadaye',
    ],
    icon: '🧠',
  },
  {
    id: '8',
    title: 'Mshtuko wa Moyo',
    category: 'Dharura',
    description: 'Hatua ya haraka inaweza kuokoa maisha wakati wa mshtuko wa moyo',
    symptoms: [
      'Maumivu au msongo wa kifua',
      'Ugumu wa kupumua',
      'Maumivu yanayoenea kwa mkono au taya',
      'Jasho baridi',
      'Kichefuchefu',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Piga simu 911 mara moja',
        explanation: 'Usisubiri. Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Call+911+Immediately',
      },
      {
        title: 'Kaa au lala chini',
        explanation: 'Mtulie mtu na umwache apumzike. Usimruhusu kutembea.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Sit+or+Lie+Down',
      },
      {
        title: 'Toa aspirin',
        explanation: 'Tafuna aspirin ya 325mg (usitoe kama ana mzio).',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Give+Aspirin',
      },
      {
        title: 'Tafuta AED',
        explanation: 'Tafuta Kifaa cha Kiotomatiki cha Kuzalisha Umeme wa Moyo.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Find+AED',
      },
      {
        title: 'Legeza nguo nzito',
        explanation: 'Ondoa nguo nzito ili kurahisisha kupumua.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Loosen+Clothing',
      },
      {
        title: 'Kuwa tayari kufanya CPR',
        explanation: 'Jifunze CPR kama bado hujajifunza.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Be+Ready+for+CPR',
      },
    ],
    warnings: [
      'Usichelewesha kupiga simu huduma za dharura',
      'Dalili zinaweza kutofautiana - wanawake wanaweza kuwa na ishara tofauti',
      'Usitoe dawa bila maelekezo ya 911',
      'Wakati ni muhimu - kila dakika inahesabu',
    ],
    icon: '❤️',
  },
  {
    id: '12',
    title: 'Kuzama',
    category: 'Dharura',
    description: 'Wakati ni muhimu sana katika hali za uokoaji majini',
    symptoms: [
      'Kupoteza fahamu',
      'Midomo ya buluu',
      'Kutopumua',
      'Mapigo dhaifu au kutokuwepo kwa mapigo',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono Yako',
        explanation: 'Nawa mikono yako vizuri kwa sabuni na maji kabla ya kutoa msaada wa kwanza.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: '🧤 Vaa Glavu',
        explanation: 'Vaa glavu za kutupa ili kulinda wewe mwenyewe na mgonjwa.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Kuwa na simu tayari au mtu karibu wa kupiga 911 mara moja.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Mwondoe majini',
        explanation: 'Mwondoe mtu majini kwa usalama. Usijitie hatarini mwenyewe.',
        image: 'https://via.placeholder.com/300x200/DC143C/FFFFFF?text=Remove+From+Water',
      },
      {
        title: 'Piga simu 911',
        explanation: 'Piga simu huduma za dharura mara moja.',
        image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Call+911',
      },
      {
        title: 'Safisha kinywa',
        explanation: 'Ondoa uchafu wowote kutoka kinywani.',
        image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Clear+Mouth',
      },
      {
        title: 'Fanya CPR',
        explanation: 'Anza CPR kama hakuna kupumua au mapigo.',
        image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Fanya+CPR',
      },
      {
        title: 'Nafasi ya kupumzika',
        explanation: 'Kama anapumua, mweke katika nafasi ya kupumzika.',
        image: 'https://via.placeholder.com/300x200/96CEB4/FFFFFF?text=Recovery+Position',
      },
      {
        title: 'Dumisha joto',
        explanation: 'Vua nguo zenye unyevu na funika kwa blanketi.',
        image: 'https://via.placeholder.com/300x200/F7DC6F/FFFFFF?text=Maintain+Warmth',
      },
    ],
    warnings: [
      'Usijitie hatarini kuokoa mtu',
      'Kuzama kwa sekondari kunaweza kutokea masaa kadhaa baadaye',
      'Tafuta msaada wa daktari baada ya uokoaji wowote majini',
      'Jifunze CPR na uokoaji wa msingi majini',
    ],
    icon: '💧',
  },
  {
    id: '13',
    title: 'Mzio Mkali',
    category: 'Dharura',
    description: 'Mzio mkali unaweza kusababisha kupumua kwa shida na unahitaji msaada wa haraka.',
    symptoms: [
      'Kupumua kwa shida',
      'Midomo na uso kuvimba',
      'Kizunguzungu au kutapika',
      'Kichefuchefu au msongamano wa kifua',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono',
        explanation: 'Nawa mikono yako kwa sabuni na maji kabla ya kutoa msaada.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: '📦 Tazama Dawa',
        explanation: 'Angalia kama mtu ana epinephrine auto-injector au dawa ya mzio kwa dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
      {
        title: '📞 Piga Simu Dharura',
        explanation: 'Mzio mkali ni dharura. Piga simu huduma za dharura mara moja.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Tafuta dalili',
        explanation: 'Tambua ikiwa ana ugumu wa kupumua, uvimbe wa uso, au kichefuchefu.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Tumia epinephrine',
        explanation: 'Kama mtu ana epinephrine auto-injector, tumia mara moja kama ilivyoonyeshwa.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Kaa pembeni',
        explanation: 'Msaidie mtu kukaa kwa urahisi na mfurahie nafasi ya kupumua.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Toa nguo zinazoathiriwa',
        explanation: 'Legeza nguo ngumu kama shingo, kamba, au mikanda ili kupumua vizuri.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Fuatilia hali',
        explanation: 'Angalia dalili za kuongezeka baada ya kutoa epinephrine.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Endelea kwa msaada',
        explanation: 'Mtaalamu wa matibabu anapaswa kuendelea kutathmini hali hata kama anafanya vyema.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie dawa nyingine bila ushauri wa daktari',
      'Mzio mkali unaweza kurudi hata baada ya kuondoka kwa dalili',
      'Piga simu huduma za dharura hata kama alionyesha dalili baada ya epinephrine',
      'Usiruhusu mtu kuendesha gari hadi afikie hospitali',
    ],
    icon: '⚠️',
  },
  {
    id: '14',
    title: 'Kupoteza Hamu ya Mafuta',
    category: 'Majeraha',
    description: 'Maumivu au kuchomwa kwa ngozi yanahitaji hatua ya haraka ili kuzuia majeraha zaidi.',
    symptoms: [
      'Ngozi nyekundu au ina vibaka',
      'Maumivu au hisia ya kuchoma',
      'Uvujaji wa maji au kemikali',
      'Kuhisi baridi kwa sehemu iliyouma',
    ],
    safetyPreparation: [
      {
        title: ' Safisha mikono',
        explanation: 'Tumia sabuni na maji au kiua vijidudu kabla ya kusaidia.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: 'Vaa kinga',
        explanation: 'Vaa glavu au kinga ya ngozi kabla ya kushughulikia eneo lililouma.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: 'Ondoa chanzo',
        explanation: 'Mwondoe mtu kwa haraka kutoka chanzo cha moto, kemikali, au umeme ikiwa salama.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Barua eneo',
        explanation: 'Mimina maji baridi (si barafu) kwenye eneo lililouma kwa dakika 10-20.',
        image: 'https://images.unsplash.com/photo-1587973714300-c8407e82c857?w=300&h=280&fit=crop',
      },
      {
        title: 'Ondoa vito',
        explanation: 'Ondoa pete, saa, au nguo zinazoweza kushikamana na eneo lililouma.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika kwa kitambaa safi',
        explanation: 'Tumia kitambaa safi au bandeji isiyoshikamana ili kulinda eneo.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Epusha bidhaa za nyumbani',
        explanation: 'Usitumie siagi, mafuta, au marashi ambayo yanaweza kusababisha maambukizi.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Tafuta ushauri wa matibabu',
        explanation: 'Kama kuchomwa ni kwa kiwango kikubwa au kwenye uso, piga simu daktari.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
      {
        title: 'Zingatia dalili',
        explanation: 'Angalia dalili za maambukizi kama joto, uvimbe, au mateso ya nguvu.',
        image: 'https://images.unsplash.com/photo-1576091160550-112173f31c77?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Usitumie barafu moja kwa moja kwenye ngozi iliyouma',
      'Usitumie bidhaa ngumu au za mafuta',
      'Tafuta msaada wa daktari kwa majeraha makubwa',
      'Epuka kugusa eneo kwa mikono chafu',
    ],
    icon: '🔥',
  },
  {
    id: '15',
    title: 'Mshtuko',
    category: 'Dharura',
    description: 'Mshtuko ni hali ya maisha inayoweza kuharibiwa kutokana na mtiririko duni wa damu.',
    symptoms: [
      'Ngozi baridi au yenye unyevu',
      'Kupumua kwa haraka',
      'Mapigo ya moyo ya haraka',
      'Uwezo mdogo wa kuzungumza au kutembea',
    ],
    safetyPreparation: [
      {
        title: ' Nawa Mikono',
        explanation: 'Angalia usafi kabla ya kusaidia, hasa kwa majeraha ya damu.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=200&fit=crop',
      },
      {
        title: 'Kwa tahadhari',
        explanation: 'Tafuta wasaidizi zaidi kama moyo au damu inatoka kwa wingi.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=300&h=200&fit=crop',
      },
      {
        title: 'Piga simu ya dharura',
        explanation: 'Mshtuko unahitaji huduma ya haraka. Piga simu 911 au nambari ya dharura.',
        image: 'https://images.unsplash.com/photo-1586903261405-4b152bad62ae?w=300&h=200&fit=crop',
      },
    ],
    steps: [
      {
        title: 'Lemaza mtu',
        explanation: 'Msaidie mtu kula chini na kuinua miguu juu kidogo kwa kupitisha damu kwenda mwili.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&h=280&fit=crop',
      },
      {
        title: 'Funika kwa blanketi',
        explanation: 'Dumisha joto la mwili bila kuwasha sana kwa blanketi au nguo nyepesi.',
        image: 'https://images.unsplash.com/photo-1579154204601-01d7e79f40be?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia Upumaiji',
        explanation: 'Thibitisha kama mtu ana pumzi na mapigo. Punguza mgongoni kwa tahadhari.',
        image: 'https://images.unsplash.com/photo-1631563436975-ab7cc9ac0908?w=300&h=280&fit=crop',
      },
      {
        title: 'Usitoe chakula au kinywaji',
        explanation: 'Usimpe chakula au kinywaji kwa mtu aliyeko chini au anayeogopa.',
        image: 'https://images.unsplash.com/photo-1581056771392-8defcc3fb3ee?w=300&h=280&fit=crop',
      },
      {
        title: 'Angalia kumbukumbu',
        explanation: 'Uliza kuhusu dawa za kisasa, mlo, au majeraha yaliyopita.',
        image: 'https://images.unsplash.com/photo-1585421514473-b5e31b0c50d1?w=300&h=280&fit=crop',
      },
      {
        title: 'Taarifu wahudumu wa afya',
        explanation: 'Mtoleze hali ya mtu kwa timu ya dharura ili waweze kutoa matibabu sahihi.',
        image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=300&h=280&fit=crop',
      },
    ],
    warnings: [
      'Mshtuko unaweza kuwa mbaya haraka',
      'Usamaha na usaidie kutokana na uvumi wa hiyo hali',
      'Piga simu huduma za dharura mara moja',
      'Usimpe dawa mwenyewe bila maelekezo ya wataalamu',
    ],
    icon: '💊',
  },
];
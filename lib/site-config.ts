export interface MachineItem {
  id: string;
  titleLines: string[];
  imageSrc: string;
  imageAlt: string;
  quoteSubject: string;
}

export interface ServicePanelItem {
  id: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * Configuração centralizada de contatos, links e dados da empresa.
 * Altere aqui os destinos de WhatsApp e Instagram quando necessário.
 */
export const SITE_CONFIG = {
  companyName: 'THIAGO CORREIA',
  brandMark: 'TC',
  tagline: 'LOCAÇÃO DE MÁQUINAS • CONSTRUTORA',
  location: 'Milagres - Bahia',
  whatsapp: {
    displayPhone: '75-98314-6551',
    // Número internacional apenas com dígitos (DDI 55 + DDD + Número)
    phoneDigits: '5575983146551',
    defaultMessage:
      'Olá! Gostaria de solicitar um orçamento com a Thiago Correia (TC) - Locação de Máquinas e Construtora.',
  },
  instagram: {
    url: 'https://www.instagram.com/thiagocorreiads?rpxt=eGhoaDFoYnp2ZGo3',
    handle: '@thiagocorreiads',
  },
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const digits = SITE_CONFIG.whatsapp.phoneDigits.replace(/\D/g, '');
  const message = encodeURIComponent(customMessage ?? SITE_CONFIG.whatsapp.defaultMessage);
  return `https://wa.me/${digits}?text=${message}`;
}

export const MACHINE_CARDS: MachineItem[] = [
  {
    id: 'trator-de-esteira',
    titleLines: ['TRATOR', 'DE ESTEIRA'],
    imageSrc: '/assets/extracted/machine_1_clean.png',
    imageAlt: 'Trator de esteira amarelo para terraplanagem',
    quoteSubject: 'Trator de Esteira',
  },
  {
    id: 'escavadeira-hidraulica',
    titleLines: ['ESCAVADEIRA', 'HIDRÁULICA'],
    imageSrc: '/assets/extracted/machine_2_clean.png',
    imageAlt: 'Escavadeira hidráulica amarela em operação',
    quoteSubject: 'Escavadeira Hidráulica',
  },
  {
    id: 'cacambas',
    titleLines: ['CAÇAMBAS'],
    imageSrc: '/assets/extracted/machine_3_clean.png',
    imageAlt: 'Caminhão caçamba amarelo para transporte de carga',
    quoteSubject: 'Caçambas',
  },
  {
    id: 'muque-compactador',
    titleLines: ['MUQUE', '(COMPACTADOR)'],
    imageSrc: '/assets/extracted/machine_4_clean.png',
    imageAlt: 'Rolo compactador amarelo para pavimentação e solo',
    quoteSubject: 'Muque (Compactador)',
  },
  {
    id: 'construtora',
    titleLines: ['CONSTRUTORA'],
    imageSrc: '/assets/extracted/machine_5_clean.png',
    imageAlt: 'Caminhão betoneira branco da construtora',
    quoteSubject: 'Serviços de Construtora',
  },
];

export const SERVICE_CHECKLIST: string[] = [
  'Equipe Qualificada',
  'Máquinas Modernas',
  'Agilidade no Atendimento',
  'Compromisso com o Prazo',
  'Obras de Qualidade',
];

export const SERVICE_PANELS: ServicePanelItem[] = [
  {
    id: 'terraplanagem',
    imageSrc: '/assets/extracted/service_1_clean.png',
    imageAlt: 'Trator de esteira realizando terraplanagem em terreno',
  },
  {
    id: 'escavacao',
    imageSrc: '/assets/extracted/service_2_clean.png',
    imageAlt: 'Escavadeira hidráulica realizando escavação de solo',
  },
  {
    id: 'transporte',
    imageSrc: '/assets/extracted/service_3_clean.png',
    imageAlt: 'Caminhão caçamba basculando material no canteiro',
  },
  {
    id: 'construcao',
    imageSrc: '/assets/extracted/service_4_clean.png',
    imageAlt: 'Construção civil e estrutura em alvenaria e concreto',
  },
];

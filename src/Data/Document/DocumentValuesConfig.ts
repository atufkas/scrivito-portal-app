import {
  provideDataValues,
  provideAttributeLocalizers,
} from '../../utils/dataValuesConfig'
import { DocumentPromise } from './DocumentDataClass'

DocumentPromise.then((Document) => {
  provideDataValues(Document, {
    language: ['ENG', 'FRA', 'GER', 'ITA', 'SPA'],
    type: [
      'CSO_CER',
      'CSO_ORG_CCP',
      'DMO_DOC',
      'DMO_KON',
      'DMO_PRC_DSP',
      'PSA_ACK',
      'PSA_AGB',
      'PSA_BIL',
      'PSA_BRO',
      'PSA_CHEK',
      'PSA_CLC',
      'PSA_COM_ANA',
      'PSA_COM_CPA',
      'PSA_CON',
      'PSA_CTR',
      'PSA_DAY_NWS',
      'PSA_DCN',
      'PSA_DLV',
      'PSA_EDU',
      'PSA_EML',
      'PSA_EMP_NFO_CPT',
      'PSA_EMP_NFO_INT',
      'PSA_EXP',
      'PSA_FAX',
      'PSA_FOL',
      'PSA_FOO',
      'PSA_INF',
      'PSA_INT_NET',
      'PSA_INV',
      'PSA_LET',
      'PSA_NTZ',
      'PSA_OCN',
      'PSA_OFF_TPL',
      'PSA_OFF',
      'PSA_ORD',
      'PSA_PDS',
      'PSA_PIC',
      'PSA_PPI',
      'PSA_PRD_CPA',
      'PSA_PRO_JRN',
      'PSA_PRS_ART',
      'PSA_PRS_PRN',
      'PSA_PST',
      'PSA_PTM',
      'PSA_ROU_PLN',
      'PSA_RPT',
      'PSA_SPC_LNG',
      'PSA_SPC_SHT',
      'PSA_SPC',
      'PSA_STM',
      'PSA_SVC',
      'PSA_TEC_DOC',
      'PSA_TWP',
      'PSA_VIS_CRD',
      'PSA_WRK_PLN',
    ],
  })

  provideAttributeLocalizers('de', Document, {
    language: {
      ENG: 'Englisch',
      FRA: 'Französisch',
      GER: 'Deutsch',
      ITA: 'Italienisch',
      SPA: 'Spanisch',
    },
    type: {
      CSO_CER: 'Zertifikat',
      CSO_ORG_CCP: 'Unternehmenscockpit',
      DMO_DOC: 'Dokumentation',
      DMO_KON: 'Konstruktion',
      DMO_PRC_DSP: 'Beschaffung und Versand',
      PSA_ACK: 'Abrechnungsbogen',
      PSA_AGB: 'Allgemeine Geschäftsbedingungen',
      PSA_BIL: 'Rechnung',
      PSA_BRO: 'Broschüre',
      PSA_CHEK: 'Checkliste',
      PSA_CLC: 'Kalkulation',
      PSA_COM_ANA: 'Konkurrenzanalyse',
      PSA_COM_CPA: 'Wettbewerbsvergleich',
      PSA_CON: 'Vertrag',
      PSA_CTR: 'Vertrag',
      PSA_DAY_NWS: 'Tageszeitung',
      PSA_DCN: 'Terminbestätigung',
      PSA_DLV: 'Lieferschein',
      PSA_EDU: 'Schulungsunterlage',
      PSA_EML: 'E-Mail',
      PSA_EMP_NFO_CPT: 'Mitarbeiterinfo Mitbewerber',
      PSA_EMP_NFO_INT: 'Mitarbeiterinfo Intern',
      PSA_EXP: 'Messe',
      PSA_FAX: 'Fax',
      PSA_FOL: 'Ordner',
      PSA_FOO: 'Brief-Fußzeile',
      PSA_INF: 'Information',
      PSA_INT_NET: 'Internet',
      PSA_INV: 'Einladung',
      PSA_LET: 'Brief',
      PSA_NTZ: 'Notiz-Seite',
      PSA_OCN: 'Auftragsbestätigung',
      PSA_OFF_TPL: 'Angebotsvorlage',
      PSA_OFF: 'Angebot',
      PSA_ORD: 'Bestellung',
      PSA_PDS: 'Produkt-Datenblatt',
      PSA_PIC: 'Bild',
      PSA_PPI: 'Produkt-Grafik',
      PSA_PRD_CPA: 'Produktvergleich Konkurrenz',
      PSA_PRO_JRN: 'Fachzeitschrift',
      PSA_PRS_ART: 'Presse/Fachartikel',
      PSA_PRS_PRN: 'Presse/Pressemitteilung',
      PSA_PST: 'Präsentation',
      PSA_PTM: 'Produkt-Textbaustein',
      PSA_ROU_PLN: 'Routenplanung',
      PSA_RPT: 'Bericht',
      PSA_SPC_LNG: 'Technische Spezifikation (lang)',
      PSA_SPC_SHT: 'Technische Spezifikation (kurz)',
      PSA_SPC: 'Technische Spezifikation',
      PSA_STM: 'Projekt-Textbaustein',
      PSA_SVC: 'Service- und Wartungsanleitung',
      PSA_TEC_DOC: 'Technische Dokumentation',
      PSA_TWP: 'White-Paper',
      PSA_VIS_CRD: 'Visitenkarte',
      PSA_WRK_PLN: 'Arbeitsplan',
    },
  })

  provideAttributeLocalizers('en', Document, {
    language: {
      ENG: 'English',
      FRA: 'French',
      GER: 'German',
      ITA: 'Italian',
      SPA: 'Spanish',
    },
    type: {
      CSO_CER: 'Certificate',
      CSO_ORG_CCP: 'Company cockpit',
      DMO_DOC: '',
      DMO_KON: '',
      DMO_PRC_DSP: '',
      PSA_ACK: 'Accounting sheet',
      PSA_AGB: 'General terms & conditions',
      PSA_BIL: 'Invoice',
      PSA_BRO: 'Brochure',
      PSA_CHEK: 'Invitation',
      PSA_CLC: 'Calculation',
      PSA_COM_ANA: 'Competitor analysis',
      PSA_COM_CPA: 'Competitive comparison',
      PSA_CON: 'Project text module',
      PSA_CTR: 'Contract',
      PSA_DAY_NWS: 'Daily newspaper',
      PSA_DCN: 'Confirmation of appointment',
      PSA_DLV: 'Delivery note',
      PSA_EDU: '',
      PSA_EML: 'E-mail',
      PSA_EMP_NFO_CPT: "Competitor's Employee info",
      PSA_EMP_NFO_INT: 'Internal Employee info',
      PSA_EXP: 'Fair',
      PSA_FAX: 'Fax',
      PSA_FOL: 'Folder',
      PSA_FOO: 'Letter footer',
      PSA_INF: 'Information',
      PSA_INT_NET: 'Internet',
      PSA_INV: 'Invitation',
      PSA_LET: 'Letter',
      PSA_NTZ: 'Notification',
      PSA_OCN: 'Order confirmation',
      PSA_OFF_TPL: 'Quote template',
      PSA_OFF: 'Quote',
      PSA_ORD: 'Order',
      PSA_PDS: 'Product datasheet',
      PSA_PIC: 'Picture',
      PSA_PPI: 'Product picture',
      PSA_PRD_CPA: 'Product comparison',
      PSA_PRO_JRN: 'Professional journal',
      PSA_PRS_ART: 'Press/Professional article',
      PSA_PRS_PRN: 'Press/Press release',
      PSA_PST: 'Presentation',
      PSA_PTM: 'Product text module',
      PSA_ROU_PLN: 'Route planning',
      PSA_RPT: 'Report',
      PSA_SPC_LNG: 'Technical specification (long)',
      PSA_SPC_SHT: 'Technical specification (short)',
      PSA_SPC: 'Technical specification',
      PSA_STM: 'Project text module',
      PSA_SVC: '',
      PSA_TEC_DOC: 'Technical documentation',
      PSA_TWP: 'White-Paper',
      PSA_VIS_CRD: 'Business card',
      PSA_WRK_PLN: 'Working plan',
    },
  })
})

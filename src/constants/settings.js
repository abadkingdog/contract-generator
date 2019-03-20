import { FONT_LIST, FONT_SIZES } from './fonts'

export const DEFAULT_FONT = 'Open Sans'
export const DEFAULT_FONT_SIZE = '14px'
export const DEFAULT_ALIGN = 'left'

export const ALIGN = [
  'left',
  'center',
  'right'
]

export const SECTION_SETTINGS = {
  fontFamilySettings: {
    id: 'fontFamily', // should be css style
    placeholder: 'Select Font Family',
    label: 'Font family',
    defaultValue: [DEFAULT_FONT],
    options: FONT_LIST,
    cbxId: 'selectAllFF'
  },

  fontSizeSettings: {
    id: 'fontSize',
    placeholder: 'Select Font Size',
    label: 'Font size',
    defaultValue: [DEFAULT_FONT_SIZE],
    options: FONT_SIZES,
    cbxId: 'selectAllFZ'
  },

  textAlignSettings: {
    id: 'textAlign',
    placeholder: 'Select Text align',
    label: 'Section align',
    defaultValue: [DEFAULT_ALIGN],
    options: ALIGN,
    cbxId: 'selectAllTA'
  }
}

export const PAGE_SECTIONS_CONFIG = [
  'table',
  'title',
  'paragraph',
  'list',
  'paragraph',
  'paragraph',
  'paragraph',
  'paragraph',
]

export const PAGES_IN_BLOCK = 2

import sParagraph from '@/components/sections/sParagraph'
import sTable from '@/components/sections/sTable'
import sTitle from '@/components/sections/sTitle'
import sHeader from '@/components/sections/sHeader'
import sList from '@/components/sections/sList'

const sectionConfig = [
  {
    type: 'paragraph',
    default: true,
    component: sParagraph,
  },
  {
    type: 'table',
    component: sTable,
  },
  {
    type: 'header',
    component: sHeader,
  },
  {
    type: 'list',
    component: sList,
  },
  {
    type: 'title',
    component: sTitle,
  },
]

export default sectionConfig

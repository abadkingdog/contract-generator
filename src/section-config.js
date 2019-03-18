import SectionParagraph from '@/components/sections/SectionParagraph'
import SectionTable from '@/components/sections/SectionTable'
import SectionTitle from '@/components/sections/SectionTitle'
import SectionHeader from '@/components/sections/SectionHeader'
import SectionList from '@/components/sections/SectionList'
import SectionBlock from '@/components/sections/SectionBlock'

const sectionConfig = [
  {
    type: 'paragraph',
    default: true,
    component: SectionParagraph,
  },
  {
    type: 'table',
    component: SectionTable,
  },
  {
    type: 'header',
    component: SectionHeader,
  },
  {
    type: 'list',
    component: SectionList,
  },
  {
    type: 'title',
    component: SectionTitle,
  },
  {
    type: 'block',
    component: SectionBlock
  },
]

export default sectionConfig

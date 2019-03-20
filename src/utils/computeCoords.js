/* eslint-disable arrow-body-style,consistent-return */
import compact from 'lodash/compact'

const MAX_TOP = 1045

function computeSectionsByPageId(id, pageBox, sections) {
  return sections.map(({ coords, pageId, boxId, type }) => {
    if (pageId !== id || !pageId) return
    let computedCoords = {
      ...coords,
      top: coords.top - pageBox.top,
      bottom: coords.bottom - pageBox.top,
      right: coords.right - pageBox.left,
      left: coords.left - pageBox.left,
    }

    if (computedCoords.top > MAX_TOP) return
    if (computedCoords.bottom > MAX_TOP) {
      computedCoords = {
        ...computedCoords,
        bottom: MAX_TOP,
        height: MAX_TOP - computedCoords.top,
      }
    }

    if (computedCoords.height < 10 || computedCoords.width < 10) return

    // eslint-disable-next-line consistent-return
    return { id: boxId, type, coords: computedCoords, pageId }
  })
}

export const countSectionBoundedBox = ({ pages, sections }) => {
  return pages.map(({ pageId, coords }) => {
    if (!pageId) return

    return {
      sections: compact(computeSectionsByPageId(pageId, coords, sections)),
      pageId
    }
  })
}

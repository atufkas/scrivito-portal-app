import { provideEditingConfig } from 'scrivito'
import { ColumnContainerWidget } from './ColumnContainerWidgetClass'
import { ColumnsEditorTab } from './ColumnsEditorTab'
import { ColumnWidget } from '../ColumnWidget/ColumnWidgetClass'
import Thumbnail from './thumbnail.svg'

provideEditingConfig(ColumnContainerWidget, {
  title: 'Columns',
  thumbnail: Thumbnail,
  propertiesGroups: [
    {
      title: 'Columns layout',
      key: 'columns-layout-group',
      component: ColumnsEditorTab,
    },
  ],
  initialContent: {
    columns: [
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
      new ColumnWidget({ colSize: 4 }),
    ],
    alignment: 'start',
  },
})

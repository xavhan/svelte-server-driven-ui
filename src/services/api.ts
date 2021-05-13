export const components = [
  { type: 'header', props: { text: 'Server Driven UI Experiment' } },
  { type: 'list', props: { items: ['item1', 'item2'] } },
  { type: 'text', props: { text: 'I can render a page using a page description object/json' } },
  { type: 'box', components: [
    { type: 'list', props: { items: ['item3', 'item4'] } },
    { type: 'text', props: { text: 'RenderEngine component can refer itself' } },
    { type: 'box', components: [
      { type: 'list', props: { items: ['item5', 'item6'] } },
      { type: 'text', props: { text: 'component.type and Svelte components needs to be mapped in components-map file' } },
      { type: 'carousel', props: { items: ['img1', 'img2'] } },
    ] }
  ] }
]